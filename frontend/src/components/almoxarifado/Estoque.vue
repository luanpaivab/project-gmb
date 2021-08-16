<template>
  <div class="estoque">
    <PageTitle icon="fa fa-book" main=" Almoxarifado GBEL" sub="" />

    <!-- INSERIR PRODUTOS -->
    <div class="add">
        <b-button variant="success" @click="add = true"
          ><i class="fa fa-plus"></i></b-button
        >
    </div>
    <div class="inserir-produtos" v-if="add === true">
      <b-row class="pt-2">
        <b-col md="3">
          <b-form-group label="Produto:" label-for="almoxarifado-produto">
            <b-form-input
              id="input-produto"
              v-model="produto.produto"
              type="text"
              placeholder="Produto..."
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
            />
          </b-form-group>
        </b-col>
        <b-col md="2">
          <b-form-group label="Quantidade:" label-for="almoxarifado-quantidade">
            <b-form-input
              id="input-quantidade"
              v-model="produto.quantidade"
              type="number"
              placeholder="quantidade..."
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="ml-0">
        <b-button
          v-if="mode === 'save'"
          @click="insertEstoque()"
          variant="success"
          >inserir</b-button
        >
        
        <b-button
          v-if="mode === 'atualizar'"
          @click="Atualizando()"
          variant="warning"
          >Editar</b-button
        >

        <b-button variant="danger" v-if="mode === 'remove'" @click="remove()"
          >Excluir</b-button
        >

        <b-button class="ml-2" @click="reset(), add=false" variant="secondary"
          >Cancelar</b-button
        >
      </b-row>
    </div>

    <!-- Pesquisa por Filtros -->

    <div class="pt-3">
      <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1">
        Pesquisar
      </b-form-checkbox>
    </div>

    <div>
      <b-row class="pt-3" v-if="status === true">
        <b-col md="2">
          <b-form-group label="Registo:" label-for="almoxarifado-registro">
            <b-form-input
              id="filter-registro"
              v-model="registro"
              type="search"
              placeholder="registro..."
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Produto:" label-for="almoxarifado-produto">
            <b-form-input
              id="filter-produto"
              v-model="nome"
              type="search"
              placeholder="Produto..."
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="ml-0" v-if="status === true">
        <b-button @click="loadEstoque()" variant="primary">Pesquisar</b-button>
        <b-button class="ml-2" @click="clear()" variant="danger"
          >Limpar</b-button
        >
      </b-row>

      <!-- TABELA DE PRODUTOS -->
      <b-table
        class="mt-4"
        striped
        bordered
        hover
        head-variant="dark"
        :items="produtos"
        :fields="fields"
      >
        <template slot="links" slot-scope="data">
          <b-button variant="danger" @click="loadProduto(data.item, 'remove'), add =true">
            <i class="fa fa-trash"></i>
          </b-button>
          <b-button variant="warning" @click="loadProduto(data.item, 'atualizar'), add = true" class="ml-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        </template>
      </b-table>
      <b-pagination
        size="md"
        v-model="page"
        :total-rows="count"
        :per-page="limit"
      />
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import { baseApiUrl } from "../../global";
import axios from "axios";

export default {
  name: "Estoque",
  components: { PageTitle },
  data: function () {
    return {
      produtos: [],
      produto: {},
      add:false,
      status: false,
      mode: "save",
      page: 1,
      limit: 0,
      count: 0,
      registro: "",
      nome: "",

      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "produto", label: "Produto", sortable: true },
        { key: "quantidade", label: "Quantidade", sortable: true },
        { key: "links", label: "Detalhes" },
      ],
    };
  },
  methods: {
    loadEstoque() {
      const url = `${baseApiUrl}/almoxarifado?page=${this.page}&registro=${this.registro}&produto=${this.nome}`;
      axios(url).then((res) => {
        this.produtos = res.data.data;
        this.count = res.data.count;
        this.limit = res.data.limit;
      });
    },
    reset() {
      this.mode = "save";
      this.produto = {};
      this.loadEstoque();
    },
    insertEstoque() {
      axios
        .post(`${baseApiUrl}/almoxarifado`, this.produto)
        .then(() => {
          this.reset();
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
    },
    remove() {
      const id = this.produto.id;
      axios
        .delete(`${baseApiUrl}/almoxarifado/${id}`)
        .then(() => {
          this.reset();
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
         window.scrollTo(0, 0);
    },
    Atualizando() {
      const id = this.produto.id;

      axios
        .put(`${baseApiUrl}/almoxarifado/${id}`, this.produto)
        .then(() => {
          this.reset();
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
      window.scrollTo(0, 0);
    },
    loadProduto(produto, mode = "save") {
      this.mode = mode;
      axios
        .get(`${baseApiUrl}/almoxarifado/${produto.id}`)
        .then((res) => (this.produto = res.data));
    },
    clear() {
      this.page = 1;
      this.registro = "";
      this.nome = "";
      this.produtos = [];
      this.loadEstoque();
    },
  },
  watch: {
    $route() {
      this.produtos = [];
      this.page = 1;
    },
    page() {
      this.loadEstoque();
    },
  },
  mounted() {
    this.loadEstoque();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.estoque {
  padding: 20px;
}

.add{
    display: flex;
    justify-content: flex-end;
}
</style>