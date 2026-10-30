<script setup lang="ts">
import { Example } from "@playground/examples/_shared/example"
import { Skeleton } from "chassis-ui/skeleton"
</script>

<template>
  <Example title="Text">
    <div class="flex w-full flex-col gap-2">
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-3/4" />
    </div>
  </Example>
</template>
