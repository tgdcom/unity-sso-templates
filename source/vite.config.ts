import { defineConfig } from 'vite'
import vituum from 'vituum'
import juice from '@vituum/vite-plugin-juice'
import posthtml from '@vituum/vite-plugin-posthtml'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  plugins: [
    vituum(),
    tailwindcss(),
    posthtml({
      root: './src',
    }),
    juice(),
    ViteMinifyPlugin({}),
  ],
  build: {
    minify: 'terser',
    outDir: '../templates',
  },
})
