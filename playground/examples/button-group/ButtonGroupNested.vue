<script setup lang="ts">
import IconPlaceholder from "@playground/components/IconPlaceholder.vue"
import { Button } from "chassis-ui/button"
import { ButtonGroup } from "chassis-ui/button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "chassis-ui/input-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "chassis-ui/tooltip"
import { Example } from "@playground/examples/_shared/example"
</script>

<template>
  <Example title="Nested">
    <ButtonGroup>
      <ButtonGroup>
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
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="Send a message..." />
          <Tooltip>
            <TooltipTrigger :as-child="true">
              <InputGroupAddon align="inline-end">
                <IconPlaceholder
                  lucide="AudioLinesIcon"
                  tabler="IconHeadphones"
                  hugeicons="AudioWave01Icon"
                  phosphor="WaveformIcon"
                  remixicon="RiSoundModuleLine"
                />
              </InputGroupAddon>
            </TooltipTrigger>
            <TooltipContent>Voice Mode</TooltipContent>
          </Tooltip>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  </Example>
</template>
