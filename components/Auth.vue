<template>
  <form @submit.prevent="()=>(buttonValidate(email,pass,username))"> 
    <div class="mb-6" v-if="!change_form">
    <input type="text" class="form-control block w-75 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Username" v-model="username"/>    
          </div> 
    <div class="mb-6">
    <input type="text" class="form-control block w-75 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" v-model="email"/>    
            <span class="text-red-500">{{email_error}}</span>
          </div>
          <div class="mb-6">
            <input type="password" class="form-control block w-75 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" v-model="pass"/>
            <span class="text-red-500">{{pass_error}}</span>
          </div>
    <div>
    <button v-if="change_form" type="submit" class="inline-block   px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out " data-mdb-ripple="true" data-mdb-ripple-color="light" style="width:100%">
      Log in
    </button>
    <button type="submit" class="inline-block   px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out " data-mdb-ripple="true" data-mdb-ripple-color="light" style="width:100%" v-else>Sign up</button>
        </div>
        <div class="mt-2">
          <span v-if="change_form" @click="changeForm"  class="text-cyan-500 hover:underline select-none">Not registered? Sign up for free</span>  
          <span v-else @click="changeForm" class="text-cyan-500 hover:underline select-none">Already registered? Log in</span>
        </div>
    </form>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { required,MinLen, MailCheck } from '~~/validators/list';

const db = useFetchUser()
const change_form:Ref<boolean> = ref(false)
const username = useState<string>('nick',()=>"")
const email = useState<string>('value',()=>'');
const emailIsValid:Ref<boolean> = useState<boolean>('isValid',() => false);
const email_error:Ref<string> = useState<string>('error',()=>'')
const pass = useState<string>('valuePass',()=>'');
const passIsValid:Ref<boolean> = useState<boolean>('isValidPass',() => false);
const pass_error:Ref<string> = useState<string>('errorPass',()=>'')

function buttonValidate(email,pass,username=null){
  if(!emailIsValid.value  || !passIsValid.value ){
    return 
  } else{
  return change_form.value ?  db.logIn(email,pass) :  db.signUp(email,pass,username)
}}

function changeForm(){
  change_form.value = !change_form.value;
}
watch(email,()=>{
    const {field,valid,err_msg} = useValue(email,[MailCheck,required])
    emailIsValid.value = valid.value
    email_error.value = err_msg.value
})
watch(pass,()=>{
    const {field,valid,err_msg} = useValue(pass,[MinLen,required])
    passIsValid.value = valid.value
    pass_error.value = err_msg.value 
})
</script>
