import { AppState } from "@/interfaces/vuex/app";
import { RootState } from "@/interfaces/vuex";
import { Module } from "vuex";
import { getLanguage } from "@/utils/i18n";
import { LANG_KEY } from "@/utils/constants/app";
import i18n from "@/plugins/i18n";

export const getDefaultState = (): AppState => ({
  lang: getLanguage(),
  isSettingOpen: true
});

export const app: Module<AppState, RootState> = {
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    SET_LANGUAGE(state, lang) {
      window.localStorage.setItem(LANG_KEY, lang);
      i18n.locale = lang;
      state.lang = lang;
    },
    TOGGLE_SETTING_OPEN(state) {
      state.isSettingOpen = !state.isSettingOpen;
    }
  }
};
