<script setup lang="ts">
import { Field, FieldLabel } from "chassis-ui/field"
import { Textarea } from "chassis-ui/textarea"
</script>

<template>
  <Field>
    <FieldLabel html-for="textarea-demo-disabled">
      Message
    </FieldLabel>
    <Textarea
      id="textarea-demo-disabled"
      placeholder="Type your message here."
      :disabled="true"
    />
  </Field>
</template>
