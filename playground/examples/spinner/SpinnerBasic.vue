<script setup lang="ts">
import { Example } from "@playground/examples/_shared/example"
import { Spinner } from "chassis-ui/spinner"
</script>

<template>
  <Example title="Basic">
    <div class="flex items-center gap-6">
      <Spinner />
      <Spinner class="size-6" />
    </div>
  </Example>
</template>
