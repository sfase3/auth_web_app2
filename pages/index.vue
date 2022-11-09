<template>
  <div class="text-xl"> 
    <Head>
      <Title>Home</Title>
    </Head>
    <div v-if="userinfo">
      You are already logged in on the website
    </div>
    <div v-else>
      You are not logged in
    </div>
  </div>
</template>

<script setup lang="ts">
const userinfo = useSupabaseUser()
</script>
