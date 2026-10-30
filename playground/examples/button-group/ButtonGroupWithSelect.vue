<script setup lang="ts">
import { ref } from "vue"
import IconPlaceholder from "@playground/components/IconPlaceholder.vue"
import { Button } from "chassis-ui/button"
import { ButtonGroup } from "chassis-ui/button-group"
import { Field } from "chassis-ui/field"
import { Input } from "chassis-ui/input"
import { Label } from "chassis-ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "chassis-ui/select"
import { Example } from "@playground/examples/_shared/example"

const currency = ref("$")
</script>

<template>
  <Example title="With Select">
    <Field>
      <Label html-for="amount">
        Amount
      </Label>
      <ButtonGroup>
        <Select v-model="currency">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectItem value="$">
              $
            </SelectItem>
            <SelectItem value="€">
              €
            </SelectItem>
            <SelectItem value="£">
              £
            </SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="Enter amount to send" />
        <Button variant="outline">
          <IconPlaceholder
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
            hugeicons="ArrowRight01Icon"
            phosphor="ArrowRightIcon"
            remixicon="RiArrowRightLine"
          />
        </Button>
      </ButtonGroup>
    </Field>
  </Example>
</template>
