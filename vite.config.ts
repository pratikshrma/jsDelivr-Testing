import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()]
    }
  } else {
    return {
      plugins: [
        react(),
        cssInjectedByJsPlugin() // add this
      ],
      build: {
        lib: {
          entry: 'src/main.tsx',
          formats: ['iife'],
          name: 'MyScene',
          fileName: 'my-scene'
        },
        rollupOptions: {
          output: {
            inlineDynamicImports: true
          }
        }
      }
    }
  }
})
