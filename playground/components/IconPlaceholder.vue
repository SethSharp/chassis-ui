<script setup lang="ts">
import type { Component } from 'vue'
import * as icons from '@lucide/vue'
import { computed } from 'vue'

// Upstream's examples switch between five icon libraries; we only ship lucide
const props = defineProps<{
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
}>()

const library = icons as unknown as Record<string, Component>
const icon = computed(() => (props.lucide && library[props.lucide]) || icons.SquareIcon)
</script>

<template>
  <component :is="icon" />
</template>
