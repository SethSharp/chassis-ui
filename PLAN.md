# chassis-ui - Plan

Scoped 2026-10-21.

A shared, fully typed Vue component library for the homelab projects. It vendors every
[shadcn-vue](https://www.shadcn-vue.com) component unchanged and publishes them as one
npm package, so projects stop running `shadcn-vue add` one component at a time.

Succeeds `lumuix`, which stays untouched so anything depending on it keeps working. Once
nothing depends on it any more, `lumuix` gets archived.

## Consumers

| Project | Today | Adoption |
|---|---|---|
| `homelab-dashboard` | shadcn-vue (`reka-nova`), 8 components in `web/src/components/ui` | **Pilot.** Find-and-replace imports, delete `components/ui` |
| `wolfpack` | No Vue front end yet | Starts on chassis-ui from day one |
| `calorie-tracker` | Hand-rolled components, `lucide-vue-next` | Gradual. A rewrite per component, not a swap |

## Shape

```
chassis-ui/
├── src/
│   ├── ui/          shadcn-vue output, NEVER edited by hand (pnpm sync overwrites it)
│   ├── extras/      our own components built on top (DataTable, ConfirmDialog, ...)
│   ├── lib/utils.ts cn() and friends
│   └── style.css    Tailwind v4 @theme + design tokens (CSS variables)
├── playground/      Vite app rendering every component, light and dark
└── scripts/
    ├── sync.ts      re-runs `shadcn-vue add --all --overwrite`
    └── exports.ts   generates package.json "exports" from src/ui and src/extras
```

### Usage in a project

```ts
import { Button } from 'chassis-ui/button'
import { Card, CardContent, CardHeader } from 'chassis-ui/card'
```

```css
/* style.css */
@import 'tailwindcss';
@import 'chassis-ui/style.css'; /* carries its own @source, no extra line needed */

:root { --primary: oklch(...); } /* override any token per project */
```

## Decisions

| Decision | Why |
|---|---|
| **Vendor all of shadcn-vue, untouched** | One `pnpm sync` brings upstream fixes in as a reviewable diff. Never editing `src/ui/` is what keeps that safe |
| **Customisations live in `src/extras/`** | A sync can never clobber them |
| **Compiled `dist/`, not raw `.vue` source** | shadcn components import `@/lib/utils`, which breaks inside a package. Vite library mode resolves aliases at build time; `vue-tsc` emits real `.d.ts` |
| **One subpath export per component** | Mirrors shadcn's paths: `@/components/ui/button` becomes `chassis-ui/button`. Migration is a find-and-replace. Also tree-shakes cleanly |
| **Generated `exports` map** | 50+ entries nobody should maintain by hand |
| **Theme through CSS variables** | One package, each project keeps its own look by overriding tokens |
| **Peer deps: `vue`, `tailwindcss`. Deps: `reka-ui`, `cn`, `class-variance-authority`, `@vueuse/core`, `@lucide/vue`, `@internationalized/date`, `tw-animate-css`** | Every project lands on the same versions of the plumbing; the framework stays the project's choice. `cn` is shadcn's replacement for `clsx` + `tailwind-merge`. `tw-animate-css` is imported by `style.css`, so it must resolve from inside the package |
| **Heavy, component-specific deps are optional peers** | form (`vee-validate`, `@vee-validate/zod`, `zod`), carousel (`embla-carousel*`), sonner, input-otp, code-block (`shiki`), chart (`@unovis/*`). A project only installs what it uses, so a `Button` never drags in a charting library. Also devDeps here so the library builds |
| **TypeScript 6, not 7** | TS 7 (native) has no JS compiler API, which `vue-tsc` and `vite-plugin-dts` need. Revisit when the Vue tooling supports it |
| **Public npm, unscoped `chassis-ui`** | No auth tokens in every consumer, CI and Coolify build. Name confirmed free 2026-10-21 |
| **Changesets for releases** | Projects pin a version and upgrade deliberately; one bad change can't break every app at once |
| **pnpm** | Matches wolfpack and calorie-tracker |
| **Style `reka-nova`, base colour `neutral`, font Inter** | Matches the dashboard, so the pilot migration changes nothing visually. Font is a token (`--font-sans`), so projects can override it |

## Phases

| # | What | Done when |
|---|---|---|
| 1 | Scaffold: pnpm, Vite library mode, `shadcn-vue init` (dashboard's style), `add --all`, `exports.ts` | `pnpm build` produces a typed `dist/` with one entry per component. **Done 2026-10-24** (68 components + `utils`) |
| 2 | `style.css`, playground rendering every component | Playground looks right in light and dark. **Done 2026-10-31:** `dist/style.css` is generated from `src/style.css` (Tailwind and Google Fonts imports stripped, `@source` added); the playground renders shadcn-vue's own examples, vendored by `scripts/examples.ts` (94 demos, 62 components; 6 newer ones have no upstream examples yet) |
| 3 | Changesets, GitHub Actions (typecheck, build, publish on release), publish `0.1.0` | `pnpm add chassis-ui` works in a fresh Vite app |
| 4 | Migrate homelab-dashboard | Its `components/ui` is gone and the dashboard renders identically |
| 5 | wolfpack starts on it; calorie-tracker adopts it gradually | |

## Risks

- **Tailwind v4 everywhere.** The `@theme` and `@source` setup assumes it. True for all consumers today.
- **Shared blast radius.** A breaking change hits every project. Mitigated by versioned releases and pinning, never `latest`.
- **Upstream churn.** shadcn-vue renames or restructures components occasionally. `pnpm sync` makes that a diff to review, and a major version bump when exports change.
- ~~**Tailwind class scanning.** If a project forgets the `@source` line, components render unstyled with no error.~~ Solved in phase 2: `chassis-ui/style.css` carries its own `@source`, so importing it is enough. It excludes the `.map` files, whose escaped source otherwise produces broken selectors.

## Open questions

- Playground only, or a proper docs site later (Histoire / Storybook)? Start with the playground.
- Should `extras/` ship from day one, or wait for the first component two projects actually need? Wait.
