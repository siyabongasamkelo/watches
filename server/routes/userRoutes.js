import express from "express";
const router = Express.Router();
// import userController from "../controllers/userController.js";
import { registerUser } from "../controllers/userController";

router.post("/user", registerUser);

// module.exports = router;
export default router;
