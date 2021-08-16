<template>
  <aside class="menu" v-show="isMenuVisible">
    <div class="menu-opcoes mt-4">
      <ul v-if="path === 'inicio'" class="ul-master">
       <ul>
            <li class="pb-4">
              <div class="inicio-li">
                <router-link :to="{ name: 'perfil', params: { id: user.id }}">
                  <i class="fa fa-user-circle"> {{ user.name }}</i>
                </router-link>
              </div>
            </li>
            <li class="pb-4">
              <div class="inicio-li">
                <router-link :to="{ name: 'configuracoes', params: { id: user.id }}">
                  <i class="fa fa-cogs"> Configurações</i>                  
                </router-link>
              </div>
            </li>
            <li>
              <div class="inicio-li">
                <a href @click.prevent="logout">
                  <i class="fa fa-sign-out"> Sair</i>
                </a>
              </div>
            </li>
        </ul>    
      </ul>

      <!-- MENU DOP -->
      <ul v-if="path === 'ro'" class="ul-master">
        <li>
          <div v-b-toggle.relatorio class="menu-lateral pl-3">
              <router-link to="/planejamento">Relatórios de Ocorrência</router-link>
          </div>
        </li>
        <ul class="linhas pt-3">
            <li><router-link to="/ros">ROS</router-link></li>
            <li>
              <router-link to="/autodeentrega">Auto de Entrega</router-link>
            </li>
            <li>
              <router-link to="/autodeapreensao">Auto de Apreensao</router-link>
            </li>
            <li>
              <router-link to="/relatorioalgemacao">Relatório de Algemação</router-link>
            </li>
            <li>
              <router-link to="/relatoriomissao">Relatório de Missão</router-link>
            </li>
            <li>
              <router-link to="/comunicadointerno">Comunicado Interno</router-link>
            </li>
            <li>
              <router-link to="/relatoriodisparo">Relatório de Disparo</router-link>
            </li>
            <li>
              <router-link to="/formularioferias">Formulário de Férias</router-link>
            </li>
        </ul>
      </ul>

      <!-- MENU FICHA FUNCIONAL (DOP) -->
      <ul v-if="path === 'users'" class="ul-master">
        <li>
          <div v-b-toggle.usuarios class="menu-lateral pl-3">
              Ficha Funcional
          </div>
        </li>
        <ul class="linhas pt-3">
            <li><router-link to="/users"> Usuários</router-link></li>     
        </ul>
      </ul>

      <!-- MENU GBEL153 (SEGURANÇA UNIDA)-->
      <ul v-if="path === 'seguranca'" class="ul-master">
        <li>
          <div class="menu-lateral pl-3">
              <router-link to="/homeSeguranca">Segurança Unida</router-link>
          </div>
        </li>
        <ul class="linhas pt-3">
            <li><router-link to="/veiculosroubados"> Roubo de Veículos</router-link></li>
            <li><router-link to="/roubosefurtos"> Roubos e Furtos</router-link></li>
            <li><router-link to="/rouboderesidencia"> Roubo de Residências</router-link></li>
            <li><router-link to="/descarteirregular"> Descartes Irregulares de Lixo</router-link></li>
            <li><router-link to="/acidentetransito"> Acidentes de Trânsito</router-link></li>
            <li><router-link to="/denunciaincendio"> Denuncia de Incêndio</router-link></li>
            <li><router-link to="/sosmulher"> SOS Mulher</router-link></li>
            <li><router-link to="/sosidoso"> SOS Idoso</router-link></li>
            <li><router-link to="/sosmenores"> SOS Criança e Adolescente</router-link></li>
            <li><router-link to="/denunciavandalismo"> Denuncia de Vandalismo</router-link></li>
            <li><router-link to="/denunciatrafico"> Denuncia de Tráfico</router-link></li>
        </ul>
      </ul>
      <ul v-if="path === 'seguranca'">
        <li>
          <div class="menu-lateral pl-3">
              <router-link to="/grafico">Gráfico</router-link>
          </div>
        </li>
      </ul>
      
      <!-- MENU TRANSPORTE -->
     <ul v-if="path === 'transporte'" class="ul-master">
        <li>
          <div class="menu-lateral pl-3">
              <router-link to="/hometransporte">Setor de Transporte</router-link>
          </div>
        </li>
        <ul class="linhas pt-3">
            <li><router-link to="/checklistvtr"> CheckList VTR</router-link></li>
            <li><router-link to="/checklistmoto"> CheckList Moto</router-link></li>
        </ul>
      </ul>
     
     <!-- MENU DEN -->
     <ul v-if="path === 'den'" class="ul-master">
        <li>
          <div class="menu-lateral pl-3">
              <router-link to="/homeden">Divisão de Ensino</router-link>
          </div>
        </li>
        <ul class="linhas pt-3">
            <li><router-link to="/homeden"> Planos de Ensino</router-link></li>
            <li><router-link to="/fichafuncional"> Ficha Funcional</router-link></li>
            <li><router-link to="/relatorio"> Relatório de Usuários</router-link></li>
        </ul>
      </ul>
     <!-- MENU PROTOCOLO - PROCESSOS INTERNOS -->
     <ul v-if="path === 'processos'" class="ul-master">
        <li>
          <div class="menu-lateral pl-3">
              <router-link to="/homeprocessos">Processos Internos</router-link>
          </div>
        </li>
        <ul class="linhas pt-3">
            <li><router-link to="/trocaservicos"> Troca de Serviços</router-link></li>
            <li><router-link to="/trocahorario"> Troca de Horário</router-link></li>
            <li><router-link to="/trocaturno"> Troca de Turno</router-link></li>
            <li><router-link to="/abonofalta"> Abono de Falta</router-link></li>
            <li><router-link to="/outrassolicitacoes"> Outras Solicitações GMB</router-link></li>
        </ul>
      </ul>
     <!--MENU ALMOXARIFADO -->
     <ul v-if="path === 'almoxarifado'" class="ul-master">
        <li>
          <div class="menu-lateral pl-3">
              <router-link to="/almoxarifado">Almoxarifado GBEL</router-link>
          </div>
        </li>
        <ul class="linhas pt-3">
            <li><router-link to="/uniforme"> Solicitação de Uniforme</router-link></li>
            <li><router-link to="/materiais"> Requisição de Materiais</router-link></li>
            <li><router-link to="/estoque"> Estoque Almoxarifado</router-link></li>
            </ul>
      </ul>
    </div>
  </aside>
</template>

<script>
import { userKey } from '@/global'
import { mapState } from "vuex";

export default {
  name: "Menu",
  data: function() {
    return {
      isMenuVisible: mapState(["isMenuVisible"]),
      users: [],
      path: "inicio"
    };
  },
  computed: mapState(["user"]),
  // {
  //   path() {
  //     return this.$store.state.path;
  //   }
  // },
  methods: {
    logout() {
      localStorage.removeItem(userKey);
      this.$store.commit("setUser", null);
      this.$router.push({ name: "auth" });
    }
  },
  watch: {
    $route() {
      this.path = this.$store.state.path;
    }
  }
};
</script>

<style>
.menu {
  grid-area: menu; 
  background: linear-gradient(to right, #232526, #414345);
  
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: auto;
}

.menu a,
.menu a:hover {
  color: #fff;
  text-decoration: none;
}

.menu-opcoes ul{
  list-style: none;
  padding-left: 20px;
}

.menu-opcoes {
  color: #fff;
  margin: 0;
  margin-bottom: 20px;
}

.inicio-li{
  display: flex;
  justify-content: left;
}

.inicio-li:hover{
  background-color: rgba(255, 255, 255, 0.39);
  border-radius: 5px;
}

.img-li{
  display: flex;
  justify-content: center;
}

.menu-lateral{
  font-size: 17px;
  border: thick  inset  #2a58b9;
  border-radius: 20px;
  padding: 5px;
}

.linhas li{
  border-bottom: 1px solid rgb(255,255,255, 0.2);
  padding-bottom: 2px;
}

.ul-master{
  padding-right: 10px;
}

.cores{
  background: rgba(255, 255, 255, 0.377);
}
/*  box-shadow: 3px 3px 3px 2px black; */

</style>

