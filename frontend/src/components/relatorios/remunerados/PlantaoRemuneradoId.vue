<template>
  <div class="remunerados-id">
    <div >
      <PageTitle
        icon="fa fa-file-o"
        text=" Remunerado - "
        :main="remunerado.id"
        sub=""
      />
      <div class="content" id="content-remunerados">
        <hr />
        <div class="titulo">
          <h2>Solicitação do Plantão Remunerado</h2>
        </div>
        <hr />
        <b-row>
          <b-col md="3">
            <div class="test">
              <p>Nº Solicitação:</p>
              <div class="campo">
                {{ remunerado.id }}
              </div>
            </div>
          </b-col>
          <b-col md="5">
            <div class="test">
              <p>Data da Solicitação:</p>
              <div class="campo">
                {{ remunerado.dth_sist }}
              </div>
            </div>
          </b-col>
        </b-row>
        <hr />
        <div class="titulo">
          <h2>Dados do Servidor Solicitante</h2>
        </div>
        <hr />
        <b-row>
          <b-col md="6">
            <div class="test">
              <p>Nome Completo:</p>
              <div class="campo">
                {{ remunerado.solicitante }}
              </div>
            </div>
          </b-col>
          <b-col md="5">
            <div class="test">
              <p>Matrícula:</p>
              <div class="campo">
                {{ remunerado.matricula }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <div class="test">
              <p>Placa do Servidor:</p>
              <div class="campo">
                {{ remunerado.placa }}
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="test">
              <p>Inspetoria:</p>
              <div class="campo">
                {{ remunerado.inspetoria }}
              </div>
            </div>
          </b-col>
        </b-row>

        <hr>
        <div class="titulo pt-4">
          <h2>Dados do Serviço Remunerado</h2>
        </div>
        <hr>
        
        <b-row class="pt-4">
          <b-col md="4">
            <div class="test">
              <p>Data:</p>
              <div class="campo">
                {{ remunerado.dt_opcaoUM }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Horário:</p>
              <div class="campo">
                {{ remunerado.hr_opcaoUM }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Posto:</p>
              <div class="campo">
                {{ remunerado.posto_opcaoUM }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="pt-4">
          <b-col md="4">
            <div class="test">
              <p>Data:</p>
              <div class="campo">
                {{ remunerado.dt_opcaoDois }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Horário:</p>
              <div class="campo">
                {{ remunerado.hr_opcaoDois }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Posto:</p>
              <div class="campo">
                {{ remunerado.posto_opcaoDois }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="pt-4">
          <b-col md="4">
            <div class="test">
              <p>Data:</p>
              <div class="campo">
                {{ remunerado.dt_opcaoTres }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Horário:</p>
              <div class="campo">
                {{ remunerado.hr_opcaoTres }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Posto:</p>
              <div class="campo">
                {{ remunerado.posto_opcaoTres }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="pt-4">
          <b-col md="4">
            <div class="test">
              <p>Data:</p>
              <div class="campo">
                {{ remunerado.dt_opcaoQuarta }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Horário:</p>
              <div class="campo">
                {{ remunerado.hr_opcaoQuarta }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Posto:</p>
              <div class="campo">
                {{ remunerado.posto_opcaoQuarta }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="pt-4">
          <b-col md="4">
            <div class="test">
              <p>Data:</p>
              <div class="campo">
                {{ remunerado.dt_opcaoQuinta }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Horário:</p>
              <div class="campo">
                {{ remunerado.hr_opcaoQuinta }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Posto:</p>
              <div class="campo">
                {{ remunerado.posto_opcaoQuinta }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="pt-4">
          <b-col md="4">
            <div class="test">
              <p>Data:</p>
              <div class="campo">
                {{ remunerado.dt_opcaoSexta }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Horário:</p>
              <div class="campo">
                {{ remunerado.hr_opcaoSexta }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Posto:</p>
              <div class="campo">
                {{ remunerado.posto_opcaoSexta }}
              </div>
            </div>
          </b-col>
        </b-row>
        <div class="campo-assinatura">
          <div class="card-ass pr-5" v-if="img">
            <img
              :src="`${url}/uploads/${img.filename}`"
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
    <p>
      <b-button @click="() => CriaPDF()">Criar PDF</b-button>
    </p>
  </div>
</template>

<script>
import { baseApiUrl } from "../../../global";
import axios from "axios";
import PageTitle from "../../template/PageTitle";

export default {
  name: "PlantaoRemuneradoId",
  components: { PageTitle },
  data: function () {
    return {
      remunerado: {},
      remunerados: [],
      logo: require("../../../assets/gmblogoatual.png"),
      novalogo: require("../../../assets/logoprefeitura2.png"),
      img: null,
      url:"http://localhost:3001"
    };
  },
  methods: {
    CriaPDF() {
      var minhaTabela = document.getElementById("content-remunerados")
        .innerHTML;
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
        <h3>Plantão Remunerado</h3>
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
    const url = `${baseApiUrl}/remunerados/${this.$route.params.id}`;
    axios.get(url).then((res) => {
      this.remunerado = res.data;

      //console.log(res.data)
        const url = `${baseApiUrl}/upload/${res.data.id_assSolicitante}`;
        axios.get(url).then((res) => {
          this.img = res.data;
        //  console.log(res.data)
        });
    });
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.remunerados-id {
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

