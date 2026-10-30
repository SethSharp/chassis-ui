<script setup lang="ts">
import {
  PinInput,
  PinInputGroup,
  PinInputSlot,
} from "chassis-ui/pin-input"
import { Example } from "@playground/examples/_shared/example"
</script>

<template>
  <Example title="Masked Pin Input">
    <PinInput :mask="true" type="text">
      <PinInputGroup>
        <PinInputSlot v-for="(id, index) in 6" :key="id" :index="index" />
      </PinInputGroup>
    </PinInput>
  </Example>
</template>
