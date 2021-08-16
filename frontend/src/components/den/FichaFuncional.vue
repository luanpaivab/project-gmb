<template>
  <div class="ficha-funcional">
    <PageTitle
      icon="fa fa-users"
      main="Usuários Gbel"
      sub="Tabela de Servidores Gbel"
    />
    <hr />
    <b-table
      striped
      hover
      :items="users"
      :fields="fields"
      bordered="bordered"
      head-variant="dark"
      scroll
    >
      <template slot="links" slot-scope="data">
        <router-link :to="{ name: 'fichaFuncionalId', params: { id: data.item.id } }">
          Visualizar
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
import { baseApiUrl } from "../../global";
import PageTitle from "@/components/template/PageTitle";
import axios from "axios";
export default {
  name: "FichaFuncional",
  components: { PageTitle },
  data: function () {
    return {
      users: [],
      page: 1,
      limit: 0,
      count: 0,
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        { key: "matricula", label: "Matricula", sortable: true },
        { key: "form_academica", label: "Formação", sortable: true },
        { key: "links", label: "Ações" }
      ]
    };
  },
  methods: {
    loadUsers() {
      const url = `${baseApiUrl}/users?page=${this.page}`;
      axios.get(url).then((res) => {
        this.users = res.data.data;
        this.count = res.data.count;
        this.limit = res.data.limit;
      }).catch(error => {
        alert(error.response.data.msg)
      });
    },
  },
  watch: {
     $route() {
      this.users = [];
      this.page = 1;
    },
    page() {
      this.loadUsers();
    },
  },
  mounted() {
    this.loadUsers();
  },
};
</script>

<style>
.ficha-funcional{
  padding:20px;
}
</style>

