<template>
  <div>
    <HeaderAuth />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>
