import express from "express";
const router = express.Router();

import {
  createReview,
  getReview,
  updateReview,
} from "../controllers/reviewController.js";

router.post("/create", createReview);
router.get("/get", getReview);
router.put("/update/:reviewId", updateReview);

export default router;
