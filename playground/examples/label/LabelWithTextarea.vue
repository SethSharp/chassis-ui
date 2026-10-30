<script setup lang="ts">
import { Example } from "@playground/examples/_shared/example"
import { Field } from "chassis-ui/field"
import { Label } from "chassis-ui/label"
import { Textarea } from "chassis-ui/textarea"
</script>

<template>
  <Example title="With Textarea">
    <Field>
      <Label html-for="label-demo-message">
        Message
      </Label>
      <Textarea id="label-demo-message" placeholder="Message" />
    </Field>
  </Example>
</template>
