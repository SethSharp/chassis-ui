import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { entries } from './entries'

const path = join(import.meta.dirname, '..', 'package.json')
const pkg = JSON.parse(readFileSync(path, 'utf8'))

const exports: Record<string, unknown> = {}
for (const name of Object.keys(entries())) {
  exports[`./${name}`] = {
    types: `./dist/${name}/index.d.ts`,
    import: `./dist/${name}.js`,
  }
}
exports['./style.css'] = './dist/style.css'
exports['./package.json'] = './package.json'

pkg.exports = exports
writeFileSync(path, JSON.stringify(pkg, null, 2) + '\n')
console.log(`Wrote ${Object.keys(exports).length - 1} entries to package.json exports`)
