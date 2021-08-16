<template>
  <div class="troca-servico">
    <PageTitle icon="fa fa-file" main=" Troca de Serviços" />
    <hr />
    <b-col md="4">
      <div class="stats">
        <Stat
          title="Trocas de Serviços"
          :value="count"
          icon="fa fa-file"
          color="rgb(61, 78, 224)"
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
        <b-form-group label="Registro:" label-for="troca-registro">
          <b-form-input
            id="troca-registro"
            v-model="registro"
            type="search"
            placeholder="Registro..."
            style="border: 1px solid rgba(0, 0, 0, 0.8)"
          ></b-form-input>
        </b-form-group>
      </b-col>

      <b-form-group
        label="Data Inicial:"
        label-for="troca-dtInicial"
        class="pl-3"
      >
        <b-form-input
          id="troca-dtInicial"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataInicial"
        />
      </b-form-group>

      <b-form-group label="Data Final:" label-for="troca-dtFinal" class="pl-3">
        <b-form-input
          id="troca-dtFinal"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataFinal"
        />
      </b-form-group>
      <b-form-group
        label="Inspetoria:"
        label-for="troca-inspetoria"
        class="pl-3"
      >
        <b-form-input
          id="troca-inspetoria"
          type="text"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="inspetoria"
          placeholder="Inspetoria..."
        />
      </b-form-group>

      <b-form-group label="Placa:" label-for="troca-placa" class="pl-3">
        <b-form-input
          id="troca-placa"
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
      fixed
    >
      <template slot="links" slot-scope="data">
        <router-link
          :to="{ name: 'trocaServicoId', params: { id: data.item.id } }"
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
          <!-- <b-button variant="danger" class="mr-2" v-if="data.item.state === 'ERROR'">
            <i class="fa fa-file"></i>
          </b-button>
          <b-button variant="success" class="mr-2" v-if="data.item.state === ''">
            <i class="fa fa-file"></i>
          </b-button> -->
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
  name: "TrocaServico",
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
      dataInicial: "",
      dataFinal: "",
      fields: [
        { key: "id", label: "Registro", sortable: true },
        { key: "dt_solicitacao", label: "Data da Solicitação", sortable: true },
        { key: "inspetor", label: "inspetoria", sortable: true },
        { key: "nome_solicitante", label: "Placa", sortable: true },
        { key: "links", label: "Detalhes" },
      ],
    };
  },
  methods: {
    loadTrocas() {
      const url = `${baseApiUrl}/trocaservico?page=${this.page}&registro=${this.registro}&inspetoria=${this.inspetoria}&placa=${this.placa}&dataInicial=${this.dataInicial}&dataFinal=${this.dataFinal}`;
      axios(url)
        .then((res) => {
          this.trocas = res.data.data;
          this.count = res.data.count;
          this.limit = res.data.limit;
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
    },
    clear() {
      this.page = 1;
      this.registro = "";
      this.inspetoria = "";
      this.placa = "";
      this.dataInicial = "";
      this.dataFinal = "";
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
.troca-servico {
  padding: 20px;
  /* color: rgb(145, 145, 145); */
}

.pesq p {
  color: black;
  font-weight: bold;
}
</style>

