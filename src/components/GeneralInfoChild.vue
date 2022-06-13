<template>
  <div class="space-y-8 border-4 rounded-lg sm:m-1 px-2 lg:m-4 ">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">General Information Child</h3>
    </div>
    <div >
      <FormKit type="group" v-model="GenInfoChild" name="General Info Child">
        <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-12">
          <div class="sm:col-span-1 md:col-span-2 lg:col-span-3">
            <FormKit v-model="pediatrician" type="text" label="Name of Pediatrician" name="Pediatrician" />
          </div>

          <div class="sm:col-span-3">
            <FormKit v-model="pedLastVisit" type="textarea" label="Date and reason for last visit"
              name="Ped Last Visit" />
          </div>

          <div class="sm:col-span-3">
            <FormKit v-model="vaccineHx" type="textarea" label="Vaccine History" name="Vaccine History" />
          </div>

          <div class="sm:col-span-3">
            <FormKit v-model="birthComplications" type="checkbox"
              label="Were there delivery complications with patients birth?" name="Delivery Complications"
              :options="['Yes', 'No']" />
          </div>

          <div class="sm:col-span-4">
            <FormKit v-model="pedHospitalizations" type="textarea" label="List any  hospitaliztions"
              name="Hospitalizations" />
          </div>

          <div class="sm:col-span-4">
            <FormKit v-model="childMeds" type="textarea" label="List current medications" name="Ped Medications" />
          </div>

          <div class="sm:col-span-4">
            <FormKit v-model="adopted" type="textarea"
              label="If your child is adopted, please include any relevent information" name="Adopted" />
          </div>
        </div>
      </FormKit>
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
      GenInfoChild: ''
    };
  },
};
</script>
