<template>
  <div>
    <NuxtPage />
  </div>
</template> 

<script setup lang="ts">
definePageMeta({
  middleware: "guest",
  layout: "guest"
})
</script>