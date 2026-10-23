// server.js
import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 📦 Conexión a MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// 🔍 Verificar conexión
db.connect((err) => {
  if (err) {
    console.error("❌ Error conectando a MySQL:", err);
    return;
  }
  console.log("✅ Conectado a MySQL correctamente");
});

// 🧠 Ruta principal
app.get("/", (req, res) => {
  res.send("Servidor backend funcionando correctamente 🚀");
});

// 🥘 Ruta para obtener recetas
app.get("/api/recetas", (req, res) => {
  const sql = "SELECT id, titulo, descripcion, tipo_comida FROM recetas";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Error al obtener recetas:", err);
      return res.status(500).json({ error: "Error al obtener recetas" });
    }
    res.json(results);
  });
});

// 🚀 Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
