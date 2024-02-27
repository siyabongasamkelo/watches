import express from "express";
import {
  orderCaptureController,
  orderCreateController,
} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/orders", orderCreateController);
router.post("/orders/:orderID/capture", orderCaptureController);
export default router;
