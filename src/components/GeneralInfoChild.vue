<template>
  <div class="space-y-8 border-4 m-4 rounded-lg">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">General Information Child</h3>
    </div>
    <div class="p-10">
      <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
        <div class="sm:col-span-3">
          <FormKit
            v-model="pediatrician"
            type="text"
            label="Name of Pediatrician"
            name="peditrician"
          />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="pedLastVisit"
            type="textarea"
            label="Date and reason for last visit"
            name="pedLastVisit"
          />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="vaccineHx"
            type="textarea"
            label="Vaccine History"
            name="vaccineHx"
          />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="birthComplications"
            type="checkbox"
            label="Were there delivery complications with patients birth?"
            name="complications"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="pedHospitalizations"
            type="textarea"
            label="List any  hospitaliztions"
            name="hospitalizations"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="childMeds"
            type="textarea"
            label="List current medications"
            name="childMeds"
          />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            v-model="adopted"
            type="textarea"
            label="If your child is adopted, please include any relevent information"
            name="adopted"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GeneralInfoChild",
  data() {
    return {
      pediatrician: "",
      pedLastVisit: "",
      vaccineHx: "",
      birthComplications: "",
      pedHospitalizations: "",
      childMeds: "",
      adopted: "",
    };
  },
};
</script>
