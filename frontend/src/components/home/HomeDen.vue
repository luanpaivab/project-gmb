<template>
  <div class="home-den">
    <div class="page-den">
      <PageTitle
        icon="fa fa-graduation-cap"
        main=" Divisão de Ensino"
        sub="Sistema de Gestão GMB"
      />
    </div>
        <b-row class="pt-3 pl-3">
          <b-col md="4">
            <router-link to="/fichafuncional">
              <div class="card">
                <div class="card-icone">
                  <i class="fa fa-file" style="color: rgb(61, 78, 224)"></i>
                </div>
                <div class="card-info">
                  <span class="titulo-processo">Ficha Funcional</span>
                  <span class="card-value"
                    ><h2>{{ ficha }}</h2></span
                  >
                </div>
              </div>
            </router-link>
          </b-col>
          <b-col md="4">
            <router-link to="/relatorio">
              <div class="card">
                <div class="card-icone">
                  <i class="fa fa-file" style="color: rgb(33, 131, 30)"></i>
                </div>
                <div class="card-info">
                  <span class="titulo-processo">Relatório de Servidores</span>
                  <span class="card-value"
                    ><h2>{{ ficha }}</h2></span
                  >
                </div>
              </div>
            </router-link>
          </b-col>
        </b-row>
    <div class="fundo-den">
      <div class="stats-den">
    </div>
      </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import Stat from "./Stat";
import axios from 'axios'
import {baseApiUrl} from '../../global'

export default {
  name: "Home",
  components: { PageTitle, Stat },
  data: function () {
    return {
      ficha: 0,
    };
  },
  methods: {
    loadUsers() {
      const url = `${baseApiUrl}/users?page=${this.page}`;
      axios.get(url).then((res) => {
        this.ficha = res.data.count;
      }).catch(error => {
        alert(error.response.data.msg)
      });
    },
  },
  mounted(){
    this.loadUsers()
  }
};
</script>

<style>
.home-den {
  background-color: #eee;
  padding: 10px 0px 0px 0px;
}

.home-den a {
  color: black;
  text-decoration: none;
}

.fundo-den {
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
}

.stats-den {
  background-image: url("../../assets/ensino.jpg");
  background-color: #cccccc;
  height: 300px;
  width: 300px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.page-den {
  padding-left: 20px;
}
</style>

