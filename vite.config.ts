import { resolve } from 'path';
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment'
import path from 'path';

export default defineConfig({
  plugins: [
    RubyPlugin(),
    react(),
    tsconfigPaths(),
    EnvironmentPlugin('all'),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'app/javascripts/src'),
      components: resolve(__dirname, 'app/javascripts/components'),
      pages: resolve(__dirname, 'app/javascripts/pages'),
      layouts: resolve(__dirname, 'app/javascripts/layouts'),
      images: resolve(__dirname, 'app/javascripts/images'),
      types: resolve(__dirname, 'app/javascripts/types'),
    },
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
})
