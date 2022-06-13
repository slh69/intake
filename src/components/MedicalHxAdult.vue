<template>
  <div class="space-y-8 border-4 rounded-lg sm:m-1 px-2 lg:m-4 ">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Past Medical History Adult</h3>
    </div>
    <FormKit type="group" v-model="MedHxAdultForm" name="Medical Hx Adult">
      <div>
        <FormKit 
          v-model="adultMedHx" 
          type="checkbox" 
          label="Choose all that apply"
          name="Medical Hx Adult" 
          :options="[
          'No known Medical Issues',
          'Anemia',
          'Anxiety',
          'Arthritis',
          'Back Problems',
          'Blood Clots',
          'Cancer',
          'Chicken Pox',
          'Depression',
          'Diabetes',
          'Epilepsy',
          'Heart Disease',
          'Hypertension / High BP',
          'Liver Disease',
          'Measles',
          'Mental Disorders',
          'Multiple Sclorisis',
          'Mumps',
          'Neurologic Disease',
          'Osteoporosis',
          'Pleurisy',
          'Polio',
          'Psoriasis/Eczema',
          'Pulmonary Embolism',
          'Rhumatic Fever',
          'Scoliosis',
          'Small Pox',
          'Stroke',
          'Thyroid Disease',
          'Thyroid Disorder',
          'TIA',
          'Tuberculosis',
          'Whooping Cough',
          'Other',
        ]" 
          options-class="$reset sm:flex-wrap gap-4 grid gap-x-4 gap-y-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-8" />

        <FormKit 
          type="textarea" 
          label="Please give details for anything that requires more explanation"
          name="Explain Med Hx Adult"
          v-model="ExplainMedHxAdult"
        />
      </div>
    </FormKit>
  </div>
</template>

<script>
export default {
  name: "MedicalHxAdult",

  data() {
    return {
      adultMedHx: [],
      ExplainMedHxAdult: '',
      MedHxAdultForm:''
    };
  },
};
</script>
