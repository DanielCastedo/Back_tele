import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { Device } from "./Device.js";

export const TelemetryReading = sequelize.define(
	"TelemetryReading",
	{
		id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
		ts_utc: { type: DataTypes.DATE, allowNull: false },
		latitude: { type: DataTypes.DECIMAL(10, 7), allowNull: false },
		longitude: { type: DataTypes.DECIMAL(10, 7), allowNull: false },
		accuracy_meters: { type: DataTypes.DECIMAL(6, 2) },
		speed_mps: { type: DataTypes.DECIMAL(6, 2) },
		bearing_deg: { type: DataTypes.DECIMAL(5, 2) },
		battery_level: { type: DataTypes.DECIMAL(4, 2), allowNull: false },
		is_charging: { type: DataTypes.BOOLEAN },
		signal_dbm: { type: DataTypes.INTEGER },
		network_type: { type: DataTypes.STRING(20) },
		carrier_name: { type: DataTypes.STRING(50) },
	},
	{
		tableName: "telemetry_reading", // 🔥 fuerza nombre exacto
		timestamps: true, // agrega createdAt, updatedAt
	}
);

Device.hasMany(TelemetryReading, { foreignKey: "device_id" });
TelemetryReading.belongsTo(Device, { foreignKey: "device_id" });
