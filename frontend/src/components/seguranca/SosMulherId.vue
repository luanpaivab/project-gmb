<template>
  <div class="sos-mulher-id">
    <PageTitle
      icon="fa fa-folder"
      text=" Relatório de Denuncia - "
      :main="denuncia.id"
      sub=""
    />
    <hr />
    <b-container fluid="sm">
      <div class="titulo">
        <h2>Relatório de SOS Mulher</h2>
      </div>
      <hr />
      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="Data/Hora do Sistema:" label-for="dt-sistema">
            <b-form-input
              class="text-gbel"
              id="dt-sistema"
              type="text"
              v-model="denuncia.dth_sistema"
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
              v-model="denuncia.dt_ocorrencia"
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
              v-model="denuncia.hr_ocorrencia"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3">
          <b-form-group label="Tipo de Agressão:" label-for="tipo-agressao">
            <b-form-input
              class="text-gbel"
              id="tipo-agressao"
              type="text"
              v-model="denuncia.tipo_agressao"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Raça Suspeito:" label-for="etnia-suspeito">
            <b-form-input
              class="text-gbel"
              id="etnia-suspeito"
              type="text"
              v-model="denuncia.classif_racial"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Agressor:" label-for="agressor">
            <b-form-input
              class="text-gbel"
              id="agressor"
              type="text"
              v-model="denuncia.causador_agressao"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="pt-2 pb-3">
        <b-col sm="0" class="ml-3">
          <label for="textarea-default">Relato:</label>
        </b-col>
        <b-col sm="8">
          <b-form-textarea
            class="text-gbel"
            id="textarea-default"
            v-model="denuncia.relato"
            :readonly="true"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="2">
          <b-form-group label="Estado" label-for="estado">
            <b-form-input
              class="text-gbel"
              id="estado"
              type="text"
              v-model="denuncia.estado"
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
              v-model="denuncia.cidade"
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
              v-model="denuncia.bairro"
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
              v-model="denuncia.endereco"
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
              v-model="denuncia.numero"
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
              v-model="denuncia.cep"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <div class="card-img153" v-if="img">
        <img
          :src="`${img}`"
          alt="/"
          height="210"
          width="410"
        />
      </div>
    </b-container>
  </div>
</template>

<script>
import PageTitle from "@/components/template/PageTitle";
import { baseApiUrl153 } from "../../global";
import axios from "axios";

export default {
  name: "SosMulherId",
  components: { PageTitle },
  data: function () {
    return {
      denuncia: {},
      img:''
    };
  },
  mounted() {
    const url = `${baseApiUrl153}/sosmulher/${this.$route.params.id}`;
    axios.get(url).then((res) => {
      this.denuncia = res.data;
      //console.log(res.data)
      const url = `${baseApiUrl153}/imgbel153/${res.data.id_foto}`;
      axios.get(url).then((res) => (this.img = res.data.location));
    });
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.sos-mulher-id{
  padding: 20px;
}
</style>

