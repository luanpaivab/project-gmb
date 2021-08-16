<script>
import { Line } from "vue-chartjs";
import axios from "axios";
import { baseApiUrl153 } from "../../global";
export default {
  data: function () {
    return {
      countJan: 0,
      countFev: 0,
      countMar: 0,
      countAbr: 0,
      countMai: 0,
      countJun: 0,
      countJul: 0,
      countAgo: 0,
      countSet: 0,
      countOut: 0,
      countNov: 0,
      countDez: 0,
    };
  },
  extends: Line,
  methods: {
    loadLineChart() {
      const url = `${baseApiUrl153}/sosmulher?ano=2020`;
      axios.get(url).then((res) => {
        this.count = res.data.count;
        this.countJan = res.data.janeiro.count;
        this.countFev = res.data.fevereiro.count;
        this.countMar = res.data.marco.count;
        this.countAbr = res.data.abril.count;
        this.countMai = res.data.maio.count;
        this.countJun = res.data.janeiro.count;
        this.countJul = res.data.fevereiro.count;
        this.countAgo = res.data.marco.count;
        this.countSet = res.data.abril.count;
        this.countOut = res.data.maio.count;
        this.countNov = res.data.abril.count;
        this.countDez = res.data.maio.count;

        console.log(res.data);
        this.renderChart(
          {
            labels: [
              "Jan",
              "Fev",
              "Mar",
              "Abr",
              "Mai",
              "Jun",
              "Jul",
              "Ago",
              "Set",
              "Out",
              "Nov",
              "Dez",
            ],
            datasets: [
              {
                label: "2020",
                data: [
                  this.countJan,
                  this.countFev,
                  this.countMar,
                  this.countAbr,
                  this.countMai,
                  this.countJun,
                  this.countJul,
                  this.countAgo,
                  this.countSet,
                  this.countOut,
                  this.countNov,
                  this.countDez,
                ],
                backgroundColor: "transparent",
                borderColor: "rgba(1, 116, 188, 0.50)",
                pointBackgroundColor: "rgba(171, 71, 188, 1)",
              },
            ],
          },
          {
            responsive: true,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Gráfico Criminológico Referente à SOS MULHER",
            },
          }
        );
      });
    },
  },
  mounted() {
      this.loadLineChart()
  },
};
/*
  <b-row>
      <b-col md="1" sn="12">
        <b-form-group label="Ano:" label-for="grafico-ano">
          <b-form-input
            id="grafico-ano"
            type="text"
            style="border: 1px solid rgba(0, 0, 0, 0.8)"
            v-model="ano"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="pl-1">
      <b-button @click="loadLineChart()" variant="primary" style="margin: 0 10px"
        >Pesquisar</b-button
      >
    </b-row> */
</script>