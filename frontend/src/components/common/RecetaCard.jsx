// src/components/RecetaCard.jsx
import React from 'react';

const RecetaCard = ({ receta }) => {
  // Define si el botón será rojo (premium/recetas del día) o verde (gratis)
  const isPremium = receta.isPremium; 
  const buttonClass = isPremium ? 'btn-recipe-red' : 'btn-recipe-green';

  return (
    <div className="receta-card">
      <div className="receta-image-container">
        <img src={receta.imageUrl} alt={receta.title} className="receta-image" />
      </div>
      <div className="receta-info">
        <h3>{receta.title}</h3>
        <p>{receta.description}</p>
        <a href={`/receta/${receta.id}`} className={`btn ${buttonClass}`}>
          Ver receta
        </a>
      </div>
    </div>
  );
};

export default RecetaCard;