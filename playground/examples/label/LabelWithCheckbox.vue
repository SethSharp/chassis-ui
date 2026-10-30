<script setup lang="ts">
import { Example } from "@playground/examples/_shared/example"
import { Checkbox } from "chassis-ui/checkbox"
import { Field } from "chassis-ui/field"
import { Label } from "chassis-ui/label"
</script>

<template>
  <Example title="With Checkbox">
    <Field orientation="horizontal">
      <Checkbox id="label-demo-terms" />
      <Label html-for="label-demo-terms">
        Accept terms and conditions
      </Label>
    </Field>
  </Example>
</template>
