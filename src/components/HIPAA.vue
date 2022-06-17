<template>
  <div class="space-y-8 sm:m-1 px-2 lg:m-4 ">
    <div class="grid grid-cols-12">
        <div class="col-span-8 col-start-3  relative">
            <FormKit
                type="checkbox"
                v-model="hipaaCheck" 
                label="I agree"
                :validation="data.hipaaRequire ? 'required' : ''" 

                />

            <span class=" font-bold text-red-600 absolute top-0  left-20">*</span>

        </div>
        <div class="col-span-8 col-start-3">
            <p>{{ data.hipaa }}</p>
        </div>
</div>
</div>
</template>

<script setup>

import { useFormStore } from "../stores/formStore.js";

const data = useFormStore();

</script>