import express from "express";
const router = express.Router();

import { createReview, getReview } from "../controllers/reviewController.js";

router.post("/create", createReview);
router.get("/get", getReview);

export default router;
