data () {
      return {
       // dob: '',
        age: '',
        aa: false,
        si: false,
        wc: false,
        FormData: []

        }
    },


//    methods: {
 //     updateAge(dob) {
 //       this.dob = dob.target.value
 //             console.log(dob.target.value)

  //    },
      checkedVisit(reasonForVisit) {
        this.reasonForVisit = reasonForVisit.target.value;
          if (this.reasonForVisit == 'aa') {
            this.aa = !this.aa
          } else if ( this.reasonForVisit == 'si') {
               this.si == !this.si }
                else if(this.reasonForVisit == 'wc') {
                  this.wc = !this.wc
                }
            }
    },

  //  computed: {
  //    calculateAge() {
   //     const dates = parseISO(this.dob, "dd/MM/yyyy", new Date())
   //     const age = differenceInYears(new Date(), dates)
  //        return age
   //             }

   //         }, 
      visit() {
        console.log(this.reasonForVisit.target.value)
      }   

    }
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
            ]"