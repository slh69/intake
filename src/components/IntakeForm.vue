<template>
  <FormKit
    type="form"
    v-model="formData"
    :form-class="submitted ? 'hide' : 'show'"
    submit-label="Submit"
    @submit="submitHandler"
    >
  
        
      <GeneralInformation   />
      <GeneralInfoAdult v-show="data.calculateAge > 17" />
      <GeneralInfoChild v-show="data.calculateAge < 17" />
      <Guardian v-show="data.calculateAge < 17" />
      <FemaleSpecific v-show="data.gender.includes('Female')" />
      <MaleSpecific  v-show="data.gender.includes('Male') "/>
      <MedicalHxAdult  v-show="data.calculateAge > 17 "/>
      <MedicalHxChild  v-show="data.calculateAge < 17" />
      <MedicalHxFamily />
      <ReasonForVisit  />
      <Sports v-show="data.reasonForVisit.includes('si') " />
      <WorkComp v-show="data.reasonForVisit.includes('wc') " />
      <Accident v-show="data.reasonForVisit.includes('aa') " />
  </Formkit>      
 <div v-if="submitted">
    <h2>Submission successful!</h2>
  </div>
    <pre>{{ formData }}</pre>

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
  import { differenceInYears, parseISO } from 'date-fns'
  import { useFormStore} from '../stores/formStore.js'
import { ref } from 'vue'
const submitted = ref(false)
const formData = ref({})
  
  const data = useFormStore()
  
  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(formData)}

</script>
