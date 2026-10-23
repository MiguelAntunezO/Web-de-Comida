import { ArrowLeftIcon, XIcon } from 'flowbite-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Definición de Animaciones Personalizadas ---
const CustomStyles = () => (
  <style>
    {`
      @keyframes pulse-fast {
        0%, 100% { opacity: 1; }
        50% { opacity: .7; }
      }
      .animate-pulse-fast {
        animation: pulse-fast 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      .card-3d-hover {
        transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform-style: preserve-3d;
      }

      .card-3d-hover:hover {
        transform: scale(1.05) translateY(-15px) rotateX(1deg);
        box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.35);
      }
      
      .discount-tag-3d {
        transition: transform 0.5s ease-out, opacity 0.5s ease-out;
      }
    `}
  </style>
);

// --- Iconos ---
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 min-w-4"><path d="M20 6 9 17l-5-5" /></svg>
);
const ZapIcon = ({ className = 'text-violet-600' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
);
const AwardIcon = ({ className = 'text-amber-500' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11z" /></svg>
);
const UserPlusIcon = ({ className = 'text-red-600' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg>
);
const StarIcon = ({ className = 'text-yellow-500' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);
const BellIcon = ({ className = 'text-teal-500' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.36 21a1.94 1.94 0 0 0 3.28 0" /></svg>
);

// --- Datos de los Planes ---
const plans = [
  { duration: '1 mes', price: 10.00, discount: 'S/10.00 por 1 mes', accentColor: 'text-red-600', isPopular: false, tagColor: 'bg-red-600', vegetableIcon: '🥕' },
  { duration: '2 meses', price: 20.00, discount: 'S/20 por 2 meses', accentColor: 'text-teal-500', isPopular: true, tagColor: 'bg-teal-500', vegetableIcon: '🌶️' },
  { duration: 'un año', price: 120.00, discount: 'S/120 por un año', accentColor: 'text-violet-700', isPopular: false, tagColor: 'bg-violet-600', vegetableIcon: '🥑' },
];

// --- Componente de Tarjeta de Precio ---
const PriceCard = ({ plan }) => {
  const borderStyle = plan.isPopular ? 'border-teal-500 ring-4 ring-teal-200' : 'border-gray-100';
  const shadowStyle = plan.isPopular ? 'shadow-2xl' : 'shadow-xl';

  return (
    <div className={`group relative bg-white rounded-2xl ${shadowStyle} h-[500px] overflow-hidden transition-all duration-700 ease-out card-3d-hover cursor-pointer perspective-1000`}>
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 ease-in-out ${borderStyle} border-t-8 bg-white/95 group-hover:opacity-0 group-hover:scale-90`}>
        {plan.isPopular && <div className={`px-4 py-1.5 rounded-full text-sm font-semibold text-white shadow-lg ${plan.tagColor} mb-4 animate-pulse-fast`}>PLAN RECOMENDADO</div>}
        <div className="text-8xl select-none">{plan.vegetableIcon}</div>
        <h3 className="text-xl font-bold mt-4 text-gray-800">{plan.duration.toUpperCase()}</h3>
        <p className="text-gray-500 mt-2 text-center text-sm">Pasa el cursor para cosechar el precio</p>
      </div>

      <div className={`absolute inset-0 p-6 flex flex-col transition-all duration-700 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 ${borderStyle} border-t-8`}>
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 flex items-center justify-center"><StarIcon className={`w-5 h-5 mr-1 ${plan.accentColor}`} /> Acceso Exclusivo</h3>
          <p className={`text-4xl font-extrabold ${plan.accentColor} mt-2 leading-none`}>{plan.discount}</p>
          <p className="text-gray-500 text-sm mt-0.5">por {plan.duration}</p>
        </div>
        <ul className="mt-8 space-y-1.5 w-full text-left flex-grow flex flex-col justify-center">
          {['Chef Personal Digital 24/7', 'Recetas "Cero Desperdicio"', 'Guía de Insumos Premium', 'Masterclass de Técnicas', 'Soporte Técnico Prioritario', 'Acceso Anticipado'].map((benefit, index) => (
            <li key={index} className="flex items-start text-gray-700"><CheckIcon /><span className="ml-2.5 text-sm leading-snug">{benefit}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// --- Otros Subcomponentes ---
const TestimonialCard = ({ quote, name, title }) => (
  <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-violet-400">
    <p className="text-lg italic text-gray-700 mb-4">"{quote}"</p>
    <div className="font-semibold text-gray-900">{name}</div>
    <div className="text-sm text-gray-500">{title}</div>
  </div>
);

const ComparisonSection = () => (
  <section className="py-16 md:py-20 bg-gray-100/50">
    <div className="container mx-auto px-4 max-w-5xl">
      <h3 className="text-3xl font-bold text-gray-800 text-center mb-10">¿Por Qué el Salto a Premium?</h3>
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Característica</th>
              <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase">Plan Gratis</th>
              <th className="px-6 py-4 text-center text-xs font-medium text-teal-600 uppercase bg-teal-50/70">Plan Premium</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Recetas Exclusivas</td>
              <td className="px-6 py-4 text-center"><XIcon className="w-5 h-5 mx-auto text-red-500" /></td>
              <td className="px-6 py-4 text-center bg-teal-50/70"><CheckIcon className="w-5 h-5 mx-auto text-teal-500" /></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Menú Personalizado</td>
              <td className="px-6 py-4 text-center text-gray-500 text-xs">Básico</td>
              <td className="px-6 py-4 text-center font-semibold text-teal-600 bg-teal-50/70">Ilimitado 24/7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// --- SECCIÓN MODIFICADA: HEADER A LOS EXTREMOS ---
const Header = ({ goToHome }) => (
  <header className="bg-white shadow-md sticky top-0 z-50 w-full">
    <div className="flex justify-between items-center w-full px-6 md:px-12 py-4">
      <div className="text-xl font-black text-violet-800">
        Beneficios <span className="text-teal-500">Premium</span>
      </div>
      <button
        onClick={goToHome}
        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition duration-150"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2 text-gray-700" />
        Sigue navegando Free
      </button>
    </div>
  </header>
);

// --- Componente Principal ---
const PremiumPage = () => {
  const navigate = useNavigate();

  const keyFeatures = [
    { title: "Dominio Exclusivo", description: "Recetas únicas y técnicas secretas.", icon: ZapIcon },
    { title: "Organización Eficiente", description: "Menús semanales inteligentes.", icon: AwardIcon },
    { title: "Comunidad de Prestigio", description: "Acceso a chat privado.", icon: UserPlusIcon },
  ];

  const testimonials = [
    { quote: "El menú inteligente me ahorró 5 horas a la semana.", name: "María C.", title: "Chef Amateur" },
    { quote: "Por fin consigo los mejores ingredientes locales.", name: "Javier P.", title: "Dueño de Restaurante" },
  ];

  const goToRecetasFree = () => navigate('/recetas');

  return (
    <>
      <CustomStyles />
      <Header goToHome={goToRecetasFree} />
      <div className="bg-gray-50 min-h-screen font-sans">

        <section className="bg-violet-900 py-16 md:py-24 text-white text-center shadow-2xl">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-xl font-semibold uppercase tracking-widest text-yellow-400 mb-2">BIENVENIDO A LA MESA PRINCIPAL</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Diseñado para Quienes Valoran el Lujo del Tiempo y el Sabor.</h2>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-amber-500 transition duration-300 hover:shadow-xl hover:border-violet-600">
                  <div className="flex justify-center mb-4"><feature.icon className="w-12 h-12" /></div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ComparisonSection />

        <section className="py-16 bg-white md:py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, index) => (
                <TestimonialCard key={index} quote={t.quote} name={t.name} title={t.title} />
              ))}
            </div>
          </div>
        </section>


        <section className="py-16 md:py-20 bg-teal-500/10 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <BellIcon className="w-16 h-16 mx-auto text-teal-600 mb-4" />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Siempre Serás el Primero en Saberlo
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Como miembro Premium, tienes garantizado el acceso prioritario. Todas las nuevas recetas, funciones de IA y masterclasses exclusivas se te notificarán a través de un canal privado.
            </p>
            <a
              href="../Register"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-violet-700 rounded-xl shadow-lg hover:bg-violet-800 transition duration-300 transform hover:scale-105"
            >
              Únete a Premium {/* CAMBIO: Texto del botón */}
            </a>
          </div>
        </section>

        <section id="pricing" className="py-16 bg-white md:py-20 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <h3 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Elige tu Cosecha de Excelencia Culinaria</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <PriceCard key={index} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gray-900 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Nuestra Garantía: Tu Satisfacción</h3>
          <p className="text-lg text-gray-300 mb-6">Ofrecemos una Garantía de Satisfacción de 30 Días.</p>
        </section>

      </div>
    </>
  );
};

export default PremiumPage;