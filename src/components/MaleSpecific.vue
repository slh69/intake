<template>
  <div class="space-y-8 border-4 rounded-lg sm:m-1 px-2 lg:m-4 ">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Male Specific</h3>
    </div>
    <div>
      <FormKit type="group" v-model="MaleSpecific" name="Male Specific">
      <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-12  ">
          <div class="md: col-span-2 lg:col-span-2">
            <FormKit 
              v-model="prostate" 
              type="checkbox" 
              label="Do you have prostate issues?"
              name="Prostate" 
              :options="['Yes', 'No']" />
          </div>

          <div class="md:col-span-2 lg:col-span-2">
            <FormKit 
              v-model="sexualDysfunction" 
              type="checkbox" 
              label="Do you have sexual function issues?"
              name="Sexual Dysfunction"
              :options="['Yes', 'No']" />
          </div>

          <div class="md:col-span-4 lg:col-span-8">
            <FormKit 
              v-model="maleExplain" 
              type="textarea"
              label="Explain any yes answers or add any other male related issues you may be experiencing"
              name="Explain Male Issues" />
          </div>
        </div>
      </FormKit>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaleSpecific",

  data() {
    return {
      prostate: "",
      sexualDysfunction: "",
      maleExplain: "",
      MaleSpecific: ''
    };
  },
};
</script>
