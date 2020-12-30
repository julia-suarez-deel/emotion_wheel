<template>
  <emotion-wheel />
</template>
<script>
import Vue from "vue";
import EmotionWheel from "../components/EmotionWheel";

export default Vue.extend({
  name: "EmotionWheelView",

  components: {
    EmotionWheel
  },

  data: () => ({})
});
</script>
