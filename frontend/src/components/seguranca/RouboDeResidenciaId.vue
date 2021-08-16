<template>
  <div class="roubo-de-residencia">
    <PageTitle icon="fa fa-home" text="Relatório - " :main="roubo.id" sub="" />
    <hr />
    <b-container fluid="sm">
      <div class="titulo">
        <h2>Relatório de Roubo de Residência</h2>
      </div>
      <hr />
      <b-row>
          <b-col md="3" sn="12">
              <b-form-group label="Data/Hora do Sistema:" label-for="dt-sistema">
                <b-form-input
                    class="text-gbel"
                    id="dt-sistema"
                    type="text"
                    v-model="roubo.data_hora_sistema"
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
                    v-model="roubo.data_ocorrencia"
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
                    v-model="roubo.hora_ocorrencia"
                    required
                    :readonly="true"
                    />
              </b-form-group>
          </b-col>
      </b-row>
      <b-row>
        <b-col md="3">
          <b-form-group label="Arma do Suspeito:" label-for="arma-suspeito">
            <b-form-input
              class="text-gbel"
              id="arma-suspeito"
              type="text"
              v-model="roubo.tipo_armamento"
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
              v-model="roubo.classificacao_racial"
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
              v-model="roubo.classificacao_genero"
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
            v-model="roubo.relato"
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
              v-model="roubo.estado"
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
              v-model="roubo.cidade"
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
              v-model="roubo.bairro"
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
              v-model="roubo.endereco"
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
              v-model="roubo.numero"
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
              v-model="roubo.cep"
              required
              :readonly="true"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import { baseApiUrl153 } from '../../global'
import axios from 'axios'

export default {
    name: "RouboDeResidencia",
    components: { PageTitle },
    data: function () {
        return {
            roubo: {}
        }
    },
    mounted() {
        const url = `${baseApiUrl153}/rouboderesidencia/${this.$route.params.id}`
        axios.get(url).then((res) => (this.roubo = res.data))
    }
};
</script>

<style>
.roubo-de-residencia{
  padding: 20px;
}
</style>