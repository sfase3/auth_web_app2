<template>
    
    <div class="text-xl"> 
        <Head>
      <Title>Home</Title>
    </Head>
<div v-if="user">You are already logged in on the website</div>
<div v-else>You are not logged in</div>
</div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
</script>
