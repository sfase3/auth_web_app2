<template>
  <div class="flex flex-col text-lg">
    <p><span>Your email</span> - {{info.email}}</p>
    <p><span>Your username</span> - {{info.user_metadata.nickname}}</p>
    <p><span class="text-red-600">Your secret id</span> - {{info.id}}</p>
    <p><span >Your role</span> - {{info.aud}}</p>
  </div>
</template>

<script setup>
const info = inject('user')
console.log(info)
</script>

