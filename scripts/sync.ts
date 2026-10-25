import { execSync } from 'node:child_process'

// src/ui is shadcn-vue output and never edited by hand, so overwriting it is safe.
// Review the resulting diff before committing.
execSync('npx -y shadcn-vue@latest add --all --overwrite -y', { stdio: 'inherit' })
execSync('tsx scripts/exports.ts', { stdio: 'inherit' })
