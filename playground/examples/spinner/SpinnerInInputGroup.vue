<script setup lang="ts">
import { Example } from "@playground/examples/_shared/example"
import { Field, FieldLabel } from "chassis-ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "chassis-ui/input-group"
import { Spinner } from "chassis-ui/spinner"
</script>

<template>
  <Example title="In Input Group">
    <Field>
      <FieldLabel html-for="input-group-spinner">
        Input Group
      </FieldLabel>
      <InputGroup>
        <InputGroupInput id="input-group-spinner" />
        <InputGroupAddon>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  </Example>
</template>
