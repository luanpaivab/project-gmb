<template>
  <div class="user-admin">
     <b-form>
      <input type="hidden" id="user-id" v-model="user.id" />

      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="Registro Gbel:" label-for="registro-gbel">
            <b-form-input
              id="registro-gbel"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.registro_gbel"
              required
              placeholder="Registro Gbel..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Matrícula:" label-for="user-matricula">
            <b-form-input
              id="user-matricula"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.matricula"
              required
              placeholder="Matrícula..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Turma:" label-for="user-turma">
            <b-form-select
              v-model="user.turma"
              :options="opTurma"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="Nome Funcional:" label-for="user-nome-funcional">
            <b-form-input
              id="user-nome-funcional"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.nome_funcional"
              required
              placeholder="Nome Funcional..."
            />
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="Placa:" label-for="user-placa">
            <b-form-input
              id="user-placa"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.placa_classe"
              required
              placeholder="Placa..."
            />
          </b-form-group>
        </b-col>
        <!-- <b-col md="3" sn="12">
          <b-form-group
            label="Data de Admissão:"
            label-for="user-data-admissao"
          >
            <b-form-input
              id="user-data-admissao"
              type="date"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.dt_admis"
              required
              placeholder="Data de Admissão..."
            />
          </b-form-group>
        </b-col> -->
        <b-col md="3" sn="12">
          <b-form-group
            label="Decreto de Admissão:"
            label-for="user-descreto-admissao"
          >
            <b-form-input
              id="user-descreto-admissao"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.dec_nomeacao"
              required
              placeholder="Decreto de Admissão..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="Diário Oficial Nº:" label-for="user-num-diario">
            <b-form-input
              id="user-num-diario"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.diario"
              required
              placeholder="Diário Oficial Nº..."
            />
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="Sexo:" label-for="user-sexo">
            <b-form-select
              v-model="user.sexo"
              :options="opSexo"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Estado Civil:" label-for="user-estado-civil">
            <b-form-select
              v-model="user.estado_civil"
              :options="opEstadoCivil"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sn="12">
          <b-form-group label="Nome Completo:" label-for="user-nome-completo">
            <b-form-input
              id="user-nome-completo"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.name"
              required
              placeholder="Nome Completo..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Grupamento:" label-for="user-grupamento">
            <b-form-select
              v-model="user.grupamento"
              :options="opGrupamento"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group
            label="Posto de Serviço:"
            label-for="user-posto-servico"
          >
            <b-form-select
              v-model="user.posto_servico"
              :options="opPostoServ"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sn="12">
          <b-form-group label="Função:" label-for="user-funcao">
            <b-form-select
              v-model="user.funcao"
              :options="opFuncao"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="2" sn="12">
          <b-form-group label="Fator Rh:" label-for="ro-fator-rh">
            <b-form-select
              v-model="user.fator_rh"
              :options="opFatorRh"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12">
          <b-form-group label="Nacionalidade:" label-for="user-nacionalidade">
            <b-form-input
              id="user-nacionalidade"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.nacionalidade"
              required
              placeholder="Nacionalidade..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sn="12">
          <b-form-group label="Naturalidade:" label-for="user-naturalidade">
            <b-form-select
              v-model="user.naturalidade"
              :options="opNaturalidade"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <!-- <b-col md="3" sn="12">
          <b-form-group
            label="Data de nascimento:"
            label-for="user-data-nascimento"
          >
            <b-form-input
              id="user-data-nascimento"
              type="date"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.dt_nascimento"
              required
              placeholder="Data Nasc..."
            />
          </b-form-group>
        </b-col> -->
      </b-row>
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
              placeholder="(91)9..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
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
          <b-form-group label="Categoria CNH:" label-for="user-categ-cnh">
            <b-form-input
              id="user-categ-cnh"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.categ_rnh"
              required
              placeholder="A,B,A e B  ..."
            />
          </b-form-group>
        </b-col>
        <!-- <b-col md="3" sn="12">
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
        </b-col> -->
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
        <!-- <b-col md="3" sn="12">
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
        </b-col> -->
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
              v-model="user.password"
              required
              placeholder="Senha..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12" v-if="mode === 'save'">
          <b-form-group
            label="Confirmar Senha:"
            label-for="user-confirm-password"
          >
            <b-form-input
              id="user-confirm-password"
              type="password"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.confirmPassword"
              required
              placeholder="Confirmação Senha..."
            />
          </b-form-group>
        </b-col>
      </b-row>
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
        <b-col md="4" sn="12">
          <b-form-group label="Profissão Externa:" label-for="user-prof-ext">
            <b-form-input
              id="user-prof-ext"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.prof_externa"
              required
              placeholder="Profissão externa..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sn="12">
          <b-form-group label="Cursos de Capacitação:" label-for="user-curso">
            <b-form-input
              id="user-curso"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.cursos_capacit"
              required
              placeholder="Curso de Capacitação..."
            />
          </b-form-group>
        </b-col>
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
      <div class="titulo"><h2>Gerência do Administrativo</h2></div>
      <hr />
      <b-row>
        <b-col>
          <b-form-checkbox
            id="user-admin"
            v-model="user.admin"
            v-show="mode === 'save'"
            class="mt-3 mb-3"
            >Administrador</b-form-checkbox
          >
        </b-col>
        <b-col>
          <b-form-checkbox
            id="user-ativo"
            v-model="user.userAtivo"
            v-show="mode === 'save'"
            class="mt-3 mb-3"
            >Ativo</b-form-checkbox
          >
        </b-col>
      </b-row>
      <b-row>
        <b-col md="2">
          <b-form-checkbox
            id="user-porte"
            v-model="user.userPorte"
            v-show="mode === 'save'"
            class="mt-3 mb-3"
            >Porte de Arma</b-form-checkbox
          >
        </b-col>
        <b-col md="3" sn="12" v-if="user.userPorte === true">
          <b-form-group label="N Porte de Arma:" label-for="user-num-porte">
            <b-form-input
              id="user-num-porte"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.num_porte"
              required
              placeholder="N Porte de Arma..."
            />
          </b-form-group>
        </b-col>
        <b-col md="3" sn="12" v-if="user.userPorte === true">
          <b-form-group
            label="Validade Porte de Arma:"
            label-for="user-valid-porte"
          >
            <b-form-input
              id="user-valid-porte"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.valid_porte"
              required
              placeholder="Validade Porte..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3">
          <b-form-checkbox
            id="user-readaptado"
            v-model="user.readaptado"
            v-show="mode === 'save'"
            class="mt-3 mb-3"
            >Readaptado</b-form-checkbox
          >
        </b-col>
         <b-col md="4" sn="12" v-if="user.userReadaptado === true">
          <b-form-group label="Motivo da Readaptação:" label-for="user-readapt-para">
            <b-form-input
              id="user-readapt-para"
              type="text"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="user.readaptado_para"
              required
              placeholder="Motivo da Readaptação..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button variant="primary" v-if="mode === 'save'" @click="save()"
            >Salvar</b-button
          >
          <b-button variant="danger" v-if="mode === 'remove'" @click="remove()"
            >Excluir</b-button
          >
          <b-button
          v-if="mode === 'atualizar'"
          @click="Atualizando()"
          variant="warning"
          >Editar</b-button
        >
          <b-button class="ml-2" @click="reset()">Cancelar</b-button>
        </b-col>
      </b-row>
    </b-form>
    <hr /> 
    <b-table
      hover
      striped
      :items="users"
      :fields="fields"
      bordered="bordered"
      head-variant="dark"
      table-variant="light"
    >
      <template slot="actions" slot-scope="data">
        <b-button variant="warning" @click="loadUser(data.item, 'atualizar')" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadUser(data.item, 'remove')">
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
  name: "UserAdmin",
  data: function () {
    return {
      mode: "save",
      registro:'',
      name:'',
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
      opTurma: [
        { value: undefined, text: "Selecione..." },
        { value: "1ª Turma", text: "1ª Turma" },
        { value: "2ª Turma", text: "2ª Turma" },
        { value: "3ª Turma", text: "3ª Turma" },
        { value: "4ª Turma", text: "4ª Turma" },
        { value: "5ª Turma", text: "5ª Turma" },
        { value: "6ª Turma", text: "6ª Turma" },
        { value: "7ª Turma", text: "7ª Turma" },
        { value: "8ª Turma", text: "8ª Turma" },
        { value: "9ª Turma", text: "9ª Turma" },
        { value: "10ª Turma", text: "10ª Turma" },
        { value: "11ª Turma", text: "11ª Turma" },
        { value: "12ª Turma", text: "12ª Turma" },
      ],
      opSexo: [
        { value: undefined, text: "Selecione" },
        { value: "Masculino", text: "Masculino" },
        { value: "Feminino", text: "Feminino" },
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
      opNaturalidade: [
        { value: undefined, text: "Selecione...." },
        { value: "AC", text: "AC" },
        { value: "AL", text: "AL" },
        { value: "AP", text: "AP" },
        { value: "AM", text: "AM" },
        { value: "BA", text: "BA" },
        { value: "CE", text: "CE" },
        { value: "DF", text: "DF" },
        { value: "ES", text: "ES" },
        { value: "GO", text: "GO" },
        { value: "MA", text: "MA" },
        { value: "MT", text: "MT" },
        { value: "MS", text: "MS" },
        { value: "MG", text: "MG" },
        { value: "PA", text: "PA" },
        { value: "PB", text: "PB" },
        { value: "PR", text: "PR" },
        { value: "PE", text: "PE" },
        { value: "PI", text: "PI" },
        { value: "RJ", text: "RJ" },
        { value: "RN", text: "RN" },
        { value: "RS", text: "RS" },
        { value: "RO", text: "RO" },
        { value: "RR", text: "RR" },
        { value: "SC", text: "SC" },
        { value: "SP", text: "SP" },
        { value: "SE", text: "SE" },
        { value: "TO", text: "TO" },
      ],
      opFatorRh: [
        { value: undefined, text: "Selecione" },
        { value: "A+", text: "A+" },
        { value: "A-", text: "A-" },
        { value: "B+", text: "B+" },
        { value: "B-", text: "B-" },
        { value: "AB+", text: "AB+" },
        { value: "AB-", text: "AB-" },
        { value: "O+", text: "O+" },
        { value: "O-", text: "O-" },
      ],
    };
  },
  methods: {
    loadUsers() {
      const url = `${baseApiUrl}/users?page=${this.page}&registro=${this.registro}&name=${this.name}`;
      axios(url).then((res) => {
        this.users = res.data.data;
        this.count = res.data.count;
        this.limit = res.data.limitStats;
      });
    },
    reset() {
      this.mode = "save";
      this.user = {};
      this.loadUsers();
    },
    save() {
       axios
        .post(`${baseApiUrl}/users`, this.user)
        .then(() => {
          this.reset();
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
    },
    remove() {
      const id = this.user.id;
      axios
        .delete(`${baseApiUrl}/users/${id}`)
        .then(() => {
          this.reset();
        })
        .catch(showError);
    },
    Atualizando() {
      const id = this.user.id;

      axios
        .put(`${baseApiUrl}/users/${id}`, this.user)
        .then(() => {
          this.reset();
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
      window.scrollTo(0, 0);
    },
    loadUser(user, mode = "save") {
      this.mode = mode;
      axios
        .get(`${baseApiUrl}/users/${user.id}`)
        .then((res) => (this.user = res.data));
      window.scrollTo(0, 0);
    },
  },
  watch: {
    page() {
      this.loadUsers();
    },
  },
  mounted() {
    this.loadUsers();
  },
};
</script>

<style>
</style>


