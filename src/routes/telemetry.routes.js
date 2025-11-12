import express from "express";
import { createTelemetry } from "../controllers/telemetry.controller.js";
const router = express.Router();

router.post("/", createTelemetry);

export default router;
