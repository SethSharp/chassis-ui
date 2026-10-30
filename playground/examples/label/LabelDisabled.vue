<script setup lang="ts">
import { Example } from "@playground/examples/_shared/example"
import { Field } from "chassis-ui/field"
import { Input } from "chassis-ui/input"
import { Label } from "chassis-ui/label"
</script>

<template>
  <Example title="Disabled">
    <Field :data-disabled="true">
      <Label html-for="label-demo-disabled">
        Disabled
      </Label>
      <Input id="label-demo-disabled" placeholder="Disabled" disabled />
    </Field>
  </Example>
</template>
