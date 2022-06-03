import { defineStore } from 'pinia'
import { differenceInYears, parseISO } from 'date-fns'


export const useFormStore = defineStore('formStore', {
  state: () => ({
        gender: '',
        dob: '',
        age: '',
        reasonForVisit: [],
        formData: {},
        settings: false
      }),
  getters: {
    calculateAge (state) {
        const dates = parseISO(this.dob, "dd/MM/yyyy", new Date())
        const age = differenceInYears(new Date(), dates)
            return age
     },


   },
   }
 )       
