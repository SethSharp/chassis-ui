<script setup lang="ts">
import { Button } from "chassis-ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "chassis-ui/popover"
</script>

<template>
  <Popover>
    <PopoverTrigger :as-child="true">
      <Button variant="outline">
        Open Popover
      </Button>
    </PopoverTrigger>
    <PopoverContent align="start">
      <PopoverHeader>
        <PopoverTitle>Dimensions</PopoverTitle>
        <PopoverDescription>
          Set the dimensions for the layer.
        </PopoverDescription>
      </PopoverHeader>
    </PopoverContent>
  </Popover>
</template>
