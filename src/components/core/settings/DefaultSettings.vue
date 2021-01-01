<template>
  <v-navigation-drawer
    v-model="isDefaultSettingOpen"
    dark
    right
    fixed
    hide-overlay
    temporary
    width="300"
  >
    <v-container>
      <v-container class="px-2">
        <v-subheader class="headline pa-0 slim-subheader pb-2">
          {{ $t("settings") }}
        </v-subheader>
        <dark-mode-selector />
        <language-selector />
      </v-container>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
import { Component } from "vue-property-decorator";
import DarkModeSelector from "@/components/core/inputs/DarkModeSelector";
import LanguageSelector from "@/components/core/inputs/LanguageSelector";

@Component({
  components: { LanguageSelector, DarkModeSelector },
  computed: {
    ...mapState("app", ["isSettingOpen"])
  },
  methods: {
    ...mapMutations("app", ["TOGGLE_SETTING_OPEN"])
  }
})
export default class DefaultSettings extends Vue {
  get isDefaultSettingOpen() {
    return this.isSettingOpen;
  }
  set isDefaultSettingOpen(value) {
    if (!value) {
      this.TOGGLE_SETTING_OPEN();
    }
  }
}
</script>
