<template >
<div class="wrapper">
<NuxtLayout>
<div class="main   flex justify-center items-center bg-gray-200"><NuxtPage/></div>
</NuxtLayout>
</div>
</template>
<script setup>
const user = useSupabaseUser();
provide('user',user)
</script>
<style scoped> 
*{
  overflow-y: hidden;
}
.wrapper{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main{
flex: 1 1 auto;
min-height: calc(100vh - 140px);
}
</style>