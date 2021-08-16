<template>
  <div class="ro-admin">
    <b-form>
      <input type="hidden" id="ro-id" v-model="ro.id" />

      <div class="titulo"><h2>Identidicação do Registro de Ocorência</h2></div>

      <hr />

      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="Data Sistema:" label-for="ro-dtSistema">
            <b-form-input
              id="ro-dtSistema"
              type="date"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.dtSistema"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Data da Ocorência:" label-for="ro-dtOcorrencia">
            <b-form-input
              id="ro-dtOcorrencia"
              type="date"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.dtOcorrencia"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="Hora da Chamada:" label-for="ro-hrChamada">
            <b-form-input
              id="ro-hrChamada"
              type="time"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.hrChamada"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="Hora de Início:" label-for="ro-inOcorrencia">
            <b-form-input
              id="ro-inOcorrencia"
              type="time"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.inOcorrencia"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="Hora de término:" label-for="ro-termOcorrencia">
            <b-form-input
              id="ro-termOcorrencia"
              type="time"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.termOcorrencia"
              required
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="4" sn="12">
          <b-form-group label="Solicitante:" label-for="ro-solicit">
            <b-form-input
              id="ro-solicit"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.solicit"
              required
              placeholder="Solicitante..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Documento:" label-for="ro-doc">
            <b-form-input
              id="ro-doc"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.doc"
              required
              placeholder="Documento..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Telefone:" label-for="ro-tel">
            <b-form-input
              id="ro-tel"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.tel"
              required
              placeholder="Telefone..."
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="8" sn="12">
          <b-form-group label="Endereço:" label-for="ro-endOcorrencia">
            <b-form-input
              id="ro-endOcorrencia"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.endOcorrencia"
              required
              placeholder="Endereço..."
            />
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="Estado:" label-for="ro-estadoOcorrencia">
            <b-form-input
              id="ro-estadoOcorrencia"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.estadoOcorrencia"
              required
              placeholder="Estado..."
            />
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="Cidade:" label-for="ro-cidadeOcorrencia">
            <b-form-input
              id="ro-cidadeOcorrencia"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.cidadeOcorrencia"
              required
              placeholder="Cidade..."
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="4" sn="12">
          <b-form-group label="Bairro:" label-for="ro-bairroOcorrencia">
            <b-form-input
              id="ro-bairroOcorrencia"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.bairroOcorrencia"
              required
              placeholder="Bairro..."
            />
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="Número:" label-for="ro-numOcorrencia">
            <b-form-input
              id="ro-numOcorrencia"
              type="number"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.numOcorrencia"
              required
              placeholder="Número..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="CEP:" label-for="ro-cepOcorrencia">
            <b-form-input
              id="ro-cepOcorrencia"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.cepOcorrencia"
              required
              placeholder="Cep..."
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="2" sn="12">
          <b-form-group label="Código:" label-for="ro-codOcorrencia">
            <b-form-input
              id="ro-codOcorrencia"
              type="number"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.codOcorrencia"
              required
              placeholder="Código..."
            />
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="Natureza:" label-for="ro-naturezaOcorrencia">
            <b-form-input
              id="ro-naturezaOcorrencia"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.naturezaOcorrencia"
              required
              placeholder="Natureza..."
            />
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="Meio da Chamada:" label-for="ro-meioChamada">
            <b-form-select
              v-model="ro.meioChamada"
              :options="opMeioChamada"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12" v-if="ro.meioChamada === 'outros'">
          <b-form-group label="Outros:" label-for="ro-meioChamada">
            <b-form-input
              id="ro-meioChamada"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.meioChamadaOutros"
              required
              placeholder="Meio chamada..."
            />
          </b-form-group>
        </b-col>
      </b-row>

      <hr />

      <div class="titulo"><h2>Partes Envolvidas na Ocorência</h2></div>

      <hr />

      <b-row>
        <b-col md="4" sn="12">
          <b-form-group
            label="Autor Presumível (1ª Parte):"
            label-for="ro-autorPres"
          >
            <b-form-input
              id="ro-autorPres"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.autorPres"
              required
              placeholder="Nome do Autor..."
            />
          </b-form-group>
        </b-col>
        <b-col md="8" sn="12">
          <b-form-group
            label="Endereço do autor Presumível:"
            label-for="ro-endAutor"
          >
            <b-form-input
              id="ro-endAutor"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.endAutor"
              required
              placeholder="Endereço (rua, passagem, av.)..."
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="Gênero do Autor:" label-for="ro-genAutor">
            <b-form-input
              id="ro-genAutor"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.genAutor"
              required
              placeholder="Gênero..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Documento do Autor:" label-for="ro-docAutor">
            <b-form-input
              id="ro-docAutor"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.docAutor"
              required
              placeholder="RG/CPF..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sn="12">
          <b-form-group label="Vítima (2ª Parte):" label-for="ro-nomeVitima">
            <b-form-input
              id="ro-nomeVitima"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.nomeVitima"
              required
              placeholder="Nome do Vítima..."
            />
          </b-form-group>
        </b-col>
        <b-col md="8" sn="12">
          <b-form-group label="Endereço da Vitima:" label-for="ro-endVitima">
            <b-form-input
              id="ro-endVitima"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.endVitima"
              required
              placeholder="Endereço (rua, passagem, av.)..."
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="Gênero da Vítima:" label-for="ro-genVitima">
            <b-form-input
              id="ro-genVitima"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.genVitima"
              required
              placeholder="Gênero..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Documento da Vítima:" label-for="ro-docVitima">
            <b-form-input
              id="ro-docVitima"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.docVitima"
              required
              placeholder="RG/CPF..."
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6" sn="12">
          <b-form-group
            label="Local de Encaminhamento do Autor Presumível:"
            label-for="ro-localAutor"
          >
            <b-form-input
              id="ro-localAutor"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.localAutor"
              required
              placeholder="Local de encaminhamento..."
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sn="12">
          <b-form-group
            label="Local de Encaminhamento da Vítima:"
            label-for="ro-localVitima"
          >
            <b-form-input
              id="ro-localVitima"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.localVitima"
              required
              placeholder="Local de encaminhamento..."
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6" sn="12">
          <b-form-group label="Apoio Recebido:" label-for="ro-apoioRecebido">
            <b-form-input
              id="ro-apoioRecebido"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.apoioRecebido"
              required
              placeholder="Apoio..."
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sn="12">
          <b-form-group label="Descrição do Apoio:" label-for="ro-descApoio">
            <b-form-input
              id="ro-descApoio"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="ro.descApoio"
              required
              placeholder="Descreva..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sn="12">
          <b-form-group
            v-if="mode === 'save'"
            label="Responsável"
            label-for="ro-userId"
          >
            <b-form-select
              id="ro-userId"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              :options="users"
              v-model="ro.userId"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button variant="primary" v-if="mode === 'save'" @click="save"
            >Salvar</b-button
          >
          <b-button variant="danger" v-if="mode === 'remove'" @click="remove"
            >Excluir</b-button
          >
          <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-col>
      </b-row>
    </b-form>
    <hr>
    <b-table hover striped :items="ros" :fields="fields"
      bordered="bordered" head-variant="dark" table-variant="light">
      <template slot="actions" slot-scope="data">
        <b-button variant="warning" @click="loadRo(data.item)" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadRo(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
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
import { baseApiUrl, showError } from "../../global";
import axios from "axios";

export default {
  name: "RoAdmin",
  data: function () {
    return {
      opMeioChamada: [
        { value: "153", text: "Central 153" },
        { value: "190", text: "Central 190" },
        { value: "outros", text: "outros" },
      ],
      meioChamadaOutros: "",
      mode: "save",
      ro: {},
      ros: [],
      categories: [],
      users: [],
      page: 1,
      limit: 0,
      count: 0,
      fields: [
        { key: "id", label: "Num Registro", sortable: true },
        { key: "solicit", label: "Solicitante", sortable: true },
        { key: "doc", label: "Documento", sortable: true },
        { key: "naturezaOcorrencia", label: "natureza", sortable: true },
        { key: "endOcorrencia", label: "Local", sortable: true },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadRos() {
      const url = `${baseApiUrl}/ros?page=${this.page}`;
      axios.get(url).then((res) => {
        //this.ros = res.data
        this.ros = res.data.data;
        this.count = res.data.count;
        this.limit = res.data.limit;
      });
    },
    reset() {
      this.mode = "save";
      this.ro = {};
      this.loadRos();
    },
    save() {
      const method = this.ro.id ? "put" : "post";
      const id = this.ro.id ? `/${this.ro.id}` : "";
      axios[method](`${baseApiUrl}/ros${id}`, this.ro)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.ro.id;
      axios
        .delete(`${baseApiUrl}/ros/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadRo(ro, mode = "save") {
      this.mode = mode;
      axios
        .get(`${baseApiUrl}/ros/${ro.id}`)
        .then((res) => (this.ro = res.data));
    },
    loadCategories() {
      const url = `${baseApiUrl}/categories`;
      axios.get(url).then((res) => {
        this.categories = res.data.map((category) => {
          return { value: category.id, text: category.path };
        });
      });
    },
    loadUsers() {
      const url = `${baseApiUrl}/users`;
      axios.get(url).then((res) => {
        this.users = res.data.data.map((user) => {
          return { value: user.id, text: user.email };
        });
      });
    },
  },
  watch: {
    page() {
      this.loadRos();
    },
  },
  mounted() {
    this.loadUsers();
    this.loadCategories();
    this.loadRos();
  },
};
</script>

<style>
.titulo {
  color: rgb(10, 10, 10);
  flex-grow: 1;
  text-align: center;
}

.titulo h2 {
  font-size: 1.6rem;
}
</style>
