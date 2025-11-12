import express from "express";
import deviceRoutes from "./routes/device.routes.js";
import telemetryRoutes from "./routes/telemetry.routes.js";

const app = express();
app.use(express.json());

app.use("/api/device", deviceRoutes);
app.use("/api/telemetry", telemetryRoutes);

app.get("/", (req, res) => res.send("📡 Telemetry API funcionando"));

export default app;
