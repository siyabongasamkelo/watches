import express from "express";
const router = express.Router();
import { registerUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";
import { getUser } from "../controllers/userController.js";
import { getAllUsers } from "../controllers/userController.js";
import { deleteUser } from "../controllers/userController.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/get/:userId", getUser);
router.get("/get", getAllUsers);
router.delete("/delete/:userId", deleteUser);

export default router;
