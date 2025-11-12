import { TelemetryReading } from "../models/TelemetryReading.js";
import { Device } from "../models/Device.js";

export const createTelemetry = async (req, res) => {
  try {
    const { device_uuid, ts_utc, latitude, longitude, battery_level, signal_dbm, network_type, carrier_name } = req.body;

    const device = await Device.findOne({ where: { device_uuid } });
    if (!device) {
      return res.status(404).json({ success: false, message: "Dispositivo no encontrado" });
    }

    const telemetry = await TelemetryReading.create({
      device_id: device.id,
      ts_utc,
      latitude,
      longitude,
      battery_level,
      signal_dbm,
      network_type,
      carrier_name,
    });
    
    console.log("Telemetry record received:", telemetry);

    res.status(201).json({ success: true, telemetry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Error al guardar telemetría" });
  }
};
