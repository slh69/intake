<template>
  <div class="space-y-8 border-4 m-4 rounded-lg">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Work Comp Details</h3>
    </div>
    <FormKit
        type="group"
        v-model="WorkComp"
        name="Workman's Comp"
>
    <div class="p-10">
      <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
        <div class="sm:col-span-2">
          <FormKit 
            v-model="wcDate" 
            type="date" 
            label="Date of Accident"
            name="WC date of incident" />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="wchowHappen"
            type="radio"
            label="How did it happen?"
            name="WC how did it happen"
            :options="['Traumatic', 'Over time', 'Unknown']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="wcHaveSurgery"
            type="radio"
            label="Have you had surgery for this injury?"
            name="WC surgery"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="wcAdvisedSurgery"
            type="radio"
            label="Have you been advised to have surgery?"
            name="WC surgery advised"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="wcSpecialist"
            type="radio"
            label="Have you seen a specialist?"
            name="WC specialist"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="wcHospitalized"
            type="radio"
            label="Were you hospitalized?"
            name="WC hospitalized"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="wcPtCC"
            type="radio"
            label="Have you had physical therapy/chiropractic care for this injury?"
            name="WC PT chiro"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-7">
          <FormKit 
            v-model="wcWho" 
            type="text" 
            name="WC whith who"
            label="With who?" />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="wcDiagnosis"
            type="textarea"
            label="What was the diagnosis?"
            name="WC diagnosis"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="wcMeds"
            type="checkbox"
            label="Are you taking medication for this injury?"
            name="WC medications"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="wcListMeds"
            type="textarea"
            label="Please list medications?"
            name="WC med list"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="wcTests"
            type="checkbox"
            label="What tests have you had for this injury?"
            name="WC injury location"
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
            v-model="wcFindings" 
            type="textarea" 
            name="WC findings"
            label="What were the findings?" />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="wcHelped"
            type="textarea"
            label="What have you tried that has helped?"
            name="WC has helped"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="wcNotHelped"
            type="textarea"
            label="What have you tried that hasn't helped?"
            name="WC hasn't helped"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="wcInjuryLocation"
            type="checkbox"
            label="Injury location?  Check all that apply"
            name="WC injury location"
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
            v-model="wcrange_1"
            label="Pain Level?"
            type="range"
            name="WC pain level"
            min="0"
            max="10"
            help="0 is no pain, 10 is extreme pain"
          />
        </div>
        <div class="sm:col-span-1">
          <p class="inline-block mt-6">{{ wcrange_1 }}</p>
        </div>

        <div class="sm:col-span-5">
          <FormKit
            v-model="wcPainType"
            type="checkbox"
            label="Type of pain.  Choose all that apply"
            name="WC pain type"
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
            v-model="wcAddInfo"
            type="textarea"
            label="List any other information that is pertinant to this injury"
            name="WC additional info"
          />
        </div>
      </div>
    </div>
    </FormKit>
  </div>
</template>

<script>
export default {
  name: "WorkComp",
  data() {
    return {
      wcDate: "",
      wchowHappen: "",
      wcHaveSurgery: "",
      wcAdvisedSurgery: "",
      wcSpecialist: "",
      wcHospitalized: "",
      wcPtCC: "",
      wcWho: "",
      wcDiagnosis: "",
      wcMeds: "",
      wcListMeds: "",
      wcTests: [],
      wcFindings: "",
      wcHelped: "",
      wcNotHelped: "",
      wcInjuryLocation: "",
      wcrange_1: "",
      wcPainType: "",
      wcAddInfo: "",
      WorkComp: ''
    };
  },
};
</script>
