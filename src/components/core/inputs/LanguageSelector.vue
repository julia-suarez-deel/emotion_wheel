<template>
  <v-select
    :value="lang"
    :label="$t('language')"
    :items="items"
    item-value="locale"
    outlined
    hide-details
    v-bind="$attrs"
    @input="changeLanguage"
  />
</template>
<script>
import { getLanguage, setLanguage } from "@/utils/i18n";

const name = "LanguageSelector";
export default {
  name,
  data() {
    return {
      lang: getLanguage()
    };
  },
  computed: {
    items() {
      return [
        { locale: "en", text: this.$t("english") },
        { locale: "es", text: this.$t("spanish") }
      ];
    }
  },
  methods: {
    changeLanguage(locale) {
      this.lang = locale;
      setLanguage(locale);
    }
  }
};
</script>
