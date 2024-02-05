import express from "express";
import {
  orderCaptureController,
  orderCreateController,
} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/", orderCreateController);
router.get("/", orderCaptureController);
export default router;
