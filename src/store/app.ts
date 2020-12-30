import { AppState } from "@/interfaces/vuex/app";
import { RootState } from "@/interfaces/vuex";
import { Module } from "vuex";

export const getDefaultState = (): AppState => ({
  isSettingOpen: true
});

export const app: Module<AppState, RootState> = {
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    TOGGLE_SETTING_OPEN(state) {
      state.isSettingOpen = !state.isSettingOpen;
    }
  }
};
