import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

// Installs the packed package into a fresh Vite app, the way a project would, and
// fails if it doesn't typecheck, build or style correctly. Run `pnpm build` first.

const root = join(import.meta.dirname, '..')
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
const dev = pkg.devDependencies as Record<string, string>

if (!existsSync(join(root, 'dist', 'style.css'))) {
  console.error('No dist/ to test. Run `pnpm build` first.')
  process.exit(1)
}

const app = mkdtempSync(join(tmpdir(), 'chassis-ui-smoke-'))
const run = (command: string) => execSync(command, { cwd: app, encoding: 'utf8', stdio: 'pipe' })

function files(dir: string, contents: Record<string, string>) {
  for (const [name, content] of Object.entries(contents)) {
    mkdirSync(join(dir, name, '..'), { recursive: true })
    writeFileSync(join(dir, name), content)
  }
}

const failures: string[] = []
function check(ok: boolean, message: string) {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${message}`)
  if (!ok) failures.push(message)
}

try {
  execSync(`pnpm pack --pack-destination "${app}"`, { cwd: root, stdio: 'pipe' })
  const tarball = readdirSync(app).find(file => file.endsWith('.tgz'))!

  files(app, {
    'package.json': JSON.stringify({ name: 'smoke', private: true, type: 'module', packageManager: pkg.packageManager }),
    'index.html': '<!doctype html><html><body><div id="app"></div><script type="module" src="/src/main.ts"></script></body></html>',
    'vite.config.ts': [
      `import tailwindcss from '@tailwindcss/vite'`,
      `import vue from '@vitejs/plugin-vue'`,
      `import { defineConfig } from 'vite'`,
      `export default defineConfig({ plugins: [vue(), tailwindcss()] })`,
    ].join('\n'),
    'tsconfig.json': JSON.stringify({
      compilerOptions: { target: 'ES2022', module: 'ESNext', moduleResolution: 'Bundler', strict: true, skipLibCheck: true, noEmit: true, types: ['vite/client'] },
      include: ['src/**/*.ts', 'src/**/*.vue'],
    }),
    // Only these two lines: no @source, which the package's stylesheet must provide
    'src/style.css': `@import 'tailwindcss';\n@import 'chassis-ui/style.css';\n`,
    'src/App.vue': [
      `<script setup lang="ts">`,
      `import { Button } from 'chassis-ui/button'`,
      `import { Card, CardContent, CardHeader, CardTitle } from 'chassis-ui/card'`,
      `import { cn } from 'chassis-ui/utils'`,
      `</script>`,
      `<template>`,
      `  <Card :class="cn('p-4', 'p-2')">`,
      `    <CardHeader><CardTitle>Smoke</CardTitle></CardHeader>`,
      `    <CardContent><Button variant="outline" size="sm">Go</Button></CardContent>`,
      `  </Card>`,
      `</template>`,
    ].join('\n'),
    'src/main.ts': `import { createApp } from 'vue'\nimport App from './App.vue'\nimport './style.css'\n\ncreateApp(App).mount('#app')\n`,
    // Proves the variant types survived the build: this must be a type error
    'src/types.ts': `import type { ButtonVariants } from 'chassis-ui/button'\n\n// @ts-expect-error not a variant\nexport const bad: ButtonVariants = { variant: 'nope' }\n`,
  })

  console.log(`Installing ${tarball} into ${app}`)
  run(`pnpm add ./${tarball} vue@"${dev.vue}" tailwindcss@"${dev.tailwindcss}"`)
  run(`pnpm add -D vite@"${dev.vite}" @vitejs/plugin-vue@"${dev['@vitejs/plugin-vue']}" @tailwindcss/vite@"${dev['@tailwindcss/vite']}" vue-tsc@"${dev['vue-tsc']}" typescript@"${dev.typescript}"`)

  try {
    run('pnpm exec vue-tsc --noEmit')
    check(true, 'typechecks, and a bad variant is rejected')
  }
  catch (error) {
    check(false, `typecheck failed:\n${(error as { stdout?: string }).stdout ?? error}`)
  }

  let output = ''
  try {
    output = run('pnpm exec vite build 2>&1')
    check(true, 'builds')
  }
  catch (error) {
    check(false, `build failed:\n${(error as { stdout?: string }).stdout ?? error}`)
  }
  check(!/warnings? while optimizing generated CSS/i.test(output), 'no CSS warnings')

  const assets = join(app, 'dist', 'assets')
  const css = existsSync(assets)
    ? readdirSync(assets).filter(file => file.endsWith('.css')).map(file => readFileSync(join(assets, file), 'utf8')).join('\n')
    : ''
  check(css.includes('.bg-primary'), 'generates component classes without a project @source line')
  check(css.includes('--primary:'), 'includes the design tokens')
  check(!css.includes('fonts.googleapis.com'), 'loads no remote fonts')

  const merged = run(`node --input-type=module -e "import('chassis-ui/utils').then(m => process.stdout.write(m.cn('p-4', 'p-2')))"`)
  check(merged === 'p-2', 'chassis-ui/utils resolves and runs at runtime')
}
finally {
  rmSync(app, { recursive: true, force: true })
}

if (failures.length) {
  console.error(`\n${failures.length} smoke check(s) failed`)
  process.exit(1)
}
console.log('\nSmoke test passed')
