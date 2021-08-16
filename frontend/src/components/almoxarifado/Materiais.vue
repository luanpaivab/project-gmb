<template>
  <div class="almoxarifado-materiais">
    <PageTitle icon="fa fa-home" main=" Requisição de Materiais" />
    <hr />
    <b-col md="5">
      <div class="stats">
        <Stat
          title="Requisição de Materiais"
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
        <b-form-group label="Registro:" label-for="uniforme-registro">
          <b-form-input
            id="uniforme-registro"
            v-model="registro"
            type="search"
            placeholder="Registro..."
            style="border: 1px solid rgba(0, 0, 0, 0.8)"
          ></b-form-input>
        </b-form-group>
      </b-col>

      <b-form-group
        label="Data Inicial:"
        label-for="uniforme-dtInicial"
        class="pl-3"
      >
        <b-form-input
          id="uniforme-dtInicial"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataInicial"
        />
      </b-form-group>

      <b-form-group
        label="Data Final:"
        label-for="uniforme-dtFinal"
        class="pl-3"
      >
        <b-form-input
          id="uniforme-dtFinal"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataFinal"
        />
      </b-form-group>

      <b-form-group
        label="Nome:"
        label-for="nome-nome"
        class="pl-3"
      >
        <b-form-input
          id="filter-nome"
          v-model="nome"
          type="search"
          placeholder="Nome..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Matricula:"
        label-for="matricula-matricula"
        class="pl-3"
      >
        <b-form-input
          id="filter-matricula"
          v-model="matricula"
          type="search"
          placeholder="Matricula..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>
      <b-col md="2">
        <b-form-group label="Placa:" label-for="placa-placa">
          <b-form-input
            id="filter-placa"
            v-model="placa"
            type="search"
            placeholder="Placa..."
            style="border: 1px solid rgba(0, 0, 0, 0.8)"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="pl-1">
      <b-button @click="loadMateriais()" variant="primary" style="margin: 0 10px"
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
      :items="materiais"
      :fields="fields"
    >
      <template slot="links" slot-scope="data">
        <router-link
          :to="{ name: 'materiaisId', params: { id: data.item.id } }"
        >
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
import PageTitle from "../template/PageTitle";
import { baseApiUrl } from "../../global";
import Stat from "../home/Stat";
import axios from "axios";

export default {
  name: "Materiais",
  components: { PageTitle, Stat },
  data: function () {
    return {
      materiais: [],
      page: 1,
      limit: 0,
      count: 0,
      registro: "",
      placa: "",
      dataInicial: "",
      dataFinal: "",
      nome: "",
      matricula: "",
      fields: [
        {
          key: "id",
          label: "ID",
          sortable: true,
        },
        {
          key: "dt_solicitacao",
          label: "Data da Requisição",
          sortable: true,
        },
        { key: "servidor", label: "Nome", sortable: true },
        { key: "matricula", label: "Matricula", sortable: true },
        { key: "placa", label: "Placa", sortable: true },
        { key: "links", label: "Detalhes" },
      ],
    };
  },
  methods: {
    loadMateriais() {
      const url = `${baseApiUrl}/materiais?page=${this.page}&registro=${this.registro}&matricula=${this.matricula}&nome=${this.nome}&placa=${this.placa}&dataInicial=${this.dataInicial}&dataFinal=${this.dataFinal}`;
      axios(url).then((res) => {
        this.materiais = res.data.data;
        this.count = res.data.count;
        this.limit = res.data.limit;
      });
    },
    clear() {
      this.page = 1;
      this.registro = "";
      this.dataInicial = "";
      this.dataFinal = "";
      this.hora = "";
      this.matricula = "";
      this.placa = "";
      this.nome = "";
      this.materiais = [];
      this.loadMateriais();
    },
  },
  watch: {
    $route() {
      this.materiais = [];
      this.page = 1;
    },
    page() {
      this.loadMateriais();
    },
  },
  mounted() {
    this.loadMateriais();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.almoxarifado-materiais {
  padding: 20px;
}

.pesq p {
  color: black;
  font-weight: bold;
}

.verified {
  color: rgb(31, 177, 36);
}

.not-verified {
  color: rgb(137, 135, 138);
}

.with-error {
  color: rgb(179, 25, 28);
}
</style>