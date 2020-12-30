<template>
  <v-app-bar app color="primary" flat dark>
    <v-avatar
      :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
      size="32"
    ></v-avatar>

    <v-tabs centered class="ml-n9">
      <v-tab v-for="{ title, to } in links" :key="title" :to="to">
        {{ title }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class TheAppBar extends Vue {
  links = [
    {
      title: "Emotions Wheel",
      to: "/emotions-wheel"
    },
    {
      title: "About",
      to: "/about"
    }
  ];
}
</script>
