<template>
  <div class="UserGbel">
    <PageTitle
      icon="fa fa-users"
      main=" Usuários Gbel"
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
        <router-link :to="{ name: 'userById', params: { id: data.item.id } }">
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
  name: "UserGbel",
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
        { key: "setor", label: "Setor", sortable: true },
        {
          key: "ativo",
          label: "Ativo",
          sortable: true,
          formatter: (value) => (value ? "Sim" : "Não"),
        },
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
        this.limit = res.data.limitStats;
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
.UserGbel{
  padding:20px;
}
</style>

