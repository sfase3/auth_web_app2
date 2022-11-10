<template>
  <div>
    <div class="w-full  flex flex-row flex-wrap justify-between mobile">
      <div v-for="user in value" :key="user.id" class="mx-1 w-60 my-1 bg-orange-100">
        <p>{{ user.name }}</p>
        <p>{{ user.username }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.phone }}</p>
        <p>{{ user.website }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
    layout: "user",
})
const url = "https://jsonplaceholder.typicode.com/users"
const { data } = await useAsyncData("people",() => $fetch(url))
const {value} = data;
</script>

<style>
@media screen and (max-width: 495px) {
    .mobile{
        justify-content: center !important;
        text-align: center;
        margin: 5px 0; 
    }
  }
</style>