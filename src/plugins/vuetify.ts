import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { isDarkModeSet } from "@/utils/theme";

Vue.use(Vuetify);

export default new Vuetify({
  dark: isDarkModeSet()
});
