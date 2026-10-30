<script setup lang="ts">
import IconPlaceholder from "@playground/components/IconPlaceholder.vue"
import { Example } from "@playground/examples/_shared/example"
import { Button } from "chassis-ui/button"
import { Kbd } from "chassis-ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "chassis-ui/tooltip"
</script>

<template>
  <Example title="With Keyboard Shortcut">
    <Tooltip>
      <TooltipTrigger :as-child="true">
        <Button variant="outline" size="icon-sm">
          <IconPlaceholder
            lucide="SaveIcon"
            tabler="IconDeviceFloppy"
            hugeicons="FloppyDiskIcon"
            phosphor="FloppyDiskIcon"
            remixicon="RiSave3Line"
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent class="pr-1.5">
        <div class="flex items-center gap-2">
          Save Changes <Kbd>S</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  </Example>
</template>
