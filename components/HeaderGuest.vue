<template>
  <nav class="border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
    <div class="container flex flex-wrap   justify-between items-center mx-auto">  
      <div v-if="isSvg" class="p-3">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" @click="setAll()"><g><path d="M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z" fill="#ffffff" data-original="#000000" /></g></svg>
      </div>
      <div v-else class="p-3">          
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24" @click="setAll()"><path d="M18.92,13a6.966,6.966,0,0,1-.43,1.612l4.385,2.553-1,1.729-4.388-2.555a6.994,6.994,0,0,1-1.122,1.127l2.558,4.4L17.19,22.871,14.637,18.48A6.914,6.914,0,0,1,13,18.92V24H11V18.92a6.89,6.89,0,0,1-1.623-.435l-2.55,4.386L5.1,21.865l2.553-4.39a7,7,0,0,1-1.128-1.129L2.147,18.894,1.141,17.165l4.372-2.546A6.952,6.952,0,0,1,5.08,13H0V11H5.08a6.972,6.972,0,0,1,.436-1.627L1.134,6.822,2.14,5.094,6.527,7.648a7.028,7.028,0,0,1,1.147-1.14L5.126,2.127,6.854,1.121,9.4,5.505A6.914,6.914,0,0,1,11,5.08V0h2V5.08a6.95,6.95,0,0,1,1.61.43l2.552-4.389L18.89,2.127l-2.552,4.39a7.087,7.087,0,0,1,1.14,1.137l4.4-2.56,1.006,1.728-4.4,2.559A6.952,6.952,0,0,1,18.92,11H24v2Z" /></svg>
      </div>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" @click="()=>{phone = !phone}">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
      </button>
      <div id="navbar-default" class=" w-full md:block md:w-auto " :class="phone ? '' : 'hidden' ">
        <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
          <li v-for="link in publicList" :key="link.id" :class="link.path === route.path ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' : 'block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'">
            <NuxtLink :to="link.path">
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div> 
  </nav>
</template>

<script setup>
import {publicList} from "../utils/routes"
import {useDark, useToggle} from '@vueuse/core'
const isSvg= ref(true)
const phone = ref(false)
const isDark = useDark()
const toggleDark = useToggle(isDark)
const route = useRoute()
 function setAll(){
   toggleDark();
   isSvg.value = !isSvg.value;
   localStorage.setItem('bg',`${isSvg.value}`)
 }
 onMounted(()=>{
   isSvg.value = localStorage.getItem('bg') === 'true' ? true : false
 })
</script>

<style>

</style>