<template>
  <div class="relatorio-algemacao">
    <PageTitle icon="fa fa-home" main=" Relatório de Algemação" />
    <hr />
    <b-col md="4">
      <div class="stats">
        <Stat
          title="Relatórios de Algemação"
          :value="count"
          icon="fa fa-file"
          color="#000"
        />
      </div>
    </b-col>
    <b-row>
      <b-col md="3" class="pesq">
        <p>Pesquisar por:</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="2">
        <b-form-group label="Registro:" label-for="relatorio-registro">
          <b-form-input
            id="relatorio-registro"
            v-model="registro"
            type="search"
            placeholder="Registro..."
            style="border: 1px solid rgba(0, 0, 0, 0.8)"
          ></b-form-input>
        </b-form-group>
      </b-col>

      <b-form-group
        label="Data Inicial:"
        label-for="relatorio-dtInicial"
        class="pl-3"
      >
        <b-form-input
          id="relatorio-dtInicial"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataInicial"
        />
      </b-form-group>

      <b-form-group
        label="Data Final:"
        label-for="relatorio-dtFinal"
        class="pl-3"
      >
        <b-form-input
          id="relatorio-dtFinal"
          type="date"
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
          v-model="dataFinal"
        />
      </b-form-group>

      <b-form-group
        label="Superior de Serviço:"
        label-for="relatorio-superior"
        class="pl-3"
      >
        <b-form-input
          id="filter-superior"
          v-model="superior"
          type="search"
          placeholder="Superior ..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Condutor:"
        label-for="relatorio-condutor"
        class="pl-3"
      >
        <b-form-input
          id="filter-condutor"
          v-model="condutor"
          type="search"
          placeholder="Condutor..."
          style="border: 1px solid rgba(0, 0, 0, 0.8)"
        ></b-form-input>
      </b-form-group>
      <b-col md="2"> </b-col>
    </b-row>
    <b-row class="pl-1">
      <b-button
        @click="loadRelatorios()"
        variant="primary"
        style="margin: 0 10px"
        >Pesquisar</b-button
      >
      <b-button @click="clear()" variant="danger">Limpar</b-button>
    </b-row>
    <div id="content-tabela-algemacao">
      <b-table
        class="mt-4"
        striped
        bordered
        hover
        head-variant="dark"
        :items="relatorios"
        :fields="fields"
        responsive="sm"
      >
        <template slot="links" slot-scope="data">
          <router-link
            :to="{
              name: 'relatorioAlgemacaoId',
              params: { id: data.item.id },
            }"
          >
            <i
            :class="`fa fa-file 
              ${(data.item.state === 'OK') 
               ? 'verified' 
               : (data.item.state === 'ERROR') 
               ? 'with-error'
               : 'not-verified'
              }`"
          ></i>
          </router-link>
        </template>
      </b-table>
      <div class="total-algemacao">
        <b-tfoot>
          <b-tr>
            <b-td colspan="7" variant="secondary">
              Total: <b>{{ count }}</b>
            </b-td>
          </b-tr>
        </b-tfoot>
      </div>
    </div>
    <b-pagination
      class="pt-3"
      size="md"
      v-model="page"
      :total-rows="count"
      :per-page="limit"
    />
    <p>
      <b-button @click="() => CriaPDF()">Criar PDF</b-button>
    </p>
  </div>
</template>

<script>
import PageTitle from "../../template/PageTitle";
import Stat from "../../home/Stat";
import { baseApiUrl } from "../../../global";
import axios from "axios";

export default {
  name: "RelatorioAlgemacao",
  components: { PageTitle, Stat },
  data: function () {
    return {
      relatorios: [],
      page: 1,
      limit: 0,
      count: 0,
      registro: "",
      hora: "",
      dataInicial: "",
      dataFinal: "",
      condutor: "",
      superior: "",
      fields: [
        { key: "id", label: "Registro", sortable: true },
        { key: "dt_ocorrencia", label: "Data da Ocorrência", sortable: true },
        { key: "condutor", label: "Condutor", sortable: true },
        { key: "superior_servico", label: "Superior", sortable: true },
        { key: "links", label: "Detalhes" },
      ],
      logo: require("../../../assets/gmblogoatual.png"),
      novalogo: require("../../../assets/logoprefeitura2.png"),
    };
  },
  methods: {
    loadRelatorios() {
      const url = `${baseApiUrl}/relatorioalgemacao?page=${this.page}&registro=${this.registro}&hora=${this.hora}&condutor=${this.condutor}&superior=${this.superior}&dataInicial=${this.dataInicial}&dataFinal=${this.dataFinal}`;
      axios(url)
        .then((res) => {
          this.relatorios = res.data.data;
          this.count = res.data.count;
          this.limit = res.data.limit;
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
    },
    clear() {
      this.page = 1;
      this.registro = "";
      this.dataInicial = "";
      this.dataFinal = "";
      this.hora = "";
      this.hora = "";
      this.superior = "";
      this.condutor = "";
      this.relatorios = [];
      this.loadRelatorios();
    },
    CriaPDF() {
      var minhaTabela = document.getElementById("content-tabela-algemacao")
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

        .total-algemacao {
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
        <h3>Relatório de Algemação</h3>
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
      this.comunicados = [];
      this.page = 1;
    },
    page() {
      this.loadRelatorios();
    },
  },
  mounted() {
    this.loadRelatorios();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.relatorio-algemacao {
  padding: 20px;
}

.total-algemacao {
  display: flex;
  justify-content: flex-end;
  font-size: 1.1rem;
  background-color: rgb(214, 214, 214);
}

.pesq p {
  color: black;
  font-weight: bold;
}
</style>

