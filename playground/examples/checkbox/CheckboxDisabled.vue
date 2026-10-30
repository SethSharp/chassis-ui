<script setup lang="ts">
import { Checkbox } from "chassis-ui/checkbox"
import { Field, FieldLabel } from "chassis-ui/field"
import { Example } from "@playground/examples/_shared/example"
</script>

<template>
  <Example title="Disabled">
    <Field orientation="horizontal">
      <Checkbox id="toggle" disabled />
      <FieldLabel html-for="toggle">
        Enable notifications
      </FieldLabel>
    </Field>
  </Example>
</template>
