import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente baseadas no modo (dev ou production)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // Define a base como relativa para evitar erros de carregamento na Vercel
    base: './',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      // Garante que o código não quebre se a variável estiver ausente
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
    },
    resolve: {
      alias: {
        // Ajuste comum para facilitar imports usando '@/'
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      // Melhora a compatibilidade do build final
      outDir: 'dist',
      assetsDir: 'assets',
    }
  };
});
