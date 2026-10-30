<script setup lang="ts">
import { Example } from "@playground/examples/_shared/example"
import { CodeBlock, CodeBlockContent } from "chassis-ui/code-block"
import { error } from "./data"
</script>

<template>
  <Example title="Wrap">
    <CodeBlock>
      <CodeBlockContent wrap>
        {{ error }}
      </CodeBlockContent>
    </CodeBlock>
  </Example>
</template>
