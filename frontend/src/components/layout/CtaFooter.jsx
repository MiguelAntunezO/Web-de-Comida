// src/components/CtaFooter.jsx
import React from 'react';

const CtaFooter = () => {
  return (
    <footer className="footer-cta-section">
      <div className="cta-content">
        <p>Empieza gratis o desbloquea todos los beneficios</p>
        <a href="/login" className="btn btn-cta">Iniciar sesión premium</a>
      </div>
      <div className="copyright-footer">
        <p>© 2025 Cucharon es a la Olla. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default CtaFooter;