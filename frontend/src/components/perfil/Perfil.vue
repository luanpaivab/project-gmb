<template>
  <div class="user-perfil">
    <PageTitle icon="fa fa-user-circle" main=" Perfil de Usuário"/>
        <hr>
    <b-col md="5">
      <div class="stats">
        <Stat
          :title="user.name"
          :value="user.matricula"
          icon="fa fa-user"
          color="#556fa8"
        />
      </div>
    </b-col>
    <b-form>
      <input type="hidden" id="user-id" v-model="user.id" />

      <div class="titulo"><h2>Dados Pessoais do Servidor</h2></div>
      <hr />
      <b-row>
        <b-col md="5" sn="12">
          <b-form-group label="Endereço:" label-for="user-endereco">
            <b-form-input
              id="user-endereco"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.endereco"
              required
              placeholder="Endereço..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Cidade:" label-for="user-cidade">
            <b-form-input
              id="user-cidade"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.cidade"
              required
              placeholder="Cidade..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Bairro:" label-for="user-bairro">
            <b-form-input
              id="user-bairro"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.bairro"
              required
              placeholder="Bairro..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="CEP:" label-for="user-cep">
            <b-form-input
              id="user-cep"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.cep"
              required
              placeholder="Cep..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Fone:" label-for="user-tel">
            <b-form-input
              id="user-tel"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.fone"
              required
              placeholder="Fone..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="CNH:" label-for="user-cnh">
            <b-form-input
              id="user-cnh"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.cnh"
              required
              placeholder="CNH..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Validade CNH:" label-for="user-validade-cnh">
            <b-form-input
              id="user-validade-cnh"
              type="date"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.valid_cnh"
              required
              placeholder="Validade CNH..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="CPF:" label-for="user-cpf">
            <b-form-input
              id="user-cpf"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.cpf"
              required
              placeholder="CPF..."
            />
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="RG:" label-for="user-rg">
            <b-form-input
              id="user-rg"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.rg"
              required
              placeholder="RG..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Órgão Exp:" label-for="user-orgao-exp">
            <b-form-input
              id="user-orgao-exp"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.orgao_rg"
              required
              placeholder="Órgão Exp..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Data Exp:" label-for="user-dt-exp">
            <b-form-input
              id="user-dt-exp"
              type="date"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.dt_rg"
              required
              placeholder="Data Exp..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="N Título Eleitoral:" label-for="user-num-titulo">
            <b-form-input
              id="user-num-titulo"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.num_titulo"
              required
              placeholder="Título..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Zona Eleitoral:" label-for="user-zona-titulo">
            <b-form-input
              id="user-zona-titulo"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.zona_titulo"
              required
              placeholder="Zona Eleitoral..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Seção Eleitoral:" label-for="user-secao-titulo">
            <b-form-input
              id="user-secao-titulo"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.secao_titulo"
              required
              placeholder="Seção..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="2" sn="12">
          <b-form-group label="N Reservista:" label-for="user-num-reservista">
            <b-form-input
              id="user-num-reservista"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.num_reservista"
              required
              placeholder="N Reservista..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group
            label="Categoria Serviço Militar:"
            label-for="user-categ-militar"
          >
            <b-form-input
              id="user-categ-militar"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.categ_militar"
              required
              placeholder="Categoria Militar..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="5" sn="12">
          <b-form-group label="Nome do Pai:" label-for="user-nome-pai">
            <b-form-input
              id="user-nome-pai"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.nome_pai"
              required
              placeholder="Nome do Pai..."
            />
          </b-form-group>
        </b-col>
        <b-col md="5" sn="12">
          <b-form-group label="Nome da Mãe:" label-for="user-nome-mae">
            <b-form-input
              id="user-nome-mae"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.nome_mae"
              required
              placeholder="Nome da Mãe..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="5" sn="12">
          <b-form-group label="E-mail Institucional:" label-for="user-email">
            <b-form-input
              id="user-email"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.email"
              required
              placeholder="E-mail..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Senha:" label-for="user-password">
            <b-form-input
              id="user-password"
              type="password"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.confirmPassword"
              required
              placeholder="Senha..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <hr>
      <div class="titulo"><h2>Dados Acadêmicos do Servidor</h2></div>
      <hr />
      <b-row>
        <b-col md="4" sn="12">
          <b-form-group label="Escolaridade:" label-for="user-escolaridade">
            <b-form-input
              id="user-escolaridade"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.escolaridade"
              required
              placeholder="Escolaridade..."
            />
          </b-form-group>
        </b-col>
        <b-col md="4" sn="12">
          <b-form-group label="Formação Acadêmica:" label-for="user-form-acad">
            <b-form-input
              id="user-form-acad"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.form_academica"
              required
              placeholder="Formação Acadêmica..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sn="12">
          <b-form-group label="Profissão Externa:" label-for="user-prof-ext">
            <b-form-textarea
              id="textarea"
              v-model="user.prof_externa"
              rows="4"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col md="6" sn="12">
          <b-form-group label="Cursos de Capacitação:" label-for="user-curso">
            <b-form-textarea
              id="textarea"
              v-model="user.cursos_capacit"
              rows="4"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sn="12">
          <b-form-group label="Ideologia Religiosa:" label-for="user-ideo-reg">
            <b-form-input
              id="user-ideo-reg"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.ideo_religiosa"
              required
              placeholder="Ideologia Religiosa..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Telefone Residencial:" label-for="user-tel">
            <b-form-input
              id="user-tel"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.tel_residencia"
              required
              placeholder="Telefone Residencial..."
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
    <b-button @click="loadUser()">
        carregar
    </b-button>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "../../global";
import PageTitle from '../template/PageTitle'
import Stat from '../home/Stat'
import axios from "axios";

export default {
  name: "UserAdmin",
  components: { PageTitle, Stat },
  data: function () {
    return {
      mode: "save",
      user: {},
      users: [],
      page: 1,
      limit: 0,
      count: 0,
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        {
          key: "admin",
          label: "Administrador",
          sortable: true,
          formatter: (value) => (value ? "Sim" : "Não"),
        },
        { key: "actions", label: "Ações" },
      ],
      opEstadoCivil: [
        { value: undefined, text: "Selecione" },
        { value: "Solteiro(a)", text: "Solteiro(a)" },
        { value: "Casado(a)", text: "Casado(a)" },
        { value: "Viúvo(a)", text: "Viúvo(a)" },
        { value: "Divorciado(a)", text: "Casado(a)" },
        { value: "Separado(a)", text: "Separado(a)" },
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
      opPostoServ: [
        { value: undefined, text: "Selecione..." },
        { value: "Administrativo", text: "Administrativo" },
        { value: "ATAC", text: "ATAC" },
        { value: "DAGUA", text: "DAGUA" },
        { value: "DABEN", text: "DABEN" },
        { value: "DAENT", text: "DAENT" },
        { value: "DAICO", text: "DAICO" },
        { value: "DAOUT", text: "DAOUT" },
        { value: "GAT", text: "GAT" },
        { value: "Pça-Dorothy-Stang", text: "Pça-Dorothy-Stang" },
        { value: "Pça-Dom Alb. Ramos", text: "Pça-Dom Alb. Ramos" },
        { value: "Pça-B. Campos", text: "Pça-B. Campos" },
        { value: "Pça Republica", text: "Pça Republica" },
        { value: "ROMU", text: "ROMU" },
        { value: "RONDAC", text: "RONDAC" },
      ],
      opFuncao: [
        { value: undefined, text: "Selecione..." },
        { value: "Administrativo", text: "Administrativo" },
        { value: "Motorista", text: "Motorista" },
        { value: "Motorista de Viatura", text: "Motorista de Viatura" },
        { value: "Auxiliar de Viatura", text: "Auxiliar de Viatura" },
        { value: "Motopatrulheiro", text: "Motopatrulheiro" },
      ],
    };
  },
  methods: {
    loadUsers() {
      const url = `${baseApiUrl}/users?page=${this.page}`;
      axios.get(url).then((res) => {
        this.users = res.data.data;
        this.count = res.data.count;
        this.limit = res.data.limit;
      });
    },
    reset() {
      this.mode = "save";
      this.user = {};
      this.loadUsers();
    },
    save() {
      const method = this.user.id ? "put" : "post";
      const id = this.user.id ? `/${this.user.id}` : "";
      axios[method](`${baseApiUrl}/users${id}`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    
    loadUser(user) {
      this.user = { ...user };
      window.scrollTo(0, 0);
    },
  },
  watch: {
    page() {
      this.loadUsers();
    },
  },
  mounted() {
    const url = `${baseApiUrl}/users/${this.$route.params.id}`;
    axios.get(url).then((res) => (this.user = res.data));
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.user-perfil{
    padding: 20px;
}
</style>


