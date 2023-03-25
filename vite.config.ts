import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

/*
El plugin vite-plugin-legacy se encarga concatenar y minimizar los archivos de assets en un solo archivo. 
Además tambien genera una versión compatible con navegadores más antiguos, y además optimiza el tamaño del archivo de assets. 
*/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      polyfills: ['es.promise.finally'],
    }),
  ],
  mode: process.env.NODE_ENV || 'development',
})