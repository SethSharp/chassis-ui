<script setup lang="ts">
import { Checkbox } from "chassis-ui/checkbox"
import { Field, FieldLabel } from "chassis-ui/field"
import { Example } from "@playground/examples/_shared/example"
</script>

<template>
  <Example title="Invalid">
    <Field orientation="horizontal" data-invalid>
      <Checkbox id="terms-3" aria-invalid />
      <FieldLabel html-for="terms-3">
        Accept terms and conditions
      </FieldLabel>
    </Field>
  </Example>
</template>
