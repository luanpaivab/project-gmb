<template>
  <div class="checklist-vtr-id">
    <div>
      <PageTitle
        icon="fa fa-file-o"
        text=" CheckList VTR - "
        :main="vtr.id"
        sub=""
      />
      <div class="content" id="content-checklist-vtr">
        <hr />
        <div class="titulo">
          <h2>Identificação da Ordem de Serviço Externo de Viatura</h2>
        </div>
        <hr />
        <b-row>
          <b-col md="3">
            <div class="test">
              <p>Nº O.S.:</p>
              <div class="campo">
                {{ vtr.id }}
              </div>
            </div>
          </b-col>
          <b-col md="5">
            <div class="test">
              <p>Data do Sistema:</p>
              <div class="campo">
                {{ vtr.dth_sist }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Data do Serviço:</p>
              <div class="campo">
                {{ vtr.dt_ocor }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="5">
            <div class="test">
              <p>Inspetoria:</p>
              <div class="campo">
                {{ vtr.inspetoria }}
              </div>
            </div>
          </b-col>
        </b-row>

        <hr />
        <div class="titulo">
          <h2>Dados da Guarnição de Serviço</h2>
        </div>
        <hr />

        <b-row>
          <b-col md="8">
            <div class="test">
              <p>Placa/Classe/Nome Motorista:</p>
              <div class="campo">
                {{ vtr.motorista }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="5">
            <div class="test">
              <p>Encarregado VTR:</p>
              <div class="campo">
                {{ vtr.encarregado }}
              </div>
            </div>
          </b-col>
          <b-col md="5">
            <div class="test">
              <p>Auxiliar VTR:</p>
              <div class="campo">
                {{ vtr.auxiliar_vtr }}
              </div>
            </div>
          </b-col>
        </b-row>

        <hr />
        <div class="titulo">
          <h2>Dados do Veículo</h2>
        </div>
        <hr />

        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Prefixo da VTR:</p>
              <div class="campo">
                {{ vtr.prefixo_vtr }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Placa da VTR:</p>
              <div class="campo">
                {{ vtr.placa_vtr }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Hora Saída:</p>
              <div class="campo">
                {{ vtr.hr_saida }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Hora Chegada:</p>
              <div class="campo">
                {{ vtr.hr_chegada }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Odômetro de Saída:</p>
              <div class="campo">
                {{ vtr.odometro_saida }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Odômetro de Chegada:</p>
              <div class="campo">
                {{ vtr.odometro_chegada }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Odômetro Total:</p>
              <div class="campo">
                {{ vtr.odometro_total }}
              </div>
            </div>
          </b-col>
        </b-row>

        <hr />
        <div class="titulo">
          <h2>Abastecimento da Viatura</h2>
        </div>
        <hr />

        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Combustível Recebido:</p>
              <div class="campo">
                {{ vtr.combustivel_recebido }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Tipo de Combustível:</p>
              <div class="campo">
                {{ vtr.tipo_combustivel }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Qtd. Litros:</p>
              <div class="campo">
                {{ vtr.qtd_litros }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>    
          <b-col md="4">
            <div class="test">
              <p>Km:</p>
              <div class="campo">
                {{ vtr.km_abastec }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Horário Abastecido:</p>
              <div class="campo">
                {{ vtr.hr_abastecimento }}
              </div>
            </div>
          </b-col>
        </b-row>
        <hr />
        <!-- ---------------------------------------------------------------------- -->
        
        <div class="titulo">
          <h2>CheckList da VTR: C/A (Com Alteração)</h2>
          <h3>S/A (Sem Alteração) e N/E (Não Existe)</h3>
        </div>
        <hr />

        <b-row>
            <div class="test">
              <b-row align-h="center" class="ml-1">
                <b-col md="12">
                  <p>Com Alteracao C/A:</p>
                </b-col>
                <ul>
                  <li v-for="item in comAlt" :key="item">
                    {{ `${item} |` }}
                  </li>
                </ul>
              </b-row>
            </div>
        </b-row>
        <div class="pagebreak"> </div>
        <b-row>
            <div class="test">
              <b-row align-h="center" class="ml-1">
                <b-col md="12">
                  <p>Sem Alteracao S/A:</p>
                </b-col>
                <ul>
                  <li v-for="item in semAlt" :key="item">
                    {{ `${item} |` }}
                  </li>
                </ul>
              </b-row>
            </div>
        </b-row>
        <b-row>
            <div class="test">
              <b-row align-h="center" class="ml-1">
                <b-col md="12">
                  <p>Não Existe N/E:</p>
                </b-col>
                <ul>
                  <li v-for="item in naoExiste" :key="item">
                    {{ `${item} |` }}
                  </li>
                </ul>
              </b-row>
            </div>
        </b-row>

        <!-- ---------------------------------------------------------------------- -->
        <hr />
        <div class="titulo"><h2>Observação Geral do CheckList da VTR</h2></div>
        <hr />
        <b-row>
          <b-col md="12">
            <div class="test">
              <p>Alterações:</p>
              <div class="campo">
                {{ vtr.citar_checklist }}
              </div>
            </div>
          </b-col>
        </b-row>

        <hr />
        <div class="titulo">
          <h2>Relatório de Viatura: Observações do Veículo</h2>
        </div>
        <hr />

        <b-row>
          <b-col md="12">
            <div class="test">
              <p>Fatos Observados:</p>
              <div class="campo">
                {{ vtr.fatos_observados }}
              </div>
            </div>
          </b-col>
        </b-row>

      <b-row>
          <b-col md="4">
            <div class="test">
              <p>Data Entrega Vtr:</p>
              <div class="campo">
                {{ vtr.data_entrega }}
              </div>
            </div>
          </b-col>
      </b-row>

        <hr />
        <div class="titulo"><h2>Dados dos Superiores Hierárquicos</h2></div>
        <hr />

        <b-row>
          <b-col md="5">
            <div class="test">
              <p>Coordenador:</p>
              <div class="campo">
                {{ vtr.coordenador }}
              </div>
            </div>
          </b-col>
          <b-col md="5">
            <div class="test">
              <p>Superior de Serviço:</p>
              <div class="campo">
                {{ vtr.superior_servico }}
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
    <p>
      <b-button @click="() => CriaPDF()">Criar PDF</b-button>
    </p>
  </div>
</template>

<script>
import { baseApiUrl } from "../../../global";
import axios from "axios";
import PageTitle from "../../template/PageTitle";
import {equivalente} from './nomeColunas'

export default {
  name: "ChecklistVtrId",
  components: { PageTitle },
  data: function() {
    return {
      vtr: {},
      vtrs: [],
      comAlt: [],
      semAlt: [],
      naoExiste: [],
      logo: require("../../../assets/gmblogoatual.png"),
      novalogo: require("../../../assets/logoprefeitura2.png"),
      img: null,
      url:"http://localhost:3001"
    };
  },
  methods: {
    CriaPDF() {
      var minhaTabela = document.getElementById("content-checklist-vtr")
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
            .pagebreak { page-break-before: always; } 
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

        .test ul li {
          display: inline-block;
          padding-right: 4px;
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

        body {height: auto; width: 100vw; font-size: 1.3rem;}
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
        <h3>CheckList de Viatura</h3>
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
  //   function equivalente(key) {
  //    const colunas = {'limp_p_brisa_tras': 'Limpador parabrisa traseiro',
  //     'limp_p_brisa_diant': 'Limpador parabrisa dianteiro' }
   
  //    if (colunas[key])
  //      return colunas[key]
   
  //    return 'Chave inválida'
  //  }
    const url = `${baseApiUrl}/checklistvtr/${this.$route.params.id}`;
    axios.get(url).then(res => {
      this.vtr = res.data;

      Object.keys(res.data).map(key => {
        if (res.data[key] === "S/A") this.semAlt.push(equivalente(key));
        if (res.data[key] === "C/A") this.comAlt.push(equivalente(key));
        if (res.data[key] === "N/E") this.naoExiste.push(equivalente(key));
      });

      const url = `${baseApiUrl}/assinatura/${res.data.id_user_register}`;
        axios.get(url).then((res) => {this.img = res.data;
          // console.log(res.data)
        });
    });
    window.scrollTo(0, 0);
  },
  
};
</script>

<style>
.checklist-vtr-id {
  padding: 20px;
}

.test {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: auto;
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

.test ul li {
    display: inline-block;
    padding-right: 4px;
}

label {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>