<script setup lang="ts">
import IconPlaceholder from "@playground/components/IconPlaceholder.vue"
import { Button } from "chassis-ui/button"
import { ButtonGroup } from "chassis-ui/button-group"
import { Example } from "@playground/examples/_shared/example"
</script>

<template>
  <Example title="With Like">
    <ButtonGroup>
      <Button variant="outline">
        <IconPlaceholder
          lucide="HeartIcon"
          tabler="IconHeart"
          hugeicons="FavouriteIcon"
          phosphor="HeartIcon"
          remixicon="RiHeartLine"
          data-icon="inline-start"
        />
        Like
      </Button>
      <Button variant="outline" :as-child="true" size="icon" class="w-12">
        <span>1.2K</span>
      </Button>
    </ButtonGroup>
  </Example>
</template>
