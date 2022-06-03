<template>


   <IntakeForm v-if="!data.settings"/>
   <Settings v-if="data.settings"/>

</template>


<script setup>
import IntakeForm from './components/IntakeForm.vue'
import Settings from './components/Settings.vue'
import { useFormStore } from "./stores/formStore";

const data = useFormStore();


  
  
   
</script>
