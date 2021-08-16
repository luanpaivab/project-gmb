<template>
  <div class="inicio-seguranca">
    <div class="page-seguranca">
      <PageTitle
        icon="fa fa-home"
        main=" Página Inicial"
        sub="Sistema de Gestão GMB 153"
      />
    </div>
    <div class="fundo-seguranca">
      <div class="stats-seguranca">
        <b-row>
          <b-col md="4">
            <router-link to="/veiculosroubados">
            <Stat
              title="Veículos Roubados"
              :value="countRouboVeiculos"
              icon="fa fa-car"
              color="#3bc480"
            />
            </router-link>
          </b-col>
          <b-col md="4">
            <router-link to="/roubosefurtos">
            <Stat
              title="Roubos/Furtos"
              :value="countRouboFurto"
              icon="fa fa-male"
              color="#3282cd"
            />
            </router-link>
          </b-col>
          <b-col md="4">
            <router-link to="/rouboderesidencia">
            <Stat
              title="Roubos de Residência"
              :value="countRouboResid"
              icon="fa fa-home"
              color="#3282cd"
            />
            </router-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <router-link to="/descarteirregular">
            <Stat
              title="Descartes Irregulares de Lixo"
              :value="countDescarte"
              icon="fa fa-trash"
              color="yellow"
            />
            </router-link>
          </b-col>
          <b-col md="4">
            <router-link to="/acidentetransito">
            <Stat
              title="Acidentes de Trânsito"
              :value="countAcidente"
              icon="fa fa-car"
              color="#000"
            />
            </router-link>
          </b-col>
          <b-col md="4">
            <router-link to="/denunciaincendio">
            <Stat
              title="Incêndios"
              :value="countIncendio"
              icon="fa fa-fire"
              color="red"
            />
            </router-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <router-link to="/sosmulher">
            <Stat
              title="SOS Mulher"
              :value="countMulher"
              icon="fa fa-female"
              color="rgb(238, 20, 140);"
            />
            </router-link>
          </b-col>
          <b-col md="4">
            <router-link to="/sosidoso">
            <Stat
              title="SOS Idoso"
              :value="countIdoso"
              icon="fa fa-blind"
              color=" rgb(010, 002, 025,0.3);"
            />
            </router-link>
          </b-col>
          <b-col md="4">
            <router-link to="/sosmenores">
            <Stat
              title="SOS Crianças e Adolescentes"
              :value="countMenores"
              icon="fa fa-child"
              color="red"
            />
            </router-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <router-link to="/denunciavandalismo">
            <Stat
              title="Vandalismo"
              :value="countVandalismo"
              icon="fa fa-ban"
              color="red"
            />
            </router-link>
          </b-col>
          <b-col md="4">
            <router-link to="/denunciatrafico">
            <Stat
              title="Tráfico de Drogas"
              :value="countTrafico"
              icon="fa fa-flask"
              color="#000"
            />
            </router-link>
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
import { baseApiUrl153 } from "../../global";

export default {
  name: "HomeSeguranca",
  components: { PageTitle, Stat },
  data: function () {
    return {
      countRouboVeiculos: 0,
      countRouboFurto: 0,
      countRouboResid: 0,
      countDescarte: 0,
      countAcidente: 0,
      countIncendio: 0,
      countMulher: 0,
      countIdoso: 0,
      countMenores: 0,
      countVandalismo: 0,
      countTrafico: 0,
    };
  },
  methods: {
    loadVeiculos() {
      const url = `${baseApiUrl153}/veiculosroubados`;
      axios.get(url).then((res) => {
        this.countRouboVeiculos = res.data.count;
      });
    },
    loadRoubosFurtos() {
      const url = `${baseApiUrl153}/roubosefurtos`;
      axios.get(url).then((res) => {
        this.countRouboFurto = res.data.count;
      });
    },
    loadRoubosResid() {
      const url = `${baseApiUrl153}/rouboderesidencia`;
      axios.get(url).then((res) => {
        this.countRouboResid = res.data.count;
      });
    },
    loadDescarte() {
      const url = `${baseApiUrl153}/descarteirregular`;
      axios.get(url).then((res) => {
        this.countDescarte = res.data.count;
      });
    },
    loadAcidente() {
      const url = `${baseApiUrl153}/acidentetransito`;
      axios.get(url).then((res) => {
        this.countAcidente = res.data.count;
      });
    },
    loadIncendio() {
      const url = `${baseApiUrl153}/denunciaincendio`;
      axios.get(url).then((res) => {
        this.countIncendio = res.data.count;
      });
    },
    loadMulheres() {
      const url = `${baseApiUrl153}/sosmulher`;
      axios.get(url).then((res) => {
        this.countMulher = res.data.count;
      });
    },
    loadIdosos() {
      const url = `${baseApiUrl153}/sosidoso`;
      axios.get(url).then((res) => {
        this.countIdoso = res.data.count;
      });
    },
    loadMenores() {
      const url = `${baseApiUrl153}/sosmenores`;
      axios.get(url).then((res) => {
        this.countMenores = res.data.count;
      });
    },
    loadVandalismo() {
      const url = `${baseApiUrl153}/denunciavandalismo`;
      axios.get(url).then((res) => {
        this.countVandalismo = res.data.count;
      });
    },
    loadTrafico() {
      const url = `${baseApiUrl153}/denunciatrafico`;
      axios.get(url).then((res) => {
        this.countTrafico = res.data.count;
      });
    },
  },
  mounted() {
    this.loadVeiculos();
    this.loadRoubosFurtos();
    this.loadRoubosResid();
    this.loadDescarte();
    this.loadAcidente();
    this.loadIncendio();
    this.loadMulheres();
    this.loadIdosos();
    this.loadMenores();
    this.loadVandalismo();
    this.loadTrafico();
  },
};
</script>

<style>
.inicio-seguranca {
  background-color: #eee;
  /*
  background-color: rgb(238, 20, 140);
*/
  padding: 10px 0px 0px 0px;
}

.inicio-seguranca a{
text-decoration: none;
color: #000;
}
.titulo-seguranca {
  justify-content: start;
}
.fundo-seguranca {
  background-image: url("../../assets/background/back03.jpg");
  background-color: #cccccc;
  height: 600px;
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.stats-seguranca {
  padding: 20px;

  display: flex;
  flex-direction: column;
}

.page-seguranca{
  padding-left: 20px;
}
</style>

