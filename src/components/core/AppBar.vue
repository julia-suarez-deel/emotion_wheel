<template>
  <v-app-bar app color="primary" flat dark>
    <v-avatar
      :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
      size="32"
    ></v-avatar>

    <v-tabs centered class="ml-n9">
      <v-tab v-for="{ title, to } in items" :key="title" :to="to" v-t="title" />
    </v-tabs>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <settings-toggle />
    </template>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import SettingsToggle from "@/components/core/settings/SettingsToggle.vue";

@Component({
  components: { SettingsToggle }
})
export default class AppBar extends Vue {
  items = [
    {
      title: "emotions_wheel",
      to: "/emotions-wheel"
    },
    {
      title: "about",
      to: "/about"
    }
  ];
}
</script>
<style lang="scss">
html .v-application .theme--dark {
  .v-tab--active,
  .v-tabs-slider-wrapper {
    color: white !important;
  }
}
</style>
