o
<template>
  <div class="space-y-8 border-4 m-4 rounded-lg">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">General Information</h3>
    </div>

    <div class="flex justify-end pr-20">
    <FormKit type="button" label="Settings" @click="data.settings=!data.settings" />
  </div>
  
    <div class="p-10">
      <div class="grid grid-cols-1 gap-y-6 gap-x-4 lg:grid-cols-12">
        <div class="lg:col-span-4 relative">
          <FormKit v-model="fName" label="First Name " type="text" />
          <span class=" font-bold text-red-600 absolute top-0  left-20">*</span>
        </div>

        <div class="sm:col-span-4">
          <FormKit v-model="mName" label="Middle Name" type="text" />
        </div>

        <div class="sm:col-span-4 relative">
          <FormKit v-model="lName" label="Last Name " type="text" />
          <span class=" font-bold text-red-600 absolute top-0  left-20">*</span>

        </div>

        <div class="sm:col-span-3">
          <FormKit v-model="nName" label="Nick Name" type="text" />
        </div>

        <div class="sm:col-span-2 relative">
          <FormKit v-model="phone1" type="tel" label="Primary Phone " class="input" />
          <span class=" font-bold text-red-600 absolute top-0  right-40">*</span>

        </div>

        <div class="sm:col-span-2">
          <FormKit v-model="phone2" type="tel" label="Secondary Phone" class="input" />
        </div>

        <div class="sm:col-span-5">
          <FormKit v-model="email" label="Email" type="email" />
        </div>

        <div class="sm:col-span-4">
          <FormKit v-model="address1" label="Address1" type="text" />
        </div>

        <div class="sm:col-span-2">
          <FormKit v-model="address2" label="Address2" type="text" />
        </div>

        <div class="sm:col-span-3">
          <FormKit v-model="city" label="City" type="text" />
        </div>

        <div class="sm:col-span-1">
          <FormKit
            v-model="state"
            label="State"
            type="select"
            name="state"
            :options="[
              'AL',
              'AR',
              'AZ',
              'CA',
              'CO',
              'CT',
              'DC',
              'DE',
              'FL',
              'GA',
              'HI',
              'IA',
              'ID',
              'IL',
              'IN',
              'KS',
              'KY',
              'LA',
              'MA',
              'MD',
              'ME',
              'MI',
              'MN',
              'MO',
              'MS',
              'MT',
              'NC',
              'ND',
              'NE',
              'NH',
              'NJ',
              'NM',
              'NV',
              'NY',
              'OH',
              'OK',
              'OR',
              'PA',
              'RI',
              'SC',
              'SD',
              'TN',
              'TX',
              'UT',
              'VA',
              'VT',
              'WA',
              'WI',
              'WV',
              'WY',
            ]"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit v-model="zip" type="text" label="Zip Code" class="input" />
        </div>

        <div class="sm:col-span-4">
          <FormKit
            class="checkbox"
            type="radio"
            label="Best form of contact"
            :options="['Primary Phone', 'Secondary Phone', 'Email', 'Mail']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            type="date"
            class="input"
            label="Date Of Birth"
            v-model="data.dob"
            value=""
            @change="data.calculateAge"
          />
        </div>

        <div class="sm:col-span-3">
          <FormKit
            v-model="data.gender"
            type="radio"
            :options="['Male', 'Female', 'Other']"
            class="checkbox"
            label="Gender"
          />
        </div>

        <div class="sm:col-span-3">
          <FormKit v-model="referral" label="How did you hear about us?" type="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "../stores/formStore.js";

import { ref } from "vue";

const data = useFormStore();

const fName = ref("");
const mName = ref("");
const lName = ref("");
const nName = ref("");
const phone1 = ref("");
const phone2 = ref("");
const email = ref("");
const address1 = ref("");
const address2 = ref("");
const city = ref("");
const state = ref("");
const zip = ref("");
const formOfContact = [
  { name: "eMail" },
  { name: "Primary Phone" },
  { name: "Secondary Phone" },
  { name: "Mail" },
];
const dob = ref("");
const referral = ref("");

</script>
