<template>
  <div class="space-y-8 border-4 m-4 rounded-lg">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Reason For Visit</h3>
    </div>
    <FormKit 
      type="group" 
      v-model="ReasonVisit" 
      name="Reason For Visit"
      >
      <div class="p-10">
        <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
          <div class="sm:col-span-5">
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
             
              name="Reason For Visit"
            />
          </div>

          <div class="sm:col-span-2">
            <FormKit 
              v-model="visitChiro" 
              type="radio" 
              label="Have you Seen a chiropractor before?"
              name="Visit Chiro"
              :options="['Yes', 'No']" />
          </div>

          <div class="sm:col-span-5">
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
