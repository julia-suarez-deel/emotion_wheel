<template>
  <e-chart ref="chart" v-bind="$attrs" :theme="theme" v-on="$listeners" />
</template>
<script>
import EChart from "vue-echarts";
import dark from "@/assets/echart-theme/dark";
import light from "@/assets/echart-theme/light";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "zrender/lib/svg/svg";
import { Component } from "vue-property-decorator";

EChart.registerTheme("dark", dark);
EChart.registerTheme("light", light);
@Component({
  components: {
    EChart
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
})
export default class BaseChart {}
</script>
