<template>
  <div class="home-transporte">
    <PageTitle icon="fa fa-book" main=" Setor de Transporte" sub="" />
    <b-row class="pt-3 pl-3">
      <b-col md="4">
        <router-link to="/checklistVtr">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-taxi" style="color: rgb(73, 179, 179);"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">CheckList de Viatura</span>
              <span class="card-value"><h2>{{vtr}}</h2></span>
            </div>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link to="/checklistMoto">
          <div class="card">
            <div class="card-icone">
              <i class="fa fa-motorcycle" style="color: rgb(61, 78, 224);"></i>
            </div>
            <div class="card-info">
              <span class="titulo-processo">CheckList de Motocicleta</span>
              <span class="card-value"><h2>{{moto}}</h2></span>
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
  name: "HomeTransporte",
  components: { PageTitle },
  data: function(){
    return{
      vtr:0,
      moto:0,

    }
  },
  methods: {
    countVtr() {
      const url = `${baseApiUrl}/checklistvtr`;
      axios(url).then((res) => {
        this.vtr = res.data.count;
      });
    },
    
    countMoto() {
      const url = `${baseApiUrl}/checklistmoto`;
      axios(url).then((res) => {
        this.moto = res.data.count;
      });
    },
  },
  mounted() {
    this.countVtr();
    this.countMoto();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.home-transporte {
  padding: 20px;
}

.home-transporte a {
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
  width: 320px;
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

