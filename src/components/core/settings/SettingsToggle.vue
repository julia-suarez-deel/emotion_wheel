<template>
  <tooltip-btn
    :input-value="isSettingOpen"
    path="settings"
    icon="mdi-cog"
    @click="TOGGLE_SETTING_OPEN"
  />
</template>
<script>
import TooltipBtn from "../TooltipBtn";
import { mapMutations, mapState } from "vuex";
export default {
  name: "SettingsToggle",
  components: { TooltipBtn },
  computed: {
    ...mapState("app", ["isSettingOpen"])
  },
  methods: {
    ...mapMutations("app", ["TOGGLE_SETTING_OPEN"])
  }
};
</script>
