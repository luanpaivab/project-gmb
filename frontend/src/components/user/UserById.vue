<template>
  <div class="user-by-id">
    <PageTitle
      icon="fa fa-user"
      text=" Matrícula - "
      :main="user.matricula"
      sub=""
    />
    <div class="content" id="content-apreensao">
      <hr />
      <div class="titulo">
        <h2>Dados Funcionais do Servidor</h2>
      </div>
      <hr />
      <b-row>
        <b-col md="3">
          <div class="test">
            <p>Nº Registro:</p>
            <div class="campo">
              {{ user.registro_gbel }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Matrícula:</p>
            <div class="campo">
              {{ user.matricula }}
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
      </b-row>

      <b-row>
        <b-col md="4">
          <div class="test">
            <p>Nome Funcional:</p>
            <div class="campo">
              {{ user.nome_funcional }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Placa:</p>
            <div class="campo">
              {{ user.placa_classe }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Data Admissão:</p>
            <div class="campo">
              {{ user.dt_admis }}
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="4">
          <div class="test">
            <p>Decreto de Admissão:</p>
            <div class="campo">
              {{ user.dec_nomeacao }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Diário Oficial:</p>
            <div class="campo">
              {{ user.diario }}
            </div>
          </div>
        </b-col>
        <b-col md="2">
          <div class="test">
            <p>Sexo:</p>
            <div class="campo">
              {{ user.sexo }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Estado Civil:</p>
            <div class="campo">
              {{ user.estado_civil }}
            </div>
          </div>
        </b-col>
      </b-row>

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
            <p>Grupamento:</p>
            <div class="campo">
              {{ user.grupamento }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Posto de Serviço:</p>
            <div class="campo">
              {{ user.posto_servico }}
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="3">
          <div class="test">
            <p>Função:</p>
            <div class="campo">
              {{ user.funcao }}
            </div>
          </div>
        </b-col>
        <b-col md="2">
          <div class="test">
            <p>Fator Rh:</p>
            <div class="campo">
              {{ user.fator_rh }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Nacionalidade:</p>
            <div class="campo">
              {{ user.nacionalidade }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Naturalidade:</p>
            <div class="campo">
              {{ user.naturalidade }}
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="4">
          <div class="test">
            <p>Data de Nascimento:</p>
            <div class="campo">
              {{ user.dt_nascimento }}
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="test">
            <p>Nº Porte de Arma:</p>
            <div class="campo">
              {{ user.num_porte }}
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="test">
            <p>Validade Porte de Arma:</p>
            <div class="campo">
              {{ user.valid_porte }}
            </div>
          </div>
        </b-col>
      </b-row>

      <hr />
      <div class="titulo">
        <h2>Dados Pessoais do Servidor</h2>
      </div>
      <hr />

      <b-row>
        <b-col md="4">
          <div class="test">
            <p>Endereço:</p>
            <div class="campo">
              {{ user.endereco }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Cidade:</p>
            <div class="campo">
              {{ user.cidade }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Bairro:</p>
            <div class="campo">
              {{ user.bairro }}
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="3">
          <div class="test">
            <p>Cep:</p>
            <div class="campo">
              {{ user.cep }}
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
            <p>Validade CNH:</p>
            <div class="campo">
              {{ user.valid_cnh }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Categoria CNH:</p>
            <div class="campo">
              {{ user.categ_rnh }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>CPF:</p>
            <div class="campo">
              {{ user.cpf }}
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="3">
          <div class="test">
            <p>RG:</p>
            <div class="campo">
              {{ user.rg }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Orgão Expeditor:</p>
            <div class="campo">
              {{ user.orgao_rg }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Data RG:</p>
            <div class="campo">
              {{ user.dt_rg }}
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="3">
          <div class="test">
            <p>Nº Título:</p>
            <div class="campo">
              {{ user.num_titulo }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Zona Eleitoral:</p>
            <div class="campo">
              {{ user.zona_titulo }}
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="test">
            <p>Seção:</p>
            <div class="campo">
              {{ user.secao_titulo }}
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="3">
          <div class="test">
            <p>Nº Reservista:</p>
            <div class="campo">
              {{ user.num_reservista }}
            </div>
          </div>
        </b-col>
        <b-col md="5">
          <div class="test">
            <p>Categoria Serviço Militar:</p>
            <div class="campo">
              {{ user.categ_militar }}
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="5">
          <div class="test">
            <p>Nome do Pai:</p>
            <div class="campo">
              {{ user.nome_pai }}
            </div>
          </div>
        </b-col>
        <b-col md="5">
          <div class="test">
            <p>Nome da Mãe:</p>
            <div class="campo">
              {{ user.nome_mae }}
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="5">
          <div class="test">
            <p>Ideologia Religiosa:</p>
            <div class="campo">
              {{ user.ideo_religiosa }}
            </div>
          </div>
        </b-col>
        <b-col md="5">
          <div class="test">
            <p>Telefone Residêncial:</p>
            <div class="campo">
              {{ user.tel_residencia }}
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
  name: "UserById",
  components: { PageTitle },
  data: function () {
    return {
      user: {},
    };
  },
  mounted() {
    const url = `${baseApiUrl}/users/${this.$route.params.id}`;
    axios
      .get(url)
      .then((res) => (this.user = res.data))
      .catch((error) => {
        alert(error.response.data.msg);
      });
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.user-by-id {
  padding: 20px;
}
</style>

