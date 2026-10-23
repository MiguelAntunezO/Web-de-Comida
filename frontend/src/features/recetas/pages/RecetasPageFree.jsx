import React, { useState } from "react";
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import HeaderNavbar from '../../../components/layout/HeaderNavbar';

// ===============================================
// 1. SIMULACIÓN DE ROUTER (Link y useLocation)
// ===============================================

// Simulamos Link para la navegación
const Link = ({ to, children, className, onClick, 'aria-current': ariaCurrent }) => (
    // Usa un div para simular la navegación sin recargar la página
    <a href={to} className={className} onClick={(e) => { e.preventDefault(); onClick && onClick(e); }} aria-current={ariaCurrent}>{children}</a>
);

// Simulamos useLocation
const useLocation = () => ({ pathname: "/recetas-gratis" });

// ===============================================
// 2. COMPONENTE HeaderNavbar
// ===============================================
<HeaderNavbar />

// ===============================================
// 3. COMPONENTE Footer
// ===============================================



// ===============================================
// 4. COMPONENTE RecetaCard
// ===============================================
const RecetaCard = ({ receta }) => {
    const cardColor = 'bg-white';
    const isPremium = receta.isPremium;
    // Placeholder más relevante
    const fallbackImage = 'https://placehold.co/400x300/fecaca/991b1b?text=Receta+Popular';

    return (
        <div className={`rounded-x1 shadow-xl overflow-hidden transform hover:scale-[1.03] transition duration-300 ${cardColor} border border-gray-200`}>
            <div className="relative h-48 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={receta.imageUrl || fallbackImage}
                    alt={receta.title}
                    onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }}
                />
                {isPremium && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg animate-pulse">
                        Premium
                    </span>
                )}
            </div>
            <div className="p-5 flex flex-col items-center text-center">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2 line-clamp-1 w-full">{receta.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 h-14">{receta.description}</p>

                <Link
                    to={`/recetas/${receta.id}`}
                    className="w-full max-w-[180px] bg-red-500 text-white font-bold py-3 px-4 rounded-full text-sm hover:bg-red-600 transition-colors duration-200 shadow-lg shadow-red-200 uppercase tracking-wider transform hover:translate-y-[-2px]"
                >
                    VER RECETA
                </Link>
            </div>
        </div>
    );
};

// ===============================================
// 5. COMPONENTE ArticleCard
// ===============================================
const ArticleCard = ({ article }) => {
    const fallbackImage = 'https://placehold.co/400x300/d9f99d/14532d?text=Consejo';

    return (
        <div className="bg-white rounded-x1 shadow-lg overflow-hidden flex flex-col items-center p-4 text-center transform hover:shadow-xl transition duration-300 border border-lime-300">
            <div className="h-40 w-full overflow-hidden rounded-lg mb-4">
                <img
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                    src={article.imageUrl || fallbackImage}
                    alt={article.title}
                    onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }}
                />
            </div>

            <h3 className="text-lg font-extrabold text-gray-900 mb-1 line-clamp-2">{article.title}</h3>
            <p className="text-xs text-gray-500 mb-4 line-clamp-3 h-10">{article.description}</p>

            <Link
                to={`/articulos/${article.id}`}
                className="mt-auto bg-lime-500 text-gray-900 font-bold py-2 px-5 rounded-full text-sm hover:bg-lime-600 transition-colors duration-200 shadow-md shadow-lime-200 uppercase tracking-wide"
            >
                LEER MÁS
            </Link>
        </div>
    );
};


// ===============================================
// 6. DATOS DE LA PÁGINA
// ===============================================
const recetasData = [
    { id: 1, title: "Lomo Saltado", description: "Un clásico peruano de la carne flambeada con cebolla, tomate y papas fritas. ¡Sabor intenso!", imageUrl: "/assets/images/lomo-saltado.jpg", isPremium: false },
    { id: 2, title: "Lentejas Caseras", description: "Económicas, saludables y perfectas para un lunes. Sabor tradicional que reconforta.", imageUrl: "/assets/images/lentejas-caseras.jpg", isPremium: false },
    { id: 3, title: "Tallarines Rojos con Pollo", description: "Combinación poderosa de pasta con una salsa de tomate rica y trozos de pollo. Ideal para saciar el hambre.", imageUrl: "/assets/images/tallarines-rojos.jpg", isPremium: false },
    { id: 4, title: "Pescado Frito a las Verduras", description: "Preparación sencilla y ligera. Pescado fresco acompañado de una mezcla de verduras salteadas.", imageUrl: "/assets/images/pescado-frito.jpg", isPremium: false },
    { id: 5, title: "Arroz con Pollo Cremoso", description: "Una receta rendidora, sabrosa y económica. Arroz teñido con culantro y cerveza, un verdadero festín.", imageUrl: "/assets/images/arroz-con-pollo.jpg", isPremium: true },
    { id: 6, title: "Ají de Gallina Casero", description: "Cremoso y delicioso. Ideal para un almuerzo familiar, con un toque de ají amarillo y nueces.", imageUrl: "/assets/images/aji-gallina.jpg", isPremium: true },
];

const articulosData = [
    { id: 1, title: "Postres Rápidos de Verano", description: "Aprende a hacer postres refrescantes en menos de 15 minutos sin horno. ¡Perfecto para el calor!", imageUrl: "/assets/images/postres.jpg" },
    { id: 2, title: "Secretos del Chef para un Sofrito Perfecto", description: "Técnicas profesionales para elevar tus platos desde la base: el sofrito. La clave del sabor.", imageUrl: "/assets/images/secreto.jpg" },
    { id: 3, title: "Menú Vegano Semanal", description: "Opciones deliciosas y balanceadas para una dieta sin carne. Recetas que te sorprenderán.", imageUrl: "/assets/images/menu-vegano.jpeg" },
    { id: 4, title: "Almuerzos Divertidos para Niños", description: "Recetas nutritivas con presentaciones que los más pequeños amarán. ¡Adiós al plato aburrido!", imageUrl: "/assets/images/kids.jpg" },
];


// ===============================================
// 7. CONTENIDO PRINCIPAL (Lógica de RecetasPageFree)
// ===============================================
const HomePageContent = () => {
    // Filtramos solo las recetas que NO son Premium (Gratis)
    const freeRecetas = recetasData.filter(r => !r.isPremium);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <HeaderNavbar />

            {/* HERO SECTION - BANNER CULINARIO */}
            <section className="relative bg-gray-900 h-[70vh] flex items-center overflow-hidden rounded-b-[4rem] shadow-2xl">
                <div className="absolute inset-0 z-0">
                    {/* Imagen de fondo grande */}
                    <img
                        src="/assets/images/banner.jpg"
                        alt="Fondo de ingredientes frescos"
                        className="w-full h-full object-cover object-right opacity-30"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1920x800/1f2937/9ca3af?text=Aventura+Culinaria'; }}
                    />
                </div>

                {/* Contenido principal del Hero */}
                <div className="relative z-10 p-8 md:p-16 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">

                    {/* Columna de Texto y Descuento */}
                    <div className="md:w-3/5 text-center md:text-left space-y-6">

                        {/* CÍRCULO DE PROMOCIÓN */}
                        <div className="w-28 h-28 mx-auto md:mx-0 bg-lime-500 rounded-full flex flex-col items-center justify-center p-1 shadow-2xl shadow-lime-300 transform rotate-[-5deg] animate-bounce-slow">
                            <span className="text-4xl font-extrabold text-gray-900 leading-none">40%</span>
                            <span className="text-sm font-semibold uppercase tracking-widest text-gray-900 mt-1">Premium</span>
                        </div>

                        <p className="text-base font-semibold uppercase text-red-500 mt-8">
                            NUESTRAS RECETAS GRATUITAS
                        </p>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
                            Donde cada <span className="text-yellow-400">ingrediente</span> cuenta una historia deliciosa.
                        </h1>

                        <Link
                            to="/Register"
                            className="inline-block bg-red-500 hover:bg-red-600 text-white text-lg font-bold py-3 px-10 rounded-full shadow-2xl transition duration-300 transform hover:scale-105 uppercase tracking-wide mt-6"
                        >
                            Ver Beneficios Premium
                        </Link>
                    </div>

                    <div className="md:w-2/5 hidden md:block">
                        {/* Espacio reservado o vacío, la imagen ya está en el fondo */}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 1: RECETAS GRATIS DISPONIBLES */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 text-center py-12 md:py-16">
                    Recetas del Día: <span className="text-red-500">¡Hoy cocinas tú!</span>
                </h2>

                <main className="pb-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {freeRecetas.map(receta => (
                            <RecetaCard key={receta.id} receta={receta} />
                        ))}
                    </div>
                </main>
            </div>

            {/* SECCIÓN 2: PROMOCIÓN RESTAURANTE/BRANDING (Diseño Asimétrico) */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
                    <div className="relative bg-white shadow-2xl shadow-gray-200 overflow-hidden rounded-[2.5rem] p-6 sm:p-10 lg:p-16 border-4 border-lime-500/30">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                            {/* Columna de Texto */}
                            <div className="lg:w-1/2 order-2 lg:order-1 space-y-4 text-center lg:text-left pt-6 lg:pt-0">
                                <p className="text-sm font-semibold uppercase text-gray-600">
                                    NUESTRO RESTAURANTE
                                </p>
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                    Una aventura <span className="text-red-500">culinaria</span> para todos los sentidos
                                </h2>
                                <p className="text-gray-500 text-lg max-w-xl mx-auto lg:mx-0">
                                    Descubre los secretos detrás de nuestros platos más aclamados. Ingredientes frescos, pasión por la cocina y el compromiso de llevar el mejor sabor a tu mesa.
                                </p>
                                <Link
                                    to="/descubre"
                                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-md font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 uppercase tracking-wide mt-4"
                                >
                                    LEER MÁS
                                </Link>
                            </div>

                            {/* Columna de Imagen */}
                            <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
                                <div className="relative w-full max-w-lg aspect-square">
                                    <img
                                        src="/assets/images/ensalada.jpg"
                                        alt="Ensalada fresca y deliciosa"
                                        className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x600/fecaca/991b1b?text=Ensalada+Familiar'; }}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 3: ARTÍCULOS Y CONSEJOS */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-12">
                        Explora Nuestros <span className="text-lime-500">Artículos y Consejos</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {articulosData.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/articulos-blog"
                            className="inline-block bg-gray-800 hover:bg-gray-900 text-white text-md font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 uppercase tracking-wide"
                        >
                            Ver Blog Completo
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4: MISIÓN / SOBRE NOSOTROS */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-6 sm:p-10 lg:p-16 rounded-[2.5rem] shadow-xl border-t-8 border-red-500">
                        <div className="flex flex-col lg:flex-row items-center gap-12">

                            {/* Columna de Imagen */}
                            <div className="lg:w-1/2 flex justify-center lg:justify-start">
                                <img
                                    src="/assets/images/carnes-parrillera.jpg"
                                    alt="Corte de carne a punto"
                                    className="w-full max-w-md h-auto object-cover rounded-3xl shadow-2xl transform rotate-[3deg] hover:rotate-0 transition-transform duration-500"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/b91c1c/fef2f2?text=Corte+de+Carne'; }}
                                />
                            </div>

                            {/* Columna de Texto */}
                            <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
                                <p className="text-sm font-semibold uppercase text-red-500">
                                    NUESTRA MISIÓN
                                </p>
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                    Sobre Nosotros: Cocinando <span className="text-lime-500">Pasión</span> y Tradición
                                </h2>
                                <p className="text-gray-600 text-md leading-relaxed">
                                    En **Cucharones a la Olla**, creemos que la cocina es más que solo ingredientes: es una forma de conectar, de crear recuerdos y de nutrir el cuerpo y el alma. Nuestro objetivo es simplificar la preparación de platos deliciosos, haciendo que la alta cocina sea accesible para todos en casa, sin importar su nivel de experiencia.
                                </p>
                                <p className="text-gray-600 text-md leading-relaxed">
                                    Trabajamos continuamente para ofrecerte las mejores recetas, consejos de expertos y planes de menú semanales que se adapten a tu estilo de vida.
                                </p>
                                <Link
                                    to="/mision"
                                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-md font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 uppercase tracking-wide mt-4"
                                >
                                    DESCUBRE MÁS
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};


// ===============================================
// 8. COMPONENTE PRINCIPAL (App)
// ===============================================

// El componente App se exporta por defecto como requiere el entorno de React.
// Contiene toda la lógica de la página.
export default function App() {
    return <HomePageContent />;
}