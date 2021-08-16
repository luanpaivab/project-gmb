<template>
    <div class="relatorio-missao">
        <PageTitle icon="fa fa-home" main=" Relatório da Missão"/>
        <hr>
        <b-col md="4">
      <div class="stats">
        <Stat
          title="Relatórios das Missões"
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
        <b-form-group label="Registro:" label-for="relatorio-registro">
          <b-form-input
            id="relatorio-registro"
            v-model="registro"
            type="search"
            placeholder="Registro..."
            style="border: 1px solid rgba(0, 0, 0, 0.8)"
          ></b-form-input>
        </b-form-group>
      </b-col>

      <b-form-group
        label="Data Inicial:"
        label-for="relatorio-dtInicial"
        class="pl-3"
      >
        <b-form-input
          id="relatorio-dtInicial"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataInicial"
        />
      </b-form-group>

      <b-form-group
        label="Data Final:"
        label-for="relatorio-dtFinal"
        class="pl-3"
      >
        <b-form-input
          id="relatorio-dtFinal"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataFinal"
        />
      </b-form-group>

      <b-form-group
        label="Hora:"
        label-for="relatorio-hora"
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
        label="Comandante:"
        label-for="relatorio-comandante"
        class="pl-3"
      >
        <b-form-input
          id="filter-comandante"
          v-model="comandante"
          type="search"
          placeholder="Comandante..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>
      <b-col md="2">

      <b-form-group 
        label="Guarnição:"
        label-for="relatorio-guarnicao"
      >
        <b-form-input
          id="filter-guarnicao"
          v-model="guarnicao"
          type="search"
          placeholder="guarnicao..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>
      </b-col>
    </b-row>
    <b-row class="pl-1">
      <b-button @click="loadRelatorios()" variant="primary" style="margin: 0 10px"
        >Pesquisar</b-button
      >
      <b-button @click="clear()" variant="danger">Limpar</b-button>
    </b-row>
    <b-table class="mt-4" striped bordered hover head-variant="dark" :items="relatorios" :fields="fields">
      <template slot="links" slot-scope="data">
        <router-link :to="{ name: 'relatorioMissaoId', params: { id: data.item.id } }">
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
    name: "RelatorioMissao",
    components: { PageTitle, Stat },
     data: function () {
    return {
      relatorios: [],
      page: 1,
      limit: 0,
      count: 0,
      registro: "",
      hora: "",
      dataInicial: "",
      dataFinal: "",
      comandante:"",
      guarnicao: "",
      tableVariant: "",
      fields: [
        { key: "id", label: "Registro", sortable: true },
        { key: "dt_ocorrencia", label: "Data da Ocorrência", sortable: true },
        { key: "hr_entrada", label: "Hora", sortable: true },
        { key: "comandante", label: "Comandante", sortable: true },
        { key: "guarnicao", label: "Guarnição", sortable: true },
        { key: "links", label: "Detalhes" },
      ],
    };
  },
  methods: {
    loadRelatorios() {
      const url = `${baseApiUrl}/relatoriomissao?page=${this.page}&registro=${this.registro}&hora=${this.hora}&comandante=${this.comandante}&guarnicao=${this.guarnicao}&dataInicial=${this.dataInicial}&dataFinal=${this.dataFinal}`;
      axios(url).then((res) => {
        this.relatorios = res.data.data;
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
      this.guarnicao = "";
      this.comandante = "";
      this.relatorios = [];
      this.loadRelatorios();
    },
  },
  watch: {
    $route() {
      this.relatorios = [];
      this.page = 1;
    },
    page() {
      this.loadRelatorios();
    },
  },
  mounted() {
    this.loadRelatorios();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
    .relatorio-missao{
        padding: 20px;
    }

.pesq p {
  color: black;
  font-weight: bold;
}

</style>

