<template>
  <div class="home-planejamento">
    <PageTitle icon="fa fa-book" main=" Processos Internos" sub="" />
    <b-row class="pt-3 pl-3">
      <b-col md="4">
        <router-link to="/ros">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-file" style="color: rgb(61, 78, 224);"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">Registros de Ocorrência</span>
              <span class="card-value"><h2>{{ros}}</h2></span>
            </div>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link to="/autodeentrega">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-file" style="color: rgb(33, 131, 30);"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">Auto de Entrega</span>
              <span class="card-value"><h2>{{entrega}}</h2></span>
            </div>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link to="/autodeapreensao">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-file" style="color: rgb(201, 199, 80);"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">Auto de Apreensão</span>
              <span class="card-value"><h2>{{apreensao}}</h2></span>
            </div>
          </div>
        </router-link>
      </b-col>
    </b-row>
    <b-row class="pt-3 pl-3">
      <b-col md="4">
        <router-link to="/relatorioalgemacao">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-file" style="color: rgb(73, 179, 179);"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">Relatório de Algemação</span>
              <span class="card-value"><h2>{{algemacao}}</h2></span>
            </div>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link to="/relatoriomissao">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-file" style="color: red;"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">Relatório de Missao</span>
              <span class="card-value"><h2>{{missao}}</h2></span>
            </div>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link to="/comunicadointerno">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-file" style="color: red;"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">Comunicado interno</span>
              <span class="card-value"><h2>{{comunicado}}</h2></span>
            </div>
          </div>
        </router-link>
      </b-col>
    </b-row>
    <b-row class="pt-3 pl-3">
      <b-col md="4">
        <router-link to="/relatoriodisparo">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-file" style="color: rgb(73, 179, 179);"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">Relatório de Disparo</span>
              <span class="card-value"><h2>{{disparo}}</h2></span>
            </div>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link to="/formularioferias">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-file" style="color: red;"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">Formulário de Férias</span>
              <span class="card-value"><h2>{{ferias}}</h2></span>
            </div>
          </div>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import {baseApiUrl} from '../../global'
import axios from 'axios'

export default {
  name: "HomeProcessos",
  components: { PageTitle },
  data: function(){
    return{
      ros:0,
      entrega:0,
      apreensao:0,
      algemacao:0,
      missao:0,
      comunicado:0,
      disparo:0,
      ferias:0,

    }
  },
  methods: {
    countRos() {
      const url = `${baseApiUrl}/ros`;
      axios(url).then((res) => {
        this.ros = res.data.count;
      });
    },

    countEntrega() {
      const url = `${baseApiUrl}/autoentrega`;
      axios(url).then((res) => {
        this.entrega = res.data.count;
      });
    },
    
    countApreensao() {
      const url = `${baseApiUrl}/autoapreensao`;
      axios(url).then((res) => {
        this.apreensao = res.data.count;
      });
    },
    
    countAlgemacao() {
      const url = `${baseApiUrl}/relatorioalgemacao`;
      axios(url).then((res) => {
        this.algemacao = res.data.count;
      });
    },
    
    countMissao() {
      const url = `${baseApiUrl}/relatoriomissao`;
      axios(url).then((res) => {
        this.missao = res.data.count;
      });
    },
    countComunicado() {
      const url = `${baseApiUrl}/comunicadointerno`;
      axios(url).then((res) => {
        this.comunicado = res.data.count;
      });
    },
    
    countDisparo() {
      const url = `${baseApiUrl}/relatoriodisparo`;
      axios(url).then((res) => {
        this.disparo = res.data.count;
      });
    },
    
    countFerias() {
      const url = `${baseApiUrl}/formularioferias`;
      axios(url).then((res) => {
        this.ferias = res.data.count;
      });
    },
  },
  mounted() {
    this.countRos();
    this.countEntrega();
    this.countApreensao();
    this.countAlgemacao();
    this.countMissao();
    this.countComunicado();
    this.countDisparo();
    this.countFerias();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.home-planejamento {
  padding: 20px;
}

.home-planejamento a {
  color: black;
  text-decoration: none;
}

</style>

