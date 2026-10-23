import React, { useState } from 'react';
import Header from '../../../components/layout/Header';
import HeaderNavbar from '../../../components/layout/HeaderNavbar';
import Footer from '../../../components/layout/Footer';
import RecetaCard from '../../../components/common/RecetaCard';

// Datos de recetas basados en la imagen
const RECETAS_FREE = [
    {
        id: 1,
        titulo: "Avena con Frutas y Chía",
        fecha: "2025-07-13 01:30:27",
        descripcion: "Avena con frutas frescas y chía.",
        ingredientes: ["Avena", "leche", "banana", "fresas", "chía", "miel"],
        instrucciones: [
            "1. Cocinar la avena con leche",
            "2. Servir con frutas y chía encima",
            "3. Añadir miel al gusto"
        ],
        tipoComida: "Desayuno",
        nutricion: { calorias: "350 kcal", proteinas: "9 g", grasas: "8 g", carbohidratos: "40 g" },
        sinAlergenos: true,
        imagen: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        titulo: "Ensalada de Atún y Huevo",
        fecha: "2025-07-13 01:30:27",
        descripcion: "Ensalada de atún con huevo y vegetales.",
        ingredientes: ["Atún en agua", "huevo cocido", "lechuga", "tomate", "zanahoria", "limón"],
        instrucciones: [
            "1. Lavar vegetales",
            "2. Cortar huevo y mezclar con atún",
            "3. Añadir limón y servir"
        ],
        tipoComida: "Cena",
        nutricion: { calorias: "220 kcal", proteinas: "18 g", grasas: "10 g", carbohidratos: "15 g" },
        sinAlergenos: true,
        imagen: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        titulo: "Ají de Gallina",
        fecha: "2025-07-13 01:28:38",
        descripcion: "Ají de Gallina con ají amarillo y nueces.",
        ingredientes: ["Pechuga de pollo", "ají amarillo", "pan", "leche", "nueces", "arroz blanco"],
        instrucciones: [
            "1. Hervir la pechuga",
            "2. Licuar ají, pan y leche",
            "3. Cocinar todo junto",
            "4. Servir con arroz y huevo cocido"
        ],
        tipoComida: "Almuerzo",
        nutricion: { calorias: "450 kcal", proteinas: "25 g", grasas: "20 g", carbohidratos: "35 g" },
        sinAlergenos: true,
        imagen: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 4,
        titulo: "Lentejas con Huevo",
        fecha: "2025-07-13 01:28:38",
        descripcion: "Lentejas cocidas con huevo frito.",
        ingredientes: ["Lentejas", "cebolla", "tomate", "ajo", "huevo", "arroz"],
        instrucciones: [
            "1. Cocer las lentejas",
            "2. Preparar aderezo",
            "3. Freír huevo",
            "4. Servir con arroz"
        ],
        tipoComida: "Almuerzo",
        nutricion: { calorias: "380 kcal", proteinas: "18 g", grasas: "15 g", carbohidratos: "40 g" },
        sinAlergenos: true,
        imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600"
    }
];

const RecetasFree = () => {
    const [busqueda, setBusqueda] = useState('');
    const [categoriaSel, setCategoriaSel] = useState('Todas');

    const recetasFiltradas = RECETAS_FREE.filter((receta) => {
        const coincideTexto =
            receta.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
            receta.ingredientes.some((ing) => ing.toLowerCase().includes(busqueda.toLowerCase()));
        const coincideCategoria =
            categoriaSel === 'Todas' || receta.tipoComida === categoriaSel;

        return coincideTexto && coincideCategoria;
    });

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">

            <HeaderNavbar />

            <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
                        Recetas Gratuitas
                    </h1>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Descubre nuestras recetas fáciles con su valor nutricional e instrucciones paso a paso.
                    </p>
                </div>

                {/* Buscador y Filtro */}
                <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-10">
                    <input
                        type="text"
                        placeholder="Buscar por nombre o ingrediente..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className="flex-grow px-4 py-3 border border-gray-300 rounded-xl shadow-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                    />
                    <select
                        value={categoriaSel}
                        onChange={(e) => setCategoriaSel(e.target.value)}
                        className="px-4 py-3 border border-gray-300 rounded-xl shadow-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white font-medium text-gray-700"
                    >
                        <option value="Todas">Todas las Comidas</option>
                        <option value="Desayuno">Desayuno</option>
                        <option value="Almuerzo">Almuerzo</option>
                        <option value="Cena">Cena</option>
                    </select>
                </div>

                {/* Mapeo de Tarjetas */}
                {recetasFiltradas.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {recetasFiltradas.map((receta) => (
                            <RecetaCard key={receta.id} receta={receta} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 text-gray-500 font-medium">
                        No se encontraron recetas que coincidan con la búsqueda.
                    </div>
                )}
            </main>

        </div>
    );
};

export default RecetasFree;