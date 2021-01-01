<template>
  <v-app>
    <app-bar />
    <default-settings />
    <v-main>
      <transition mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar from "@/components/core/AppBar.vue";
import DefaultSettings from "@/components/core/settings/DefaultSettings.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppBar,
    DefaultSettings
  },
  data: () => ({})
});
</script>
<style lang="scss">
@import "~@/styles/main.scss";
</style>
