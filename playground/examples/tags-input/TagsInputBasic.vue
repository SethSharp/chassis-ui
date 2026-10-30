<script setup lang="ts">
import { ref } from "vue"
import IconPlaceholder from "@playground/components/IconPlaceholder.vue"
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "chassis-ui/tags-input"
import { Example } from "@playground/examples/_shared/example"

const tags = ref(["Vue", "React", "Angular"])
</script>

<template>
  <Example title="Basic Tags Input">
    <TagsInput v-model="tags" class="w-full max-w-sm">
      <TagsInputItem v-for="tag in tags" :key="tag" :value="tag">
        <TagsInputItemText />
        <TagsInputItemDelete>
          <IconPlaceholder
            lucide="XIcon"
            tabler="IconX"
            hugeicons="Cancel01Icon"
            phosphor="XIcon"
            remixicon="RiCloseLine"
          />
        </TagsInputItemDelete>
      </TagsInputItem>
      <TagsInputInput placeholder="Add tag..." />
    </TagsInput>
  </Example>
</template>
