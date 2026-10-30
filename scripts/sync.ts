import { execSync } from 'node:child_process'

// src/ui and playground/examples are upstream output and never edited by hand,
// so overwriting them is safe. Review the resulting diff before committing.
execSync('npx -y shadcn-vue@latest add --all --overwrite -y', { stdio: 'inherit' })
execSync('tsx scripts/exports.ts', { stdio: 'inherit' })
execSync('tsx scripts/examples.ts', { stdio: 'inherit' })
