import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..', 'src')

/** Every component folder under src/ui and src/extras, keyed by its public subpath. */
export function entries(): Record<string, string> {
  const found: Record<string, string> = { utils: join(root, 'lib', 'utils.ts') }

  for (const dir of ['ui', 'extras']) {
    const base = join(root, dir)
    if (!existsSync(base)) continue

    for (const name of readdirSync(base).sort()) {
      const index = join(base, name, 'index.ts')
      if (existsSync(index)) found[name] = index
    }
  }

  return found
}
