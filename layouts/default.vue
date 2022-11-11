<template>
  <div>
    <component :is="userinfo ? User : Guest" />
    <slot />
    <Footer />
  </div>
</template>


<script setup>
const userinfo = baseUser()
const User = resolveComponent("HeaderAuth");
const Guest = resolveComponent("HeaderGuest");
</script>