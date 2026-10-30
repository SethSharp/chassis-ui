<script setup lang="ts">
import { Field, FieldLabel } from "chassis-ui/field"
import { Input } from "chassis-ui/input"
</script>

<template>
  <Field>
    <FieldLabel html-for="input-demo-disabled">
      Email
    </FieldLabel>
    <Input
      id="input-demo-disabled"
      type="email"
      placeholder="Email"
      :disabled="true"
    />
  </Field>
</template>
