// backend/controllers/authController.js
import { db } from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "cucharones_secret";

// Nota importante: si tus contraseñas actuales en MySQL están en texto plano,
// considera migrarlas a hashed (bcrypt). Abajo dejo verificación tanto para
// texto plano como hashed (detectando si el campo parece hashed).

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ ok: false, message: "email y password requeridos" });

  const sql = "SELECT * FROM usuarios WHERE email = ? LIMIT 1";
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ ok: false, error: err.message });
    if (!results.length) return res.status(401).json({ ok: false, message: "Usuario no encontrado" });

    const user = results[0];

    try {
      // Detectar si la contraseña almacenada parece un hash bcrypt (empieza con $2)
      const stored = user.password || user.contrasena || user.clave; // adapta a tu columna
      if (!stored) return res.status(500).json({ ok: false, message: "No hay password en DB" });

      const isHashed = typeof stored === "string" && stored.startsWith("$2");

      let match = false;
      if (isHashed) {
        match = await bcrypt.compare(password, stored);
      } else {
        // comparación texto plano (temporal)
        match = password === stored;
      }

      if (!match) return res.status(401).json({ ok: false, message: "Credenciales incorrectas" });

      // Generar JWT (payload minimal)
      const token = jwt.sign({ id: user.id, email: user.email, rol: user.rol || user.role || "user" }, JWT_SECRET, { expiresIn: "7d" });

      // No devolver password al cliente
      delete user.password;
      if (user.contrasena) delete user.contrasena;

      res.json({ ok: true, user, token });
    } catch (e) {
      console.error(e);
      res.status(500).json({ ok: false, message: "Error en autenticación" });
    }
  });
};
