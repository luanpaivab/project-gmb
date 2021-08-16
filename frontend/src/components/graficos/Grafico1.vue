<template>
  <div class="grafico">
    <div class="graficos pt-5">
      <LineChartMulher/>
      <LineChartLixo/>
      <LineChart/>
    </div>
  </div>
</template>

<script>
import LineChart from './LineChart'
import LineChartMulher from './LineChartMulher'
import LineChartLixo from './LineChartLixo'

export default {
  name: "Grafico1",
  components: { 
    LineChart,
    LineChartMulher,
    LineChartLixo,
    },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.grafico {
  padding: 20px;
}

</style>