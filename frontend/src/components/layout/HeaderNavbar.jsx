import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Importación real


const HeaderNavbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Simulación de estado (puedes conectarlo a tu Contexto de Auth luego)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isActive = (path) => location.pathname === path;

    const primaryNavLinks = [
        { name: "Inicio", path: "/" },
        { name: "Recetas Gratis", path: "/recetas" },
        { name: "Menu Semanal", path: "/menu-semanal" },
        { name: "Contacto", path: "/Contactos" },
    ];

    const authLinks = [
        { name: "Iniciar Sesión", path: "/login", isPrimary: true },
        { name: "Regístrate", path: "/register", isPrimary: false },
    ];

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav
            className="bg-gray-900 border-gray-700 px-4 lg:px-6 py-2.5 shadow-2xl sticky top-0 z-50 rounded-b-xl"
            onMouseLeave={closeDropdown}
        >
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                {/* LOGO */}
                <Link to="/" className="flex items-center p-2 rounded-lg hover:bg-gray-800 transition">
                    <span className="self-center whitespace-nowrap text-xl font-extrabold text-white tracking-wider">
                        Cucharones a la Olla
                    </span>
                </Link>

                {/* SECCIÓN DERECHA */}
                <div className="flex items-center lg:order-2 space-x-2">
                    {!isLoggedIn && (
                        <div className="hidden lg:flex space-x-3">
                            {authLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`font-medium text-sm px-4 py-2 rounded-lg transition duration-200 ${link.isPrimary
                                        ? 'text-white bg-red-600 hover:bg-red-700 shadow-md'
                                        : 'text-gray-200 hover:text-red-500 hover:bg-gray-800'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Botón Móvil */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-gray-700"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>

                {/* MENÚ PRINCIPAL */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}>
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 p-4 lg:p-0 bg-gray-800 lg:bg-transparent rounded-xl">
                        {primaryNavLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`block py-2 pr-4 pl-3 rounded-lg ${isActive(link.path)
                                        ? 'text-red-500 font-bold'
                                        : 'text-gray-200 hover:text-red-500'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default HeaderNavbar;