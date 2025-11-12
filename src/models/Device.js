import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Device = sequelize.define("Device", {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  device_uuid: { type: DataTypes.STRING(100), allowNull: false, unique: true },
  alias: { type: DataTypes.STRING(100) },
  os_type: { type: DataTypes.STRING(20) },
  os_version: { type: DataTypes.STRING(50) },
  app_version: { type: DataTypes.STRING(50) },
},
{
  tableName: "device", // 🔥 fuerza nombre exacto
  timestamps: true, // agrega createdAt, updatedAt
});
