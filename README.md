# chassis-ui

A shared, fully typed Vue 3 component library for my homelab and personal projects.
It ships every [shadcn-vue](https://www.shadcn-vue.com) component, unchanged, as one
npm package, so projects stop running `shadcn-vue add` one component at a time.

The reasoning and roadmap live in [PLAN.md](PLAN.md).

> **Status:** early. The library builds, but it isn't published to npm yet and
> there's no playground to look at the components. Both arrive in phases 2 and 3.

## Getting started

### What you need

- **Node.js 22 or 24 (LTS).** Avoid odd-numbered releases like 23: some tooling
  refuses to run on them.
- **pnpm**, via Corepack. The repo pins the exact pnpm version in `package.json`, so
  you don't need to install it yourself:

  ```sh
  corepack enable
  ```

### Install and build

```sh
git clone https://github.com/SethSharp/chassis-ui.git
cd chassis-ui
pnpm install
pnpm build
```

A successful build leaves a `dist/` folder with one entry per component
(`dist/button.js` plus `dist/button/index.d.ts` for its types, and so on).

## Everyday commands

| Command | What it does |
|---|---|
| `pnpm build` | Builds the library into `dist/`, with type declarations |
| `pnpm typecheck` | Type-checks everything without building |
| `pnpm sync` | Pulls the latest components from shadcn-vue into `src/ui/`, then regenerates the exports |
| `pnpm exports` | Regenerates the `exports` map in `package.json` from the component folders |

## How the project is laid out

```
src/
├── ui/          shadcn-vue components, exactly as upstream ships them
├── extras/      our own components built on top (none yet)
├── lib/utils.ts the cn() class helper
└── style.css    Tailwind theme and design tokens
scripts/
├── entries.ts   finds every component folder; shared by the build and exports
├── exports.ts   writes the package.json exports map
└── sync.ts      re-runs shadcn-vue to update src/ui
```

## Ground rules

- **Never edit anything in `src/ui/` by hand.** `pnpm sync` overwrites that folder,
  so any change there gets lost on the next update. Customisations go in
  `src/extras/`.
- **Review the diff after a sync** before committing. It's how upstream fixes, and
  occasionally breaking changes, come in.
- **Don't hand-edit the `exports` field** in `package.json`. Run `pnpm exports`
  instead (the build and sync scripts already do).

## Troubleshooting

**`Cannot find module ...corepack\v1\pnpm\12.x\bin\pnpm.cjs`**
Your Corepack is too old for pnpm 12. It only bites outside this repo, since the
repo pins pnpm 10, but you can fix it for good with `npm install -g corepack@latest`.

**`The installed "typescript" package does not provide the JavaScript Compiler API`**
Something pulled in TypeScript 7. The Vue type tooling doesn't support it yet, which
is why the repo pins TypeScript 6. Run `pnpm install` to restore the pinned version.
