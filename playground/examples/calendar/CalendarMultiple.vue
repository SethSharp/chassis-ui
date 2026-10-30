<script setup lang="ts">
import { Calendar } from "chassis-ui/calendar"
import { Card, CardContent } from "chassis-ui/card"
import { Example } from "@playground/examples/_shared/example"
</script>

<template>
  <Example title="Multiple">
    <Card class="mx-auto w-fit p-0">
      <CardContent class="p-0">
        <Calendar type="multiple" />
      </CardContent>
    </Card>
  </Example>
</template>
