o
<template>
  <div class="space-y-8 border-4 m-4 rounded-lg">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">General Information</h3>
    </div>

    <div class="flex justify-end pr-20">
      <FormKit type="button" label="Settings" @click="data.settings = !data.settings" />
    </div>
    <FormKit type="group" v-model="GeneralInfo" name="General Info">
      <div class="p-10">
        <div class="grid grid-cols-1 gap-y-6 gap-x-4 lg:grid-cols-12">
          <div class="lg:col-span-4 relative">
            <FormKit 
              v-model="fName" 
              label="First Name " 
              type="text" 
              name="First Name"
              validation="required"
              />
            <span class=" font-bold text-red-600 absolute top-0  left-20">*</span>
          </div>

          <div class="sm:col-span-4">
            <FormKit v-model="mName" label="Middle Name" type="text" name="Middle Name" />
          </div>

          <div class="sm:col-span-4 relative">
            <FormKit 
              v-model="lName" 
              label="Last Name " 
              type="text" 
              name="Last Name"
              validation="required"
               />
            <span class=" font-bold text-red-600 absolute top-0  left-20">*</span>

          </div>

          <div class="sm:col-span-3">
            <FormKit v-model="nName" label="Nick Name" type="text" name="Nick Name" />
          </div>

          <div class="sm:col-span-2">
            <FormKit 
              v-model="phone1" 
              name="Primary Phone" 
              label="Primary Phone" 
              type="text"
              placeholder="(123) 456-7890"
              validation="required"  />
          </div>

          <div class="sm:col-span-2">
            <FormKit v-model="phone2" name="Secondary Phone" label="Secondary Phone" type="text"
              placeholder="(456) 789-1234" />
          </div>

          <div class="sm:col-span-5 relative">
            <FormKit
              type="email"
              v-model="email"
              :label="`Email`"
              :placeholder="data.requireEmail ? 'Required field' : 'Not required'"
              :validation="data.requireEmail ? 'required' : ''"
              validation-visibility="submit"
            />
            <span v-show="data.requireEmail === true" class=" font-bold text-red-600 absolute top-0  left-10">*</span>
          </div>
          <p>{{data.requireEmail }}</p>

          <div class="sm:col-span-4">
            <FormKit v-model="address1" label="Address1" type="text" name="Address1" />
          </div>

          <div class="sm:col-span-2">
            <FormKit v-model="address2" label="Address2" type="text" name="Address2" />
          </div>

          <div class="sm:col-span-3">
            <FormKit v-model="city" label="City" type="text" name="City" />
          </div>

          <div class="sm:col-span-1">
            <FormKit v-model="state" label="State" type="select" name="state" placeholder="Select" :options="[
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
            ]" />
          </div>

          <div class="sm:col-span-2">
            <FormKit v-model="zip" type="text" label="Zip Code" class="input" name="Zip" />
          </div>

          <div class="sm:col-span-4">
            <FormKit class="checkbox" type="radio" label="Best form of contact" v-model="formOfContact"
              name="Best Form of Contact" :options="['Primary Phone', 'Secondary Phone', 'Email', 'Mail']" />
          </div>

          <div class="sm:col-span-2">
            <FormKit type="date" class="input" label="Date Of Birth" v-model="data.dob" value="" name="DOB"
              @change="data.calculateAge" />
          </div>

          <div class="sm:col-span-3">
            <FormKit v-model="data.gender" type="radio" :options="['Male', 'Female', 'Other']" class="checkbox"
              name="Gender" label="Gender" />
          </div>

          <div class="sm:col-span-3">
            <FormKit v-model="referral" label="How did you hear about us?" type="text" name="Referral" />
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

const GeneralInfo = ref('')
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
const referral = ref("")




// const handlePhone1 = () => {
//      const x = phone1.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
//  phone1.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
//  }

//const handlePhone2 = () => {
 //       const x = phone2.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
 // phone2.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
 // }  


const submitForm = () => {
     const postData = { phone: this.phone, street1: this.street1 };
    axios
       .post("https://jsonplaceholder.typicode.com/posts", postData)
      .then(res => {
        console.log(res.body);
       });
}


</script>
