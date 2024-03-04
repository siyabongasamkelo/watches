import { subscribersModel } from "../model/subscribersModel.js";
import validator from "validator";
import nodemailer from "nodemailer";

const registerSubscriber = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json("Email is required");

    if (!validator.isEmail(email))
      return res.status(400).json("Please enter a valid email");

    const emailExists = await subscribersModel.findOne({ email });

    if (emailExists) return res.status(400).json("Email already exists");

    const newSubscriber = new subscribersModel({
      email,
    });

    const subscribe = await newSubscriber.save();

    const baseUrl = process.env.BASEURL || "http://localhost:3000";

    const link = `${baseUrl}/unsubscribe/${subscribe?._id}`;

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
      subject: "Luxurious Watches Subscription Email",
      text: `Thank you for subscribing to Luxurious Watches. We will keep you up to date with the latest watches... Please click here to unsubscribe ${link}`,
    };

    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.log(err);
        return res.status(400).json(err);
      }
      res.status(200).json("Subscribed successfully");
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const getSubscribers = async (req, res) => {
  try {
    const subscribers = await subscribersModel.find();

    res.status(200).json(subscribers);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const deleteSubscriber = async (req, res) => {
  try {
    const { subscriberId } = req.params;

    await subscribersModel.findByIdAndDelete(subscriberId);

    res.status(200).json("Subscriber deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export { registerSubscriber, getSubscribers, deleteSubscriber };
