<template>
  <base-chart
    style="width: 100%; height: 100%"
    :options="options"
    autoresize
    @mouseover="SET_ACTIVE_EMOTION($event.name)"
  />
</template>
<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import BaseChart from "./charts/BaseChart";
import "echarts/lib/chart/sunburst";
import "echarts/lib/component/tooltip";
import "zrender/lib/svg/svg";
import { mapMutations } from "vuex";

@Component({
  components: { BaseChart },
  methods: {
    ...mapMutations("emotion", ["SET_ACTIVE_EMOTION"])
  },
  props: {
    emotions: {
      type: Array,
      required: true
    }
  }
})
export default class EmotionWheel extends Vue {
  get options() {
    return {
      title: {
        text: "Emotions Wheel",
        textStyle: {
          fontSize: 18,
          align: "center"
        },
        subtextStyle: {
          align: "center"
        }
      },
      series: {
        type: "sunburst",
        data: this.emotions
      }
    };
  }
}
</script>
