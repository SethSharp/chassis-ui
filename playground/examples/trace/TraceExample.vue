<script setup lang="ts">
import { ExampleWrapper } from "@playground/examples/_shared/example"
import TraceChainOfThought from "./TraceChainOfThought.vue"
import TraceChat from "./TraceChat.vue"
import TraceReasoning from "./TraceReasoning.vue"
import TraceRows from "./TraceRows.vue"
import TraceSources from "./TraceSources.vue"
import TraceTask from "./TraceTask.vue"
import TraceToolCalls from "./TraceToolCalls.vue"
import TraceTurn from "./TraceTurn.vue"
</script>

<template>
  <ExampleWrapper>
    <TraceChat />
    <TraceRows />
    <TraceToolCalls />
    <TraceReasoning />
    <TraceChainOfThought />
    <TraceTask />
    <TraceSources />
    <TraceTurn />
  </ExampleWrapper>
</template>
