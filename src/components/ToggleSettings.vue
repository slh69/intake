<template>

  <div class="space-y-8 border-4 rounded-lg sm:m-1 px-2 lg:m-4 ">

    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 pb-6 font-bold text-cyan-500">Settings</h3>
         </div>


    <div class="md:grid-cols-3 lg:grid grid-cols-12 ">
      <SwitchGroup as="div" class="flex lg:col-start-6 col-span-2">
        <Switch v-model="data.genInfoAdult"
          :class="[data.genInfoAdult ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[data.genInfoAdult ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">General Info Adult 
          </span>
        </SwitchLabel>
      </SwitchGroup>
      <div class="pt-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @mouseover="gahover = true" @mouseleave="gahover = false">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div class="lg:col-span-4 pr-4">
        <p v-if="gahover">Data collection includes occupation, marital status, emergency contact, lifestyle questions.  Activates when user enters age greater than 17 years old</p>
      </div>
    </div>

    <div class="lg:grid grid-cols-12">
      <SwitchGroup as="div" class="col-start-6 col-span-2 flex">
        <Switch v-model="data.genInfoChild"
          :class="[data.genInfoChild ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[data.genInfoChild ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">General Info Child
          </span>
        </SwitchLabel>
      </SwitchGroup>
      <div class="pt-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @mouseover="gchover = true" @mouseleave="gchover = false">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div class="col-span-4 pr-4">
        <p v-if="gchover">Data collection includes pediatrician, vaccine hx, hospitalizations, birth complications, current meds, adoption info.  Activates when user enters age as less than 17 years old</p>
      </div>
    </div>
    
    <div class="lg:grid grid-cols-12">
      <SwitchGroup as="div" class="col-start-6 col-span-2 flex">
        <Switch v-model="data.guardian"
          :class="[data.guardian ? 'bg-cyan-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-bg-cyan-500']">
          <span aria-hidden="true"
            :class="[data.guardian ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
        <SwitchLabel as="span" class="ml-3">
          <span class="text-sm font-medium text-gray-900">Guardian
          </span>
        </SwitchLabel>
      </SwitchGroup>
      <div class="pt-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @mouseover="guahover = true" @mouseleave="guahover = false">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div class="col-span-4 pr-4">
        <p v-if="guahover">Data collection includes Guardians contact information.  Activates when user enters age less than 17 years old</p>
      </div>
    </div>    


    <div class="lg:grid grid-cols-12">
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
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @mouseover="fshover = true" @mouseleave="fshover = false">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div class="col-span-4 pr-4">
        <p v-if="fshover">Female Specific information related to pregnancy and other female issues.  Activates when a user selects gender as Female and age is greater than 17 years old</p>
      </div>
    </div>

    <div class="lg:grid grid-cols-12">
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
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @mouseover="mshover = true" @mouseleave="mshover = false">
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div >
            <div class="col-span-4 pr-4">
        <p v-if="mshover">Male specific information related to prostate and sexual issues.  Activates when user selects gender as Male and age is greater than 17 years old.</p>
      </div>
    </div>

    <div class="lg:grid grid-cols-12">
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
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @mouseover="mhahover = true" @mouseleave="mhahover = false" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div>
            <div class="col-span-4 pr-4">
        <p v-if="mhahover">Checkbox collection of health related issues for adults.  Activates if user inputs age greater than 17 years old.</p>
      </div>
    </div>

    <div class="lg:grid grid-cols-12">
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
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @mouseover="mhchover = true" @mouseleave="mhchover = false">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div class="col-span-4 pr-4">
        <p v-if="mhchover">Checkbox collection of health related issues for children.  Activates if user inputs age less than 17 years old.</p>
      </div>
    </div>    

    <div class="lg:grid grid-cols-12">
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
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @mouseover="mhfhover = true" @mouseleave="mhfhover = false" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div >
            <div class="col-span-4 pr-4">
        <p v-if="mhfhover">Checkbox collection of health related issues for family. Activates if only if this toggle is on.</p>
      </div>
    </div>    

    <div class="lg:grid grid-cols-12">
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
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @mouseover="rfvhover = true" @mouseleave="rfvhover = false" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div >
            <div class="col-span-4 pr-4">
        <p v-if="rfvhover">Data collection includes checkboxes for reason for visit - Wellness check, Sport's Enhancement, Sport's Injury, Workman's Comp, Auto Accident, Pregnancy.  Activates only if toggle is on.</p>
      </div>
    </div>     
    
    <div class="lg:grid grid-cols-12">
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
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @mouseover="sportshover = true" @mouseleave="sportshover = false" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div >
            <div class="col-span-4 pr-4">
        <p v-if="sportshover">Data collection of questions related to Sport's Injury.  Reason For Visit toggle must be on.  Form activates when Sport's Injury checkbox is checked.</p>
      </div>
    </div>    
    
    <div class="lg:grid grid-cols-12">
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
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @mouseover="acchover = true" @mouseleave="acchover = false" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div >
            <div class="col-span-4 pr-4">
        <p v-if="acchover">Data collection of questions related to Auto Accident Injury.  Reason For Visit toggle must be on.  Form activates when Auto Accident checkbox is checked.</p>
      </div>
    </div>     

    <div class="lg:grid grid-cols-12">
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
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @mouseover="wchover = true" @mouseleave="wchover = false" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div >
            <div class="col-span-4 pr-4">
        <p v-if="wchover">Data collection of questions related to Workman's Comp Injury.  Reason For Visit toggle must be on.  Form activates when Workman's Comp checkbox is checked.</p>
      </div>
    </div>      

    <div class="lg:grid grid-cols-12">
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
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor" @mouseover="rehover = true" @mouseleave="rehover = false" >
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" />
      </svg>
      </div >
            <div class="col-span-4 pr-4">
        <p v-if="rehover">Changes the General Information form to require an email address in order for the form to submit. </p>
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
const gahover = ref(false)
const gchover = ref(false)
const guahover = ref(false)
const fshover = ref(false)
const mshover = ref(false)
const mhahover = ref(false)
const mhchover = ref(false)
const mhfhover = ref(false)
const rfvhover = ref(false)
const sportshover = ref(false)
const acchover = ref(false)
const wchover = ref(false)
const rehover = ref(false)
</script>