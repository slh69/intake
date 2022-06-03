<template>
  <div class="space-y-8 border-4 m-4 rounded-lg">
    <div class="grid place-items-center">
      <h3 class="text-xl pt-6 font-bold text-cyan-500">Male Specific</h3>
    </div>
    <div class="p-10">
      <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
        <div class="sm:col-span-2">
          <FormKit
            v-model="prostate"
            type="checkbox"
            label="Do you have prostate issues?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-2">
          <FormKit
            v-model="sexualDysfunction"
            type="checkbox"
            label="Do you have sexual function issues?"
            :options="['Yes', 'No']"
          />
        </div>

        <div class="sm:col-span-8">
          <FormKit
            v-model="maleExplain"
            type="textarea"
            label="Explain any yes answers or add any other male related issues you may be experiencing"
            name="maleIssues"
          />
        </div>
      </div>
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
    };
  },
};
</script>
