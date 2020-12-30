import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { app } from "@/store/app";
import { RootState } from "@/interfaces/vuex";

Vue.use(Vuex);

const store: StoreOptions<RootState> = new Vuex.Store({
  mutations: {},
  actions: {},
  modules: {
    app
  }
});

export default store;
