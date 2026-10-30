// Turns src/style.css (owned by shadcn-vue, rewritten on every sync) into the
// stylesheet projects import as `chassis-ui/style.css`.
export function theme(source: string): string {
  const body = source
    // The project imports Tailwind itself; importing it here would load it twice
    .replace(/^@import\s+['"]tailwindcss['"];\s*\n/m, '')
    // No remote fonts from a library: projects load their own and set --font-sans
    .replace(/^@import\s+url\([^)]*\);\s*\n/gm, '')
    .trimStart()

  // CSS requires @import before anything else, so the rest goes after them
  const imports = body.match(/^(?:@import[^;]*;\s*)*/)?.[0] ?? ''

  return [
    imports.trimEnd(),
    // Points Tailwind at the compiled components next to this file, so projects
    // don't need their own @source line. Source maps hold escaped copies of the
    // original source, which Tailwind would turn into broken selectors.
    '@source "./";\n@source not "./**/*.map";',
    body.slice(imports.length),
  ].filter(Boolean).join('\n\n')
}
