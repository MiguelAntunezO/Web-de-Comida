// src/components/HeaderNavbar.jsx
import React, { useState } from 'react'; // Importar Hooks necesarios
import { Link, useLocation } from 'react-router-dom'; // Importar useLocation

// 4. Renombrar a HeaderNavbar para consistencia
const HeaderNavbar = () => {
    // 1. Desestructuración de Hooks
    const location = useLocation(); 
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
    
    // Falso por defecto para mostrar Iniciar Sesión/Regístrate
    const [isLoggedIn] = useState(false); 

    // Función helper para verificar si un link está activo
    const isActive = (path) => location.pathname === path;

    const user = {
        name: "Usuario Demo",
        email: "usuario@mail.com",
        avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
    };

    const handleLogout = () => { 
        /* Lógica de logout */ 
        closeDropdown(); // Cerrar dropdown después de hacer logout
        setIsMenuOpen(false); // Asegurar que el menú móvil también se cierre
        // Aquí iría la llamada a la API o al Context/Redux para cerrar sesión
    };
    
    const closeDropdown = () => { setIsDropdownOpen(false); };
    const toggleMobileMenu = () => { setIsMenuOpen(!isMenuOpen); };

    // 2. Separar links comunes de los de autenticación
    const commonNavLinks = [
        { name: "Inicio", path: "/" },
        { name: "Recetas Free", path: "/RecetasPageFree" },
        { name: "Menu Semanal", path: "/MenuSemanal" }, 
        { name: "Contacto", path: "/contactos" },
    ];
    
    // Estilos de link base (reutilizables)
    const baseLinkClasses = "block py-2 rounded-lg transition-colors duration-150 ease-in-out font-medium";
    const activeLinkClasses = "text-red-500 font-bold";
    const defaultLinkClasses = "text-gray-200 hover:text-red-500";

    return (
        // 3. Eliminado onMouseLeave del nav (mejor usar el click para control)
        <nav 
            className="bg-gray-900 border-gray-700 px-4 lg:px-6 py-2.5 shadow-2xl sticky top-0 z-50 rounded-b-xl"
        >
            <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-screen-xl">
                
                {/* 1. LOGO Y TÍTULO / BOTÓN HAMBURGUESA */}
                <div className="w-full flex justify-between items-center lg:justify-start lg:order-1 lg:w-auto">
                    <Link to="/" className="flex items-center p-2 rounded-lg hover:bg-gray-800 transition">
                        {/* Ícono de cuchara (SVG) */}
                        <span className="text-3xl mr-3" role="img" aria-label="Cuchara">
                            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11h9m-9 0a7 7 0 00-7 7v2m7-9v2"></path>
                            </svg>
                        </span>
                        <span className="self-center whitespace-nowrap text-xl font-extrabold text-white tracking-wider">
                            Cucharones a la Olla
                        </span>
                    </Link>

                    {/* Botón Hamburguesa para móvil */}
                    <button 
                        onClick={toggleMobileMenu} 
                        type="button" 
                        className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Abrir menú principal</span>
                        {/* Puedes usar un ícono de "X" si el menú está abierto para mejor UX */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                {/* 2. SECCIÓN ESCRITORIO: LINKS Y AVATAR */}
                {/* Cambiado el orden de las secciones y ajustado flex para mejor distribución */}
                <div className="hidden lg:flex justify-end items-center w-full lg:order-2">
                    <ul className="flex flex-row space-x-8 justify-center items-center py-2 px-4 rounded-xl bg-gray-800 shadow-inner">
                        {/* Links Comunes */}
                        {commonNavLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`${baseLinkClasses} ${isActive(link.path) ? activeLinkClasses : defaultLinkClasses}`}
                                    aria-current={isActive(link.path) ? "page" : undefined}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        
                        {/* Links de Autenticación Condicionales (Desktop) */}
                        {!isLoggedIn && (
                            <>
                                <li key="login">
                                    <Link 
                                        to="/login" 
                                        className={`${baseLinkClasses} ${isActive("/login") ? activeLinkClasses : defaultLinkClasses}`}
                                    >
                                        Iniciar Sesión
                                    </Link>
                                </li>
                                <li key="register">
                                    <Link 
                                        to="/Register" 
                                        // Estilo diferenciado para el botón de registro
                                        className="py-2 px-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition font-medium ml-4 shadow-md"
                                    >
                                        Regístrate
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* Dropdown de Usuario Condicional (Desktop) */}
                    {isLoggedIn && (
                        // ml-8 separa el avatar de los links del menú
                        <div className="relative ml-8"> 
                            <button 
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                                type="button" 
                                className="flex text-sm bg-gray-700 rounded-full w-10 h-10 overflow-hidden items-center justify-center ring-2 ring-transparent focus:ring-4 focus:ring-red-500/50 transition duration-150 ease-in-out hover:ring-red-500"
                                aria-expanded={isDropdownOpen ? "true" : "false"}
                                aria-haspopup="true" // Buena práctica de accesibilidad
                            >
                                <span className="sr-only">Abrir menú de usuario</span>
                                <img className="w-full h-full object-cover" src={user.avatar} alt={`Foto de perfil de ${user.name}`}/>
                            </button>
                            {isDropdownOpen && (
                                <div 
                                    className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-2xl z-50 py-1 ring-1 ring-black ring-opacity-5 transition origin-top-right animate-fade-in-down"
                                    // Se puede usar onBlur para cerrar si no se quiere usar el clic global
                                >
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <span className="block text-sm font-semibold text-gray-900">{user.name}</span>
                                        <span className="block text-xs font-medium text-gray-500 truncate">{user.email}</span>
                                    </div>
                                    <Link onClick={closeDropdown} to="/perfil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-100 hover:text-red-700 transition duration-100 rounded-lg mx-1">Mi Perfil</Link>
                                    <Link onClick={closeDropdown} to="/configuracion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-100 hover:text-red-700 transition duration-100 rounded-lg mx-1">Configuración</Link>
                                    <div className="h-px my-1 bg-gray-100" /> 
                                    {/* 3. Asegurar que closeDropdown se llama en Logout */}
                                    <button 
                                        onClick={handleLogout} 
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-100 hover:text-red-700 transition duration-100 rounded-lg mx-1"
                                    >
                                        Cerrar sesión
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* 3. MENÚ DE NAVEGACIÓN MÓVIL */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:hidden transition-all duration-300 ease-in-out lg:order-3`} id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium p-4 bg-gray-800/95 rounded-xl shadow-xl">
                        {commonNavLinks.map((link) => (
                            <li key={`mobile-${link.name}`}>
                                <Link
                                    to={link.path}
                                    // Clase activa más visible en móvil
                                    className={`block py-2 pr-4 pl-3 rounded-lg transition-colors duration-150 ease-in-out 
                                        ${isActive(link.path) 
                                            ? 'text-red-500 bg-gray-700/50 font-bold' 
                                            : 'text-gray-200 hover:bg-gray-700'
                                        }`}
                                    aria-current={isActive(link.path) ? "page" : undefined}
                                    onClick={() => setIsMenuOpen(false)} 
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}

                        {/* Menú Móvil - Opciones de Auth o Perfil */}
                        {isLoggedIn ? (
                             <>
                                <div className="h-px my-2 bg-gray-700" /> 
                                <li key="mobile-perfil">
                                    <Link onClick={() => setIsMenuOpen(false)} to="/perfil" className="block py-2 pr-4 pl-3 text-sm text-gray-200 hover:bg-gray-700 rounded-lg">Mi Perfil</Link>
                                </li>
                                <li key="mobile-config">
                                    <Link onClick={() => setIsMenuOpen(false)} to="/configuracion" className="block py-2 pr-4 pl-3 text-sm text-gray-200 hover:bg-gray-700 rounded-lg">Configuración</Link>
                                </li>
                                <li key="mobile-logout">
                                    <button 
                                        onClick={handleLogout} 
                                        className="w-full text-left block py-2 pr-4 pl-3 text-sm text-gray-200 hover:bg-red-700 rounded-lg transition"
                                    >
                                        Cerrar sesión ({user.name})
                                    </button>
                                </li>
                             </>
                        ) : (
                            <>
                                <div className="h-px my-2 bg-gray-700" /> 
                                <li key="mobile-login">
                                    <Link 
                                        to="/Login" 
                                        onClick={() => setIsMenuOpen(false)} 
                                        className={`block py-2 pr-4 pl-3 rounded-lg transition-colors duration-150 ease-in-out 
                                            ${isActive("/Login") ? 'text-red-500 bg-gray-700/50 font-bold' : 'text-gray-200 hover:bg-gray-700'}`}
                                    >
                                        Iniciar Sesión
                                    </Link>
                                </li>
                                <li key="mobile-register">
                                    <Link 
                                        to="/Register" 
                                        onClick={() => setIsMenuOpen(false)} 
                                        className={`block py-2 pr-4 pl-3 rounded-lg transition-colors duration-150 ease-in-out 
                                            ${isActive("/Register") ? 'text-red-500 bg-gray-700/50 font-bold' : 'text-gray-200 hover:bg-gray-700'}`}
                                    >
                                        Regístrate
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
            
            {/* 5. Eliminación de la etiqueta <style jsx> y animación de dropdown */}
            <style>
                {/* NOTA: En un proyecto Tailwind normal, esta animación 'animate-fade-in-down' 
                   debería estar definida en tu archivo de configuración de Tailwind (tailwind.config.js)
                   o mediante CSS global, no inline. */}
                {`
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-down {
                    animation: fadeInDown 0.2s ease-out forwards;
                }
                `}
            </style>
        </nav>
    );
};


export default HeaderNavbar;