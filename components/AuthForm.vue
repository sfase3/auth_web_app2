<template>
  <div>
    <component :is="changeForm ? Login : SignUp" />
    <div class="mt-2">
      <span v-if="changeForm" class="text-cyan-500 hover:underline select-none" @click="changeAuthForm">Not registered? Sign up for free</span>  
      <span v-else class="text-cyan-500 hover:underline select-none" @click="changeAuthForm">Already registered? Log in</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";

const changeForm:Ref<boolean> = ref(false)
const Login = resolveComponent("Login");
const SignUp = resolveComponent("SignUp");
function changeAuthForm(){
  changeForm.value = !changeForm.value;
}
</script>
