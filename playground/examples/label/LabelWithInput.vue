<script setup lang="ts">
import { Example } from "@playground/examples/_shared/example"
import { Field } from "chassis-ui/field"
import { Input } from "chassis-ui/input"
import { Label } from "chassis-ui/label"
</script>

<template>
  <Example title="With Input">
    <Field>
      <Label html-for="label-demo-username">Username</Label>
      <Input id="label-demo-username" placeholder="Username" />
    </Field>
  </Example>
</template>
