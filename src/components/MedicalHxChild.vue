<template>
  <div class="space-y-8 border-4 m-4 rounded-lg">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">
        Past Medical History Child/Infant
      </h3>
    </div>
    <FormKit type="group" v-model="MedHxChildForm" name="Medical Hx Child">
      <div class="p-10">
        <div class="sm:col-span-3">
          <FormKit 
            v-model="childMedHx" 
            type="checkbox" 
            label="Choose all that apply" 
            name="Medical Hx Child"
            :options="[
              'No know health issues',
              'Allergies',
              'Asthma',
              'Bed Wetting',
              'Bladder Issues',
              'Chicken Pox',
              'Colic',
              'Constipation',
              'Depression/Anxiety',
              'Diarrhea',
              'Fall from bicycle',
              'Fall from playground equip',
              'Fall from tree',
              'Frequent Colds',
              'Hyperactivity/Autism',
              'Learning Difficulties',
              'Measles',
              'Reaction to Vaccines',
              'Sleeping Disorders',
              'Scoliosis',
              'Sports Injury',
              'Tonsilitis',
              'Upper Respiratory Infection',
              'Whooping Cough',
              'Other',
          ]" 
          options-class="$reset flex-wrap gap-4 grid gap-x-4 gap-y-2 grid-cols-8" />

          <FormKit 
            type="textarea" 
            label="Please give details for anything that requires more explanation"
            name="Explain Med Hx Child" 
            v-model="ExplainMedHxChild"
            />
        </div>
      </div>
    </FormKit>
  </div>
</template>

<script>
export default {
  name: "MedicalHxChild",

  data() {
    return {
      childMedHx: [],
      ExplainMedHxChild: '',
      MedHxChildForm: '',
    };
  },
};
</script>
