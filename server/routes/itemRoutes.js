import express from "express";
import {
  createItem,
  deleteItem,
  updateItem,
} from "../controllers/itemController.js";
import { getItem } from "../controllers/itemController.js";
import { getItems } from "../controllers/itemController.js";

const router = express.Router();

router.post("/create", createItem);
router.get("/get/:itemId", getItem);
router.get("/get", getItems);
router.put("/update/:itemId", updateItem);
router.delete("/delete/:itemId", deleteItem);

export default router;
