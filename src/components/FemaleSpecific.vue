<template>
  <div class="space-y-8 border-4 rounded-lg sm:m-1 px-2 lg:m-4 ">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Female Specific</h3>
    </div>
    <div >
      <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-12  ">

        <FormKit type="group" v-model="FemaleSpecific" name="Female Specific">
          <div class="md:col-span-2 lg:col-span-2">
            <FormKit v-model="menstrual" type="checkbox" label="Do you have menstrual issues?" name="Menstrual Issues"
              :options="['Yes', 'No']" />
          </div>

          <div class="md:col-span-2 lg:col-span-3">
            <FormKit v-model="pregnant" type="checkbox" label="Are you pregnant now or trying to become pregnant?"
              name="Pregnant" :options="['Yes', 'No']" />
          </div>

          <div class="lg:col-span-1">
            <FormKit v-model="noPregnancies" label="# of pregnancies?" type="text" name="No. Pregnancies" />
          </div>

          <div class="lg:col-span-1">
            <FormKit v-model="noBirths" label="# of births?" type="text" name="No. Births" />
          </div>

          <div class="md:col-span-4 lg:col-span-5">
            <FormKit v-model="infoPregnancies"
              label="Explain any information regarding difficulty with pregnancies or births" type="textarea"
              name="Pregnancy Info" />
          </div>

          <div class="md:col-span-2 lg:col-span-3">
            <FormKit v-model="vaginal" type="checkbox" label="Are you experiencing vaginal pain or infections?"
              name="Vaginal Pain" :options="['Yes', 'No']" />
          </div>

          <div class="md:col-span-2 lg:col-span-3">
            <FormKit v-model="breastPain" type="checkbox" label="Are you experiencing breast pain or lumps?"
              name="Breast Pain" :options="['Yes', 'No']" />
          </div>

          <div class="md:col-span-4 lg:col-span-6">
            <FormKit v-model="femaleMoreInfo"
              label="Explain any yes answers or add any other female related issues you may be experiencing"
              type="textarea" name="Female More Info" />
          </div>
        </FormKit>
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
      FemaleSpecific: ''
    };
  },
};
</script>
