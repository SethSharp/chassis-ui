<script setup lang="ts">
import { Button } from "chassis-ui/button"
import { ButtonGroup } from "chassis-ui/button-group"
import { Field } from "chassis-ui/field"
import { Label } from "chassis-ui/label"
import { Example } from "@playground/examples/_shared/example"
</script>

<template>
  <Example title="Text Alignment">
    <Field>
      <Label id="alignment-label">
        Text Alignment
      </Label>
      <ButtonGroup aria-labelledby="alignment-label">
        <Button variant="outline" size="sm">
          Left
        </Button>
        <Button variant="outline" size="sm">
          Center
        </Button>
        <Button variant="outline" size="sm">
          Right
        </Button>
        <Button variant="outline" size="sm">
          Justify
        </Button>
      </ButtonGroup>
    </Field>
  </Example>
</template>
