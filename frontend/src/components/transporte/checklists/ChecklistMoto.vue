<template>
    <div class="checklist-moto">
        <PageTitle icon="fa fa-motorcycle" main=" CheckList Motocicletas"/>
        <hr>
    <b-col md="4">
      <div class="stats">
        <Stat
          title="CheckLists Motocicleta"
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
        <b-form-group label="Registro:" label-for="checkmoto-registro">
          <b-form-input
            id="checkmoto-registro"
            v-model="registro"
            type="search"
            placeholder="Registro..."
            style="border: 1px solid rgba(0, 0, 0, 0.8)"
          ></b-form-input>
        </b-form-group>
      </b-col>

      <b-form-group
        label="Data Inicial:"
        label-for="checkmoto-dtInicial"
        class="pl-3"
      >
        <b-form-input
          id="checkmoto-dtInicial"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataInicial"
        />
      </b-form-group>

      <b-form-group
        label="Data Final:"
        label-for="checkmoto-dtFinal"
        class="pl-3"
      >
        <b-form-input
          id="checkmoto-dtFinal"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataFinal"
        />
      </b-form-group>

      <b-form-group
        label="Hora:"
        label-for="checkmoto-hora"
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
        label="Motorista:"
        label-for="checkmoto-motorista"
        class="pl-3"
      >
        <b-form-input
          id="filter-motorista"
          v-model="motorista"
          type="search"
          placeholder="Motorista..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>
      <b-col md="2">

      <b-form-group 
        label="Inspetoria:"
        label-for="checkmoto-inspetoria"
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
      <b-button @click="loadMotos()" variant="primary" style="margin: 0 10px"
        >Pesquisar</b-button
      >
      <b-button @click="clear()" variant="danger">Limpar</b-button>
    </b-row>
    <b-table class="mt-4" striped bordered hover head-variant="dark" :items="motos" :fields="fields">
      <template slot="links" slot-scope="data">
        <router-link :to="{ name: 'checklistMotoId', params: { id: data.item.id } }">
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
import PageTitle from '../../template/PageTitle'
import { baseApiUrl } from "../../../global";
import Stat from "../../home/Stat";
import axios from "axios";

export default {
    name: "ChecklistVtr",
    components: { PageTitle, Stat },
     data: function () {
    return {
      motos: [],
      page: 1,
      limit: 0,
      count: 0,
      registro: "",
      hora: "",
      dataInicial: "",
      dataFinal: "",
      motorista:"",
      inspetoria: "",
      tableVariant: "",
      fields: [
        { key: "id", label: "Registro", sortable: true },
        { key: "dt_serv", label: "Data da Ocorrência", sortable: true },
        { key: "hr_chegada", label: "Hora", sortable: true },
        { key: "motorista", label: "motorista", sortable: true },
        { key: "inspetoria", label: "Inspetoria", sortable: true },
        { key: "links", label: "Detalhes" },
      ],
    };
  },
  methods: {
    loadMotos() {
      const url = `${baseApiUrl}/checklistmoto?page=${this.page}&registro=${this.registro}&hora=${this.hora}&motorista=${this.motorista}&inspetoria=${this.inspetoria}&dataInicial=${this.dataInicial}&dataFinal=${this.dataFinal}`;
      axios(url).then((res) => {
        this.motos = res.data.data;
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
      this.inspetoria = "";
      this.motorista = "";
      this.motos = [];
      this.loadMotos();
    },
  },
  watch: {
    $route() {
      this.viaturas = [];
      this.page = 1;
    },
    page() {
      this.loadMotos();
    },
  },
  mounted() {
    this.loadMotos();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
    .checklist-moto{
        padding: 20px;
    }

.pesq p {
  color: black;
  font-weight: bold;
}

</style>

