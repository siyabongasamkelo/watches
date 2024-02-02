import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

//routes
app.use("/user", userRoutes);

//mongodb connection
const uri = process.env.MONGODB_URL;
mongoose
  .connect(uri, {})
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
