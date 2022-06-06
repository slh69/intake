<template>


   <IntakeForm v-if="!data.settings"/>
   <ToggleSettings v-if="data.settings"/>

</template>


<script setup>
import IntakeForm from './components/IntakeForm.vue'
import ToggleSettings from './components/ToggleSettings.vue'
import { useFormStore } from "./stores/formStore";

const data = useFormStore();


  
  
   
</script>
