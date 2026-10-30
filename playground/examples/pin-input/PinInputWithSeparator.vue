<script setup lang="ts">
import {
  PinInput,
  PinInputGroup,
  PinInputSeparator,
  PinInputSlot,
} from "chassis-ui/pin-input"
import { Example } from "@playground/examples/_shared/example"
</script>

<template>
  <Example title="Pin Input with Separator">
    <PinInput>
      <PinInputGroup>
        <PinInputSlot v-for="(id, index) in 3" :key="id" :index="index" />
      </PinInputGroup>
      <PinInputSeparator />
      <PinInputGroup>
        <PinInputSlot v-for="(id, index) in 3" :key="id" :index="index + 3" />
      </PinInputGroup>
    </PinInput>
  </Example>
</template>
