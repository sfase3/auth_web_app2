<template>
  <div class="flex flex-col text-lg">
    <p>{{ userInfo }}</p>
  </div>
</template>

<script setup lang="ts">
const userInfo = baseUser();
</script>
