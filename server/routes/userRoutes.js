import express from "express";
const router = express.Router();
import { registerUser } from "../controllers/userController.js";

router.post("/user", registerUser);

// module.exports = router;
export default router;
