module.exports = {
  // ✅ Cambio 1: Usa 'plugins' en minúsculas seguido de dos puntos ':'
  plugins: {
    // ✅ Cambio 2: Usa la clave 'tailwindcss' y dale un objeto vacío '{}'
    'tailwindcss': {},
    // ✅ No olvides autoprefixer, que es estándar
    'autoprefixer': {},
  },
};