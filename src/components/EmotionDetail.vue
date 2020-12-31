<template>
  <v-card v-if="emotion">
    <v-card-title>{{ emotion.name }}</v-card-title>
    <v-card-text>
      {{ emotion.description }}
    </v-card-text>
  </v-card>
  <v-card v-else>
    <v-card-title>Select or hover an emotion</v-card-title>
  </v-card>
</template>
<script>
export default {
  name: "EmotionDetail",
  props: {
    emotion: {
      type: Object,
      default: null
    }
  }
};
</script>
