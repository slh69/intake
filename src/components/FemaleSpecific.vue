<template>
  <div class="space-y-8 border-4 m-4 rounded-lg">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Female Specific</h3>
    </div>
    <div class="p-10">
      <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
        <div class="sm:col-span-2">
          <FormKit
            v-model="menstrual"
            type="checkbox"
            label="Do you have menstrual issues?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="pregnant"
            type="checkbox"
            label="Are you pregnant now or trying to become pregnant?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-1">
          <FormKit v-model="noPregnancies" label="# of pregnancies?" type="text" />
        </div>

        <div class="sm:col-span-1">
          <FormKit v-model="noBirths" label="# of births?" type="text" />
        </div>

        <div class="sm:col-span-5">
          <FormKit
            v-model="infoPregnancies"
            label="Explain any information regarding difficulty with pregnancies or births"
            type="textarea"
          />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="vaginal"
            type="checkbox"
            label="Are you experiencing vaginal pain or infections?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="breastPain"
            type="checkbox"
            label="Are you experiencing breast pain or lumps?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-6">
          <FormKit
            v-model="femaleMoreInfo"
            label="Explain any yes answers or add any other female related issues you may be experiencing"
            type="textarea"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FemaleSpecific",

  data() {
    return {
      menstrual: "",
      pregnant: "",
      noPregnancies: "",
      noBirths: "",
      infoPregnancies: "",
      vaginal: "",
      breastPain: "",
      femaleMoreInfo: "",
      yesNo: [
        { label: "Yes", value: 1 },
        { label: "No", value: 0 },
      ],
    };
  },
};
</script>
