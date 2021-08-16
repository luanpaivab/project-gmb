<template>
  <div class="almoxarifao-uniforme-id">
    <div id="print-almoxarifao-uniforme">
      <PageTitle
        icon="fa fa-file-o"
        text=" Registro de Solicitação - "
        :main="uniforme.id"
        sub=""
      
      />
      <div class="imprimir">
        <b-button variant="primary" @click="() => CriaPDF()">
          <i class="fa fa-print"></i>
        </b-button>
      </div>

      <div v-if="uniforme.state === 'ERROR' && estado_texto === true">
        <b-alert show variant="danger">
          <h4 class="alert-heading">
            Documento com Erro! Verificado por -
            <strong> {{ uniforme.responsavel }}</strong>
          </h4>
          <b-form-textarea
            id="textarea"
            placeholder="Relate o erro..."
            v-model="uniforme.state_description"
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
            v-on:click="(uniforme.state = ''), (uniforme.state_description = '')"
            @click="() => Atualizando()"
          >
            Cancelar
          </b-button>
        </b-alert>
      </div>

      <div v-if="uniforme.state === 'ERROR' && estado_fixo === true" class="alerta">
        <b-alert show variant="danger">
          <h4 class="alert-heading">Documento com Erro! Verificado por -</h4>
          <p>{{ uniforme.state_description }}</p>
          <b-button
            class="mt-2"
            variant="secondary"
            @click="estado_texto = true, estado_fixo = false"
          >
            Editar
          </b-button>
        </b-alert>
      </div>
      <div v-if="uniforme.state === 'OK'">
        <b-alert show variant="success">
          Documento Aceito! Verificado por -
        </b-alert>
      </div>

      <div class="content" id="content-uniforme">
        
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
                {{ uniforme.id }}
              </div>
            </div>
          </b-col>
          <b-col md="5">
            <div class="test">
              <p>Data do Sistema:</p>
              <div class="campo">
                {{ uniforme.dth_sist }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Data da Solicitação:</p>
              <div class="campo">
                {{ uniforme.dt_requerimento }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="5">
            <div class="test">
              <p>Nome:</p>
              <div class="campo">
                {{ uniforme.servidor }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Matrícula:</p>
              <div class="campo">
                {{ uniforme.matricula }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Placa:</p>
              <div class="campo">
                {{ uniforme.placa }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <hr />
        <div class="titulo">
          <h2>Uniforme</h2>
        </div>
        <hr />

        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Canícula:</p>
              <div class="campo">
                {{ uniforme.uniforme_um }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Tamanho:</p>
              <div class="campo">
                {{ uniforme.tamanho_unifUm }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Calça:</p>
              <div class="campo">
                {{ uniforme.uniforme_dois }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Tamanho:</p>
              <div class="campo">
                {{ uniforme.tamanho_unifDois }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Camiseta:</p>
              <div class="campo">
                {{ uniforme.uniforme_tres }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Tamanho:</p>
              <div class="campo">
                {{ uniforme.tamanho_unifTres }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Gandola:</p>
              <div class="campo">
                {{ uniforme.uniforme_quatro }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Tamanho:</p>
              <div class="campo">
                {{ uniforme.tamanho_unifQuatro }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Calçado:</p>
              <div class="campo">
                {{ uniforme.calcado }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Tamanho:</p>
              <div class="campo">
                {{ uniforme.tam_calcado }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Cobertura:</p>
              <div class="campo">
                {{ uniforme.cobertura }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Tamanho:</p>
              <div class="campo">
                {{ uniforme.tam_cobertura }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <hr />
        <div class="titulo">
          <h2>Acessórios</h2>
        </div>
        <hr />

        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Fiel:</p>
              <div class="campo">
                {{ uniforme.fiel }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Cinto de Nylon:</p>
              <div class="campo">
                {{ uniforme.cinto_nylon }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Cinto de Guarnição:</p>
              <div class="campo">
                {{ uniforme.cinto_guarnicao }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Capa de Colete:</p>
              <div class="campo">
                {{ uniforme.capa_colete }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Coldre:</p>
              <div class="campo">
                {{ uniforme.coldre }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Porta Algema:</p>
              <div class="campo">
                {{ uniforme.porta_algema }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Porta Tonfa:</p>
              <div class="campo">
                {{ uniforme.porta_tonfa }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Meia Social:</p>
              <div class="campo">
                {{ uniforme.meia_social }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Distintivo de Quepe:</p>
              <div class="campo">
                {{ uniforme.distintivo_deQuepe }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Distintivo Boina/Casquete:</p>
              <div class="campo">
                {{ uniforme.distintivo_boina_casquete }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Placa de Peito:</p>
              <div class="campo">
                {{ uniforme.placa_peito }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Brasão Bordado-Par:</p>
              <div class="campo">
                {{ uniforme.brasao_bordado_par }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Luva:</p>
              <div class="campo">
                {{ uniforme.luva }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Armadura:</p>
              <div class="campo">
                {{ uniforme.armadura }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Cotoveleira:</p>
              <div class="campo">
                {{ uniforme.cotoveleira }}
              </div>
            </div>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Joelheira:</p>
              <div class="campo">
                {{ uniforme.joelheira }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Protetor de Canela:</p>
              <div class="campo">
                {{ uniforme.protetor_canela }}
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
        v-on:click="(uniforme.state = 'OK'), (uniforme.state_description = '')"
        @click="() => Atualizando()"
      >
        <i class="fa fa-check-square"></i>
      </b-button>
      <b-button
        class="mr-3"
        variant="danger"
        v-on:click="uniforme.state = 'ERROR'"
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
  name: "UniformeId",
  components: { PageTitle },
  data: function () {
    return {
      uniforme: {},
      estado_texto: false,
      estado_fixo: true,
      logo: require("../../assets/gmblogoatual.png"),
      novalogo: require("../../assets/logoprefeitura2.png"),
      img: null,
      url:"http://localhost:3001"
    };
  },
  methods: {
    loadUniforme() {
      const url = `${baseApiUrl}/uniforme/${this.$route.params.id}`;
      axios.get(url).then((res) => {
        this.uniforme = res.data;

        const url = `${baseApiUrl}/assinatura/${res.data.id_user_register}`;
        axios.get(url).then((res) => {this.img = res.data;
          // console.log(res.data)
        });
      });
    },
    Atualizando() {
      const id = this.uniforme.id;

      axios
        .put(`${baseApiUrl}/uniforme/${id}`, this.uniforme)
        .then()
        .catch((error) => {
          alert(error.response.data.msg);
        });
      window.scrollTo(0, 0);
    },
    CriaPDF() {
      var minhaTabela = document.getElementById("content-uniforme").innerHTML;

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
        <h3>Solicitação de Uniforme</h3>
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
    this.loadUniforme();
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

.almoxarifao-uniforme-id {
  padding: 20px;
}
label {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>