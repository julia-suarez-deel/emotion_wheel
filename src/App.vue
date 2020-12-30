<template>
  <v-app>
    <the-app-bar />
    <v-main>
      <transition mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TheAppBar from "@/components/core/TheAppBar.vue";

export default Vue.extend({
  name: "App",
  components: {
    TheAppBar
  },
  data: () => ({})
});
</script>
