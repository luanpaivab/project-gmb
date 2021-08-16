<template>
    <div class="comunicado-interno">
        <PageTitle icon="fa fa-home" main=" Comunicado Interno"/>
        <hr>
        <b-col md="4">
      <div class="stats">
        <Stat
          title="Comunicados Internos"
          :value="count"
          icon="fa fa-file"
          color="#000"
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
        <b-form-group label="Registro:" label-for="comunicado-registro">
          <b-form-input
            id="comunicado-registro"
            v-model="registro"
            type="search"
            placeholder="Registro..."
            style="border: 1px solid rgba(0, 0, 0, 0.8)"
          ></b-form-input>
        </b-form-group>
      </b-col>

      <b-form-group
        label="Data Inicial:"
        label-for="comunicado-dtInicial"
        class="pl-3"
      >
        <b-form-input
          id="comunicado-dtInicial"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataInicial"
        />
      </b-form-group>

      <b-form-group
        label="Data Final:"
        label-for="comunicado-dtFinal"
        class="pl-3"
      >
        <b-form-input
          id="comunicado-dtFinal"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataFinal"
        />
      </b-form-group>

      <b-form-group
        label="Hora:"
        label-for="comunicado-hora"
        class="pl-3"
      >
        <b-form-input
          id="filter-hora"
          v-model="hora"
          type="search"
          placeholder="Hora Início..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group
        label="Condutor:"
        label-for="comunicado-condutor"
        class="pl-3"
      >
        <b-form-input
          id="filter-condutor"
          v-model="condutor"
          type="search"
          placeholder="Condutor..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>
      <b-col md="2">

      <b-form-group 
        label="Inspetoria:"
        label-for="comunicado-inspetoria"
      >
        <b-form-input
          id="filter-inspetoria"
          v-model="inspetoria"
          type="search"
          placeholder="Inspetoria..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>
      </b-col>
    </b-row>
    <b-row class="pl-1">
      <b-button @click="loadComunicados()" variant="primary" style="margin: 0 10px"
        >Pesquisar</b-button
      >
      <b-button @click="clear()" variant="danger">Limpar</b-button>
    </b-row>
    <b-table class="mt-4" striped bordered hover head-variant="dark" :items="comunicados" :fields="fields">
      <template slot="links" slot-scope="data">
        <router-link :to="{ name: 'comunicadoInternoId', params: { id: data.item.id } }">
          <i
            :class="`fa fa-file 
              ${(data.item.state === 'OK') 
               ? 'verified' 
               : (data.item.state === 'ERROR') 
               ? 'with-error'
               : 'not-verified'
              }`"
          ></i>
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
import PageTitle from '../../template/PageTitle'
import { baseApiUrl } from "../../../global";
import Stat from "../../home/Stat";
import axios from "axios";

export default {
    name: "ComunicadoInterno",
    components: { PageTitle, Stat },
     data: function () {
    return {
      comunicados: [],
      page: 1,
      limit: 0,
      count: 0,
      registro: "",
      hora: "",
      dataInicial: "",
      dataFinal: "",
      condutor:"",
      inspetoria: "",
      tableVariant: "",
      fields: [
        { key: "id", label: "Registro", sortable: true },
        { key: "dt_comunicado", label: "Data da Ocorrência", sortable: true },
        { key: "hr_comunicado", label: "Hora", sortable: true },
        { key: "condutor", label: "condutor", sortable: true },
        { key: "inspetoria", label: "Inspetoria", sortable: true },
        { key: "links", label: "Detalhes" },
      ],
    };
  },
  methods: {
    loadComunicados() {
      const url = `${baseApiUrl}/comunicadointerno?page=${this.page}&registro=${this.registro}&hora=${this.hora}&condutor=${this.condutor}&inspetoria=${this.inspetoria}&dataInicial=${this.dataInicial}&dataFinal=${this.dataFinal}`;
      axios(url).then((res) => {
        this.comunicados = res.data.data;
        this.count = res.data.count;
        this.limit = res.data.limit;
      }).catch(error => {
        alert(error.response.data.msg)
      });
    },
    clear() {
      this.page = 1;
      this.registro = "";
      this.dataInicial = "";
      this.dataFinal = "";
      this.hora = "";
      this.hora = "";
      this.inspetoria = "";
      this.condutor = "";
      this.comunicados = [];
      this.loadComunicados();
    },
  },
  watch: {
    $route() {
      this.comunicados = [];
      this.page = 1;
    },
    page() {
      this.loadComunicados();
    },
  },
  mounted() {
    this.loadComunicados();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
    .comunicado-interno{
        padding: 20px;
    }

.pesq p {
  color: black;
  font-weight: bold;
}

</style>

