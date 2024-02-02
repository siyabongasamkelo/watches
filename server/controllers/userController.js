// import userModel from "../model/userModel";
import { userModel } from "../model/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const createToken = (id) => {
  const jwtKey = process.env.JWT_SECRETE_KEY;
  return jwt.sign({ id }, jwtKey, { expiresIn: "3d" });
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let userExists = await userModel.findOne({ email });
    if (userExists) return res.status(400).json("User already exists");

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
    res.status(200).json({ username, email, token });
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

    res.status(200).json({ email, username: user.username, token });
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
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(200).json(err);
  }
};

export { registerUser, loginUser, getUser, getAllUsers };
