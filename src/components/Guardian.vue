<template>
  <div class="space-y-8 border-4 m-4 rounded-lg">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Guardian</h3>
    </div>
    <FormKit type="group" v-model="GuardianForm" name="Guardian Form">
      <div class="p-10">
        <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
          <div class="sm:col-span-3">
            <FormKit v-model="gFirstName" type="text" label="Guardian First Name" name="Guardian First Name"
              placeholder="Guardian First Name" />
          </div>
          <div class="sm:col-span-3">
            <FormKit v-model="gLastName" type="text" label="Guardian Last Name" name="Guardian Last Name"
              placeholder="Guardian Last Name" />
          </div>

          <div class="sm:col-span-6">
            <FormKit v-model="gRelationship" type="radio" label="Relationship to patient" name="Relationship to patient"
              :options="[
                'Mother',
                'Step-Mother',
                'Step-Father',
                'Father',
                'Grandparent',
                'Aunt',
                'Uncle',
                'Other',
              ]" />
          </div>

          <div class="sm:col-span-4 static">
            <FormKit v-model="gEmail" type="email" label="Email" name="Guardian Email"
              placeholder="guardian@gmail.com" />
            <div>
              <FormKit v-model="phoneSameAsPt" type="checkbox" label="Same as patient" name="Phone Same as Pt" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <FormKit v-model="gPhone1" type="tel" label="Guardian Primary Phone" name="Guardian Phone1"
              placeholder="xxx-xxx-xxxx" validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/" :validation-messages="{
                matches: 'Phone number must be in the format xxx-xxx-xxxx',
              }" validation-visibility="dirty" />
          </div>

          <div class="sm:col-span-2">
            <FormKit v-model="gPhone2" type="tel" label="Guardian Secondary Phone" name="Guardian Secondary Phone"
              placeholder="xxx-xxx-xxxx" validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/" :validation-messages="{
                matches: 'Phone number must be in the format xxx-xxx-xxxx',
              }" validation-visibility="dirty" />
          </div>

          <div class="sm:col-span-5">
            <FormKit v-model="gAddress1" type="text" label="Address 1" name="Guardian Address1"
              placeholder="Street Address" />
          </div>

          <div class="sm:col-span-3">
            <FormKit v-model="gAddress2" type="text" label="Address 2" name="Guardian Address2"
              placeholder="Suite #, Appt #, etc" />
          </div>

          <div class="sm:col-span-2">
            <FormKit v-model="gCity" type="text" label="City" name="Guardian City" placeholder="City" />
          </div>

          <div class="sm:col-span-1">
            <FormKit v-model="gState" type="select" label="State" name="Guardian State" placeholder="Select" :options="[
              'AK',
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

          <div class="sm:col-span-1">
            <FormKit v-model="gZip" type="text" label="zip" name="Guardian Zip" placeholder="46065" />
          </div>
        </div>
      </div>
    </FormKit>
  </div>
</template>

<script>
export default {
  name: "Guardian",

  data() {
    return {
      gFirstName: "",
      gLastName: "",
      gRelationship: "",
      gEmail: "",
      phoneSameAsPt: "",
      gPhone1: "",
      gPhone2: "",
      gAddress1: "",
      gAddress2: "",
      gCity: "",
      gState: "",
      gZip: "",
      GuardianForm:''
    };
  },
};
</script>
