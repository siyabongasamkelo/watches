import express from "express";
const router = express.Router();

import {
  createReview,
  getReview,
  updateReview,
  deleteReview,
  getReviewByItemId,
} from "../controllers/reviewController.js";

router.post("/create", createReview);
router.get("/get", getReview);
router.get("/get/:itemId", getReviewByItemId);
router.put("/update/:reviewId", updateReview);
router.delete("/delete/:reviewId", deleteReview);

export default router;
