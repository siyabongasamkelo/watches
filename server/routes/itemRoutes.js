import express from "express";
import { createItem } from "../controllers/itemController.js";
import { getItem } from "../controllers/itemController.js";

const router = express.Router();

router.post("/create", createItem);
router.get("/get", getItem);

export default router;
