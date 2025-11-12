import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// 🔧 Configuración de la conexión a PostgreSQL (Render + local)
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432, // Asegura el puerto
    dialect: "postgres",
    logging: false,
    timezone: "-04:00", // 🕒 Zona horaria Bolivia (UTC-4)
    dialectOptions: {
      ssl:
        process.env.DB_SSL === "true"
          ? {
              require: true,
              rejectUnauthorized: false, // Necesario en Render
            }
          : false,
    },
  }
);

// 🔌 Función para probar la conexión
export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("❌ Error de conexión a la base de datos:", error.message);
  }
};
