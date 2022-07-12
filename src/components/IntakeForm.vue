<template>
  <FormKit
    type="form"
    v-model="data.formData"
    :form-class="submitted ? 'hide' : 'show'"
    submit-label="Submit"
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
    <Sports v-show="data.reasonForVisit.includes('Sports Enhancement / Injury') && data.reasonVisit === true" />
    <WorkComp v-show="data.reasonForVisit.includes('Work Comp') && data.reasonVisit === true" />
    <Accident v-show="data.reasonForVisit.includes('Accident') && data.reasonVisit === true" />
    <HIPAA v-show="data.hipaaRequire === true"/>

  </Formkit>
<pre wrap>{{ data.formData }}</pre>

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
import axios from 'axios'
import HIPAA from './HIPAA.vue'


const data = useFormStore()


const submitHandler = () => {

    axios({
      method: 'post',
      url: "http://localhost:3004/formData",
      data: data.formData
    })
    .then( ()=> {
      alert('Form submitted successfully')
    })
    .catch( error => {
      console.log(error)
    })
    .finally( ()=> {
      console.log('done')
    })
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
