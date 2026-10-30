<script setup lang="ts">
import { Checkbox } from "chassis-ui/checkbox"
import { Field, FieldLabel } from "chassis-ui/field"
import { Example } from "@playground/examples/_shared/example"
</script>

<template>
  <Example title="Basic">
    <Field orientation="horizontal">
      <Checkbox id="terms" />
      <FieldLabel html-for="terms">
        Accept terms and conditions
      </FieldLabel>
    </Field>
  </Example>
</template>
