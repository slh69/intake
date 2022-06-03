<template>

  <div class="space-y-8 border-4 mt-10 mr-60 ml-60 rounded-lg">

    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Settings</h3>
    </div>



    <div class="grid  gap-4 place-content-center pb-20">

      <SwitchGroup as="div" class="flex items-center">
        <Switch v-model="fspecific"
          :class="[fspecific ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[fspecific ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Female Specific </span>
        </SwitchLabel>
      </SwitchGroup>

      <SwitchGroup as="div" class="flex items-center">
        <Switch v-model="mspecific"
          :class="[mspecific ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[mspecific ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Male Specific </span>
        </SwitchLabel>
      </SwitchGroup>

      <SwitchGroup as="div" class="flex items-center">
        <Switch v-model="mhxAdult"
          :class="[mhxAdult ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[mhxAdult ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Medical History Adult</span>
        </SwitchLabel>
      </SwitchGroup>

      <SwitchGroup as="div" class="flex items-center">
        <Switch v-model="mhxChild"
          :class="[mhxChild ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[mhxChild ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Medical History Child </span>
        </SwitchLabel>
      </SwitchGroup>

      <SwitchGroup as="div" class="flex items-center">
        <Switch v-model="mhxFamily"
          :class="[mhxFamily ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[mhxFamily ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Medical History Family </span>
        </SwitchLabel>
      </SwitchGroup>

      <SwitchGroup as="div" class="flex items-center">
        <Switch v-model="reasonVisit"
          :class="[reasonVisit ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[reasonVisit ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Reason For Visit </span>
        </SwitchLabel>
      </SwitchGroup>

      <SwitchGroup as="div" class="flex items-center">
        <Switch v-model="sports"
          :class="[sports ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[sports ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Sports Injury</span>
        </SwitchLabel>
      </SwitchGroup>

      <SwitchGroup as="div" class="flex items-center">
        <Switch v-model="accident"
          :class="[accident ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[accident ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Accident </span>
        </SwitchLabel>
      </SwitchGroup>

      <SwitchGroup as="div" class="flex items-center">
        <Switch v-model="workComp"
          :class="[workComp ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[workComp ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Workman's Comp </span>
        </SwitchLabel>
      </SwitchGroup>

      <div class="grid place-items-center mt-10">
        <FormKit type="button" label="Close" @click="data.settings = !data.settings" />
      </div>
    </div>




  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import { useFormStore } from "../stores/formStore.js";

const data = useFormStore();


const fspecific = ref(false)
const mspecific = ref(false)
const mhxAdult = ref(false)
const mhxChild = ref(false)
const mhxFamily = ref(false)
const reasonVisit = ref(false)
const sports = ref(false)
const accident = ref(false)
const workComp = ref(false)
</script>