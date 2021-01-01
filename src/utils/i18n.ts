import { LANG_KEY } from "@/utils/constants/app";
import i18n from "@/plugins/i18n";

export function getLanguage() {
  return (
    window.localStorage.getItem(LANG_KEY) ||
    window.navigator.language.slice(0, 2) ||
    process.env.VUE_APP_I18N_LOCALE ||
    "en"
  );
}

export function setLanguage(locale: string) {
  window.localStorage.setItem(LANG_KEY, locale);
  i18n.locale = locale;
}
