<template>
  <div class="home-alfoxarifado">
    <PageTitle icon="fa fa-book" main=" Almoxarifado GBEL" sub="" />
    <b-row class="pt-3 pl-3">
          <b-col md="4">
            <router-link to="/uniforme">
              <div class="card">
                <div class="card-icone">
                  <i class="fa fa-file" style="color: rgb(61, 78, 224)"></i>
                </div>
                <div class="card-info">
                  <span class="titulo-processo">Solicitações de Uniforme</span>
                  <span class="card-value"
                    ><h2>{{ uniforme }}</h2></span
                  >
                </div>
              </div>
            </router-link>
          </b-col>
          <b-col md="4">
            <router-link to="/materiais">
              <div class="card">
                <div class="card-icone">
                  <i class="fa fa-file" style="color: rgb(33, 131, 30)"></i>
                </div>
                <div class="card-info">
                  <span class="titulo-processo">Requisições de Materiais</span>
                  <span class="card-value"
                    ><h2>{{ materiais }}</h2></span
                  >
                </div>
              </div>
            </router-link>
          </b-col>
          <b-col md="4">
            <router-link to="/almoxarifado">
              <div class="card">
                <div class="card-icone">
                  <i class="fa fa-file" style="color: rgb(33, 131, 30)"></i>
                </div>
                <div class="card-info">
                  <span class="titulo-processo">Estoque do Almoxarifado</span>
                  <span class="card-value"
                    ><h2>{{ estoque }}</h2></span
                  >
                </div>
              </div>
            </router-link>
          </b-col>
        </b-row>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import { baseApiUrl } from "../../global";
import axios from "axios";

export default {
  name: "HomeAlmoxarifado",
  components: { PageTitle },
  data: function () {
    return {
     uniforme: 0,
     materiais: 0,
     estoque: 0
    };
  },
  methods: {
    loadEstoque() {
      const url = `${baseApiUrl}/almoxarifado`;
      axios(url).then((res) => {
        this.estoque = res.data.count;
      });
    },
    loadUniformes() {
      const url = `${baseApiUrl}/uniforme`;
      axios(url).then((res) => {
        this.uniforme = res.data.count;
      });
    },
    loadMateriais() {
      const url = `${baseApiUrl}/materiais`;
      axios(url).then((res) => {
        this.materiais = res.data.count;
      });
    },
    },
  mounted() {
   this.loadEstoque()
   this.loadUniformes()
   this.loadMateriais()
  },
};
</script>

<style>
.home-alfoxarifado {
  padding: 20px;
}

.home-alfoxarifado a {
  text-decoration: none;
  color: #000;
}

</style>