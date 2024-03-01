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

const verifyAndCompareUserId = (token, userId) => {
  try {
    const jwtKey = process.env.JWT_SECRETE_KEY;
    const decodedToken = jwt.verify(token, jwtKey);
    const userIdFromToken = decodedToken.id;

    const tokenExpiry = decodedToken.exp;
    if (Date.now() >= tokenExpiry * 1000)
      return { valid: false, message: "Token has expired" };

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
};

const registerUser = async (req, res) => {
  try {
    const { username, newEmail, password } = req.body;
    const { email, token } = req.params;

    //validations;
    if ((!username || !newEmail || !password, !email || !token))
      return res.status(400).json("Please fill all the fields");

    if (!validator.isEmail(email))
      return res.status(400).json("Please enter a valid email");

    if (!validator.isStrongPassword(password))
      return res.status(400).json("Please enter a strong password");

    if (email !== newEmail) return res.status(400).json("Emails do not match");

    let userExists = await userModel.findOne({ email });
    if (userExists) return res.status(400).json("Email already exists");

    const verificationResult = verifyAndCompareUserId(token, email);

    if (!verificationResult.valid)
      return res.status(400).json(verificationResult.message);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      password: hashedPassword,
      username,
      email,
    });

    const newToken = createToken(newUser._id);

    await newUser.save();

    res.status(200).json({ username, email, token: newToken, id: newUser._id });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const confirmEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json("Email is required");
    if (!validator.isEmail(email))
      return res.status(400).json("Please enter a valid email");

    const user = await userModel.find({ email: email });
    if (user.length > 0) return res.status(400).json("User already exits");

    const token = createTemporalyToken(email);

    const baseUrl = process.env.BASEURL || "http://localhost:3000";

    const link = `${baseUrl}/register/${email}/${token}`;

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
      subject: "Luxurious Watches Confirmation Email",
      text: `Thank your for signing up on Luxurious Watches. Please confirm your email by clicking the link below ${link}`,
    };

    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.log(err);
        return res.status(400).json(err);
      }
      res.status(200).json("Check your email for further instructions");
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
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
  confirmEmail,
};
