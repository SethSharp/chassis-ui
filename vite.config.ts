import { readFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { entries } from './scripts/entries'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))
const external = [...Object.keys(pkg.dependencies ?? {}), ...Object.keys(pkg.peerDependencies ?? {})]

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts({
      tsconfigPath: './tsconfig.json',
      entryRoot: 'src',
      exclude: ['scripts', 'playground', 'vite.config.ts'],
      beforeWriteFile: (filePath, content) => ({
        // src/ui/button/index.d.ts -> dist/button/index.d.ts, matching the JS entries
        filePath: filePath.replace(/[\/]dist[\/](ui|extras)[\/]/, '/dist/').replace(/[\/]dist[\/]lib[\/]utils\.d\.ts$/, '/dist/utils/index.d.ts'),
        content,
      }),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: entries(),
      formats: ['es'],
    },
    rollupOptions: {
      // Match subpaths too (reka-ui/date, shiki/core), so nothing gets bundled in
      external: id => external.some(name => id === name || id.startsWith(`${name}/`)),
    },
    sourcemap: true,
    emptyOutDir: true,
  },
})
