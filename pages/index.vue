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
definePageMeta({
  layout: "guest"
})

const userinfo = useSupabaseUser()
function setLayout () {
  return !userinfo.value ? setPageLayout("guest") : setPageLayout("user")
}

watch(userinfo.value, () => {
  setLayout()
})

onMounted(() => {
  setLayout()
})
</script>
