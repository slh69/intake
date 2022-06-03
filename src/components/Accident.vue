<template>
  <div class="space-y-8 border-4 m-4 rounded-lg">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Accident Details</h3>
    </div>
    <div class="p-10">
      <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
        <div class="sm:col-span-2">
          <FormKit v-model="accidentDate" type="date" label="Date of Accident" />
        </div>

        <div class="sm:col-span-2">
          <FormKit v-model="positionInVehicle" type="text" label="Position in vehicle?" />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="describeAccident"
            type="textarea"
            label="Describe the accident?"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="accidentSurgery"
            type="radio"
            label="Have you had surgery for this injury?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="advisedSurgery"
            type="radio"
            label="Have you been advised to have surgery?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="accidentSpecialist"
            type="radio"
            label="Have you seen a specialist?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="accidentHospitalized"
            type="radio"
            label="Were you hospitalized?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentFormerCare"
            type="radio"
            label="Have you had physical therapy / chiropractic care for this injury?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit v-model="accidentWithWhom" type="text" label="With whom?" />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentDiagnosis"
            type="textarea"
            label="What was the diagnosis?"
          />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="accidentMedication"
            type="checkbox"
            label="Are you taking medication for this injury?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-5">
          <FormKit
            v-model="accidentMedList"
            type="textarea"
            label="Please list medications?"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentTests"
            type="checkbox"
            label="What tests have you had for this injury?"
            :options="[
              'MRI',
              'CT Scan',
              'Bone Scan',
              'X-Ray',
              'EMG',
              'EEG',
              'NCV',
              'Bone Density Scan',
              'Other',
            ]"
            options-class="$reset flex-wrap grid gap-x-3 gap-y-2 grid-cols-5"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentFindings"
            type="textarea"
            label="What were the findings?"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentHasHelped"
            type="textarea"
            label="What have you tried that has helped?"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentHasntHelped"
            type="textarea"
            label="What have you tried that hasn't helped?"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentLocationInjury"
            type="checkbox"
            label="Injury location?  Check all that apply"
            :options="[
              'Neck',
              'Back',
              'Arm',
              'Hand',
              'Leg',
              'Chest',
              'Abdomen',
              'Ankle',
              'Foot',
            ]"
            options-class="$reset flex-wrap grid gap-x-3 gap-y-2 grid-cols-5"
          />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="range_2"
            type="range"
            label="Pain Level?"
            name="range_2"
            min="0"
            max="10"
            help="0 is no pain, 10 is extreme pain"
          />
        </div>
        <div class="sm:col-span-1">
          <p class="inline-block mt-6">{{ range_2 }}</p>
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentPainType"
            type="checkbox"
            label="Type of pain"
            :options="[
              'Tingle',
              'Sharp',
              'Numbness',
              'Dull',
              'Ache',
              'Burning',
              'Radiating',
              'Stabbing',
              'Throbbing',
            ]"
          />
        </div>

        <div class="sm:col-span-8">
          <FormKit
            v-model="accidentAddInfo"
            type="textarea"
            label="List any other information that is pertinant to this injury"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accident",
  data() {
    return {
      accidentDate: "",
      positionInVehicle: "",
      describeAccident: "",
      accidentSurgery: "",
      advisedSurgery: "",
      accidentSpecialist: "",
      accidentHospitalized: "",
      accidentFormerCare: "",
      accidentWithWhom: "",
      accidentDiagnosis: "",
      accidentMedication: "",
      accidentMedList: "",
      accidentTests: "[]",
      accidentFindings: "",
      accidentHasHelped: "",
      accidentHasntHelped: "",
      accidentLocationInjury: "[]",
      range_2: "",
      accidentPainType: "[]",
      accidentAddInfo: "",
    };
  },
};
</script>
