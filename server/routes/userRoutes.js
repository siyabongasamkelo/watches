import express from "express";
const router = express.Router();
import { registerUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
