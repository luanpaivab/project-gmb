<template>
  <div class="relatorio-ususarios">
    <div class="content-user">
      <PageTitle
        icon="fa fa-users"
        main=" Usuários Gbel"
        sub="Tabela de funcionários Gbel"
      />
      <hr />
      <b-row>
        <b-col md="2">
          <b-form-group
            label="Filtrar por:"
            label-for="filter-input"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
          >
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="2" class="my-1">
          <b-input-group size="sm">
            <b-form-checkbox
              id="user-readaptado"
              v-model="searchReadapt"
              class="mt-3 mb-3"
              >Readaptado</b-form-checkbox
            >
          </b-input-group>
        </b-col>
        <b-col md="2" class="my-1">
          <b-input-group size="sm">
            <b-form-checkbox
              id="user-porte"
              v-model="searchPorte"
              class="mt-3 mb-3"
              >Porte de Arma</b-form-checkbox
            >
          </b-input-group>
        </b-col>
        <b-col md="2" class="my-1">
          <b-input-group size="sm">
            <b-form-checkbox
              id="user-aativo"
              v-model="searchAtivo"
              class="mt-3 mb-3"
              >Ativo</b-form-checkbox
            >
          </b-input-group>
        </b-col>
        <b-col md="2" class="my-1">
          <b-input-group size="sm">
            <b-form-checkbox
              id="user-semPorte"
              v-model="searchSemPorte"
              class="mt-3 mb-3"
              >Sem Porte de Arma</b-form-checkbox
            >
          </b-input-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="Grupamento:" label-for="user-grupamento">
            <b-form-select
              v-model="searchGrupamento"
              :options="opGrupamento"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button
            variant="primary"
            class="mb-2"
            @click="
              loadGrupamento(),
                (sp = true),
                (po = true),
                (rea = true),
                (at = true)
            "
            >Pesquisar</b-button
          >
          <b-button
            variant="warning"
            class="ml-2 mb-2"
            @click="
              (searchGrupamento = undefined),
                (searchReadapt = false),
                (searchPorte = false),
                (searchSemPorte = false),
                (searchAtivo = false),
                (sp = false),
                (po = false),
                (rea = false),
                (at = false)
            "
            >Limpar</b-button
          >
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <div class="stats-user">
            <Stat
              v-if="at === true && searchReadapt === true"
              title="Readaptados"
              icon="fa fa-user"
              :value="countReadaptado"
              color="#3bc480"
            />
          </div>
        </b-col>
        <b-col md="4">
          <div class="stats-user">
            <Stat
              v-if="po === true && searchPorte === true"
              title="COM Porte de Arma"
              icon="fa fa-user"
              :value="countPorte"
              color="#3bc480"
            />
          </div>
        </b-col>
        <b-col md="4">
          <div class="stats-user">
            <Stat
              v-if="at === true && searchAtivo === true"
              title="Ativos"
              icon="fa fa-user"
              :value="countAtivos"
              color="#3bc480"
            />
          </div>
        </b-col>
        <b-col md="4">
          <div class="stats-user">
            <Stat
              v-if="sp === true && searchSemPorte === true"
              title="SEM Porte de Arma"
              icon="fa fa-user"
              :value="countSemPorte"
              color="#3bc480"
            />
          </div>
        </b-col>
        <b-col md="4">
          <div class="stats-user">
            <Stat
              v-if="searchGrupamento !== undefined && countGrupamento !== 0"
              :title="searchGrupamento"
              icon="fa fa-user"
              :value="countGrupamento"
              color="#3bc480"
            />
          </div>
        </b-col>
      </b-row>
    </div>
    <b-card-body
      id="nav-scroller"
      ref="content"
      style="position: relative; height: 80vh; overflow-y: scroll"
    >
      <!-- --------------------------------------------------------- -->

      <b-container v-if="rea === true && searchReadapt === true">
        <h2>Servidores Readaptados</h2>
        <b-table
          hover
          :items="readaptados"
          :fields="fields"
          bordered="bordered"
          head-variant="dark"
          table-variant="light"
          scroll
        >
          <template slot="links" slot-scope="data">
            <router-link
              :to="{ name: 'userById', params: { id: data.item.id } }"
            >
              Visualizar
            </router-link>
          </template>
        </b-table>
        <b-pagination
          size="md"
          v-model="pageReadaptados"
          :total-rows="countReadaptado"
          :per-page="limitReadaptados"
        />
      </b-container>
      <hr />
      <b-container v-if="at === true && searchAtivo === true">
        <h2>Servidores Ativos</h2>
        <b-table
          hover
          :items="ativos"
          :fields="fields"
          bordered="bordered"
          head-variant="dark"
          table-variant="light"
          scroll
        >
          <template slot="links" slot-scope="data">
            <router-link
              :to="{ name: 'userById', params: { id: data.item.id } }"
            >
              Visualizar
            </router-link>
          </template>
        </b-table>
        <b-pagination
          size="md"
          v-model="pageAtivos"
          :total-rows="countAtivos"
          :per-page="limitAtivos"
        />
      </b-container>
      <b-container v-if="po === true && searchPorte === true">
        <h2>Servidores Com Porte de Arma</h2>
        <b-table
          hover
          :items="portes"
          :fields="fields"
          bordered="bordered"
          head-variant="dark"
          table-variant="light"
          scroll
        >
          <template slot="links" slot-scope="data">
            <router-link
              :to="{ name: 'userById', params: { id: data.item.id } }"
            >
              Visualizar
            </router-link>
          </template>
        </b-table>
        <b-pagination
          size="md"
          v-model="pagePorte"
          :total-rows="countPorte"
          :per-page="limitPorte"
        />
      </b-container>
      <b-container v-if="sp === true && searchSemPorte === true">
        <h2>Servidores sem Porte de Arma</h2>
        <b-table
          hover
          :items="semPortes"
          :fields="fields"
          bordered="bordered"
          head-variant="dark"
          table-variant="light"
          scroll
        >
          <template slot="links" slot-scope="data">
            <router-link
              :to="{ name: 'userById', params: { id: data.item.id } }"
            >
              Visualizar
            </router-link>
          </template>
        </b-table>
        <b-pagination
          size="md"
          v-model="pageSemPorte"
          :total-rows="countSemPorte"
          :per-page="limitSemPorte"
        />
      </b-container>
      <b-container
        v-if="searchGrupamento !== undefined && countGrupamento !== 0"
      >
        <h2>Servidores no grupamento {{ searchGrupamento }}</h2>
        <b-table
          hover
          :items="grupamentos"
          :fields="fields"
          bordered="bordered"
          head-variant="dark"
          table-variant="light"
          scroll
        >
          <template slot="links" slot-scope="data">
            <router-link
              :to="{ name: 'userById', params: { id: data.item.id } }"
            >
              Visualizar
            </router-link>
          </template>
        </b-table>
        <b-pagination
          size="md"
          v-model="pageGrupamento"
          :total-rows="countGrupamento"
          :per-page="limitGrupamento"
        />
      </b-container>
    </b-card-body>
  </div>
</template>

<script>
import { baseApiUrl } from "../../global";
import Stat from "../home/Stat";
import PageTitle from "@/components/template/PageTitle";
import axios from "axios";

export default {
  name: "RelatorioUsers",
  components: { PageTitle, Stat },
  data: function () {
    return {
      rea: false, //opcao criada para o clique do botao pesquisar
      readaptados: [],
      searchReadapt: false,
      pageReadaptados: 1,
      limitReadaptados: 0,
      countReadaptado: 0,

      at: false, //opcao criada para o clique do botao pesquisar
      ativos: [],
      searchAtivo: false,
      pageAtivos: 1,
      countAtivos: 0,
      limitAtivos: 0,

      po: false, //opcao criada para o clique do botao pesquisar
      searchPorte: false,
      portes: [],
      pagePorte: 1,
      countPorte: 0,
      limitPorte: 0,

      sp: false, //opcao criada para o clique do botao pesquisar
      searchSemPorte: false,
      semPortes: [],
      pageSemPorte: 1,
      countSemPorte: 0,
      limitSemPorte: 0,

      searchGrupamento: undefined,
      grupamentos: [],
      pageGrupamento: 1,
      countGrupamento: 0,
      limitGrupamento: 0,
      fields: [
        { key: "matricula", label: "Matrícula", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "id", label: "Id", sortable: true },
        { key: "links", label: "Ações" },
      ],
      opGrupamento: [
        { value: undefined, text: "Selecione" },
        { value: "Operacional", text: "Operacional" },
        { value: "ADM-DOP", text: "ADM-DOP" },
        { value: "ADM-NTI", text: "ADM-NTI" },
        { value: "ADM-NUSP", text: "ADM-NUSP" },
        { value: "ATAC", text: "ATAC" },
        { value: "DAGUA", text: "DAGUA" },
        { value: "DABEN", text: "DABEN" },
        { value: "DAENT", text: "DAENT" },
        { value: "DAICO", text: "DAICO" },
        { value: "DAOUT", text: "DAOUT" },
        { value: "GAT", text: "GAT" },
        { value: "ROMU", text: "ROMU" },
        { value: "RONDAC", text: "RONDAC" },
      ],
    };
  },
  methods: {
    loadReadaptados() {
      const url = `${baseApiUrl}/readaptados?page=${this.pageReadaptados}`;
      axios.get(url).then((res) => {
        this.readaptados = res.data.data;
        this.countReadaptado = res.data.count;
        this.limitReadaptados = res.data.limitStats;
      }).catch(error => {
        alert(error.response.data.msg)
      });
    },

    loadAtivos() {
      const url = `${baseApiUrl}/ativos?page=${this.pageAtivos}`;
      axios.get(url).then((res) => {
        this.ativos = res.data.data.userAtivo;
        this.countAtivos = res.data.countAtivo;
        this.limitAtivos = res.data.limitStats;
      }).catch(error => {
        alert(error.response.data.msg)
      });
    },
    loadPorte() {
      const url = `${baseApiUrl}/porte?page=${this.pagePorte}`;
      axios.get(url).then((res) => {
        this.portes = res.data.data.userPorte;
        this.countPorte = res.data.countPorte;
        this.limitPorte = res.data.limitStats;
      }).catch(error => {
        alert(error.response.data.msg)
      });
    },
    loadSemPorte() {
      const url = `${baseApiUrl}/porte?page=${this.pageSemPorte}`;
      axios.get(url).then((res) => {
        this.semPortes = res.data.data.userSemPorte;
        this.countSemPorte = res.data.countSemPorte;
        this.limitSemPorte = res.data.limitStats;
      }).catch(error => {
        alert(error.response.data.msg)
      });
    },
    loadGrupamento() {
      const url = `${baseApiUrl}/grupamento/${this.searchGrupamento}?page=${this.pageGrupamento}`;
      axios.get(url).then((res) => {
        this.grupamentos = res.data.data.userGrupamento;
        this.countGrupamento = res.data.count;
        this.limitGrupamento = res.data.limitStats;
      }).catch(error => {
        alert(error.response.data.msg)
      });
    },
  },
  watch: {
    $route() {
      this.readaptados = [];
      this.pageReadaptados = 1;
      this.ativos = [];
      this.pageAtivos = 1;
      this.portes = [];
      this.pagePorte = 1;
      this.semPortes = [];
      this.pageSemPorte = 1;
      this.grupamentos = [];
      this.pageGrupamento = 1;
    },
    pageReadaptados() {
      this.loadReadaptados();
    },
    pageAtivos() {
      this.loadAtivos();
    },
    pagePorte() {
      this.loadPorte();
    },
    pageSemPorte() {
      this.loadPorte();
    },
    pageGrupamento() {
      this.loadGrupamento();
    },
  },
  mounted() {
    this.loadReadaptados();
    this.loadAtivos();
    this.loadPorte();
    this.loadSemPorte();
    this.loadGrupamento();
  },
};
</script>

<style>
.content-user {
  padding: 20px;
}

.stats-user .stat-title{
  font-weight: bold;
}
</style>