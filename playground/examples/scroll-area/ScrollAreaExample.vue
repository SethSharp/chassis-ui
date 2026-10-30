<script setup lang="ts">
import { Example, ExampleWrapper } from "@playground/examples/_shared/example"
import ScrollAreaHorizontal from "./ScrollAreaHorizontal.vue"
import ScrollAreaVertical from "./ScrollAreaVertical.vue"
</script>

<template>
  <ExampleWrapper>
    <Example title="Vertical">
      <ScrollAreaVertical />
    </Example>
    <Example title="Horizontal">
      <ScrollAreaHorizontal />
    </Example>
  </ExampleWrapper>
</template>
