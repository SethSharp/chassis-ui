<script setup lang="ts">
import { ref } from "vue"
import IconPlaceholder from "@playground/components/IconPlaceholder.vue"
import { Example } from "@playground/examples/_shared/example"
import { Button } from "chassis-ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "chassis-ui/dropdown-menu"

const showStatusBar = ref(true)
const showActivityBar = ref(false)
const showPanel = ref(false)
</script>

<template>
  <Example title="With Checkboxes">
    <DropdownMenu>
      <DropdownMenuTrigger :as-child="true">
        <Button variant="outline" class="w-fit">
          Checkboxes
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="min-w-40">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            v-model="showStatusBar"
          >
            <IconPlaceholder
              lucide="LayoutIcon"
              tabler="IconLayout"
              hugeicons="LayoutIcon"
              phosphor="LayoutIcon"
              remixicon="RiLayoutLine"
            />
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            v-model="showActivityBar"
            :disabled="true"
          >
            <IconPlaceholder
              lucide="ActivityIcon"
              tabler="IconActivity"
              hugeicons="ActivityIcon"
              phosphor="ActivityIcon"
              remixicon="RiPulseLine"
            />
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            v-model="showPanel"
          >
            <IconPlaceholder
              lucide="PanelLeftIcon"
              tabler="IconLayoutSidebar"
              hugeicons="LayoutLeftIcon"
              phosphor="SidebarIcon"
              remixicon="RiSideBarLine"
            />
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </Example>
</template>
