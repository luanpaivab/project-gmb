<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main=" Roubos De Residência" sub="" />
    <hr />
        <b-col md="4">
      <div class="stats">
        <Stat
          title="Roubos de Residência"
          :value="count"
          icon="fa fa-home"
          color="#3282cd"
        />
      </div>
    </b-col>
    <b-row>
      <b-col md="3" class="pesquisa-veiculos">
        <p>Pesquisar por:</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="2">
          <b-form-group label="Registro:" label-for="veiculo-registro">
            <b-form-input
              id="veiculo-registro"
              v-model="registro"
              type="search"
              placeholder="Registro..."
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
            ></b-form-input>
          </b-form-group>
      </b-col>
      <b-col md="3">
          <b-form-group
            label="Data Inicial:"
            label-for="veiculo-dtInicial"
            class="pl-3"
          >
            <b-form-input
              id="veiculo-dtInicial"
              type="date"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="dataInicial"
            />
          </b-form-group>
      </b-col>
      <b-col md="3">
          <b-form-group
            label="Data Final:"
            label-for="veiculo-dtFinal"
            class="pl-3"
          >
            <b-form-input
              id="veiculo-dtFinal"
              type="date"
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
              v-model="dataFinal"
            />
          </b-form-group>
      </b-col>
      <b-col md="3">
          <b-form-group
            label="Arma:"
            label-for="veiculo-veiculo"
            class="pl-3"
          >
            <b-form-input
              id="filter-veiculo"
              v-model="arma"
              type="search"
              placeholder="Arma..."
              style="border: 1px solid rgba(0, 0, 0, 0.8)"
            ></b-form-input>
          </b-form-group>
      </b-col>
    </b-row>
        <b-row>
          <b-col>
            <b-button
              @click="loadRoubos()"
              variant="primary"
              style="margin: 0 10px"
              >Pesquisar</b-button
            >
            <b-button @click="clear()" variant="danger">Limpar</b-button>
          </b-col>
        </b-row>
  <div id="content-tabela-residencia">
    <b-table
      class="mt-4"
      hover
      :items="roubos"
      :fields="fields"
      bordered="bordered"
      head-variant="dark"
      table-variant="light"
    >
      <template slot="links" slot-scope="data">
        <router-link
          :to="{ name: 'rouboDeResidenciaId', params: { id: data.item.id } }"
        >
          Visualizar
        </router-link>
      </template>
    </b-table>
  </div>
  <div class="total-denuncias mb-3">
     <b-tfoot>
       <b-tr>
         <b-td colspan="7" variant="secondary">
           Total: <b>{{ count }}</b>
         </b-td>
       </b-tr>
     </b-tfoot>
  </div>
    <b-pagination
      size="md"
      v-model="page"
      :total-rows="count"
      :per-page="limit"
    />
    <div class="imprimir-tabela">
      <b-button variant="primary" @click="() => CriaPDF()">
        <i class="fa fa-print"></i>
      </b-button>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import { baseApiUrl153 } from "../../global";
import Stat from "../home/Stat";
import axios from "axios";

export default {
  name: "RouboDeResidencia",
  components: { PageTitle, Stat },
  data: function () {
    return {
      roubos: [],
      page: 1,
      limit: 0,
      count: 0,
      registro: "",
      arma: "",
      dataInicial: "",
      dataFinal: "",
      hora: "",
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "data_ocorrencia", label: "Data da Ocorrência", sortable: true },
        { key: "hora_ocorrencia", label: "Hora da Ocorrência", sortable: true },
        { key: "tipo_armamento", label: "Tipo de Arma", sortable: true },
        { key: "links", label: "Ações" },
      ],
      logo: require("../../assets/gmblogoatual.png"),
      novalogo: require("../../assets/logoprefeitura2.png"),
    };
  },
  methods: {
    loadRoubos() {
      const url = `${baseApiUrl153}/rouboderesidencia?page=${this.page}&registro=${this.registro}&arma=${this.arma}&dataInicial=${this.dataInicial}&dataFinal=${this.dataFinal}`;
      axios(url).then((res) => {
        this.roubos = res.data.data;
        this.count = res.data.count;
        this.limit = res.data.limitStats;
      });
    },
    clear() {
      this.page = 1;
      this.registro = "";
      this.dataInicial = "";
      this.dataFinal = "";
      this.hora = "";
      this.arma = "";
      this.roubos = [];
      this.loadRoubos();
    },
    CriaPDF() {
      var minhaTabela = document.getElementById("content-tabela-residencia")
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

        .total-ros {
          display: flex;
          justify-content: flex-end;
          background-color: rgb(214, 214, 214);
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
        <h3>Roubos e Furtos</h3>
      </div>`);

      win.document.write(
        `<input id="printbtn" type="button" value="Imprimir documento" onclick="window.print();" >`
      );
      win.document.write(minhaTabela); // O CONTEUDO DA TABELA DENTRO DA TAG BODY
      win.document.write("</body></html>");
      win.document.close(); // FECHA A JANELA
    },
  },
  watch: {
    $route() {
      this.roubos = [];
      this.page = 1;
    },
    page() {
      this.loadRoubos();
    },
  },
  mounted() {
    this.loadRoubos();
  },
};
</script>

<style>
</style>

