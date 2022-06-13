<template>
  <div class="space-y-8 border-4 rounded-lg sm:m-1 px-2 lg:m-4 ">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Reason For Visit</h3>
    </div>
    <FormKit 
      type="group" 
      v-model="ReasonVisit" 
      name="Reason For Visit"
      >
      <div class="sm:p-0 lg:p-10">
        <div class="grid grid-cols-1 gap-y-6 gap-x-4 lg:grid-cols-12 md:grid-cols-4 sm:grid-cols-1">

          <div class="lg:col-span-5 md:col-span-4 sm:col-span-1">
            <FormKit 
              v-model="data.reasonForVisit" 
              type="checkbox" 
              label="Reason for Visit" 
              :options="{
                well: 'Wellness Check',
                se: 'Sports Enhancement',
                si: 'Sports Injury',
                wc: 'Workman\'s Comp Injury',
                aa: 'Auto Accident',
                py: 'Pregnancy',
              }" 
             options-class="sm:flex-wrap gap-4 grid gap-x-4 gap-y-2 grid-cols-2 md:grid-cols-4"
              name="Reason For Visit"
              validation="required"
            />
          </div>

          <div class="lg:col-span-2 md:col-span-4">
            <FormKit 
              v-model="visitChiro" 
              type="radio" 
              label="Have you Seen a chiropractor before?"
              name="Visit Chiro"
              :options="['Yes', 'No']" />
          </div>

          <div class="lg:col-span-5 md:col-span-4">
            <FormKit 
              v-model="reasonDisconChiro" 
              type="textarea" 
              label="If yes, Reason for discontinuing"
              name="reasonDiscontinued" />
          </div>
        </div>
      </div>
    </FormKit>
  </div>
</template>

<script setup>
import { useFormStore } from "../stores/formStore.js";
import { ref } from "vue";

const data = useFormStore();

const visitChiro = ref("");
const reasonDisconChiro = ref("");
const ReasonVisit = ref("")
</script>
