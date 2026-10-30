<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger } from "chassis-ui/tabs"
</script>

<template>
  <Tabs default-value="home">
    <TabsList>
      <TabsTrigger value="home">
        Home
      </TabsTrigger>
      <TabsTrigger value="settings" :disabled="true">
        Disabled
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
