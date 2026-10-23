// src/components/FeaturesSection.jsx
import React from 'react';
// Asumiendo que usas Font Awesome o algún paquete de iconos
import { FaUtensils, FaCalendarAlt, FaLightbulb } from 'react-icons/fa';

const featuresData = [
  {
    icon: <FaUtensils />,
    title: "Recetas diarias",
    description: "Ideas frescas para cada día sin repetir el menú.",
    colorClass: "card-green",
    iconBgColor: "#d8f5d8",
    iconColor: "#85c88c"
  },
  {
    icon: <FaCalendarAlt />,
    title: "Menú semanal",
    description: "Planifica tus comidas y ahorra en el mercado.",
    colorClass: "card-blue",
    iconBgColor: "#d8e6f5",
    iconColor: "#4a7ab3"
  },
  {
    icon: <FaLightbulb />,
    title: "Tips de cocina",
    description: "Consejos reales y útiles para mejorar tus platos.",
    colorClass: "card-yellow",
    iconBgColor: "#f5f3d8",
    iconColor: "#ffbf00"
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="section-title">¿Por qué usar esta plataforma?</h2>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div key={index} className={`feature-card ${feature.colorClass}`}>
            <div 
              className="card-icon" 
              style={{ backgroundColor: feature.iconBgColor, color: feature.iconColor }}
            >
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;