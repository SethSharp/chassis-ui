<script setup lang="ts">
import { Example } from "@playground/examples/_shared/example"
import { CodeBlock, CodeBlockContent } from "chassis-ui/code-block"
</script>

<template>
  <Example title="Empty">
    <CodeBlock>
      <CodeBlockContent>{{ "" }}</CodeBlockContent>
    </CodeBlock>
  </Example>
</template>
