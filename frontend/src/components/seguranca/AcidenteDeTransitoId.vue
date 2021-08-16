<template>
  <div class="acidente-transito">
    <PageTitle
      icon="fa fa-car"
      text="Relatório - "
      :main="acidente.id"
      sub=""
    />
    <hr />
    <b-container>
      <div class="titulo">
        <h2>Relatório de Acidente de Trânsito</h2>
      </div>
      <hr />
      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="Data/Hora do Sistema:" label-for="dt-sistema">
            <b-form-input
              class="text-gbel"
              id="dt-sistema"
              type="text"
              v-model="acidente.dth_sistema"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Data Ocorrência:" label-for="dt-ocorrencia">
            <b-form-input
              class="text-gbel"
              id="dt-ocorrencia"
              type="text"
              v-model="acidente.dt_ocorrencia"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Hora da Ocorrência:" label-for="hr-ocorrencia">
            <b-form-input
              class="text-gbel"
              id="hr-ocorrencia"
              type="text"
              style="width: 120px"
              v-model="acidente.hr_ocorrencia"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group label="Tipo de Acidente:" label-for="tipo-acidente">
            <b-form-input
              class="text-gbel"
              id="tipo-acidente"
              type="text"
              v-model="acidente.tipo_acidente"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="2">
          <b-form-group label="Etnia Suspeito:" label-for="etnia-suspeito">
            <b-form-input
              class="text-gbel"
              id="etnia-suspeito"
              type="text"
              v-model="acidente.classif_racial"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Gênero do Suspeito:" label-for="genero-suspeito">
            <b-form-input
              class="text-gbel"
              id="genero-suspeito"
              type="text"
              v-model="acidente.classif_genero"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="2">
          <b-form-group label="Estado" label-for="estado">
            <b-form-input
              class="text-gbel"
              id="estado"
              type="text"
              v-model="acidente.estado"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="2">
          <b-form-group label="Cidade:" label-for="cidade">
            <b-form-input
              class="text-gbel"
              id="cidade"
              type="text"
              v-model="acidente.cidade"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Bairro:" label-for="bairro">
            <b-form-input
              class="text-gbel"
              id="bairro"
              type="text"
              v-model="acidente.bairro"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group label="Endereço:" label-for="endereco">
            <b-form-input
              class="text-gbel"
              id="endereco"
              type="text"
              v-model="acidente.endereco"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="2">
          <b-form-group label="Número:" label-for="numero">
            <b-form-input
              class="text-gbel"
              id="numero"
              type="text"
              v-model="acidente.numero"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Cep:" label-for="cep">
            <b-form-input
              class="text-gbel"
              id="cep"
              type="text"
              v-model="acidente.cep"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <div class="card-img153">
        <img
          :src="`${url}/${acidente.id_foto}`"
          alt="Não foi possível renderizar a imagem!"
          height="210"
          width="410"
        />
      </div>
    </b-container>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import { baseApiUrl153 } from "../../global";
import axios from "axios";

export default {
  name: "AcidenteDeTransitoId",
  components: { PageTitle },
  data: function () {
    return {
      acidente: {},
      url: "http://localhost:3011/img153",
      img: null
    };
  },
  mounted() {
    const url = `${baseApiUrl153}/acidentetransito/${this.$route.params.id}`;
    axios.get(url).then((res) => {
      this.acidente = res.data;
      // console.log(res.data)
      // const url = `${baseApiUrl153}/imgbel153/${res.data.id_foto}`;
      // axios.get(url).then((res) => (this.img = res.data));

    });
  },
};
</script>

<style>
.acidente-transito {
  padding: 20px;
}

.text-gbel {
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.8);
}
</style>