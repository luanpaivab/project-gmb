<template>
  <div class="inicio">
    <div class="page">
      <PageTitle icon="fa fa-home" main=" TESTE DAS IMAGENS" sub="" />
    </div>
    <Card
      v-for="item in imgs" :key="item.id"
      :img="item"
    />
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import Card from "./Card";
import axios from "axios";
import { baseApiUrl } from "../../global";

export default {
  name: "Imgs",
  components: { PageTitle, Card },
  data: function () {
    return {
      imgs: [],
    };
  },
  methods: {
    loadName() {
      const url = `${baseApiUrl}/upload`;
      axios.get(url).then((res) => {
        this.imgs = res.data.data;
      });
    },
  },
  mounted() {
    this.loadName();
    
    // document.getElementById("minhaImagem").src = "../../../../temp/uploads/"

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
/* .fundo-imgs {
  background-image: url("../../../../temp/uploads/8b598c8cae523205c2d53140f9b86177-Cloud-Storage.jpg");
  background-color: #cccccc;
  height: 360px;
  width: 500px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
} */

.stats {
  padding: 20px;
}

.page {
  padding-left: 20px;
}
</style>

 <!-- <ul >
      <li >
        {{ `${item.filename} |` }} 
      <div v-for="item in imgs" :key="item.filename">
        {{ `${item} |` }}
        <img :src="`../../../../temp/uploads/${item}`" 
        height="310"
          width="510"
          style="padding-top: 15px; padding-right: 20px">
      </div>-->
        <!-- <img
          src="../../../../temp/uploads/8b598c8cae523205c2d53140f9b86177-Cloud-Storage.jpg"
          id="minhaImagem"
          height="310"                                       
          width="510"
          style="padding-top: 15px; padding-right: 20px"
        /> -->
      <!-- </li>
     </ul> -->
    <!-- <div class="fundo-imgs"> -->
    <!-- <div class="stats">
        <b-row>
          <b-col md="4">
            <Stat
              title="Registros de Ocorrência"
              :value="countRos"
              icon="fa fa-file"
              color="#3bc480"
            />
          </b-col>
        </b-row>
      </div> -->
    <!-- </div> -->