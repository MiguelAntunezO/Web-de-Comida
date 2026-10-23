import React, { useState } from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import HeaderNavbar from '../../../components/layout/HeaderNavbar';

const Contactos = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans">
      <HeaderNavbar />

      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-12 relative">


          {/* Encabezado */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Envíanos un mensaje</h1>
            <p className="text-gray-500">Completa el formulario y nos pondremos en contacto contigo.</p>
          </div>

          <form className="space-y-6">
            {/* Nombre Completo */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre Completo</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="nombre"
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-x1 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                  placeholder="Tu nombre"
                />
              </div>
            </div>

            {/* Correo Electrónico */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-x1 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                  placeholder="correo@ejemplo.com"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
              <textarea
                rows="4"
                name="mensaje"
                className="w-full p-4 bg-white border border-gray-300 rounded-x1 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all placeholder-gray-400 resize-none"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>

            {/* Botón Enviar (Naranja Estilo Login) */}
            <button
              type="submit"
              className="w-full bg-[#E85D04] hover:bg-[#D45403] text-white font-bold py-4 rounded-x1 shadow-lg shadow-orange-200 transition-all active:scale-[0.98]"
            >
              Enviar Mensaje
            </button>
          </form>

          {/* Footer del Card */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
            <p>© 2026 Cucharones a la Olla</p>
            <div className="space-x-4">
              <a href="/privacidad" className="hover:text-gray-600">Privacidad</a>
              <a href="/soporte" className="hover:text-gray-600">Soporte</a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contactos;