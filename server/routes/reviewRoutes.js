import express from "express";
const router = express.Router();

import { createReview } from "../controllers/reviewController.js";

router.post("/create", createReview);

export default router;
