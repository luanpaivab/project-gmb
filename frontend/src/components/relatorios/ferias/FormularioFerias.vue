<template>
    <div class="form-ferias">
        <PageTitle icon="fa fa-file" main=" Formulário de Férias"/>
        <hr>
        <b-col md="4">
      <div class="stats">
        <Stat
          title="Formulários de Férias"
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
        label="Matrícula:"
        label-for="ferias-matricula"
        class="pl-3"
      >
        <b-form-input
          id="ferias-matricula"
          type="text"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="matricula"
          placeholder="Matricula..."
        />
      </b-form-group>

      <b-form-group
        label="Opção 1:"
        label-for="ferias-op1"
        class="pl-3"
      >
         <b-form-select v-model="op1" :options="options"></b-form-select>
      </b-form-group>
      
      <b-form-group
        label="Opção 2:"
        label-for="ferias-op2"
        class="pl-3"
      >
         <b-form-select v-model="op2" :options="options"></b-form-select>
      </b-form-group>
     
      
        <b-form-group
            label="Opção 3:"
            label-for="ferias-op3"
            class="pl-3"
        >
            <b-form-select v-model="op3" :options="options"></b-form-select>
        </b-form-group>
      
    </b-row>
    <b-row class="pl-1">
      <b-button @click="loadFerias()" variant="primary" style="margin: 0 10px"
        >Pesquisar</b-button
      >
      <b-button @click="clear()" variant="danger">Limpar</b-button>
    </b-row>
    <b-table class="mt-4" striped bordered hover head-variant="dark" :items="ferias" :fields="fields">
      <template slot="links" slot-scope="data">
        <router-link :to="{ name: 'formularioFeriasId', params: { id: data.item.id } }">
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
    name: "FormularioFerias",
    components: { PageTitle, Stat },
     data: function () {
    return {
      ferias: [],
      page: 1,
      limit: 0,
      count: 0,
      registro: "",
      matricula: "",
      op1: "",
      op2: "",
      op3:"",
      comandante:"",
      inspetoria: "",
      fields: [
        { key: "id", label: "Registro", sortable: true },
        { key: "dt_solicitacao", label: "Data da Solicitação", sortable: true },
        { key: "matricula", label: "matricula", sortable: true },
        { key: "opcaoUm", label: "Opção 1", sortable: true },
        { key: "opcaoDois", label: "Opção 2", sortable: true },
        { key: "opcaoTres", label: "Opção 3", sortable: true },
        { key: "links", label: "Detalhes" },
      ],
      options: [
          { value: "", text: 'Mês' },
          { value: 'Fevereiro/2022', text: 'Fevereiro/2022' },
          { value: 'Março/2022', text: 'Março/2022' },
          { value: 'Abril/2022', text: 'Abril/2022' },
          { value: 'Maio/2022', text: 'Maio/2022' },
          { value: 'Junho/2022', text: 'Junho/2022' },
          { value: 'Julho/2022', text: 'Julho/2022' },
          { value: 'Agosto/2022', text: 'Agosto/2022' },
          { value: 'Setembro/2022', text: 'Setembro/2022' },
          { value: 'Outrubro/2022', text: 'Outrubro/2022' },
          { value: 'Novembro/2022', text: 'Novembro/2022' },
          { value: 'Dezembro/2022', text: 'Dezembro/2022' },
          { value: 'Janeiro/2023', text: 'Janeiro/2023' }
        ]
    };
  },
  methods: {
    loadFerias() {
      const url = `${baseApiUrl}/formularioferias?page=${this.page}&registro=${this.registro}&matricula=${this.matricula}&inspetoria=${this.inspetoria}&opcao1=${this.op1}&opcao2=${this.op2}&opcao3=${this.op3}`;
      axios(url).then((res) => {
        this.ferias = res.data.data;
        this.count = res.data.count;
        this.limit = res.data.limit;
      }).catch(error => {
        alert(error.response.data.msg)
      });
    },
    clear() {
      this.page = 1;
      this.registro = "";
      this.op1 = "";
      this.op2 = "";
      this.op3 = "";
      this.matricula = "";
      this.inspetoria = "";
      this.ferias = [];
      this.loadFerias();
    },
  },
  watch: {
    $route() {
      this.ferias = [];
      this.page = 1;
    },
    page() {
      this.loadFerias();
    },
  },
  mounted() {
    this.loadFerias();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
    .form-ferias{
        padding: 20px;
        /* color: rgb(145, 145, 145); */
    }

.pesq p {
  color: black;
  font-weight: bold;
}

</style>

