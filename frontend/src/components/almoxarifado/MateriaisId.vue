<template>
  <div class="almoxarifao-materiais-id">
    <div id="print-almoxarifao-materiais">
      <PageTitle
        icon="fa fa-file-o"
        text=" Registro de Requisição - "
        :main="material.id"
        sub=""
      
      />
      <div class="imprimir">
        <b-button variant="primary" @click="() => CriaPDF()">
          <i class="fa fa-print"></i>
        </b-button>
      </div>

      <div v-if="material.state === 'ERROR' && estado_texto === true">
        <b-alert show variant="danger">
          <h4 class="alert-heading">
            Documento com Erro! Verificado por -
            <strong> {{ material.responsavel }}</strong>
          </h4>
          <b-form-textarea
            id="textarea"
            placeholder="Relate o erro..."
            v-model="material.state_description"
            rows="4"
          ></b-form-textarea>
          <b-button
            class="mt-2"
            variant="primary"
            @click="Atualizando(), (estado_texto = false), (estado_fixo = true)"
          >
            Salvar
          </b-button>
          <b-button
            class="mt-2"
            variant="secondary"
            v-on:click="(material.state = ''), (material.state_description = '')"
            @click="() => Atualizando()"
          >
            Cancelar
          </b-button>
        </b-alert>
      </div>

      <div v-if="material.state === 'ERROR' && estado_fixo === true" class="alerta">
        <b-alert show variant="danger">
          <h4 class="alert-heading">Documento com Erro! Verificado por -</h4>
          <p>{{ material.state_description }}</p>
          <b-button
            class="mt-2"
            variant="secondary"
            @click="estado_texto = true, estado_fixo = false"
          >
            Editar
          </b-button>
        </b-alert>
      </div>
      <div v-if="material.state === 'OK'">
        <b-alert show variant="success">
          Documento Aceito! Verificado por -
        </b-alert>
      </div>

      <div class="content" id="content-material">
        
        <hr />
        <div class="titulo">
          <h2>Identificação do Servidor</h2>
        </div>
        <hr />
        
        <b-row>
          <b-col md="2">
            <div class="test">
              <p>Nº.Registro:</p>
              <div class="campo">
                {{ material.id }}
              </div>
            </div>
          </b-col>
          <b-col md="5">
            <div class="test">
              <p>Data do Sistema:</p>
              <div class="campo">
                {{ material.dth_sist }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Data da Requisição:</p>
              <div class="campo">
                {{ material.dt_solicitacao }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="5">
            <div class="test">
              <p>Nome:</p>
              <div class="campo">
                {{ material.servidor }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Matrícula:</p>
              <div class="campo">
                {{ material.matricula }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Placa:</p>
              <div class="campo">
                {{ material.placa }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="5">
            <div class="test">
              <p>Posto:</p>
              <div class="campo">
                {{ material.posto }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Inspetoria:</p>
              <div class="campo">
                {{ material.inspetoria }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <hr />
        <div class="titulo">
          <h2>Materiais Solicitados</h2>
        </div>
        <hr />

        <b-row>
          <b-col md="12">
            <div class="test">
              <p>Descrição:</p>
              <div class="campo">
                {{ material.descricao }}
              </div>
            </div>
          </b-col>
         
        </b-row>
        <div class="card-ass" v-if="img">
          <img
            :src="`${url}/assinaturas/${img.filename}`"
            alt="/"
            height="210"
            width="410"
          />
          <p>______________________________________________</p>
          <p>Ass. Servidor</p>
        </div>
      </div>
    </div>
    <b-col>
      <b-button
        class="mr-3"
        variant="success"
        v-on:click="(material.state = 'OK'), (material.state_description = '')"
        @click="() => Atualizando()"
      >
        <i class="fa fa-check-square"></i>
      </b-button>
      <b-button
        class="mr-3"
        variant="danger"
        v-on:click="material.state = 'ERROR'"
        @click="Atualizando(), (estado_texto = true), estado_fixo = false"
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
import { baseApiUrl } from "../../global";
import axios from "axios";
import PageTitle from "../template/PageTitle";

export default {
  name: "MateriaisId",
  components: { PageTitle },
  data: function () {
    return {
      material: {},
      estado_texto: false,
      estado_fixo: true,
      logo: require("../../assets/gmblogoatual.png"),
      novalogo: require("../../assets/logoprefeitura2.png"),
      img: null,
      url:"http://localhost:3001"
    };
  },
  methods: {
    loadMaterial() {
      const url = `${baseApiUrl}/materiais/${this.$route.params.id}`;
      axios.get(url).then((res) => {
        this.material = res.data;

        const url = `${baseApiUrl}/assinatura/${res.data.id_user_register}`;
        axios.get(url).then((res) => {this.img = res.data;
          // console.log(res.data)
        });
      });
    },
    Atualizando() {
      const id = this.material.id;

      axios
        .put(`${baseApiUrl}/materiais/${id}`, this.material)
        .then()
        .catch((error) => {
          alert(error.response.data.msg);
        });
      window.scrollTo(0, 0);
    },
    CriaPDF() {
      var minhaTabela = document.getElementById("content-material").innerHTML;

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
        <h3>Requisição de Materiais</h3>
      </div>`);

      win.document.write(
        `<input id="printbtn" type="button" value="Imprimir documento" onclick="window.print();" >`
      );
      win.document.write(minhaTabela); // O CONTEUDO DA TABELA DENTRO DA TAG BODY
      win.document.write("</body></html>");
      win.document.close(); // FECHA A JANELA
    },
  },
  mounted() {
    this.loadMaterial();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.imprimir{
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
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

.almoxarifao-materiais-id {
  padding: 20px;
}
label {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>