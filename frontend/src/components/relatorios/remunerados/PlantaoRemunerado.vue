<template>
  <div class="plantao-remunerado">
    <PageTitle icon="fa fa-file" main=" Plantão Remunerado" />
    <hr />
    <b-col md="4">
      <div class="stats">
        <Stat
          title="Remunerados"
          :value="count"
          icon="fa fa-file"
          color="rgb(145, 145, 145)"
        />
      </div>
    </b-col>
    <b-row>
      <b-col md="3" class="pesq">
        <p>Pesquisar por:</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="2">
        <b-form-group label="Registro:" label-for="turno-registro">
          <b-form-input
            id="turno-registro"
            v-model="registro"
            type="search"
            placeholder="Registro..."
            style="border: 1px solid rgba(0, 0, 0, 0.8)"
          ></b-form-input>
        </b-form-group>
      </b-col>

      <b-form-group label="Inspetoria:" label-for="turno-inspetoria" class="pl-3">
        <b-form-input
          id="turno-inspetoria"
          type="text"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="inspetoria"
          placeholder="Inspetoria..."
        />
      </b-form-group>
     
      <b-form-group label="Placa:" label-for="turno-placa" class="pl-3">
        <b-form-input
          id="turno-placa"
          type="text"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="placa"
          placeholder="Placa..."
        />
      </b-form-group>

    </b-row>
    <b-row class="pl-1">
      <b-button @click="loadRemunerados()" variant="primary" style="margin: 0 10px"
        >Pesquisar</b-button
      >
      <b-button @click="clear()" variant="danger">Limpar</b-button>
    </b-row>
    <b-table
      class="mt-4"
      striped
      bordered
      hover
      head-variant="dark"
      :items="remunerados"
      :fields="fields"
    >
      <template slot="links" slot-scope="data">
        <router-link
          :to="{ name: 'remuneradosId', params: { id: data.item.id } }"
        >
          <i class="fa fa-file"></i>
        </router-link>
      </template>
    </b-table>
    <b-pagination
      size="md"
      v-model="page"
      :total-rows="count"
      :per-page="limit"
    />
  </div>
</template>

<script>
import PageTitle from "../../template/PageTitle";
import { baseApiUrl } from "../../../global";
import Stat from "../../home/Stat";
import axios from "axios";

export default {
  name: "PlantaoRemunerado",
  components: { PageTitle, Stat },
  data: function () {
    return {
      remunerados: [],
      page: 1,
      limit: 0,
      count: 0,
      registro: "",
      placa: "",
      inspetoria: "",
      fields: [
        { key: "id", label: "Registro", sortable: true },
        { key: "inspetoria", label: "Inspetoria", sortable: true },
        { key: "placa", label: "Placa", sortable: true },
        { key: "links", label: "Detalhes" },
      ],
    };
  },
  methods: {
    loadRemunerados() {
      const url = `${baseApiUrl}/remunerados?page=${this.page}&registro=${this.registro}&inspetoria=${this.inspetoria}&placa=${this.placa}`;
      axios(url).then((res) => {
        this.remunerados = res.data.data;
        this.count = res.data.count;
        this.limit = res.data.limit;
      }).catch(error => {
        alert(error.response.data.msg)
      });
    },
    clear() {
      this.page = 1;
      this.registro = "";
      this.inspetoria = "";
      this.placa = "";
      this.dataInicial="";
      this.dataFinal="";
      this.remunerados = [];
      this.loadRemunerados();
    },
  },
  watch: {
    $route() {
      this.ferias = [];
      this.page = 1;
    },
    page() {
      this.loadRemunerados();
    },
  },
  mounted() {
    this.loadRemunerados();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.plantao-remunerado {
  padding: 20px;
  /* color: rgb(145, 145, 145); */
}

.pesq p {
  color: black;
  font-weight: bold;
}
</style>

