<script setup lang="ts">
import { Button } from "chassis-ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "chassis-ui/dialog"
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
  <Dialog>
    <DialogTrigger :as-child="true">
      <Button variant="outline">
        Open Dialog
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Popover Example</DialogTitle>
        <DialogDescription>
          Click the button below to see the popover.
        </DialogDescription>
      </DialogHeader>
      <Popover>
        <PopoverTrigger :as-child="true">
          <Button variant="outline" class="w-fit">
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>Popover in Dialog</PopoverTitle>
            <PopoverDescription>
              This popover appears inside a dialog. Click the button to open
              it.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </DialogContent>
  </Dialog>
</template>
