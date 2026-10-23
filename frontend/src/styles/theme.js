import { defineConfig } from '@chakra-ui/react';

// 1. Usa `defineConfig` para crear tu tema (sintaxis para Chakra UI v3+).
const theme = defineConfig({
  // 2. Define tus colores de marca usando `semanticTokens`.
  // Esto permite usar nombres como 'brand.primary' en los componentes.
  semanticTokens: {
    colors: {
      brand: {
        // El color 'default' es el que se usará cuando llames a 'brand.primary'.
        // `_dark` es opcional, para el modo oscuro.
        primary: { default: '#c90000', _dark: '#ff6363' },
        secondary: { default: '#008000', _dark: '#38a169' },
        tomate: { default: '#cc3333', _dark: '#ff7878' },
        backgroundLight: { default: '#fdfaf5', _dark: '#1A202C' },
        textDark: { default: '#333333', _dark: '#E2E8F0' },
      },
    },
  },
});

export default theme;