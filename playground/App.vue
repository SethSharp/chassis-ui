<script setup lang="ts">
import type { Component } from 'vue'
import { Button } from 'chassis-ui/button'
import { NativeSelect, NativeSelectOption } from 'chassis-ui/native-select'
import { Toaster } from 'chassis-ui/sonner'
import { TooltipProvider } from 'chassis-ui/tooltip'
import { MoonIcon, PaletteIcon, SunIcon } from '@lucide/vue'
import { computed, defineAsyncComponent, ref, watchEffect } from 'vue'
import { demos } from './examples'

const loaders = import.meta.glob<{ default: Component }>('./examples/*/*.vue')
const components = Object.keys(import.meta.glob('../src/ui/*/index.ts'))
  .map(path => path.split('/').at(-2)!)
  .sort()

function fromHash(): string {
  const name = location.hash.replace(/^#\/?/, '')
  return components.includes(name) ? name : components[0]
}

const current = ref(fromHash())
window.addEventListener('hashchange', () => current.value = fromHash())

function select(name: string) {
  location.hash = `/${name}`
}

const views = computed(() => (demos[current.value] ?? []).map(file => ({
  file,
  component: defineAsyncComponent(loaders[`./examples/${current.value}/${file}.vue`]),
})))

function stored(key: string, fallback: boolean): boolean {
  try {
    const value = localStorage.getItem(key)
    return value === null ? fallback : value === 'true'
  }
  catch {
    return fallback
  }
}

const dark = ref(stored('playground:dark', matchMedia('(prefers-color-scheme: dark)').matches))
const brand = ref(stored('playground:brand', false))

watchEffect(() => {
  document.documentElement.classList.toggle('dark', dark.value)
  document.documentElement.toggleAttribute('data-brand', brand.value)
  try {
    localStorage.setItem('playground:dark', String(dark.value))
    localStorage.setItem('playground:brand', String(brand.value))
  }
  catch {}
})
</script>

<template>
  <TooltipProvider>
    <div class="flex min-h-screen flex-col">
      <header class="bg-background/90 sticky top-0 z-40 flex items-center gap-3 border-b px-4 py-3 backdrop-blur">
        <span class="font-semibold">chassis-ui</span>
        <span class="text-muted-foreground hidden text-sm sm:inline">playground</span>

        <NativeSelect
          class="min-w-0 flex-1 md:hidden"
          :model-value="current"
          @update:model-value="select(String($event))"
        >
          <NativeSelectOption v-for="name in components" :key="name" :value="name">
            {{ name }}
          </NativeSelectOption>
        </NativeSelect>

        <div class="flex items-center gap-2 md:ml-auto">
          <Button
            variant="outline"
            size="sm"
            :aria-pressed="brand"
            title="Override --primary to prove theming works"
            @click="brand = !brand"
          >
            <PaletteIcon />
            <span class="hidden sm:inline">{{ brand ? 'Brand tokens' : 'Default tokens' }}</span>
          </Button>
          <Button variant="outline" size="icon-sm" :aria-label="dark ? 'Light mode' : 'Dark mode'" @click="dark = !dark">
            <SunIcon v-if="dark" />
            <MoonIcon v-else />
          </Button>
        </div>
      </header>

      <div class="flex flex-1">
        <nav class="sticky top-[57px] hidden h-[calc(100vh-57px)] w-56 shrink-0 overflow-y-auto border-r p-3 md:block">
          <a
            v-for="name in components"
            :key="name"
            :href="`#/${name}`"
            class="hover:bg-muted flex items-center justify-between rounded-md px-2 py-1.5 text-sm"
            :class="name === current ? 'bg-muted font-medium' : 'text-muted-foreground'"
          >
            {{ name }}
            <span v-if="!demos[name]" class="text-muted-foreground/60 text-xs">no demo</span>
          </a>
        </nav>

        <main class="min-w-0 flex-1" :data-component="current">
          <template v-if="views.length">
            <component :is="view.component" v-for="view in views" :key="`${current}/${view.file}`" />
          </template>
          <div v-else class="text-muted-foreground p-8 text-sm">
            shadcn-vue has no examples for <code class="text-foreground">{{ current }}</code> yet.
            It's still built and exported as <code class="text-foreground">chassis-ui/{{ current }}</code>.
          </div>
        </main>
      </div>
    </div>

    <Toaster />
  </TooltipProvider>
</template>
