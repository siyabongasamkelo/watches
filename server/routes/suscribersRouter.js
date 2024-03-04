import express from "express";
const router = express.Router();
import {
  registerSubscriber,
  getSubscribers,
  deleteSubscriber,
} from "../controllers/subscribersController.js";

router.post("/register", registerSubscriber);
router.delete("/delete/:subscriberId", deleteSubscriber);
router.get("/get", getSubscribers);

export default router;
