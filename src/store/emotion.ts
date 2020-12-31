import { RootState } from "@/interfaces/vuex";
import { Module } from "vuex";
import { EmotionState } from "@/interfaces/vuex/emotion";

export const getDefaultState = (): EmotionState => ({
  activeEmotionId: null
});

export const emotion: Module<EmotionState, RootState> = {
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    SET_ACTIVE_EMOTION(state, emotion) {
      state.activeEmotionId = emotion;
    }
  }
};
