<script setup lang="ts">
import IconPlaceholder from "@playground/components/IconPlaceholder.vue"
import { Example } from "@playground/examples/_shared/example"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
  CodeBlockToken,
  useHighlightedCode,
} from "chassis-ui/code-block"
import { source } from "./data"

const lines = useHighlightedCode(source, "ts")
</script>

<template>
  <Example title="Syntax Highlighting">
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockTitle>
          <IconPlaceholder
            lucide="FileCodeIcon"
            tabler="IconFileCode"
            hugeicons="CodeIcon"
            phosphor="FileCodeIcon"
            remixicon="RiFileCodeLine"
          />
          server/api/chat.post.ts
        </CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton :value="source" />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent line-numbers>
        <CodeBlockLine v-for="(line, index) in lines" :key="index">
          <CodeBlockToken v-for="(token, i) in line" :key="i" :token="token" />
        </CodeBlockLine>
      </CodeBlockContent>
    </CodeBlock>
  </Example>
</template>
