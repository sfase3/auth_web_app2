
<template>
  <form @submit.prevent="()=>{validator.checkValid()}"> 
    <div class="mb-6">
      <input v-model="validator.email.value" type="text" class="form-control block w-75 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address">    
      <span class="text-red-500">{{ validator.emailErr.value }}</span>
    </div>
    <div class="mb-6">
      <input v-model="validator.pass.value" type="password" class="form-control block w-75 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password">
      <span class="text-red-500">{{ validator.passErr.value }}</span>
    </div>
    <div>
      <button type="submit" class="inline-block   px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out " data-mdb-ripple="true" data-mdb-ripple-color="light" style="width:100%">
        Log in
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { Ref } from "nuxt/dist/app/compat/capi"
const changeForm:Ref<boolean> = ref(true)
const validator = buttonValidate(changeForm.value)
</script>
