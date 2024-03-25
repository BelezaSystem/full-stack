<template>
  <div id="app" class="flex font-sans antialiased text-gray-900">
    <SidebarContent class="w-48 bg-gray-800 text-white h-full" />
    <div class="main-content flex-1 max-w-screen-xl mx-auto flex flex-row">
      <ChartComponent :chart-data="chartData1" :chart-config="chartConfig1" />
      <ChartComponent :chart-data="chartData2" :chart-config="chartConfig2" />
    </div>
  </div>
</template>

<script>
import ChartComponent from './components/ChartComponent.vue';
import SidebarContent from './components/Sidebar.vue';
import { getChartData, getChartConfig } from './utils/chartData';

export default {
  name: 'App',
  components: {
    ChartComponent,
    SidebarContent
  },
  data() {
    return {

      chartData1: getChartData(12, 30, 3, 5, 2, 3),
      chartConfig1: getChartConfig('bar'),

      chartData2: getChartData(35, 30, 3, 5, 2, 3),
      chartConfig2: getChartConfig('line'),

      chartData3: getChartData(35, 30, 3, 5, 2, 3),
      chartConfig3: getChartConfig('pizza')




    };
  }
}
</script>

<style>
</style>