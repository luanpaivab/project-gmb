<template>
  <div class="home-processos">
    <PageTitle icon="fa fa-book" main=" Processos Internos" sub="" />
    <b-row class="pt-3 pl-3">
      <b-col md="4">
        <router-link to="/trocaServico">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-file" style="color: rgb(61, 78, 224);"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">Troca de Serviço</span>
              <span class="card-value"><h2>{{servicos}}</h2></span>
            </div>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link to="/trocaHorario">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-file" style="color: rgb(33, 131, 30);"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">Troca de Horário</span>
              <span class="card-value"><h2>{{horarios}}</h2></span>
            </div>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link to="/trocaTurno">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-file" style="color: rgb(201, 199, 80);"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">Troca de Turno</span>
              <span class="card-value"><h2>{{turnos}}</h2></span>
            </div>
          </div>
        </router-link>
      </b-col>
    </b-row>
    <b-row class="pt-3 pl-3">
      <b-col md="4">
        <router-link to="/abonoFalta">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-file" style="color: rgb(73, 179, 179);"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">Abono de Falta</span>
              <span class="card-value"><h2>{{faltas}}</h2></span>
            </div>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link to="/outrasSolicitacoes">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-file" style="color: red;"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">Outras Solicitações</span>
              <span class="card-value"><h2>{{solicits}}</h2></span>
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
      servicos:0,
      horarios:0,
      turnos:0,
      faltas:0,
      solicits:0,

    }
  },
  methods: {
    countServico() {
      const url = `${baseApiUrl}/trocaservico`;
      axios(url).then((res) => {
        this.servicos = res.data.count;
      });
    },

    countHorario() {
      const url = `${baseApiUrl}/trocahorario`;
      axios(url).then((res) => {
        this.horarios = res.data.count;
      });
    },
    
    countTurno() {
      const url = `${baseApiUrl}/trocaturno`;
      axios(url).then((res) => {
        this.turnos = res.data.count;
      });
    },
    
    countAbono() {
      const url = `${baseApiUrl}/abonofalta`;
      axios(url).then((res) => {
        this.faltas = res.data.count;
      });
    },
    
    countOutras() {
      const url = `${baseApiUrl}/outrassolicitacoes`;
      axios(url).then((res) => {
        this.solicits = res.data.count;
      });
    },
  },
  mounted() {
    this.countServico();
    this.countHorario();
    this.countTurno();
    this.countAbono();
    this.countOutras();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.home-processos {
  padding: 20px;
}

.home-processos a {
  color: black;
  text-decoration: none;
}

.card {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 8px;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 300px;
  height: 120px;
  background-color: rgb(226, 225, 223);
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.card-icone i {
  font-size: 1.8rem;
  /* color: rgb(73, 179, 179); */
}

.card-info {
  text-align: end;
}

.card-info .titulo-processo {
  font-size: 1.2rem;
}

.card-info h2 {
  flex: 1;
  font-size: 1.6rem;
}
</style>

