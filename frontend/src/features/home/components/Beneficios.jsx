import React from 'react';

function Beneficios() {
  return (
    <section className="beneficios">
      <h2>¿Por qué usar esta plataforma?</h2>
      <div className="beneficio-lista">
        <div className="beneficio">
          <h3>✅ Recetas diarias</h3>
          <p>Ideas frescas para cada día sin repetir el menú.</p>
        </div>
        <div className="beneficio">
          <h3>📅 Menú semanal</h3>
          <p>Planifica tus comidas y ahorra en el mercado.</p>
        </div>
        <div className="beneficio">
          <h3>🧠 Tips de cocina</h3>
          <p>Consejos reales y útiles para mejorar tus platos.</p>
        </div>
      </div>
    </section>
  );
}

export default Beneficios;