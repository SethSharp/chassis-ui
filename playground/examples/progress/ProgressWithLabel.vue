<script setup lang="ts">
import { Example } from "@playground/examples/_shared/example"
import { Field, FieldLabel } from "chassis-ui/field"
import { Progress } from "chassis-ui/progress"
</script>

<template>
  <Example title="With Label">
    <Field>
      <FieldLabel html-for="progress-upload">
        <span>Upload progress</span>
        <span class="ml-auto">66%</span>
      </FieldLabel>
      <Progress id="progress-upload" :model-value="66" class="w-full" />
    </Field>
  </Example>
</template>
