<script setup lang="ts">
import { ExampleWrapper } from "@playground/examples/_shared/example"
import FileUploadList from "./FileUploadList.vue"
import ProgressControlled from "./ProgressControlled.vue"
import ProgressValues from "./ProgressValues.vue"
import ProgressWithLabel from "./ProgressWithLabel.vue"
</script>

<template>
  <ExampleWrapper>
    <ProgressValues />
    <ProgressWithLabel />
    <ProgressControlled />
    <FileUploadList />
  </ExampleWrapper>
</template>
