<script setup lang="ts">
import { Example } from "@playground/examples/_shared/example"
import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockLine,
  CodeBlockToken,
  useHighlightedCode,
} from "chassis-ui/code-block"
import { source } from "./data"

const lines = useHighlightedCode(source, "ts")
</script>

<template>
  <Example title="Highlighted Lines">
    <CodeBlock>
      <CodeBlockContent line-numbers>
        <CodeBlockLine
          v-for="(line, index) in lines"
          :key="index"
          :variant="index >= 5 && index <= 8 ? 'highlighted' : 'default'"
        >
          <CodeBlockToken v-for="(token, i) in line" :key="i" :token="token" />
        </CodeBlockLine>
      </CodeBlockContent>
    </CodeBlock>
  </Example>
</template>
