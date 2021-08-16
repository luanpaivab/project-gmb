<template>
  <div class="troca-horario">
    <PageTitle icon="fa fa-file" main=" Troca de Horários" />
    <hr />
    <b-col md="4">
      <div class="stats">
        <Stat
          title="Trocas de Horários"
          :value="count"
          icon="fa fa-file"
          color="rgb(33, 131, 30)"
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
        <b-form-group label="Registro:" label-for="horario-registro">
          <b-form-input
            id="horario-registro"
            v-model="registro"
            type="search"
            placeholder="Registro..."
            style="border: 1px solid rgba(0, 0, 0, 0.8)"
          ></b-form-input>
        </b-form-group>
      </b-col>

      <b-form-group
        label="Data Inicial:"
        label-for="horario-dtInicial"
        class="pl-3"
      >
        <b-form-input
          id="horario-dtInicial"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataInicial"
        />
      </b-form-group>

      <b-form-group
        label="Data Final:"
        label-for="horario-dtFinal"
        class="pl-3"
      >
        <b-form-input
          id="horario-dtFinal"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataFinal"
        />
      </b-form-group>
      <b-form-group label="Inspetoria:" label-for="horario-inspetoria" class="pl-3">
        <b-form-input
          id="horario-inspetoria"
          type="text"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="inspetoria"
          placeholder="Inspetoria..."
        />
      </b-form-group>
     
      <b-form-group label="Placa:" label-for="horario-placa" class="pl-3">
        <b-form-input
          id="horario-placa"
          type="text"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="placa"
          placeholder="Placa..."
        />
      </b-form-group>

    </b-row>
    <b-row class="pl-1">
      <b-button @click="loadTrocas()" variant="primary" style="margin: 0 10px"
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
      :items="trocas"
      :fields="fields"
    >
      <template slot="links" slot-scope="data">
        <router-link
          :to="{ name: 'trocaHorarioId', params: { id: data.item.id } }"
        >
          <b-button pill variant="outline-dark" class="mr-2" >
            <i
            :class="`fa fa-file 
              ${(data.item.state === 'OK') 
               ? 'verified' 
               : (data.item.state === 'ERROR') 
               ? 'with-error'
               : 'not-verified'
              }`"
          ></i>
          </b-button>
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
  name: "TrocaHorario",
  components: { PageTitle, Stat },
  data: function () {
    return {
      trocas: [],
      page: 1,
      limit: 0,
      count: 0,
      registro: "",
      placa: "",
      inspetoria: "",
      dataInicial:"",
      dataFinal:"",
      fields: [
        { key: "id", label: "Registro", sortable: true },
        { key: "dia_datroca_horario", label: "Data da Solicitação", sortable: true },
        { key: "inspetoria_solicitante", label: "inspetoria", sortable: true },
        { key: "solicitante", label: "Placa", sortable: true },
        { key: "links", label: "Detalhes" },
      ],
    };
  },
  methods: {
    loadTrocas() {
      const url = `${baseApiUrl}/trocahorario?page=${this.page}&registro=${this.registro}&inspetoria=${this.inspetoria}&placa=${this.placa}&dataInicial=${this.dataInicial}&dataFinal=${this.dataFinal}`;
      axios(url).then((res) => {
        this.trocas = res.data.data;
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
      this.trocas = [];
      this.loadTrocas();
    },
  },
  watch: {
    $route() {
      this.ferias = [];
      this.page = 1;
    },
    page() {
      this.loadTrocas();
    },
  },
  mounted() {
    this.loadTrocas();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.troca-horario {
  padding: 20px;
  /* color: rgb(145, 145, 145); */
}

.pesq p {
  color: black;
  font-weight: bold;
}
</style>

