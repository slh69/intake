<template>
  <FormKit
    type="form"
    #default="{ value }"
    @submit="submitForm">
  
        
      <GeneralInformation   />
      <GeneralInfoAdult v-show="data.calculateAge > 17" />
      <GeneralInfoChild v-show="data.calculateAge < 17" />
      <FemaleSpecific v-show="data.gender.includes('fmale')" />
      <MaleSpecific  v-show="data.gender.includes('male') && data.age > 17 "/>
      <MedicalHxAdult  v-show="data.calculateAge > 17 "/>
      <MedicalHxChild  v-show="data.calculateAge < 17" />
      <MedicalHxFamily />
      <ReasonForVisit  />
      <Sports v-show="data.reasonForVisit.includes('si') " />
      <WorkComp v-show="data.reasonForVisit.includes('wc') " />
      <Accident v-show="data.reasonForVisit.includes('aa') " />
  </Formkit>      

    <pre>{{ value }}</pre>

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

  
  const data = useFormStore()
  
  
   
</script>
