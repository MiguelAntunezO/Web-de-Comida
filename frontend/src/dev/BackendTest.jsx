import { useEffect, useState } from "react";
import axios from "axios";

function BackendTest() {
  const [mensaje, setMensaje] = useState("Cargando...");

  useEffect(() => {
    axios.get("http://localhost:5000")
      .then(response => {
        setMensaje(response.data);
      })
      .catch(error => {
        console.error("Error al conectar con el backend:", error);
        setMensaje("Error al conectar con el backend ❌");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontSize: "20px" }}>
      <h1>{mensaje}</h1>
    </div>
  );
}

export default BackendTest;

