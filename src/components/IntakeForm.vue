<template>
  <FormKit
    type="form"
    id="intake"
    @submit="submitHandler"
  >


    <GeneralInformation />
    <GeneralInfoAdult v-show="data.calculateAge > 17 && data.genInfoAdult === true" />
    <GeneralInfoChild v-show="data.calculateAge < 17 && data.genInfoChild === true" />
    <Guardian v-show="data.calculateAge < 17 && data.guardian === true" />
    <FemaleSpecific v-show="showFemaleForm" />
    <MaleSpecific v-show="showMaleForm" />
    <MedicalHxAdult v-show="data.calculateAge > 17 && data.mhxAdult === true" />
    <MedicalHxChild v-show="data.calculateAge < 17 && data.mhxChild === true" />
    <MedicalHxFamily v-show="data.mhxFamily === true" />
    <ReasonForVisit v-show="data.reasonVisit === true" />
    <Sports v-show="data.reasonForVisit.includes('si') && data.reasonVisit === true" />
    <WorkComp v-show="data.reasonForVisit.includes('wc') && data.reasonVisit === true" />
    <Accident v-show="data.reasonForVisit.includes('aa') && data.reasonVisit === true" />

  </Formkit>

  

</template>


<script setup>

import Guardian from './Guardian.vue'
import GeneralInformation from './GeneralInformation.vue'
import GeneralInfoAdult from './GeneralInfoAdult.vue'
import GeneralInfoChild from './GeneralInfoChild.vue'
import FemaleSpecific from './FemaleSpecific.vue'
import MaleSpecific from './MaleSpecific.vue'
import MedicalHxAdult from './MedicalHxAdult.vue'
import MedicalHxChild from './MedicalHxChild.vue'
import MedicalHxFamily from './MedicalHxFamily.vue'
import ReasonForVisit from './ReasonForVisit.vue'
import Sports from './Sports.vue'
import WorkComp from './WorkComp.vue'
import Accident from './Accident.vue'
import { useFormStore } from '../stores/formStore.js'
import {computed } from 'vue'
import { reset } from '@formkit/core'

const data = useFormStore()


const submitHandler = () => {
  console.log(data.formData)
    alert('form submitted successfully')
      }


const showMaleForm = computed(() => 
  data.mspecific === true && 
  data.gender.includes('Male') && 
  data.calculateAge > 17)

const showFemaleForm = computed(() => 
  data.fspecific === true && 
  data.gender.includes('Female') && 
  data.calculateAge > 17)  


</script>
