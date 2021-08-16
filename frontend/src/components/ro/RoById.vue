<template>
  <div class="ro-by-id">
    <div >
      <PageTitle
        icon="fa fa-file-o"
        text=" Registro de Ocorrência - "
        :main="ro.id"
        sub=""
      />

      <div class="imprimir">
        <b-button variant="primary" @click="() => CriaPDF()">
          <i class="fa fa-print"></i>
        </b-button>
      </div>

      <div v-if="ro.state === 'ERROR' && erro_n_existe === true">
        <b-alert show variant="danger">
          <h4 class="alert-heading">
            Documento com Erro! Verificado por -
            <strong> {{ ro.responsavel.nome_funcional }}</strong>
          </h4>
          <b-form-textarea
            id="textarea"
            placeholder="Relate o erro..."
            v-model="ro.state_description"
            rows="4"
          ></b-form-textarea>
          <b-button
            class="mt-2"
            variant="primary"
            @click="Atualizando(), (erro_n_existe = false), (erro_existe = true)"
          >
            Salvar
          </b-button>
          <b-button
            class="mt-2"
            variant="secondary"
            v-on:click="(ro.state = ''), (ro.state_description = '')"
            @click="() => Atualizando()"
          >
            Cancelar
          </b-button>
        </b-alert>
      </div>

      <div v-if="ro.state === 'ERROR' && erro_existe === true" class="alerta">
        <b-alert show variant="danger">
          <h4 class="alert-heading">Documento com Erro! Verificado por - 
            <strong> {{ ro.responsavel.nome_funcional }}</strong>
          </h4>
          <p>{{ ro.state_description }}</p>
          <b-button
            class="mt-2"
            variant="secondary"
            @click="(erro_n_existe = true), (erro_existe = false)"
          >
            Editar
          </b-button>
        </b-alert>
      </div>
      <div v-if="ro.state === 'OK'">
        <b-alert show variant="success">
          Documento Aceito! Verificado por - <strong> {{ ro.responsavel.nome_funcional }}</strong>
        </b-alert>
      </div>

      <div class="content" id="content-ro">
        <hr />
        <div class="titulo">
          <h2>Identificação no Registro da Ocorência</h2>
        </div>
        <hr />
        <b-row>
          <b-col md="3">
            <div class="test">
              <p>Nº.Registro:</p>
              <div class="campo">
                {{ ro.id }}
              </div>
            </div>
          </b-col>
          <b-col md="5">
            <div class="test">
              <p>Data do Sistema:</p>
              <div class="campo">
                {{ ro.dth_sistema }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Data da Ocorrência:</p>
              <div class="campo">
                {{ ro.dt_ocorrencia }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Hora da Chamada:</p>
              <div class="campo">
                {{ ro.hr_chamado }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Hora de Início:</p>
              <div class="campo">
                {{ ro.hr_inicio }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Hora de Término:</p>
              <div class="campo">
                {{ ro.hr_termino }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="3">
            <div class="test">
              <p>Meio Chamado:</p>
              <div class="campo">
                {{ ro.meio_chamado }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>Código:</p>
              <div class="campo">
                {{ ro.cod_ocorrencia }}
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="test">
              <p>Natureza da Ocorrência:</p>
              <div class="campo">
                {{ ro.natureza }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="8">
            <div class="test">
              <p>Solicitante:</p>
              <div class="campo">
                {{ ro.solicitante }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Doc. Solicitante:</p>
              <div class="campo">
                {{ ro.doc_solicitante }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Fone Solicitante:</p>
              <div class="campo">
                {{ ro.fone_solicitante }}
              </div>
            </div>
          </b-col>
        </b-row>

        <hr />
        <div class="titulo"><h2>Dados do Local da Ocorrência</h2></div>
        <hr />

        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Estado:</p>
              <div class="campo">
                {{ ro.estado }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Cidade:</p>
              <div class="campo">
                {{ ro.cidade }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Bairro:</p>
              <div class="campo">
                {{ ro.bairro }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="8">
            <div class="test">
              <p>Endereço:</p>
              <div class="campo">
                {{ ro.endereco }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Número:</p>
              <div class="campo">
                {{ ro.numero }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <div class="test">
              <p>Cep:</p>
              <div class="campo">
                {{ ro.cep }}
              </div>
            </div>
          </b-col>
        </b-row>

        <hr />
        <div class="titulo"><h2>Partes Envolvidas na Ocorência</h2></div>
        <hr />

        <b-row>
          <b-col md="10">
            <div class="test">
              <p>Autor Presumível (1º Parte):</p>
              <div class="campo">
                {{ ro.autorPres }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="6">
            <div class="test">
              <p>Doc. Autor Presumível (1º Parte):</p>
              <div class="campo">
                {{ ro.doc_autor }}
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="test">
              <p>Gênero Autor Presumível (1º Parte):</p>
              <div class="campo">
                {{ ro.genAutor }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12">
            <div class="test">
              <p>Endereço Autor Presumível (1º Parte):</p>
              <div class="campo">
                {{ ro.endAutor }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="10">
            <div class="test">
              <p>Vítima (2º Parte):</p>
              <div class="campo">
                {{ ro.vitima }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="6">
            <div class="test">
              <p>Doc. Vítima (2º Parte):</p>
              <div class="campo">
                {{ ro.doc_vitima }}
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="test">
              <p>Fone Vítima (2º Parte):</p>
              <div class="campo">
                {{ ro.fone_vitima }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="10">
            <div class="test">
              <p>Endereço Vítima (2º Parte):</p>
              <div class="campo">
                {{ ro.endVitima }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="10">
            <div class="test">
              <p>Local Encaminhado Autor Presumível (1º Parte):</p>
              <div class="campo">
                {{ ro.local_autor }}
              </div>
            </div>
          </b-col>
        </b-row>  
        <b-row>
          <b-col md="8">
            <div class="test">
              <p>Local Encaminhado (2º Parte):</p>
              <div class="campo">
                {{ ro.local_vitima }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="6">
            <div class="test">
              <p>Apoio Recebido:</p>
              <div class="campo">
                {{ ro.apoio_recebido }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <div class="textao">
              <p>Descrição do Apoio:</p>
              <div class="campo">
                {{ ro.desc_apoio }}
              </div>
            </div>
          </b-col>
        </b-row>
        <div class="quebra-linha"></div>
        <hr />

        <div class="titulo"><h2>Documentos em Anexo</h2></div>

        <hr />

        <b-row>
          <b-col md="3">
            <div class="test">
              <p>B.O Pc:</p>
              <div class="campo">
                {{ ro.bo_pc }}
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="test">
              <p>TCO Pc:</p>
              <div class="campo">
                {{ ro.tco_pc }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Auto de Entrega Pc:</p>
              <div class="campo">
                {{ ro.aut_entrega_pc }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Auto de Apreensão Pc:</p>
              <div class="campo">
                {{ ro.auto_apreensao_pc }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Auto de Entrega GBel:</p>
              <div class="campo">
                {{ ro.auto_entrega_gmb }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Auto de Apreensão GBel:</p>
              <div class="campo">
                {{ ro.auto_apreensao_gmb }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <div class="test">
              <p>Outros Doc.:</p>
              <div class="campo">
                {{ ro.outros_doc }}
              </div>
            </div>
          </b-col>
          <b-col md="9">
            <div class="test">
              <p>Nº Tipos de Documentos:</p>
              <div class="campo">
                {{ ro.tipo_doc }}
              </div>
            </div>
          </b-col>
        </b-row>

        <hr />

        <div class="titulo"><h2>Descrição de Objetos Apreendidos</h2></div>

        <hr />
        <b-row>
          <b-col md="12">
            <div class="textao">
              <p>Descrição do Objeto Apreendido:</p>
              <div class="campo">
                {{ ro.prod_apreendido }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="8">
            <div class="test">
              <p>Encaminhamento do Objeto Apreendido:</p>
              <div class="campo">
                {{ ro.encaminham_obj }}
              </div>
            </div>
          </b-col>
        </b-row>
        <hr />

        <div class="titulo"><h2>Testemunhas</h2></div>

        <hr />
        <b-row>
          <b-col md="8">
            <div class="test">
              <p>1º Testemunha:</p>
              <div class="campo">
                {{ ro.testemunha1 }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <div class="test">
              <p>Doc. 1º Testemunha:</p>
              <div class="campo">
                {{ ro.doc_test1 }}
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="test">
              <p>Fone 1º Testemunha:</p>
              <div class="campo">
                {{ ro.fone_teste1 }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <div class="test">
              <p>Endereço 1º Testemunha:</p>
              <div class="campo">
                {{ ro.end_test1 }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <div class="test">
              <p>Bairro 1º Testemunha:</p>
              <div class="campo">
                {{ ro.bairro_test1 }}
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="pt-3">
          <b-col md="8">
            <div class="test">
              <p>2º Testemunha:</p>
              <div class="campo">
                {{ ro.testemunha2 }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <div class="test">
              <p>Doc. 2º Testemunha:</p>
              <div class="campo">
                {{ ro.doc_test2 }}
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="test">
              <p>Fone 2º Testemunha:</p>
              <div class="campo">
                {{ ro.fone_teste2 }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <div class="test">
              <p>Endereço 2º Testemunha:</p>
              <div class="campo">
                {{ ro.end_test2 }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <div class="test">
              <p>Bairro 2º Testemunha:</p>
              <div class="campo">
                {{ ro.bairro_test2 }}
              </div>
            </div>
          </b-col>
        </b-row>

        <hr />

        <div class="titulo"><h2>Guardas Participantes</h2></div>

        <hr />
        <b-row>
          <b-col md="6">
            <div class="test">
              <p>Placa/Nome:</p>
              <div class="campo">
                {{ ro.gm_part1 }}
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="test">
              <p>Placa/Nome:</p>
              <div class="campo">
                {{ ro.gm_part2 }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <div class="test">
              <p>Placa/Nome:</p>
              <div class="campo">
                {{ ro.gm_part3 }}
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="test">
              <p>Placa/Nome:</p>
              <div class="campo">
                {{ ro.gm_part4 }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <div class="test">
              <p>Placa/Nome:</p>
              <div class="campo">
                {{ ro.gm_part5 }}
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <div class="test">
              <p>Placa/Nome:</p>
              <div class="campo">
                {{ ro.gm_part6 }}
              </div>
            </div>
          </b-col>
        </b-row>

        <hr />
        <div class="titulo"><h2>Dados do Condutor da Ocorrência</h2></div>
        <hr />
        <b-row>
          <b-col md="8">
            <div class="test">
              <p>Gm01-Nome:</p>
              <div class="campo">
                {{ ro.condutor }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Matrícula:</p>
              <div class="campo">
                {{ ro.matricula_condutor }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Placa:</p>
              <div class="campo">
                {{ ro.placa_condutor }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="8">
            <div class="test">
              <p>Lotação do Condutor:</p>
              <div class="campo">
                {{ ro.lotacao_condutor }}
              </div>
            </div>
          </b-col>
        </b-row>

        <hr />
        <div class="titulo"><h2>Dados dos Superiores Hierárquicos</h2></div>
        <hr />

        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Coordenador:</p>
              <div class="campo">
                {{ ro.coordenador }}
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="test">
              <p>Inspetoria:</p>
              <div class="campo">
                {{ ro.inspetoria }}
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <div class="test">
              <p>Superior de Serviço:</p>
              <div class="campo">
                {{ ro.superior_serv }}
              </div>
            </div>
          </b-col>
        </b-row>

        <hr />
        <div class="titulo"><h2>Histórico da Ocorrência</h2></div>
        <hr />
        <b-row class="pb-5">
          <b-col md="12">
            <div class="textao">
              <p>Histórico da Ocorrência:</p>
              <div class="campo">
                {{ ro.historico }}
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
    <b-col class="mb-2">
      <b-button
        class="mr-3"
        variant="success"
        v-on:click="(ro.state = 'OK'), (ro.state_description = ''), (ro.id_administrativo = user.id)"
        @click="() => Atualizando()"
      >
        <i class="fa fa-check-square"></i>
      </b-button>
      <b-button
        class="mr-3"
        variant="danger"
        v-on:click="ro.state = 'ERROR', (ro.id_administrativo = user.id)"
        @click="Atualizando(), (erro_n_existe = true), erro_existe = false"
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
import { mapState } from 'vuex'

export default {
  name: "RoById",
  components: { PageTitle },
  data: function () {
    return {
      ro: {},
      erro_n_existe: false,
      erro_existe: true,
      ros: [],
      logo: require("../../assets/gmblogoatual.png"),
      novalogo: require("../../assets/logoprefeitura2.png"),
      img: null,
      url:"http://localhost:3001"
    }
  },
  computed: mapState(['user']),
  methods: {
    Atualizando() {
      const id = this.ro.id;

      axios
        .put(`${baseApiUrl}/ros/${id}`, this.ro)
        .then(() => {
          this.loadRo();
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
      window.scrollTo(0, 0);
    },
    CriaPDF() {
      var minhaTabela = document.getElementById("content-ro").innerHTML;
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
        
        .textao p{
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
        <h3>Registro de Ocorrência</h3>
      </div>`);

      win.document.write(
        `<input id="printbtn" type="button" value="Imprimir documento" onclick="window.print();" >`
      );
      win.document.write(minhaTabela); // O CONTEUDO DA TABELA DENTRO DA TAG BODY
      win.document.write("</body></html>");
      win.document.close(); // FECHA A JANELA
    },
    loadRo(){
      const url = `${baseApiUrl}/ros/${this.$route.params.id}`;
      axios.get(url).then((res) => {
        this.ro = res.data;

        // console.log(res.data)
        const url = `${baseApiUrl}/assinatura/${res.data.id_user_register}`;
        axios.get(url).then((res) => {this.img = res.data;
          // console.log(res.data)
        });
      }).catch(error => {
        alert(error.response.data.msg)
      });
    }
  },
  mounted() {
    this.loadRo();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.ro-by-id {
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


.textao p {
  font-weight: bold;
  color: #000;
}

.campo {
  padding-left: 5px;
}

.campo-textao {
  padding-left: 5px;
}

.content {
  padding: 10px;
}

.auto-entrega-id {
  padding-top: 20px;
}
label {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
