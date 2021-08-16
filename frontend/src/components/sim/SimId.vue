<template>
    <div class="sim-id">
        <PageTitle icon="fa fa-file-o" text=" Registro - " :main="sim.id" sub=""/>
        <b-container fluid="sm">
           <hr>
      <div class="titulo"><h2>Identificação da Ocorência</h2></div>
            <hr>
            <b-row>
                <b-col md="3" sn="12" >
                    <b-form-group label="Data e Hora Sistema:" label-for="sim-dtSistema">
                        <b-form-input id="sim-dtSistema" type="text" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.dth_sistema"
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
                <b-col md="3" sn="12" >
                    <b-form-group label="Data da Ocorência:" label-for="sim-dtOcorrencia">
                        <b-form-input id="sim-dtOcorrencia" type="text" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.dt_ocorrencia"
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
                <b-col md="3" sn="12">
                    <b-form-group label="Hora da Chamada:" label-for="sim-hrChamada">
                        <b-form-input id="sim-hr_chamada" type="time" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.hr_chamada"
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
                <b-col md="3" sn="12">
                    <b-form-group label="Hora da Ocorrência:" label-for="sim-termino">
                        <b-form-input id="sim-termino" type="time" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.hr_ocorrencia"
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col md="4" sn="12">
                    <b-form-group label="Solicitante:" label-for="sim-solicit">
                        <b-form-input id="sim-solicit" type="text" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.solicitante" 
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
                 <b-col md="3" sn="12">
                    <b-form-group label="Gênero" label-for="sim-gen">
                        <b-form-input id="sim-gen" type="text" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.sexo" 
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
                 <b-col md="2" sn="12">
                    <b-form-group label="Telefone" label-for="sim-tel">
                        <b-form-input id="sim-tel" type="text" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.fone" 
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
            </b-row>
            
            <b-row>
                <b-col md="8" sn="12">
                    <b-form-group label="Endereço:" label-for="sim-endereco">
                        <b-form-input id="sim-endereco" type="text" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.endereco"
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
            </b-row>
            
             <b-row>
                <b-col md="4" sn="12">
                    <b-form-group label="Bairro:" label-for="sim-bairro">
                        <b-form-input id="sim-bairro" type="text" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.bairro"
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
                <b-col md="2" sn="12">
                    <b-form-group label="Número:" label-for="sim-num">
                        <b-form-input id="sim-num" type="number" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.numero"
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
                <b-col md="3" sn="12">
                    <b-form-group label="CEP:" label-for="sim-cep">
                        <b-form-input id="sim-cep" type="text" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.cep"
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
            </b-row>
            <!-- <hr>

            <div class="titulo"><h2>Partes Envolvidas na Ocorência</h2></div>

            <hr> -->

            <b-row>
                <b-col md="5" sn="12">
                    <b-form-group label="Tipo de Ocorrência:" label-for="sim-suspeito">
                        <b-form-input id="sim-suspeito" type="text" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.tipo_ocorrencia"
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
                <b-col md="4" sn="12">
                    <b-form-group label="Encaminhamento:" label-for="sim-encaminhamento">
                        <b-form-input id="sim-encaminhamento" type="text" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.encaminhamento"
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="9" sn="12">
                    <b-form-group label="Descrição:" label-for="auto-relato">
                        <b-form-textarea
                            id="textarea"
                            v-model="sim.descricao"
                            readonly="true"
                            rows="3"
                            max-rows="6"
                        ></b-form-textarea>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="3" sn="12">
                    <b-form-group label="Origem:" label-for="sim-origem">
                        <b-form-input id="sim-origem" type="text" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.origem"
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
                <b-col md="4" sn="12">
                    <b-form-group label="Superior de Serviço:" label-for="sim-faixa-etaria">
                        <b-form-input id="sim-faixa-etaria" type="text" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.superior_servico"
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="9" sn="12">
                    <b-form-group label="Desfecho:" label-for="auto-relato">
                        <b-form-textarea
                            id="textarea"
                            v-model="sim.desfecho"
                            readonly="true"    
                            rows="3"
                            max-rows="6"
                        ></b-form-textarea>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="3" sn="12">
                    <b-form-group label="Deslocamento da Viatura:" label-for="sim-faixa-etaria">
                        <b-form-input id="sim-faixa-etaria" type="text" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.deslocamento_vtr"
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="3" sn="12">
                    <b-form-group label="Operador:" label-for="sim-faixa-etaria">
                        <b-form-input id="sim-faixa-etaria" type="text" style="border: 1px solid rgba(0, 0, 0,0.8);"
                            v-model="sim.operador.nome_funcional"
                            readonly="true"
                            />
                    </b-form-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { baseApiUrl } from '../../global'
import axios from 'axios'
import PageTitle from '../template/PageTitle'

export default {
    name: 'SimId',
    components: { PageTitle },
    data: function() {
        return {
            sim: {},
            sims: [],
        }
    },
    mounted() {
        const url = `${baseApiUrl}/sim/${this.$route.params.id}`
        axios.get(url).then(res => this.sim = res.data);
    }
}
</script>

<style>
.sim-id{
    padding-top: 20px;
}
</style>

