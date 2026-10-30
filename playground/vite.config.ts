import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const src = fileURLToPath(new URL('../src', import.meta.url))
const playground = fileURLToPath(new URL('.', import.meta.url))

// Serves the components straight from src/, so edits show up without a rebuild.
// Imports use the same `chassis-ui/<name>` paths a project would.
export default defineConfig({
  root: playground,
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: [
      { find: /^chassis-ui\/utils$/, replacement: `${src}/lib/utils.ts` },
      { find: /^chassis-ui\/(.+)$/, replacement: `${src}/ui/$1` },
      { find: /^@playground\//, replacement: `${playground}/` },
      { find: /^@\//, replacement: `${src}/` },
    ],
  },
})
