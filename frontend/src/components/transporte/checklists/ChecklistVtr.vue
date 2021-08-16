<template>
    <div class="checklist-vtr">
        <PageTitle icon="fa fa-taxi" main=" CheckList Viaturas"/>
        <hr>
        <b-col md="4">
      <div class="stats">
        <Stat
          title="CheckLists Viatura"
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
        <b-form-group label="Registro:" label-for="checkvtr-registro">
          <b-form-input
            id="checkvtr-registro"
            v-model="registro"
            type="search"
            placeholder="Registro..."
            style="border: 1px solid rgba(0, 0, 0, 0.8)"
          ></b-form-input>
        </b-form-group>
      </b-col>

      <b-form-group
        label="Data Inicial:"
        label-for="checkvtr-dtInicial"
        class="pl-3"
      >
        <b-form-input
          id="checkvtr-dtInicial"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataInicial"
        />
      </b-form-group>

      <b-form-group
        label="Data Final:"
        label-for="checkvtr-dtFinal"
        class="pl-3"
      >
        <b-form-input
          id="checkvtr-dtFinal"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataFinal"
        />
      </b-form-group>

      <b-form-group
        label="Hora:"
        label-for="checkvtr-hora"
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
        label="Encarregado:"
        label-for="checkvtr-encarregado"
        class="pl-3"
      >
        <b-form-input
          id="filter-encarregado"
          v-model="encarregado"
          type="search"
          placeholder="Encarregado..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>
      <b-col md="2">

      <b-form-group 
        label="Inspetoria:"
        label-for="checkvtr-inspetoria"
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
      <b-button @click="loadVtr()" variant="primary" style="margin: 0 10px"
        >Pesquisar</b-button
      >
      <b-button @click="clear()" variant="danger">Limpar</b-button>
    </b-row>
    <b-table class="mt-4" striped bordered hover head-variant="dark" :items="viaturas" :fields="fields">
      <template slot="links" slot-scope="data">
        <router-link :to="{ name: 'checklistVtrId', params: { id: data.item.id } }">
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
      viaturas: [],
      page: 1,
      limit: 0,
      count: 0,
      registro: "",
      hora: "",
      dataInicial: "",
      dataFinal: "",
      encarregado:"",
      inspetoria: "",
      tableVariant: "",
      fields: [
        { key: "id", label: "Registro", sortable: true },
        { key: "dt_ocor", label: "Data da Ocorrência", sortable: true },
        { key: "hr_chegada", label: "Hora", sortable: true },
        { key: "encarregado", label: "Encarregado", sortable: true },
        { key: "inspetoria", label: "Inspetoria", sortable: true },
        { key: "links", label: "Detalhes" },
      ],
    };
  },
  methods: {
    loadVtr() {
      const url = `${baseApiUrl}/checklistvtr?page=${this.page}&registro=${this.registro}&hora=${this.hora}&encarregado=${this.encarregado}&inspetoria=${this.inspetoria}&dataInicial=${this.dataInicial}&dataFinal=${this.dataFinal}`;
      axios(url).then((res) => {
        this.viaturas = res.data.data;
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
      this.encarregado = "";
      this.viaturas = [];
      this.loadVtr();
    },
  },
  watch: {
    $route() {
      this.viaturas = [];
      this.page = 1;
    },
    page() {
      this.loadVtr();
    },
  },
  mounted() {
    this.loadVtr();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
    .checklist-vtr{
        padding: 20px;
    }

.pesq p {
  color: black;
  font-weight: bold;
}

</style>

