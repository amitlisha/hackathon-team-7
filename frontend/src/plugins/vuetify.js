import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  theme: {
    themes: {
      light: {
        primary: colors.blue, // #E53935
        secondary: "#CFD8DC", // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
});
