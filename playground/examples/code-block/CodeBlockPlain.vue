<script setup lang="ts">
import { Example } from "@playground/examples/_shared/example"
import { CodeBlock, CodeBlockContent } from "chassis-ui/code-block"
import { build } from "./data"
</script>

<template>
  <Example title="Plain">
    <CodeBlock>
      <CodeBlockContent>{{ build }}</CodeBlockContent>
    </CodeBlock>
  </Example>
</template>
