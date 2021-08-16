<template>
  <div class="sim">
    <PageTitle icon="fa fa-home" main=" Sistema de Monitoramento" />
    <hr />
    <div class="add">
      <b-button variant="success" @click="mode = 'add'"
        ><i class="fa fa-plus"></i
      ></b-button>
    </div>
    <b-col md="4">
      <div class="stats">
        <Stat
          title="Ocorrências"
          :value="count"
          icon="fa fa-file"
          color="rgb(26, 12, 90);"
        />
      </div>
    </b-col>
    <b-container v-if="mode === 'add'">
      <hr />
      <div class="titulo"><h2>Identificação da Ocorência</h2></div>
      <hr />
      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="Data da Ocorência:" label-for="sim-dtOcorrencia">
            <b-form-input
              id="sim-dtOcorrencia"
              type="date"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="sim.dt_ocorrencia"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Hora da Chamada:" label-for="sim-hrChamada">
            <b-form-input
              id="sim-hr_chamada"
              type="time"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="sim.hr_chamada"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Hora da Ocorrência:" label-for="sim-termino">
            <b-form-input
              id="sim-termino"
              type="time"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="sim.hr_ocorrencia"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="4" sn="12">
          <b-form-group label="Solicitante:" label-for="sim-solicit">
            <b-form-input
              id="sim-solicit"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="sim.solicitante"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group id="input-group-3" label="Gênero:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="sim.sexo"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              :options="sexo"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="Telefone" label-for="sim-tel">
            <b-form-input
              id="sim-tel"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="sim.fone"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="8" sn="12">
          <b-form-group label="Endereço:" label-for="sim-endereco">
            <b-form-input
              id="sim-endereco"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="sim.endereco"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="4" sn="12">
          <b-form-group label="Bairro:" label-for="sim-bairro">
            <b-form-input
              id="sim-bairro"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="sim.bairro"
            />
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="Número:" label-for="sim-num">
            <b-form-input
              id="sim-num"
              type="number"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="sim.numero"
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="CEP:" label-for="sim-cep">
            <b-form-input
              id="sim-cep"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="sim.cep"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <!-- <hr>

            <div class="titulo"><h2>Partes Envolvidas na Ocorência</h2></div>

            <hr> -->

      <b-row>
        <b-col md="5" sn="12">
          <b-form-group label="Tipo de Ocorrência:" label-for="sim-suspeito">
            <b-form-input
              id="sim-suspeito"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="sim.tipo_ocorrencia"
            />
          </b-form-group>
        </b-col>
        <b-col md="4" sn="12">
          <b-form-group label="Encaminhamento:" label-for="sim-encaminhamento">
            <b-form-input
              id="sim-encaminhamento"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="sim.encaminhamento"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="9" sn="12">
          <b-form-group label="Descrição:" label-for="auto-relato">
            <b-form-textarea
              id="textarea"
              v-model="sim.descricao"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="Origem:" label-for="sim-origem">
            <b-form-input
              id="sim-origem"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="sim.origem"
            />
          </b-form-group>
        </b-col>
        <b-col md="4" sn="12">
          <b-form-group
            label="Superior de Serviço:"
            label-for="sim-faixa-etaria"
          >
            <b-form-input
              id="sim-faixa-etaria"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="sim.superior_servico"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="9" sn="12">
          <b-form-group label="Desfecho:" label-for="auto-relato">
            <b-form-textarea
              id="textarea"
              v-model="sim.desfecho"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sn="12">
          <b-form-group
            label="Deslocamento da Viatura:"
            label-for="sim-faixa-etaria"
          >
            <b-form-input
              id="sim-faixa-etaria"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="sim.deslocamento_vtr"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="Operador:" label-for="sim-faixa-etaria">
            <b-form-input
              id="sim-faixa-etaria"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.name"
              readonly="true"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="ml-0 pb-2" v-if="mode === 'add'">
        <b-button
          @click="(sim.operador = user.id), insertSim()"
          variant="success"
          >inserir</b-button
        >

        <b-button class="ml-2" @click="reset()" variant="secondary"
          >Cancelar</b-button
        >
      </b-row>
    </b-container>
    <b-row>
      <b-col md="3" class="pesq">
        <p>Pesquisar por:</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="2">
        <b-form-group label="Registro:" label-for="veiculo-registro">
          <b-form-input
            id="veiculo-registro"
            v-model="registro"
            type="search"
            placeholder="Registro..."
            style="border: 1px solid rgba(0, 0, 0, 0.8)"
          ></b-form-input>
        </b-form-group>
      </b-col>

      <b-form-group
        label="Data Inicial:"
        label-for="veiculo-dtInicial"
        class="pl-3"
      >
        <b-form-input
          id="veiculo-dtInicial"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataInicial"
        />
      </b-form-group>

      <b-form-group
        label="Data Final:"
        label-for="veiculo-dtFinal"
        class="pl-3"
      >
        <b-form-input
          id="veiculo-dtFinal"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataFinal"
        />
      </b-form-group>

      <b-form-group label="Hora Ocorrência:" label-for="hora-hora" class="pl-3">
        <b-form-input
          id="filter-hora"
          v-model="hora"
          type="search"
          placeholder="Hora..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Bairro:" label-for="bairro-bairro" class="pl-3">
        <b-form-input
          id="filter-bairro"
          v-model="bairro"
          type="search"
          placeholder="Bairro..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>
    </b-row>
    <b-row class="pl-1">
      <b-button @click="loadSims()" variant="primary" style="margin: 0 10px"
        >Pesquisar</b-button
      >
      <b-button @click="clear()" variant="danger">Limpar</b-button>
    </b-row>
    <b-table
      class="mt-4"
      striped
      bordered
      hover
      head-variant="dark"
      :items="sims"
      :fields="fields"
    >
      <template slot="links" slot-scope="data">
        <router-link :to="{ name: 'simId', params: { id: data.item.id } }">
          <i class="fa fa-file"></i>
        </router-link>
      </template>
    </b-table>
    <b-pagination
      size="md"
      v-model="page"
      :total-rows="count"
      :per-page="limit"
    />
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import { baseApiUrl } from "../../global";
import Stat from "../home/Stat";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Sim",
  components: { PageTitle, Stat },
  data: function () {
    return {
      sims: [],
      sim: {},
      page: 1,
      mode: "save",
      limit: 0,
      count: 0,
      registro: "",
      hora: "",
      dataInicial: "",
      dataFinal: "",
      bairro: "",
      tableVariant: "",
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "dt_ocorrencia", label: "Data da Ocorrência", sortable: true },
        { key: "hr_ocorrencia", label: "Hora", sortable: true },
        { key: "bairro", label: "Bairro", sortable: true },
        { key: "links", label: "Detalhes" },
      ],
      sexo: ["Feminino", "Masculino", "Outro"],
    };
  },
  computed: mapState(["user"]),
  methods: {
    loadSims() {
      const url = `${baseApiUrl}/sim?page=${this.page}&registro=${this.registro}&hora=${this.hora}&bairro=${this.bairro}&dataInicial=${this.dataInicial}&dataFinal=${this.dataFinal}`;
      axios(url)
        .then((res) => {
          this.sims = res.data.data;
          this.count = res.data.count;
          this.limit = res.data.limitStats;

          console.log(res.data.limitStats);
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
    },
    insertSim() {
      axios
        .post(`${baseApiUrl}/sim`, this.sim)
        .then(() => {
          this.reset();
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
    },
    clear() {
      this.page = 1;
      this.registro = "";
      this.dataInicial = "";
      this.dataFinal = "";
      this.hora = "";
      this.bairro = "";
      this.sims = [];
      this.loadSims();
    },
    reset() {
      this.mode = "save";
      this.sim = {};
      this.loadSims();
    },
  },
  watch: {
    $route() {
      this.sims = [];
      this.page = 1;
    },
    page() {
      this.loadSims();
    },
  },
  mounted() {
    this.loadSims();
  },
};
</script>

<style>
.sim {
  padding: 20px;
}

.pesq p {
  color: black;
  font-weight: bold;
}
</style>

