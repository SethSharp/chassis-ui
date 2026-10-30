<script setup lang="ts">
import IconPlaceholder from "@playground/components/IconPlaceholder.vue"
import { Button } from "chassis-ui/button"
import { ButtonGroup } from "chassis-ui/button-group"
import { Field, FieldGroup } from "chassis-ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "chassis-ui/input-group"
import { Label } from "chassis-ui/label"
import { Example } from "@playground/examples/_shared/example"
</script>

<template>
  <Example title="With Fields">
    <FieldGroup class="grid grid-cols-3 gap-4">
      <Field class="col-span-2">
        <Label html-for="width">
          Width
        </Label>
        <ButtonGroup>
          <InputGroup>
            <InputGroupInput id="width" />
            <InputGroupAddon class="text-muted-foreground">
              W
            </InputGroupAddon>
            <InputGroupAddon
              align="inline-end"
              class="text-muted-foreground"
            >
              px
            </InputGroupAddon>
          </InputGroup>
          <Button variant="outline" size="icon">
            <IconPlaceholder
              lucide="MinusIcon"
              tabler="IconMinus"
              hugeicons="MinusSignIcon"
              phosphor="MinusIcon"
              remixicon="RiSubtractLine"
            />
          </Button>
          <Button variant="outline" size="icon">
            <IconPlaceholder
              lucide="PlusIcon"
              tabler="IconPlus"
              hugeicons="PlusSignIcon"
              phosphor="PlusIcon"
              remixicon="RiAddLine"
            />
          </Button>
        </ButtonGroup>
      </Field>
    </FieldGroup>
  </Example>
</template>
