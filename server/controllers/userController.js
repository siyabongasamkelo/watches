import userModel from "../model/userModel";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const createToken = (id) => {
  const jwtKey = process.env.JWT_SECRETE_KEY;
  return jwt.sign({ id }, jwtKey, { expiresIn: "3d" });
};

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let userExists = userModel.findOne({ email });

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

    newUser.save();
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// module.exports = { registerUser };
