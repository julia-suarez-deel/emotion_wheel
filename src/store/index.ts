import Vue from "vue";
import Vuex, { Store } from "vuex";
import { app } from "@/store/app";
import { emotion } from "@/store/emotion";
import { RootState } from "@/interfaces/vuex";

Vue.use(Vuex);

const store: Store<RootState> = new Vuex.Store({
  mutations: {},
  actions: {},
  modules: {
    app,
    emotion
  }
});

export default store;
