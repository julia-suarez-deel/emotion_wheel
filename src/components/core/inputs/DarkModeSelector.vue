<template>
  <v-switch
    inset
    :label="$t('dark_mode')"
    v-bind="$attrs"
    v-on="$listeners"
    @change="setDarkMode"
  />
</template>
<script>
import vuetify from "@/plugins/vuetify";
import { THEME_KEY } from "@/utils/constants/app";
const name = "DarkModeSelector";
export default {
  name,
  methods: {
    setDarkMode(isDark) {
      vuetify.framework.theme.dark = isDark;
      localStorage.setItem(THEME_KEY, isDark);
    }
  }
};
</script>
