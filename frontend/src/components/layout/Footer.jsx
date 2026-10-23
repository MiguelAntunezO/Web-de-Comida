import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6   shadow-inner ">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10 ">
                    
                    {/* Columna 1: Logo y Slogan */}
                    <div className="col-span-2 md:col-span-1 space-y-3">
                        <h3 className="text-2xl font-extrabold text-red-500">Cucharones a la Olla</h3>
                        <p className="text-gray-400 text-sm">
                            Tu mejor guía culinaria, de nuestra cocina a tu mesa.
                        </p>
                    </div>

                    {/* Columna 2: Recetas */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-lime-400">Recetas</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/recetas-gratis" className="text-gray-400 hover:text-white transition-colors">Recetas Gratis</Link></li>
                            <li><Link to="/premium" className="text-gray-400 hover:text-white transition-colors">Recetas Premium</Link></li>
                            <li><Link to="/platos-populares" className="text-gray-400 hover:text-white transition-colors">Platos Populares</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3: Información */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-lime-400">Información</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/sobre-nosotros" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</Link></li>
                            <li><Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
                            <li><Link to="/preguntas-frecuentes" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Columna 4: Legal */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-lime-400">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/terminos" className="text-gray-400 hover:text-white transition-colors">Términos y Condiciones</Link></li>
                            <li><Link to="/privacidad" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-800">
                    &copy; {new Date().getFullYear()} Cucharones a la Olla. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
