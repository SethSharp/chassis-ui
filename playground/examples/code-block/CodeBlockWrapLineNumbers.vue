<script setup lang="ts">
import { Example } from "@playground/examples/_shared/example"
import { CodeBlock, CodeBlockHeader, CodeBlockTitle } from "chassis-ui/code-block"
import { chat } from "./data"
import Highlighted from "./Highlighted.vue"
</script>

<template>
  <Example title="Wrap and Line Numbers">
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockTitle>components/Chat.vue</CodeBlockTitle>
      </CodeBlockHeader>
      <Highlighted :code="chat" language="vue" wrap line-numbers />
    </CodeBlock>
  </Example>
</template>
