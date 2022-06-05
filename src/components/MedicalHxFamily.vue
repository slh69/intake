<template>
  <div class="space-y-8 border-4 m-4 rounded-lg">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Family Past Medical History</h3>
    </div>
    <div class="p-10 ">
      <FormKit
        v-model="familyMedHx"
        type="checkbox"
        label="Choose all that apply"
        :options="[
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
          'Heart Diseast',
          'Hypertension/High BP',
          'Liver Disease',
          'Measles',
          'Mental Disorders',
          'MS',
          'Mumps',
          'Neurological Conditions',
          'Osteoporosis',
          'Pleurisy',
          'Polio',
          'Psoriasis/Eczema',
          'Pulmonary Embolism',
          'Rheumatic Fever',
          'Scoliosis',
          'Small Pox',
          'Stroke',
          'Thyroid Disorder',
          'TIA',
          'Tuberculosis',
          'Whooping Cough',
          'Other',
        ]"
        options-class="$reset flex-wrap gap-4 grid gap-x-4 gap-y-2 grid-cols-8"
      />

      <FormKit
        type="textarea"
        label="Please give details for anything that requires more explanation"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MedicalHxFamily",

  data() {
    return {
      familyMedHx: [],
    };
  },
};
</script>
