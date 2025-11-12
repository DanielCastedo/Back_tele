import express from "express";
import { registerDevice } from "../controllers/device.controller.js";
const router = express.Router();

router.post("/register", registerDevice);

export default router;
