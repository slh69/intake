<template>
  <div class="space-y-8 border-4 rounded-lg sm:m-1 px-2 lg:m-4 ">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Accident Details</h3>
    </div>
    <div >
      <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">

        <FormKit
  type="group"
  v-model="Accident"
  name="Accident"
>
        <div class="sm:col-span-2">
          <FormKit v-model="accidentDate" type="date" label="Date of Accident" name="Accident Date" />
        </div>

        <div class="sm:col-span-2">
          <FormKit v-model="positionInVehicle" type="text" label="Position in vehicle?" name="Position in Vehicle" />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="describeAccident"
            type="textarea"
            label="Describe the accident?"
            name="Describe Accident"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="accidentSurgery"
            type="radio"
            label="Have you had surgery for this injury?"
            name="Accident Surgery"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="advisedSurgery"
            type="radio"
            label="Have you been advised to have surgery?"
            name="Surgery Advised"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="accidentSpecialist"
            type="radio"
            label="Have you seen a specialist?"
            name="Accident Specialist"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="accidentHospitalized"
            type="radio"
            label="Were you hospitalized?"
            name="Accident Hospitalized"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentFormerCare"
            type="radio"
            label="Have you had physical therapy / chiropractic care for this injury?"
            name="Accident PT"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit v-model="accidentWithWhom" type="text" label="With whom?" name="Accident With Whom" />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentDiagnosis"
            type="textarea"
            label="What was the diagnosis?"
            name="Accident Diagnosis"
          />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="accidentMedication"
            type="checkbox"
            label="Are you taking medication for this injury?"
            name="Accident Medication"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-5">
          <FormKit
            v-model="accidentMedList"
            type="textarea"
            label="Please list medications?"
            name="Accident Med List"
            
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentTests"
            type="checkbox"
            label="What tests have you had for this injury?"
            name="Accident Tests"
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
            options-class="sm:flex-wrap gap-4 grid gap-x-4 gap-y-2 grid-cols-2 lg:grid-cols-3"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentFindings"
            type="textarea"
            label="What were the findings?"
            name="Accident Findings"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentHasHelped"
            type="textarea"
            label="What have you tried that has helped?"
            name="Accident Has Helped"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentHasntHelped"
            type="textarea"
            label="What have you tried that hasn't helped?"
            name="Accident Hasn't Helped"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="accidentLocationInjury"
            type="checkbox"
            label="Injury location?  Check all that apply"
            name="Accident Injury Location"
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
            options-class="sm:flex-wrap gap-4 grid gap-x-4 gap-y-2 grid-cols-2 lg:grid-cols-3"
          />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="range_2"
            type="range"
            label="Pain Level?"
            name="Accident Pain Level"
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
            name="Accident Pain Type"
            options-class="sm:flex-wrap gap-4 grid gap-x-4 gap-y-2 grid-cols-2 lg:grid-cols-3"
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
            name="Accident Additional Info"
          />
        </div>
        </FormKit>
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
      Accident: ''
    };
  },
};
</script>
