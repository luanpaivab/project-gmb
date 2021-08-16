<template>
  <div class="ficha-id">
    <PageTitle icon="fa fa-user" text=" Matrícula - " :main="user.matricula" sub="" />
    <div class="content" id="content-apreensao">
      <hr />
        <div class="titulo">
          <h2>Dados do Servidor</h2>
        </div>
      <hr />
        
        <b-row>
          <b-col md="5">
            <div class="test">
              <p>Nome Completo:</p>
              <div class="campo">
                {{ user.name }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Turma:</p>
              <div class="campo">
                {{ user.turma }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Grupamento:</p>
              <div class="campo">
                {{ user.grupamento }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <div class="test">
              <p>CNH:</p>
              <div class="campo">
                {{ user.cnh }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Validade:</p>
              <div class="campo">
                {{ user.valid_cnh }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Categoria:</p>
              <div class="campo">
                {{ user.categ_rnh }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Fone:</p>
              <div class="campo">
                {{ user.fone }}
              </div>
            </div>
          </b-col>
        </b-row>
      
      <hr />
        <div class="titulo">
          <h2>Dados Curiculares do Servidor</h2>
        </div>
      <hr />
        
        <b-row>
          <b-col md="5">
            <div class="test">
              <p>Escolaridade:</p>
              <div class="campo">
                {{ user.escolaridade }}
              </div>
            </div>
          </b-col>
          <b-col md="5">
            <div class="test">
              <p>Formação Acadêmica:</p>
              <div class="campo">
                {{ user.form_academica }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col md="12">
            <div class="test">
              <p>Profissão Externa:</p>
              <div class="campo">
                {{ user.prof_externa }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col md="12">
            <div class="test">
              <p>Cursos de Capacitação:</p>
              <div class="campo">
                {{ user.cursos_capacit }}
              </div>
            </div>
          </b-col>
        </b-row>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/template/PageTitle";
import { baseApiUrl } from "../../global";
import axios from "axios";

export default {
  name: "FichaFuncionalId",
  components: { PageTitle },
  data: function () {
    return {
      user: {},
    };
  },
  mounted() {
    const url = `${baseApiUrl}/users/${this.$route.params.id}`;
    axios.get(url).then((res) => (this.user = res.data));
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.ficha-id{
  padding:20px;
}
</style>

