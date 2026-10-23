import express from "express";
import db from "../config/db.js";

const router = express.Router();

// Obtener todas las recetas
router.get("/", (req, res) => {
  const query = "SELECT id, titulo, descripcion, tipo_comida, imagen FROM recetas";

  db.query(query, (err, results) => {
    if (err) {
      console.error("❌ Error al obtener recetas:", err);
      return res.status(500).json({ error: "Error al obtener recetas" });
    }
    res.json(results);
  });
});

export default router;
