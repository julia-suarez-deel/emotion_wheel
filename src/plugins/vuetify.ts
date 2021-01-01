import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import i18n from './i18n';
import { isDarkModeSet } from "@/utils/theme";

Vue.use(Vuetify);

export default new Vuetify({
  dark: isDarkModeSet(),
  lang: {
    t: (key, ...params) => i18n.t(key, params).toString(),
  },
});
