<template>
  <div class="outras-id">
    <div>
      <PageTitle
        icon="fa fa-file-o"
        text=" Solicitação - "
        :main="solicit.id"
        sub=""
      />

      <div class="imprimir">
        <b-button variant="primary" @click="() => CriaPDF()">
          <i class="fa fa-print"></i>
        </b-button>
      </div>

      <!-- Se eu estiver declarando um erro pela primeira vez, essa div aparece com uma caixa de texto para eu relatar o erro e add ao campo state description -->
      <div v-if="solicit.state === 'ERROR' && erro_n_existe === true">
        <b-alert show variant="danger">
          <h4 class="alert-heading">
            Documento com Erro! Verificado por -
            <strong> {{ solicit.responsavel.nome_funcional }}</strong>
          </h4>
          <b-form-textarea
            id="textarea"
            placeholder="Relate o erro..."
            v-model="solicit.state_description"
            rows="4"
          ></b-form-textarea>
          <b-button
            class="mt-2"
            variant="primary"
            @click="
              Atualizando(), (erro_n_existe = false), (erro_existe = true)
            "
          >
            Salvar
          </b-button>
          <b-button
            class="mt-2"
            variant="secondary"
            v-on:click="(solicit.state = ''), (solicit.state_description = '')"
            @click="() => Atualizando()"
          >
            Cancelar
          </b-button>
        </b-alert>
      </div>

      <!-- Se eu já tenho um erro relatado, então essa minha div aparece com a informção do erro que eu já relatei -->
      <div
        v-if="solicit.state === 'ERROR' && erro_existe === true"
        class="alerta"
      >
        <b-alert show variant="danger">
          <h4 class="alert-heading">
            Documento com Erro! Verificado por -
            <strong> {{ solicit.responsavel.nome_funcional }}</strong>
          </h4>
          <p>{{ solicit.state_description }}</p>
          <b-button
            class="mt-2"
            variant="secondary"
            @click="(erro_n_existe = true), (erro_existe = false)"
          >
            Editar
          </b-button>
        </b-alert>
      </div>
      <div v-if="solicit.state === 'OK'">
        <b-alert show variant="success">
          Documento Aceito! Verificado por -
          <strong> {{ solicit.responsavel.nome_funcional }}</strong>
        </b-alert>
      </div>

      <div class="content" id="content-outras">
        <hr />
        <div class="titulo">
          <h2>Processo Interno - Outras Solicitações</h2>
        </div>
        <hr />
        <b-row>
          <b-col md="3">
            <div class="test">
              <p>Nº Solicitação:</p>
              <div class="campo">
                {{ solicit.id }}
              </div>
            </div>
          </b-col>
          <b-col md="5">
            <div class="test">
              <p>Data da Solicitação:</p>
              <div class="campo">
                {{ solicit.dth_sist }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Data do Processo:</p>
              <div class="campo">
                {{ solicit.dt_processo }}
              </div>
            </div>
          </b-col>
        </b-row>
        <hr />
        <div class="titulo">
          <h2>Dados do Servidor Solitante</h2>
        </div>
        <hr />
        <b-row>
          <b-col md="6">
            <div class="test">
              <p>Placa/Nome:</p>
              <div class="campo">
                {{ solicit.solicitante }}
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="test">
              <p>Inspetoria:</p>
              <div class="campo">
                {{ solicit.inspetoria }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="6">
            <div class="test">
              <p>Fone:</p>
              <div class="campo">
                {{ solicit.fone }}
              </div>
            </div>
          </b-col>
          <b-col md="5">
            <div class="test">
              <p>Posto de Serviço:</p>
              <div class="campo">
                {{ solicit.posto_servico }}
              </div>
            </div>
          </b-col>
        </b-row>

        <hr />
        <div class="titulo pt-4">
          <h2>Dados do Serviço Remunerado</h2>
        </div>
        <hr />

        <b-row class="pt-4">
          <b-col md="12">
            <div class="test">
              <p>Solicitação:</p>
              <div class="campo">
                {{ solicit.relato_solicitacao }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="pt-4" v-if="doc">
          <b-col md="4">
            <div class="test">
              <p>Doc. Anexo:</p>
              <div class="campo">
                {{ solicit.doc_anexo }}
              </div>
            </div>
          </b-col>
        </b-row>
        <div class="campo-assinatura">
          <div class="card-ass pr-5" v-if="img">
            <img
              :src="`${url}/assinaturas/${img.filename}`"
              alt="/"
              height="210"
              width="410"
            />
            <p>______________________________________________</p>
            <p>Ass. Solicitante</p>
          </div>
        </div>
      </div>
    </div>
    <b-col>
      <b-button
        class="mr-3"
        variant="success"
        v-on:click="
          (solicit.state = 'OK'),
            (solicit.state_description = ''),
            (solicit.id_administrativo = user.id)
        "
        @click="() => Atualizando()"
      >
        <i class="fa fa-check-square"></i>
      </b-button>
      <b-button
        class="mr-3"
        variant="danger"
        v-on:click="
          (solicit.state = 'ERROR'), (solicit.id_administrativo = user.id)
        "
        @click="Atualizando(), (erro_n_existe = true), (erro_existe = false)"
      >
        <i class="fa fa-times"></i>
      </b-button>
      <b-button variant="primary" @click="() => CriaPDF()">
        <i class="fa fa-print"></i>
      </b-button>
    </b-col>
  </div>
</template>

<script>
import { baseApiUrl } from "../../../global";
import axios from "axios";
import PageTitle from "../../template/PageTitle";
import { mapState } from "vuex";

export default {
  name: "OutrasSoliciacoesId",
  components: { PageTitle },
  data: function () {
    return {
      solicit: {},
      outras: [],
      logo: require("../../../assets/gmblogoatual.png"),
      novalogo: require("../../../assets/logoprefeitura2.png"),
      doc: null,
      img: null,
      url: "http://localhost:3001",
      erro_n_existe: false,
      erro_existe: true,
    };
  },
  computed: mapState(["user"]),
  methods: {
    CriaPDF() {
      var minhaTabela = document.getElementById("content-outras").innerHTML;
      var style = "<style>";
      style =
        style +
        ` 
        #printbtn {
            bottom: 0;
            transform: translateX(calc(80vw - 97px));
            border:1px solid #25692A;
            background-color: #021641;
            color:#fff;
            border-radius:4px;
            display:inline-block;
            cursor:pointer;
            font-family:Verdana;
            font-weight:bold;
            font-size:13px;
            padding:6px 10px;
            text-decoration:none;
        }
        #printbtn:hover{
          background-color: #557aca;
        }
        @media print {
            #printbtn {
                display :  none;
            }
        }
        * {box-sizing: border-box; margin: 0; padding: 0}
        div {margin-bottom: 3px;} label {font-weight: bold;}
        .titulo, h1, h2 {text-align: center;}
        
        .test{
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

        }

        .test p{
            padding-right: 5px;
            font-weight: bold;
            color:#000;
        }

        .campo{
          padding-left: 5px; 
          color: black !important;
        }

        .campo-assinatura{
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .card-ass{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 20px;
        }

        .card-ass p{
          color: #000;
        }

        body {height: auto; width: 100vw;padding: 15px; border: 2px solid black; border-radius: 10px; font-size: 1.3rem;}
        .content{ padding: 15px;}
        .center {
          margin: auto;
          width: 60%;
          padding: 10px;
          text-align: center
        }
        .prefeitura {text-align: center; font-size: 1.3rem; font-weight: bold;}
        h1, h2, h3 {font-size: 1.2rem; font-weight: bold;}
        .logo {position: absolute; left: 5px; top: 5px; height: 120px; width: auto}
        .novalogo {position: absolute; right: 8px; margin-right: 2px; top: 5px; height: 150; width: auto}
        `;
      style = style + "</style>";
      // CRIA UM OBJETO WINDOW
      var win = window.open("", "");

      win.document.write("<html><head>");
      win.document.write(
        `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">`
      ); // <title> CABEÇALHO DO PDF.
      win.document.write(style); // INCLUI UM ESTILO NA TAB HEAD
      win.document.write("</head>");
      win.document.write("<body>");
      win.document.write(`<img class="logo" src="${this.logo}">`);
      win.document.write(`<img class="novalogo" src="${this.novalogo}">`);
      win.document.write(`
      <div class="center">
        <h1 class="prefeitura">PREFEITURA MUNICIPAL DE BELÉM</h1> 
        <h2>GUARDA MUNICIPAL DE BELÉM</h2>
        <h3>Outras Solicitações</h3>
      </div>`);

      win.document.write(
        `<input id="printbtn" type="button" value="Imprimir documento" onclick="window.print();" >`
      );
      win.document.write(minhaTabela); // O CONTEUDO DA TABELA DENTRO DA TAG BODY
      win.document.write("</body></html>");
      win.document.close(); // FECHA A JANELA
    },
    loadOutra() {
      const url = `${baseApiUrl}/outrassolicitacoes/${this.$route.params.id}`;
      axios.get(url).then((res) => {
        this.solicit = res.data;

        //console.log(res.data)
        const url = `${baseApiUrl}/assinatura/${res.data.id_ass_solicitante}`;
        axios.get(url).then((res) => {
          this.img = res.data;
          //  console.log(res.data)
        });
      });
      window.scrollTo(0, 0);
    },
    Atualizando() {
      const id = this.solicit.id;

      axios
        .put(`${baseApiUrl}/outrassolicitacoes/${id}`, this.solicit)
        .then(() => {
          this.loadOutra()
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.loadOutra();
  },
};
</script>

<style>
.outras-id {
  padding: 20px;
}

.test {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.test p {
  padding-right: 5px;
  font-weight: bold;
  color: #000;
}

.campo {
  padding-left: 5px;
}

.content {
  padding: 10px;
}

label {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>

