<template>

  <div class="space-y-8 border-4 mt-10 mr-80 ml-80 rounded-lg">

    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 pb-6 font-bold text-cyan-500">Settings</h3>
      <div>
      <p class="flex">Click on the 
        <span class="px-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @click="showFemale = !showFemale">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd" />
        </svg>
        </span>
        for more information regarding each toggle.</p>
        </div>
    </div>



    <div class="grid grid-cols-12">
      <SwitchGroup as="div" class="col-start-6 col-span-2 flex">
        <Switch v-model="data.fspecific"
          :class="[data.fspecific ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[data.fspecific ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Female Specific
          </span>
        </SwitchLabel>
      </SwitchGroup>
      <div class="pt-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @click="showFemale = !showFemale">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div class="col-span-4">
        <p v-if="showFemale">This is FEMALE specific info Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est aperiam asperiores! Iste magnam repellat sapiente harum. Explicabo, magnam. Praesentium.</p>
      </div>
    </div>

    <div class="grid grid-cols-12 ">
      <SwitchGroup as="div" class="col-start-6 col-span-2 flex">
        <Switch v-model="data.mspecific"
          :class="[data.mspecific ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[data.mspecific ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Male Specific
          </span>
        </SwitchLabel>
      </SwitchGroup>
      <div class="pt-1">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @click="showMale = !showMale" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div >
            <div class="col-span-4">
        <p v-if="showMale">This is MALE specific info Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere repudiandae qui, sunt eaque eum!</p>
      </div>
    </div>

    <div class="grid grid-cols-12 ">
      <SwitchGroup as="div" class="col-start-6 col-span-2 flex">
        <Switch v-model="data.mhxAdult"
          :class="[data.mhxAdult ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[data.mhxAdult ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Medical History Adult
          </span>
        </SwitchLabel>
      </SwitchGroup>
      <div class="pt-1">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @click="showmhxAdult = !showmhxAdult" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div>
            <div class="col-span-4">
        <p v-if="showmhxAdult">This is Medical History Adult specific info</p>
      </div>
    </div>

    <div class="grid grid-cols-12">
      <SwitchGroup as="div" class="col-start-6 col-span-2 flex">
        <Switch v-model="data.mhxChild"
          :class="[data.mhxChild ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[data.mhxChild ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Medical History Child
          </span>
        </SwitchLabel>
      </SwitchGroup>
      <div class="pt-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @click="showmhxChild = !showmhxChild">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div class="col-span-4">
        <p v-if="showmhxChild">This is Medical Hx Child specific info Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est aperiam asperiores! Iste magnam repellat sapiente harum. Explicabo, magnam. Praesentium.</p>
      </div>
    </div>    

    <div class="grid grid-cols-12 ">
      <SwitchGroup as="div" class="col-start-6 col-span-2 flex">
        <Switch v-model="data.mhxFamily"
          :class="[data.mhxFamily ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[data.mhxFamily ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Medical History Family
          </span>
        </SwitchLabel>
      </SwitchGroup>
      <div class="pt-1">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @click="showMhxFamily = !showMhxFamily" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div >
            <div class="col-span-4">
        <p v-if="showMhxFamily">This is Medical Hx Family specific info Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere repudiandae qui, sunt eaque eum!</p>
      </div>
    </div>    

    <div class="grid grid-cols-12 ">
      <SwitchGroup as="div" class="col-start-6 col-span-2 flex">
        <Switch v-model="data.reasonVisit"
          :class="[data.reasonVisit ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[data.reasonVisit ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Reason For Visit
          </span>
        </SwitchLabel>
      </SwitchGroup>
      <div class="pt-1">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @click="showreasonVisit = !showreasonVisit" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div >
            <div class="col-span-4">
        <p v-if="showreasonVisit">This is Reason For Visit specific info Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere repudiandae qui, sunt eaque eum!</p>
      </div>
    </div>     
    
    <div class="grid grid-cols-12 ">
      <SwitchGroup as="div" class="col-start-6 col-span-2 flex">
        <Switch v-model="data.sports"
          :class="[data.sports ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[data.sports ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Sports Injury
          </span>
        </SwitchLabel>
      </SwitchGroup>
      <div class="pt-1">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @click="showsports = !showsports" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div >
            <div class="col-span-4">
        <p v-if="showsports">This is Sports Injury specific info Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere repudiandae qui, sunt eaque eum!</p>
      </div>
    </div>    
    
    <div class="grid grid-cols-12 ">
      <SwitchGroup as="div" class="col-start-6 col-span-2 flex">
        <Switch v-model="data.accident"
          :class="[data.accident ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[data.accident ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Accident
          </span>
        </SwitchLabel>
      </SwitchGroup>
      <div class="pt-1">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @click="showaccident = !showaccident" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div >
            <div class="col-span-4">
        <p v-if="showaccident">This is Accident specific info Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere repudiandae qui, sunt eaque eum!</p>
      </div>
    </div>     

    <div class="grid grid-cols-12 ">
      <SwitchGroup as="div" class="col-start-6 col-span-2 flex">
        <Switch v-model="data.workComp"
          :class="[data.workComp ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[data.workComp ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Workman's Comp
          </span>
        </SwitchLabel>
      </SwitchGroup>
      <div class="pt-1">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @click="showworkComp = !showworkComp" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div >
            <div class="col-span-4">
        <p v-if="showworkComp">This is Workman's Comp specific info Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere repudiandae qui, sunt eaque eum!</p>
      </div>
    </div>      

    <div class="grid grid-cols-12 ">
      <SwitchGroup as="div" class="col-start-6 col-span-2 flex">
        <Switch v-model="data.requireEmail"
          :class="[data.requireEmail ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[data.requireEmail ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Require Email
          </span>
        </SwitchLabel>
      </SwitchGroup>
      <div class="pt-1">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @click="showrequireEmail = !showrequireEmail" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div >
            <div class="col-span-4">
        <p v-if="showrequireEmail">This is Require Email specific info </p>
      </div>
    </div>        
    


    <div class="flex justify-center gap-20">
      <FormKit type="button" label="Close" @click="data.settings = !data.settings" />
      <FormKit type="button" label="Save" />
    </div>

  </div>





</template>

<script setup>
import { ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import { useFormStore } from "../stores/formStore.js";

const data = useFormStore();


// settings to show what form is about if i is clicked
const showFemale = ref(false)
const showMale = ref(false)
const showmhxAdult = ref(false)
const showmhxChild = ref(false)
const showMhxFamily = ref(false)
const showreasonVisit = ref(false)
const showsports = ref(false)
const showaccident = ref(false)
const showworkComp = ref(false)
const showrequireEmail = ref(false)
</script>