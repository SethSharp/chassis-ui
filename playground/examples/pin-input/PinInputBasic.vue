<script setup lang="ts">
import {
  PinInput,
  PinInputGroup,
  PinInputSlot,
} from "chassis-ui/pin-input"
import { Example } from "@playground/examples/_shared/example"
</script>

<template>
  <Example title="Basic Pin Input">
    <PinInput>
      <PinInputGroup>
        <PinInputSlot v-for="(id, index) in 4" :key="id" :index="index" />
      </PinInputGroup>
    </PinInput>
  </Example>
</template>
