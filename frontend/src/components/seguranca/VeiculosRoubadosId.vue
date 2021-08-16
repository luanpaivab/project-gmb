<template>
  <div class="relatorio-veiculos-Id">
    <PageTitle
      icon="fa fa-folder"
      text=" Relatório de Roubo - "
      :main="veiculo.id"
      sub=""
    />
    <hr />
    <b-container >
      <div class="titulo">
        <h2>Relatório de Roubo de Veículo</h2>
      </div>
      <hr />
      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="Data/Hora do Sistema:" label-for="dt-sistema">
            <b-form-input
              id="dt-sistema"
              type="text"
              class="text-gbel"
              v-model="veiculo.dth_sistema"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Data Ocorrência:" label-for="dt-ocorrencia">
            <b-form-input
              id="dt-ocorrencia"
              type="text"
              class="text-gbel"
              v-model="veiculo.dt_ocorrencia"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Hora da Ocorrência:" label-for="hr-ocorrencia">
            <b-form-input
              id="hr-ocorrencia"
              type="text"
              class="text-gbel"
              style="width: 120px"
              v-model="veiculo.hr_ocorrencia"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3">
          <b-form-group label="Tipo de Veículo:" label-for="tipo-veiculo">
            <b-form-input
              id="tipo-veiculo"
              type="text"
              class="text-gbel"
              v-model="veiculo.tipo_veiculo"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Marca/Modelo:" label-for="modelo-marca">
            <b-form-input
              id="modelo-marca"
              type="text"
              class="text-gbel"
              v-model="veiculo.marca_modelo"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Placa:" label-for="placa-veiculo">
            <b-form-input
              id="placa-veiculo"
              type="text"
              class="text-gbel"
              v-model="veiculo.placa_veiculo"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Cor do Veículo:" label-for="cor-veiculo">
            <b-form-input
              id="cor-veiculo"
              type="text"
              class="text-gbel"
              v-model="veiculo.cor_veiculo"
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
              id="estado"
              type="text"
              class="text-gbel"
              v-model="veiculo.estado"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="2">
          <b-form-group label="Cidade:" label-for="cidade">
            <b-form-input
              id="cidade"
              type="text"
              class="text-gbel"
              v-model="veiculo.cidade"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Bairro:" label-for="bairro">
            <b-form-input
              id="bairro"
              type="text"
              class="text-gbel"
              v-model="veiculo.bairro"
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
              id="endereco"
              type="text"
              class="text-gbel"
              v-model="veiculo.endereco"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="2">
          <b-form-group label="Número:" label-for="numero">
            <b-form-input
              id="numero"
              type="text"
              class="text-gbel"
              v-model="veiculo.numero"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Cep:" label-for="cep">
            <b-form-input
              id="cep"
              type="text"
              class="text-gbel"
              v-model="veiculo.cep"
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
  name: "VeiculosRoubadosId",
  components: { PageTitle },
  data: function () {
    return {
      veiculo: {},
      //url: "http://localhost:3001/img153",
      img: ''
    };
  },
  mounted() {
    const url = `${baseApiUrl153}/veiculosroubados/${this.$route.params.id}`;
    axios.get(url).then((res) => {
      this.veiculo = res.data;
      //console.log(res.data)
      const url = `${baseApiUrl153}/imgbel153/${res.data.id_foto}`;
      axios.get(url).then((res) => (this.img = res.data.location));
    });
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.relatorio-veiculos-Id {
  padding: 20px;
}

.card-img153 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
</style>

