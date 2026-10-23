import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Contenido de las rutas */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Layout;
