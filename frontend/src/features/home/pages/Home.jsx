// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Beneficios from '../components/Beneficios';
import CTA from '../components/CTA';

// Asume que la imagen está en src/assets/hero-image.jpg
const heroImage = "/assets/images/fondo-comida.jpg";


const Home = () => {
  return (
    <div>
      {/* 1. Sección Hero */}
      <HeroSection imageUrl={heroImage} />


    </div>
  );
};

export default Home;