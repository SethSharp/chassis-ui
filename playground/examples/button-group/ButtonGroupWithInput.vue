<script setup lang="ts">
import { Button } from "chassis-ui/button"
import { ButtonGroup } from "chassis-ui/button-group"
import { Input } from "chassis-ui/input"
import { Example } from "@playground/examples/_shared/example"
</script>

<template>
  <Example title="With Input">
    <div class="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline">
          Button
        </Button>
        <Input placeholder="Type something here..." />
      </ButtonGroup>
      <ButtonGroup>
        <Input placeholder="Type something here..." />
        <Button variant="outline">
          Button
        </Button>
      </ButtonGroup>
    </div>
  </Example>
</template>
