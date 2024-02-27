import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrder,
  updateOrderStatus,
} from "../controllers/ordersController.js";

const router = express.Router();

router.post("/create", createOrder);
router.post("/get", getAllOrders);
router.post("/get/:orderId", getOrder);
router.post("/update/:orderId", updateOrderStatus);

export default router;
