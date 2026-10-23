import React from 'react';

// --- COMPONENTE LINK CORREGIDO PARA URLS LIMPIAS ---
const Link = ({ to, className, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // 1. Cambiamos la URL de forma limpia sin recargar la página
    window.history.pushState({}, '', to.toLowerCase());

    // 2. Disparamos el evento para que App.jsx detecte el cambio de ruta
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={to.toLowerCase()} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

// --- ICONOS ---
const ArrowLeftIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
  </svg>
);

const UserIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LockIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.16 13.16 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path>
  </svg>
);

const AppleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
    <path fill="currentColor" d="M37.945 22.18c-.015-3.048-2.313-5.393-5.918-5.393-3.088 0-5.184 1.884-6.425 1.884-1.25 0-3.328-1.884-6.398-1.884-3.666 0-6.07 2.37-6.07 5.756 0 3.377 2.457 5.922 6.577 6.002.597.016 1.19-.11 1.63-.448.147-.11.233-.16.53-.16.29 0 .393.044.536.147.437.332 1.05.457 1.61.457 3.921-.067 6.471-2.457 6.536-6.039.066-.412.083-.79.083-1.077ZM24.084 11.218c.036-1.55-.788-2.903-2.078-3.791-1.31-.89-2.934-1.01-4.047-.354-.937.525-1.547 1.583-1.488 3.03.045 1.492.93 2.943 2.193 3.693 1.258.749 2.822.81 3.935.215.992-.51 1.517-1.57 1.485-2.793Z" />
  </svg>
);

const Register = () => {
  const [formData, setFormData] = React.useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = React.useState({ type: '', text: '' });
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setMessage({ type: '', text: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: 'error', text: 'Las contraseñas no coinciden.' });
      return;
    }
    if (formData.password.length < 6) {
      setMessage({ type: 'error', text: 'La contraseña debe tener al menos 6 caracteres.' });
      return;
    }
    setMessage({ type: 'success', text: '¡Registro exitoso!' });
  };

  // Clases compartidas
  const inputClasses = "w-full py-2.5 px-4 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 pl-10 placeholder-gray-400";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans text-gray-800">
      <div className="flex bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-6xl h-[51rem] mx-auto border border-gray-200 relative">

        {/* BOTÓN DE RETORNO (Imagen 2 - URL Limpia) */}
        <Link
          to="/recetas"
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-orange-100 hover:text-orange-600 hover:border-orange-300 transition-all duration-200 z-10 shadow-sm flex items-center justify-center"
          title="Volver a Recetas"
        >
          <ArrowLeftIcon />
        </Link>

        {/* Columna Izquierda: Formulario */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center mb-10">
            <img src="./assets/images/logo1.svg" alt="Logo" width="100" height="110" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">Crear una cuenta</h2>
          <p className="text-gray-500 mb-8">Únase ahora para optimizar su experiencia desde el primer día.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={labelClasses} htmlFor="nombre">Name</label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" id="nombre" value={formData.nombre} onChange={handleChange} className={inputClasses} placeholder="nombre" required />
              </div>
            </div>

            <div>
              <label className={labelClasses} htmlFor="email">Email</label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="email" id="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="email" required />
              </div>
            </div>

            <div>
              <label className={labelClasses} htmlFor="password">Password</label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type={showPassword ? "text" : "password"} id="password" value={formData.password} onChange={handleChange} className={inputClasses} placeholder="Contraseña." required />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                </span>
              </div>
            </div>

            <div>
              <label className={labelClasses} htmlFor="confirmPassword">Confirm Password</label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className={inputClasses} placeholder="Contraseña." required />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                </span>
              </div>
            </div>

            {message.text && (
              <div className={`p-3 rounded-lg text-sm font-medium ${message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {message.text}
              </div>
            )}

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200">
              Register
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">O regístrate con</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex space-x-4 mb-8">
            <button type="button" className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-2.5 text-gray-700 hover:bg-gray-50 transition duration-200">
              <GoogleIcon /> <span className="ml-2">Google</span>
            </button>
            <button type="button" className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-2.5 text-gray-700 hover:bg-gray-50 transition duration-200">
              <AppleIcon /> <span className="ml-2">Apple</span>
            </button>
          </div>

          <p className="text-center text-gray-600 text-sm mt-auto">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer">
              Inicia sesión ahora.
            </Link>
          </p>
          <p className="text-gray-400 text-xs text-center mt-2">
            © 2025 Cucharon es a la Olla. Todos los derechos reservados.
            <Link to="/privacy" className="ml-4 text-gray-500 hover:underline">Privacy Policy</Link>
          </p>
        </div>

        {/* Columna Derecha: Imagen */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-700 to-blue-900 text-white p-12 flex-col justify-center items-center">
          <img src="./assets/images/postres.jpg" alt="Postres" className="rounded-2xl shadow-2xl object-cover h-4/5 w-full border-4 border-white/20" />
        </div>
      </div>
    </div>
  );
};

export default Register;