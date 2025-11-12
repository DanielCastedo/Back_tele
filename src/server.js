import dotenv from "dotenv";
import app from "./app.js";
import { connectDB, sequelize } from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await connectDB();
  await sequelize.sync({ alter: true }); // crea o actualiza tablas

  app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));
};

startServer();
