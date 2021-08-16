<template>
    <div class="auto-apreensao">
        <PageTitle icon="fa fa-home" main=" Auto de Apreensão"/>
        <hr>
        <b-col md="4">
      <div class="stats">
        <Stat
          title="Autos de Apreensão"
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
        <b-form-group label="Registro:" label-for="veiculo-registro">
          <b-form-input
            id="veiculo-registro"
            v-model="registro"
            type="search"
            placeholder="Registro..."
            style="border: 1px solid rgba(0, 0, 0, 0.8)"
          ></b-form-input>
        </b-form-group>
      </b-col>

      <b-form-group
        label="Data Inicial:"
        label-for="veiculo-dtInicial"
        class="pl-3"
      >
        <b-form-input
          id="veiculo-dtInicial"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataInicial"
        />
      </b-form-group>

      <b-form-group
        label="Data Final:"
        label-for="veiculo-dtFinal"
        class="pl-3"
      >
        <b-form-input
          id="veiculo-dtFinal"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataFinal"
        />
      </b-form-group>

      <b-form-group
        label="Produto:"
        label-for="produto-produto"
        class="pl-3"
      >
        <b-form-input
          id="filter-produto"
          v-model="produto"
          type="search"
          placeholder="produto..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group
        label="Condutor:"
        label-for="condutor-condutor"
        class="pl-3"
      >
        <b-form-input
          id="filter-condutor"
          v-model="condutor"
          type="search"
          placeholder="condutor..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>
      <b-col md="2">

      <b-form-group 
        label="Ro Vinculado:"
        label-for="ro-ro"
      >
        <b-form-input
          id="filter-ro"
          v-model="ro"
          type="search"
          placeholder="ro..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>
      </b-col>
    </b-row>
    <b-row class="pl-1">
      <b-button @click="loadAutos()" variant="primary" style="margin: 0 10px"
        >Pesquisar</b-button
      >
      <b-button @click="clear()" variant="danger">Limpar</b-button>
    </b-row>
    <b-table class="mt-4" striped bordered hover head-variant="dark" :items="autos" :fields="fields">
      <template slot="links" slot-scope="data">
        <router-link :to="{ name: 'autoDeApreensaoId', params: { id: data.item.id } }">
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
    name: "AutoDeApreensao",
    components: { PageTitle, Stat },
     data: function () {
    return {
      autos: [],
      page: 1,
      limit: 0,
      count: 0,
      registro: "",
      produto: "",
      dataInicial: "",
      dataFinal: "",
      condutor:"",
      ro: "",
      tableVariant: "",
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "dt_ocorrencia", label: "Data da Ocorrência", sortable: true },
        { key: "condutor", label: "Condutor", sortable: true },
        { key: "produto", label: "Produto", sortable: true },
        { key: "ro_Id", label: "RO", sortable: true },
        { key: "links", label: "Detalhes" },
      ],
    };
  },
  methods: {
    loadAutos() {
      const url = `${baseApiUrl}/autoapreensao?page=${this.page}&registro=${this.registro}&produto=${this.produto}&condutor=${this.condutor}&ro=${this.ro}&dataInicial=${this.dataInicial}&dataFinal=${this.dataFinal}`;
      axios(url).then((res) => {
        this.autos = res.data.data;
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
      this.produto = "";
      this.ro = "";
      this.condutor = "";
      this.autos = [];
      this.loadAutos();
    },
  },
  watch: {
    $route() {
      this.autos = [];
      this.page = 1;
    },
    page() {
      this.loadAutos();
    },
  },
  mounted() {
    this.loadAutos();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
    .auto-apreensao{
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

