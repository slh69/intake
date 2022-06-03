<template>
  <div class="space-y-8 border-4 m-4 rounded-lg">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Sports Injury Details</h3>
    </div>
    <div class="p-10">
      <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
        <div class="sm:col-span-2">
          <FormKit v-model="spDate" type="date" label="Date of Incident" />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="sphowHappen"
            type="radio"
            label="How did it happen?"
            :options="['Traumatic', 'Over time', 'Unknown']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="spHaveSurgery"
            type="radio"
            label="Have you had surgery for this injury?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="spAdvisedSurgery"
            type="radio"
            label="Have you been advised to have surgery?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="spSpecialist"
            type="radio"
            label="Have you seen a specialist?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="spHospitalized"
            type="radio"
            label="Were you hospitalized?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="spPtCC"
            type="radio"
            label="Have you had physical therapy/chiropractic care for this injury?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-7">
          <FormKit v-model="spWho" type="text" label="With who?" />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="spDiagnosis"
            type="textarea"
            label="What was the diagnosis?"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="spMeds"
            type="checkbox"
            label="Are you taking medication for this injury?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="spListMeds"
            type="textarea"
            label="Please list medications?"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="spTests"
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
          <FormKit v-model="spFindings" type="textarea" label="What were the findings?" />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="spHelped"
            type="textarea"
            label="What have you tried that has helped?"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="spNotHelped"
            type="textarea"
            label="What have you tried that hasn't helped?"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="spInjuryLocation"
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
            v-model="sprange_1"
            type="range"
            label="Pain Level?"
            name="range_1"
            min="0"
            max="10"
            help="0 is no pain, 10 is extreme pain"
          />
        </div>
        <div class="sm:col-span-1">
          <p class="inline-block mt-6">{{ sprange_1 }}</p>
        </div>

        <div class="sm:col-span-5">
          <FormKit
            v-model="spPainType"
            type="checkbox"
            label="Type of pain.  Choose all that apply"
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

        <div class="sm:col-span-7">
          <FormKit
            v-model="spAddInfo"
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
  name: "Sports",
  data() {
    return {
      spDate: "",
      sphowHappen: "",
      spHaveSurgery: "",
      spAdvisedSurgery: "",
      spSpecialist: "",
      spHospitalized: "",
      spPtCC: "",
      spWho: "",
      spDiagnosis: "",
      spMeds: "",
      spListMeds: "",
      spTests: [],
      spFindings: "",
      spHelped: "",
      spNotHelped: "",
      spInjuryLocation: "",
      sprange_1: "",
      spPainType: "",
      spAddInfo: "",
    };
  },
};
</script>
