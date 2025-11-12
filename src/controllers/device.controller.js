import { Device } from "../models/Device.js";

export const registerDevice = async (req, res) => {
  try {
    const { device_uuid, alias, os_type, os_version, app_version } = req.body;

    const [device, created] = await Device.findOrCreate({
      where: { device_uuid },
      defaults: { alias, os_type, os_version, app_version },
    });

    res.status(200).json({
      success: true,
      device,
      message: created ? "Nuevo dispositivo registrado" : "Dispositivo ya existente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Error al registrar dispositivo" });
  }
};
