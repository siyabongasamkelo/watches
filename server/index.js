import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import fileupload from "express-fileupload";
import userRoutes from "./routes/userRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import ordersRoutes from "./routes/ordersRoutes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(fileupload({ useTempFiles: true }));

//routes
app.use("/user", userRoutes);
app.use("/item", itemRoutes);
app.use("/review", reviewRoutes);
app.use("/", paymentRoutes);
app.use("/order", ordersRoutes);
app.all("*", (req, res) => {
  res.status(400).json("404 Page not found i page alikho");
});

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
