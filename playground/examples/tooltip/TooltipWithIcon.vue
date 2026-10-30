<script setup lang="ts">
import IconPlaceholder from "@playground/components/IconPlaceholder.vue"
import { Example } from "@playground/examples/_shared/example"
import { Button } from "chassis-ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "chassis-ui/tooltip"
</script>

<template>
  <Example title="With Icon">
    <Tooltip>
      <TooltipTrigger :as-child="true">
        <Button variant="ghost" size="icon">
          <IconPlaceholder
            lucide="InfoIcon"
            tabler="IconInfoCircle"
            hugeicons="AlertCircleIcon"
            phosphor="InfoIcon"
            remixicon="RiInformationLine"
          />
          <span class="sr-only">Info</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Additional information</p>
      </TooltipContent>
    </Tooltip>
  </Example>
</template>
