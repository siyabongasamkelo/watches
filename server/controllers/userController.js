import { userModel } from "../model/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

const createToken = (id) => {
  const jwtKey = process.env.JWT_SECRETE_KEY;
  return jwt.sign({ id }, jwtKey, { expiresIn: "3d" });
};

const createTemporalyToken = (id) => {
  const jwtKey = process.env.JWT_SECRETE_KEY;
  return jwt.sign({ id }, jwtKey, { expiresIn: "15m" });
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let userExists = await userModel.findOne({ email });
    if (userExists) return res.status(400).json("Email already exists");

    //validations
    if (!username || !email || !password)
      return res.status(400).json("Please fill all the fields");
    if (!validator.isEmail(email))
      return res.status(400).json("Please enter a valid email");
    if (!validator.isStrongPassword(password))
      return res.status(400).json("Please enter a strong password");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      password: hashedPassword,
      username,
      email,
    });

    const token = createToken(newUser._id);

    await newUser.save();

    res.status(200).json({ username, email, token, id: newUser._id });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password)
      return res.status(400).json("Please fill all the fields");

    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json("Invalid email or password");

    const validity = await bcrypt.compare(password, user.password);
    if (!validity) return res.status(400).json("Wrong Password");

    const token = createToken(user._id);

    res
      .status(200)
      .json({ email, username: user.username, token, id: user._id });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const getUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await userModel.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log(err);
    res.status(400).json(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await userModel.findByIdAndDelete(userId);
    res.status(200).json("user deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { email, password, username } = req.body;

    //validation
    if (!userId) return res.status(400).json("user id is required");
    if (!username || !email || !password)
      return res.status(400).json("Please fill all the fields");

    if (!validator.isEmail(email))
      return res.status(400).json("Please enter a valid email");
    if (!validator.isStrongPassword(password))
      return res.status(400).json("Please enter a strong password");

    //hashing the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const update = { email, password: hashedPassword, username };
    const user = await userModel.findByIdAndUpdate(userId, update, {
      new: true,
    });
    res.status(200).json("user updated successfully");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json("Email is requred");
    if (!validator.isEmail(email))
      return res.status(400).json("Please enter a valid email");

    const user = await userModel.find({ email: email });

    if (!user) return res.status(400).json("User does not exits");

    const token = createTemporalyToken(user[0]?._id);

    const baseUrl = process.env.BASEURL || "http://localhost:3000";
    console.log(baseUrl);

    const link = `${baseUrl}/reset/${user[0]._id}/${token}`;

    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "siyabongasamkelociam@outlook.com",
        pass: "Bafana2001",
      },
    });

    const options = {
      from: "siyabongasamkelociam@outlook.com",
      to: `${email}`,
      subject: "Luxurious Watches Password reset",
      text: `To reset your password please click this link ${link}`,
    };

    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.log(err);
        return res.status(400).json(err);
      }
      console.log(info.response);
      res.status(200).json("Check your email for further instructions");
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { userId, token } = req.params;
    const { email, password } = req.body;

    if (!email || !password || !userId || !token)
      return res.status(400).json("Please fill all the fields");

    if (!validator.isEmail(email))
      return res.status(400).json("Please enter a valid email");

    const user = await userModel.find({ email: email });

    if (!user) return res.status(400).json("user not found");

    if (!validator.isStrongPassword(password))
      return res.status(400).json("Please enter a strong password");

    const jwtKey = process.env.JWT_SECRETE_KEY;

    if (!token) return res.status(400).json("token is required");

    function verifyAndCompareUserId(token, userId) {
      try {
        // Verify the JWT token and decode its payload
        const decodedToken = jwt.verify(token, jwtKey);

        // Extract the userId from the token's payload
        const userIdFromToken = decodedToken.id;
        console.log(decodedToken);

        const tokenExpiry = decodedToken.exp;
        if (Date.now() >= tokenExpiry * 1000)
          return { valid: false, message: "Token has expired" };

        // Compare the userId from the token with the userId from the request parameters
        if (userIdFromToken === userId)
          return {
            valid: true,
            message: "Token is valid for the specified user",
          };
        if (userIdFromToken !== userId)
          return {
            valid: false,
            message: "Token does not match the specified user",
          };
      } catch (error) {
        return {
          valid: false,
          message: "Error verifying token: " + error.message,
        };
      }
    }

    const verificationResult = verifyAndCompareUserId(token, userId);

    if (!verificationResult.valid)
      return res.status(400).json(verificationResult.message);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const updatePassword = await userModel.findOneAndUpdate(
      { _id: userId },
      { password: hashedPassword },
      {
        new: true,
      }
    );

    res.status(200).json("Password reset successfully");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export {
  registerUser,
  loginUser,
  getUser,
  getAllUsers,
  deleteUser,
  updateUser,
  forgotPassword,
  resetPassword,
};
