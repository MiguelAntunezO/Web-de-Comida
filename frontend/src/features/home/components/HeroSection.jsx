import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente Hero (Sección Principal).
 * Presenta el título principal, mensaje de marca y llamadas a la acción (CTAs).
 * 
 * @param {Object} props
 * @param {string} [props.imageUrl] - URL de la imagen de fondo opcional.
 */
const HeroSection = ({ imageUrl }) => {
  // Imagen por defecto segura en caso de no recibir prop
  const defaultImageUrl =
    imageUrl ||
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1600';

  return (
    <header
      className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden shadow-xl"
      style={{ backgroundImage: `url(${defaultImageUrl})` }}
    >
      {/* Overlay Oscuro Semi-Transparente con desenfoque de fondo */}
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-xs" />

      {/* Contenido Central */}
      <div className="relative z-10 p-6 max-w-4xl w-full text-center">
        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight flex items-center justify-center gap-3">
          {/* Ícono SVG en línea */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white inline-block w-10 h-10 md:w-12 md:h-12"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span>Cucharon es a la Olla</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-200 mb-8 font-light max-w-2xl mx-auto">
          La sazón que llena la olla y el corazón, sin vueltas
        </p>

        {/* Contenedor de Botones (CTAs) */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Botón Principal (Recetas Gratis) */}
          <Link
            to="/recetas"
            className="w-full sm:w-auto px-8 py-3 text-base font-semibold text-white bg-emerald-600 rounded-lg shadow-xl hover:bg-emerald-700 transition duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            Ver recetas gratis
          </Link>

          {/* Botón Secundario (Beneficios Premium) */}
          <Link
            to="/premium"
            className="w-full sm:w-auto px-8 py-3 text-base font-semibold text-white bg-red-600 rounded-lg shadow-xl hover:bg-red-700 transition duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            Ver beneficios premium
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;