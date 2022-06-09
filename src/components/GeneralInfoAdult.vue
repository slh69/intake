<template>
  <div class="space-y-8 border-4 m-4 rounded-lg">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">General Information Adult</h3>
    </div>
    <FormKit type="group" v-model="GenInfoAdult" name="General Info Adult">
      <div class="p-10">
        <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
          <div class="sm:col-span-3">
            <FormKit v-model="occupation" type="text" label="Occupation" name="Occupation" />
          </div>

          <div class="sm:col-span-3">
            <FormKit v-model="maritalStatus" type="radio" label="Marital Status" name="Marital Status"
              :options="['Single', 'Married', 'Divorced', 'Widow Widower']" />
          </div>

          <div class="sm:col-span-2">
            <FormKit v-model="spouse" type="text" label="Spouse Name" name="Spouse Name" />
          </div>

          <div class="sm:col-span-4">
            <FormKit v-model="emergency" type="text" label="Emergency Contact" name="Emergency Contact"
              wrapper-class="static" />
            <div>
              <FormKit v-model="spouseEmergency" type="checkbox" label="Spouse is emergency contact"
                name="Spouse Emergency Contact" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <FormKit v-model="handedness" type="radio" label="Handedness" name="Handedness"
              :options="['Right', 'Left', 'Ambidextrous']" />
          </div>

          <div class="sm:col-span-1">
            <FormKit v-model="height" type="text" label="Height" name="Height" />
          </div>

          <div class="sm:col-span-1">
            <FormKit v-model="weight" type="text" label="Weight" name="Weight" />
          </div>

          <div class="sm:col-span-4">
            <FormKit v-model="interests" type="textarea" label="Interests and Hobbies" name="Interests" />
          </div>

          <div class="sm:col-span-4">
            <FormKit v-model="exercise" type="textarea" label="What kind of excercise do you do" name="Excercise"
              placeholder="Describe your excercise routine" />
          </div>

          <div class="sm:col-span-4">
            <FormKit v-model="diet" type="textarea" label="What does your diet look like?" name="Diet"
              placeholder="Describe your diet" />
          </div>

          <div class="sm:col-span-2">
            <FormKit v-model="drinkLiquid" type="text" label="How much liquid do you drink a day?"
              name="Fluid Intake" />
          </div>
          <div class="sm:col-span-2">
            <FormKit v-model="ecoFriendly" type="radio" label="Do you use green or eco friendly products?"
              name="Green Products" :options="['Yes', 'No']" />
          </div>

          <div class="sm:col-span-3">
            <FormKit v-model="medications" type="textarea"
              label="List any medications / Vitamins / Supplements that you take" name="Medication List" />
          </div>

          <div class="sm:col-span-3">
            <FormKit v-model="drugUse" type="checkbox" label="Do you use any of the following? Check all that apply."
              name="Drug Use" :options="['Caffeine', 'Nicotine', 'Alcohol', 'Recreational Drugs']" />
          </div>

          <div class="sm:col-span-3">
            <FormKit v-model="explainDrugUse" type="textarea" label="Please explain drug/alcohol use"
              name="Explain Drug Use" />
          </div>

          <div class="sm:col-span-3">
            <FormKit v-model="previousInjury" type="textarea"
              label="List any previous injuries, hospitalizations, accidents, surgeries"
              name="List Previous Injuries" />
          </div>
        </div>
      </div>
    </FormKit>
  </div>
</template>

<script>
export default {
  name: "GeneralInfoAdult",

  data() {
    return {
      occupation: "",
      maritalStatus: "",
      spouse: "",
      emergency: "",
      spouseEmergency: "",
      handedness: "",
      height: "",
      weight: "",
      interests: "",
      exercise: "",
      diet: "",
      drinkLiquid: "",
      ecoFriendly: "",
      medications: "",
      drugUse: "",
      explainDrugUse: "",
      previousInjury: "",
      GenInfoAdult: ''
    };
  },
};
</script>
