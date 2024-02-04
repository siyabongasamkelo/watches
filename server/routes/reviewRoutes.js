import express from "express";
const router = express.Router();

import {
  createReview,
  getReview,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";

router.post("/create", createReview);
router.get("/get", getReview);
router.put("/update/:reviewId", updateReview);
router.delete("/delete/:reviewId", deleteReview);

export default router;
