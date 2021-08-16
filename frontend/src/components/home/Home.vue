<template>
  <div class="inicio">
    <div class="page">
      <PageTitle
        icon="fa fa-home"
        main=" Página Inicial"
        sub="Sistema de Gestão GMB"
      />
    </div>
    <div class="fundo">
      <div class="stats">
        <b-row>
          <b-col md="4">
            <Stat
              title="Registros de Ocorrência"
              :value="countRos"
              icon="fa fa-file"
              color="#3bc480"
            />
          </b-col>
          <b-col md="4">
            <Stat
              title="Usuários"
              :value="countUsers"
              icon="fa fa-users"
              color="#3282cd"
            />
          </b-col>
          <b-col md="4">
            <Stat
              title="Relatório de Algemação"
              :value="countAlgemacao"
              icon="fa fa-folder"
              color="#3282cd"
            />
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import Stat from "./Stat";
import axios from "axios";
import { baseApiUrl } from "../../global";

export default {
  name: "Home",
  components: { PageTitle, Stat },
  data: function () {
    return {
      countUsers: 0,
      countRos: 0,
      countAlgemacao: 0,
    };
  },
  methods: {
    loadUsers() {
      const url = `${baseApiUrl}/users`;
      axios.get(url).then((res) => {
        this.countUsers = res.data.count;
      });
    },
    loadRos() {
      const url = `${baseApiUrl}/ros`;
      axios.get(url).then((res) => {
        this.countRos = res.data.count;
      });
    },
    loadRelatorios() {
      const url = `${baseApiUrl}/relatorioalgemacao?page=${this.page}`;
      axios.get(url).then((res) => {
        this.countAlgemacao = res.data.count;
      });
    },
  },
  mounted() {
    this.loadUsers();
    this.loadRos();
    this.loadRelatorios();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.inicio {
  background-color: #eee;
  padding: 10px 0px 0px 0px;
}

.titulo {
  justify-content: start;
}
.fundo {
  background-image: url("../../assets/background/back03.jpg");
  background-color: #cccccc;
  height: 600px;
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.stats {
  padding: 20px;
}

.page {
  padding-left: 20px;
}
</style>

