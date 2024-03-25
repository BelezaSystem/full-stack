<template>
  <div class="chart-container p-4">
    <canvas ref="myChartCanvas"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: 'ChartComponent',
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartConfig: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.myChartCanvas.getContext('2d');
      this.chartInstance = new Chart(ctx, {
        type: this.chartConfig.type || 'bar',
        data: this.chartData,
        options: this.chartConfig.options || {}
      });
    }
  },
  watch: {
    chartData: {
      handler(newData) {
        if (this.chartInstance) {
          this.chartInstance.data = newData;
          this.chartInstance.update();
        }
      },
      deep: true
    }
  },
  beforeUnmount() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }
}
</script>

<style scoped>

</style>
