import express from "express";
const router = express.Router();
import { registerUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";
import { getUser } from "../controllers/userController.js";
import { getAllUsers } from "../controllers/userController.js";
import { deleteUser } from "../controllers/userController.js";
import { updateUser } from "../controllers/userController.js";
import { forgotPassword } from "../controllers/userController.js";
import { resetPassword } from "../controllers/userController.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/get/:userId", getUser);
router.get("/get", getAllUsers);
router.delete("/delete/:userId", deleteUser);
router.put("/update/:userId", updateUser);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword/:userId/:token", resetPassword);

export default router;
