<template>
  <base-chart :options="options" />
</template>
<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import BaseChart from "./charts/BaseChart";
import emotions from "@/assets/emotions.json";
import "echarts/lib/chart/sunburst";
import "echarts/lib/component/tooltip";
import "zrender/lib/svg/svg";

@Component({
  components: { BaseChart }
})
export default class EmotionWheel extends Vue {
  options = {
    title: {
      text: "WORLD COFFEE RESEARCH SENSORY LEXICON",
      subtext: "Source: https://worldcoffeeresearch.org/work/sensory-lexicon/",
      textStyle: {
        fontSize: 14,
        align: "center"
      },
      subtextStyle: {
        align: "center"
      },
      sublink: "https://worldcoffeeresearch.org/work/sensory-lexicon/"
    },
    series: {
      type: "sunburst",
      highlightPolicy: "ancestor",
      data: emotions,
      radius: [0, "95%"],
      sort: null,
      levels: [
        {},
        {
          r0: "15%",
          r: "35%",
          itemStyle: {
            borderWidth: 2
          },
          label: {
            rotate: "tangential"
          }
        },
        {
          r0: "35%",
          r: "70%",
          label: {
            align: "right"
          }
        },
        {
          r0: "70%",
          r: "72%",
          label: {
            position: "outside",
            padding: 3,
            silent: false
          },
          itemStyle: {
            borderWidth: 3
          }
        }
      ]
    }
  };
}
</script>
