import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './App.css';

// Importaciones con "pages" en plural
import Home from './features/home/pages/Home';
import Login from './features/auth/pages/Login';
import Register from './features/auth/pages/Register';
import Contactos from './features/static/pages/Contactos';
import Premium from './features/static/pages/Premium';
import RecetasPageFree from './features/recetas/pages/RecetasPageFree';
import MenuSemanal from './features/recetas/pages/MenuSemanal';
import RecetasFree from './features/recetas/pages/RecetasFree';


function App() {
  return (
    <Routes>
      {/* Rutas sin Layout */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contactos" element={<Contactos />} />

      {/* Rutas con Layout */}
      <Route element={<Layout />}>
        <Route path="/recetas" element={<RecetasFree />} />
        <Route path="/recetas" element={<RecetasPageFree />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/menu-semanal" element={<MenuSemanal />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<div className="flex h-screen items-center justify-center text-lg font-semibold text-gray-600">404 - Página no encontrada</div>} />
    </Routes>
  );
}

export default App;