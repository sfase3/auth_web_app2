<template>
  <div class="flex flex-col text-lg">
    <p><span>Your email</span> - {{ userInfo.email }}</p>
    <p><span>Your username</span> - {{ userInfo.user_metadata.nickname }}</p>
    <p><span class="text-red-600">Your secret id</span> - {{ userInfo.id }}</p>
    <p><span>Your role</span> - {{ userInfo.aud }}</p>
  </div>
</template>

<script setup lang="ts">
const userInfo = useSupabaseUser();
</script>
