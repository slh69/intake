<template>
  <div class="space-y-8 border-4 m-4 rounded-lg">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Sports Injury Details</h3>
    </div>
    <FormKit 
      type="group" 
      v-model="sportsInjury" 
      name="Sports Injury">
      <div class="p-10">
        <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
          <div class="sm:col-span-2">
            <FormKit 
              v-model="spDate" 
              type="date" 
              label="Date of Incident"
              name="Sports Injury Date" 
            />
          </div>

          <div class="sm:col-span-3">
            <FormKit 
              v-model="sphowHappen" 
              type="radio" 
              label="How did it happen?"
              name="Sports How did it happen"
              :options="['Traumatic', 'Over time', 'Unknown']" />
          </div>

          <div class="sm:col-span-2">
            <FormKit 
              v-model="spHaveSurgery" 
              type="radio" 
              label="Have you had surgery for this injury?"
              name="Sports surgery"
              :options="['Yes', 'No']" />
          </div>

          <div class="sm:col-span-2">
            <FormKit 
              v-model="spAdvisedSurgery" 
              type="radio" 
              label="Have you been advised to have surgery?"
              name="Sports Surgery Advised"
              :options="['Yes', 'No']" />
          </div>

          <div class="sm:col-span-2">
            <FormKit 
              v-model="spSpecialist" 
              type="radio" 
              label="Have you seen a specialist?"
              name="Sports Specialist" 
              :options="['Yes', 'No']" />
          </div>

          <div class="sm:col-span-2">
            <FormKit 
              v-model="spHospitalized" 
              type="radio" 
              label="Were you hospitalized?"
              name="Sports hospitalized" 
              :options="['Yes', 'No']" />
          </div>

          <div class="sm:col-span-3">
            <FormKit 
              v-model="spPtCC" 
              type="radio"
              label="Have you had physical therapy/chiropractic care for this injury?" 
              name="SportsPtChiro"
              :options="['Yes', 'No']" />
          </div>

          <div class="sm:col-span-7">
            <FormKit 
              v-model="spWho" 
              type="text" 
              label="With who?"
              name="Sports with who" />
          </div>

          <div class="sm:col-span-4">
            <FormKit 
              v-model="spDiagnosis" 
              type="textarea" 
              label="What was the diagnosis?"
              name="Sports diagnosis" />
          </div>

          <div class="sm:col-span-4">
            <FormKit 
              v-model="spMeds" 
              type="checkbox" 
              label="Are you taking medication for this injury?"
              name="Sports medication y/n"
              :options="['Yes', 'No']" />
          </div>

          <div class="sm:col-span-4">
            <FormKit 
              v-model="spListMeds" 
              type="textarea" 
              label="Please list medications?"
              name="Sports Med List" />
          </div>

          <div class="sm:col-span-4">
            <FormKit 
              v-model="spTests" 
              type="checkbox" 
              label="What tests have you had for this injury?"
              name="Sports med list" 
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
              options-class="$reset flex-wrap grid gap-x-3 gap-y-2 grid-cols-5" />
          </div>

          <div class="sm:col-span-4">
            <FormKit 
              v-model="spFindings" 
              type="textarea" 
              label="What were the findings?"
              name="Sports findings" />
          </div>

          <div class="sm:col-span-4">
            <FormKit 
              v-model="spHelped" 
              type="textarea" 
              label="What have you tried that has helped?"
              name="Sports has helped" />
          </div>

          <div class="sm:col-span-4">
            <FormKit 
              v-model="spNotHelped" 
              type="textarea" 
              label="What have you tried that hasn't helped?"
              name="Sports hasn't helped" />
          </div>

          <div class="sm:col-span-4">
            <FormKit 
              v-model="spInjuryLocation" 
              type="checkbox" 
              label="Injury location?  Check all that apply" 
              name="Sports Injury Location"
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
              options-class="$reset flex-wrap grid gap-x-3 gap-y-2 grid-cols-5" />
          </div>

          <div class="sm:col-span-3">
            <FormKit 
              v-model="sprange_1" 
              type="range" 
              label="Pain Level?"
              name="Sports pain level" min="0" max="10"
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
              name="Sports pain type"
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
            ]" />
          </div>

          <div class="sm:col-span-7">
            <FormKit 
              v-model="spAddInfo" 
              type="textarea"
              name="Sports additional info"
              label="List any other information that is pertinant to this injury" />
          </div>
        </div>
      </div>
    </FormKit>
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
      sportsInjury: ''
    };
  },
};
</script>
