# Changesets

Every pull request that changes what ships (`src/`, `scripts/theme.ts`, the build or
`package.json`) adds a changeset describing it:

```sh
pnpm changeset
```

Pick the bump (patch for fixes, minor for new components or features, major for
anything that breaks an import or a prop) and write one line for the changelog.
Merging to `main` opens a "Version Packages" pull request; merging that publishes.
