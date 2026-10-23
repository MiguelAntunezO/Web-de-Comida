import React, { useState, useEffect } from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import HeaderNavbar from '../../../components/layout/HeaderNavbar';

const MenuSemanal = () => {
  const [diaAbierto, setDiaAbierto] = useState(null);

  const menuData = [
    {
      dia: 'Lunes', icono: '🌅',
      recetas: {
        d: { nombre: 'Avena con chía y frutas', ing: 'Avena, chía, leche, plátano', res: 'Mezclar y dejar reposar toda la noche.' },
        a: { nombre: 'Ají de Gallina con arroz', ing: 'Pollo, ají amarillo, pan, arroz', res: 'Guiso cremoso con base de ají peruano.' },
        c: { nombre: 'Sopa de verduras ligera', ing: 'Zanahoria, apio, poros, zapallo', res: 'Caldo suave cargado de vegetales frescos.' }
      }
    },
    {
      dia: 'Martes', icono: '☀️',
      recetas: {
        d: { nombre: 'Pan con palta y huevo', ing: 'Pan integral, palta, huevo, sal', res: 'Tostada con palta machacada y huevo duro.' },
        a: { nombre: 'Lentejas con huevo frito', ing: 'Lentejas, cebolla, arroz, huevo', res: 'Guiso de lentejas con aderezo criollo.' },
        c: { nombre: 'Tortilla de espinaca', ing: 'Espinaca, huevos, cebolla, queso', res: 'Mezcla salteada de espinacas y huevo.' }
      }
    },
    {
      dia: 'Miércoles', icono: '🌤️',
      recetas: {
        d: { nombre: 'Yogurt griego con granola', ing: 'Yogurt, granola, miel, arándanos', res: 'Bowl proteico con textura crujiente.' },
        a: { nombre: 'Arroz chaufa casero', ing: 'Arroz, pollo, sillao, cebollita', res: 'Arroz frito al estilo oriental.' },
        c: { nombre: 'Ensalada César con pollo', ing: 'Lechuga, pollo, queso, aderezo', res: 'Ensalada clásica con pollo a la plancha.' }
      }
    },
    {
      dia: 'Jueves', icono: '☁️',
      recetas: {
        d: { nombre: 'Tamalito verde piurano', ing: 'Maíz, culantro, cerdo', res: 'Tamal de maíz molido con culantro.' },
        a: { nombre: 'Pollo al horno con puré', ing: 'Pollo, papas, leche, mantequilla', res: 'Pollo dorado con puré de papa cremoso.' },
        c: { nombre: 'Sandwich de pollo', ing: 'Pan, pollo, mayonesa, lechuga', res: 'Sandwich ligero con pollo deshilachado.' }
      }
    },
    {
      dia: 'Viernes', icono: '🌊',
      recetas: {
        d: { nombre: 'Jugo surtido y tostadas', ing: 'Papaya, piña, pan, mermelada', res: 'Extracto de frutas con pan tostado.' },
        a: { nombre: 'Pescado frito con arroz', ing: 'Pescado, harina, arroz, ensalada', res: 'Filete crocante con arroz y salsa criolla.' },
        c: { nombre: 'Ceviche de champiñones', ing: 'Champiñones, limón, ají, cebolla', res: 'Versión vegetariana marinada en limón.' }
      }
    },
    {
      dia: 'Sábado', icono: '🎉',
      recetas: {
        d: { nombre: 'Chicharrón con camote', ing: 'Cerdo, camote, cebolla, pan', res: 'Cerdo frito con camotes y salsa criolla.' },
        a: { nombre: 'Tallarines rojos', ing: 'Fideos, carne, tomate, zanahoria', res: 'Pasta con salsa roja casera de carne.' },
        c: { nombre: 'Pizza casera', ing: 'Masa, tomate, queso, orégano', res: 'Pizza artesanal horneada con mozzarella.' }
      }
    },
    {
      dia: 'Domingo', icono: '🏠',
      recetas: {
        d: { nombre: 'Panqueques con miel', ing: 'Harina, huevo, leche, miel', res: 'Masas suaves bañadas en miel natural.' },
        a: { nombre: 'Caldo de gallina especial', ing: 'Gallina, kion, fideos, huevo', res: 'Caldo concentrado nutritivo con presa.' },
        c: { nombre: 'Antojito libre', ing: 'Variable', res: 'Cena relajada según preferencia.' }
      }
    }
  ];

  useEffect(() => {
    if (diaAbierto !== null) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [diaAbierto]);

  const diaSeleccionado = diaAbierto !== null ? menuData[diaAbierto] : null;

  return (
    <div className="bg-[#F3F4F6] flex flex-col font-sans overflow-hidden min-h-screen">
      <HeaderNavbar />

      <main className="flex-grow flex flex-col justify-center py-4 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto mb-6 text-center md:text-left w-full">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">Menú Semanal</h1>
          <p className="text-gray-500 text-sm font-medium italic">Selecciona un día para ver tu plan.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {menuData.map((item, index) => {
            const esDomingo = item.dia === 'Domingo';
            return (
              <div
                key={index}
                onClick={() => setDiaAbierto(index)}
                className={`bg-white rounded-[30px] border-2 border-transparent p-5 flex flex-col items-center text-center shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-orange-500 group
                  ${esDomingo ? 'md:col-span-2 lg:col-span-3 flex-row justify-center gap-8 py-4' : 'h-32 md:h-40 justify-center'}
                `}
              >
                <span className={`transition-transform duration-500 group-hover:scale-110 ${esDomingo ? 'text-5xl' : 'text-4xl mb-3'}`}>
                  {item.icono}
                </span>
                <div>
                  <h2 className={`font-black uppercase tracking-tight text-gray-800 ${esDomingo ? 'text-3xl' : 'text-lg'}`}>
                    {item.dia}
                  </h2>
                  <p className="text-orange-500 font-bold text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">VER MENÚ →</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>



      {/* MODAL SIN SCROLL VISIBLE */}
      {diaSeleccionado && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-500"
            onClick={() => setDiaAbierto(null)}
          ></div>

          <div className="relative bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 ease-out flex flex-col">
            <div className="bg-[#E85D04] p-5 text-white text-center relative shrink-0">
              <button onClick={() => setDiaAbierto(null)} className="absolute top-4 right-6 text-white/80 hover:text-white font-black text-xl transition-colors">✕</button>
              <span className="text-4xl mb-1 block">{diaSeleccionado.icono}</span>
              <h2 className="text-2xl font-black uppercase tracking-tighter">Menú del {diaSeleccionado.dia}</h2>
            </div>

            {/* Contenedor con scroll oculto */}
            <div className="p-6 space-y-3 overflow-y-auto scrollbar-hide" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
              <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>

              {[
                { label: 'Desayuno', key: 'd', icon: '☕' },
                { label: 'Almuerzo', key: 'a', icon: '🍲' },
                { label: 'Cena', key: 'c', icon: '🌙' }
              ].map((comida) => (
                <div
                  key={comida.key}
                  className="group/item relative bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-orange-200"
                >
                  <div className="flex items-center gap-4 p-4 cursor-default">
                    <div className="bg-orange-50 text-orange-600 p-2.5 rounded-xl text-lg shrink-0 group-hover/item:bg-orange-500 group-hover/item:text-white transition-all duration-500">
                      {comida.icon}
                    </div>
                    <div>
                      <p className="text-orange-500 font-black text-[8px] uppercase tracking-widest mb-0.5">
                        {comida.label}
                      </p>
                      <p className="text-gray-900 text-base font-bold leading-tight group-hover/item:text-orange-600 transition-colors duration-500">
                        {diaSeleccionado.recetas[comida.key].nombre}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-rows-[0fr] opacity-0 group-hover/item:grid-rows-[1fr] group-hover/item:opacity-100 transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <div className="px-12 pb-4 space-y-2 transform translate-y-2 group-hover/item:translate-y-0 transition-transform duration-500">
                        <div className="h-px bg-orange-100 w-full mb-1"></div>
                        <p className="text-[10px] text-gray-700 leading-relaxed">
                          <span className="font-bold text-orange-400 uppercase mr-2 text-[9px]">Ingredientes:</span>
                          {diaSeleccionado.recetas[comida.key].ing}
                        </p>
                        <p className="text-[10px] text-gray-500 italic leading-snug">
                          {diaSeleccionado.recetas[comida.key].res}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => setDiaAbierto(null)}
                className="w-full bg-gray-900 text-white font-black py-3.5 rounded-xl hover:bg-orange-600 transition-all duration-300 uppercase tracking-widest text-[10px] shadow-lg"
              >
                Cerrar Detalle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuSemanal;