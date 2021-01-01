<template>
  <v-container fluid class="fill-height">
    <v-container fluid class="fill-height" style="width: 100%">
      <v-row class="fill-height">
        <v-col sm="6" class="fill-height">
          <emotion-wheel :emotions="emotions" />
        </v-col>
        <v-col sm="6" class="fill-height">
          <emotion-detail :emotion="activeEmotion" class="fill-height" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import EmotionWheel from "@/components/EmotionWheel";
import EmotionDetail from "@/components/EmotionDetail";
import rawEmotions from "@/assets/emotions-api";
import { mapState } from "vuex";
import { formatDocumentTitle } from "@/utils/meta";

const mapChildrenEmotion = (color, emotion) => {
  return {
    name: emotion.name,
    value: 1,
    itemStyle: {
      color
    }
  };
};

function flatDeep(object, parentName) {
  const { children, ...otherProps } = object;
  let result = { [object.name]: otherProps, parentName };
  const pendingChildren = children && children.length > 0;
  if (!pendingChildren) return result;
  for (const child of children) {
    result = { ...flatDeep(child, object.name), ...result };
  }
  return result;
}
@Component({
  metaInfo: {
    title: formatDocumentTitle("emotions_wheel")
  },
  components: {
    EmotionWheel,
    EmotionDetail
  },
  computed: {
    ...mapState("emotion", ["activeEmotionId"])
  }
})
export default class EmotionWheelView extends Vue {
  get emotions() {
    return rawEmotions.map(emotion => {
      const { color, name, children } = emotion;
      return {
        name,
        itemStyle: {
          color
        },
        children: children.map(mapChildrenEmotion.bind(null, color))
      };
    });
  }

  get keyedEmotions() {
    return rawEmotions.reduce((result, current) => {
      return { ...result, ...flatDeep(current) };
    }, {});
  }

  get activeEmotion() {
    if (!this.activeEmotionId) return null;
    return this.keyedEmotions[this.activeEmotionId];
  }
}
</script>
