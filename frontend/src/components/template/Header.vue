<template>
  <header class="header">
    <!-- LOGO E TEXTOS -->
    <router-link to="/" class="rota">
      <img
        src="@/assets/gmblogoatual.png"
        height="110"
        width="110"
        style="padding-top: 15px; padding-right: 20px"
      />
      <div class="texto">
        <h1>Guarda Municipal de Belém</h1>
        <p>"Somos poucos, porém, sem modéstia, muito bons"</p>
      </div>
      <img src="@/assets/logoprefeitura2.png" height="130" width="180" />
    </router-link>

<!-- NAVBAR HEADER -->
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-nav>

<!-- SETA DO HIDE MENU -->
        <b-nav-item @click="toggleMenu" v-if="!hideToggle">
          <a class="toggle">
            <i class="fa fa-lg" :class="icon" style="color: #fff"></i>
          </a>
        </b-nav-item>

<!-- INÍCIO -->
        <b-nav-item @click="() => setPath('inicio')" class="opcao">
          <router-link to="/" style="color: #fff; text-decoration: none">
            INICIO
          </router-link>
        </b-nav-item>

<!-- DROPDOWN DOP -->
        <div class="opcao" @mouseover="onOver" @mouseleave="onLeave">
          <b-nav-item-dropdown text="DOP" class="active" ref="dropdown" v-if="user.setor.toUpperCase() === 'DOP' || user.setor === 'MASTER'">
            
            <b-dropdown-item v-if="user.sub_setor === 'ARQUIVOS' || user.sub_setor === 'SUB_MASTER'" href="Arquivo">Arquivo</b-dropdown-item>

            <b-dropdown-item @click="() => setPath('users')" v-if="user.sub_setor === 'PLANEJAMENTO' || user.sub_setor === 'SUB_MASTER'">
              <router-link
                to="/users"
                style="color: #000; text-decoration: none"
              >
                Ficha Funcional
              </router-link>
            </b-dropdown-item>

            <b-dropdown-item @click="() => setPath('processos')" v-if="user.sub_setor === 'PROTOCOLO' || user.sub_setor === 'SUB_MASTER'">
              <router-link to="/homeProcessos" style="color: #000; text-decoration: none">
                Protocolo
              </router-link>
            </b-dropdown-item>

            <b-dropdown-item @click="() => setPath('ro')" v-if="user.sub_setor === 'PLANEJAMENTO' || user.sub_setor === 'SUB_MASTER'">
              <router-link to="/planejamento" style="color: #000; text-decoration: none">
                Planejamento
              </router-link>
            </b-dropdown-item>
            
            <b-dropdown-item @click="() => setPath('ro')" v-if="user.sub_setor === 'REMUNERADOS' || user.sub_setor === 'SUB_MASTER'">
              <router-link to="/remunerados" style="color: #000; text-decoration: none">
                Remunerados
              </router-link>
            </b-dropdown-item>
            
          </b-nav-item-dropdown>
        </div>

<!-- GBEL153 -->
        <b-nav-item @click="() => setPath('seguranca')" v-if="user.setor.toUpperCase() === 'DOP' || user.setor === 'MASTER'" class="opcao" >
          <router-link
            to="/homeSeguranca"
            style="color: #fff; text-decoration: none"
          >
            GBEL153
          </router-link>
        </b-nav-item>

<!-- SIM -->
        <b-nav-item class="opcao" v-if="user.setor.toUpperCase() === 'SIM' || user.setor === 'MASTER'">
          <router-link to="/sim" style="color: #fff; text-decoration: none">
            SIM
          </router-link>
        </b-nav-item>

<!-- TRANSPORTE -->
        <b-nav-item @click="() => setPath('transporte')" v-if="user.setor.toUpperCase() === 'TRANSPORTE' || user.setor === 'MASTER'" class="opcao">
          <router-link
            to="/homeTransporte"
            style="color: #fff; text-decoration: none"
          >
            Transporte
          </router-link>
        </b-nav-item>
    
<!-- DEN -->
        <b-nav-item @click="() => setPath('den')" v-if="user.setor === 'DEN' || user.setor === 'MASTER'" class="opcao">
          <router-link
            to="/homeDen"
            style="color: #fff; text-decoration: none"
          >
            DEN
          </router-link>
        </b-nav-item>
        
<!-- ALMOXARIFADO -->
        <b-nav-item @click="() => setPath('almoxarifado')" v-if="user.setor === 'ALMOXARIFADO' || user.setor === 'MASTER'" class="opcao">
          <router-link
            to="/homealmoxarifado"
            style="color: #fff; text-decoration: none"
          >
            ALMOXARIFADO
          </router-link>
        </b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <UserDropdown v-if="!hideUserDropdown" />
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<script>
import UserDropdown from "./UserDropdown";

export default {
  name: "Header",
  data: function() {
    return {
    }
  },
  components: { UserDropdown },
  props: {
    title: String,
    hideToggle: Boolean,
    hideUserDropdown: Boolean,
  },
  computed: {
    icon() {
      return this.$store.state.isMenuVisible
        ? "fa-angle-left"
        : "fa-angle-right";
    },
    user() {
      return this.$store.state.user || { setor: '' }
    }
  },
  methods: {
    setPath(value) {
      this.$store.commit("setPath", value);
      this.$store.commit("toggleMenu", true);
      // console.log(this.user)
    },
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
    onOver() {
      this.$refs.dropdown.visible = true;
    },
    onLeave() {
      this.$refs.dropdown.visible = false;
    },
  },
  // mounted(){
  //   this.toggleMenu()
  // }
};
</script>

<style>
/*Estilo na Barra de Cabeçalho*/
.header {
  grid-area: header;
  background: #021641;
}

.opcao:hover {
  background-color: rgba(255, 255, 255, 0.39);
  border-radius: 5px;
}

.toggle {
  padding-right: 250px;
}

.link a {
  text-decoration: none;
}

.header .rota {
  text-decoration: none;
}

.rota {
  display: flex;
  justify-content: center;
}

.rota img {
  padding: 5px;
}

.texto h1,
p {
  color: #fff;
}

.header:hover .dop {
  visibility: visible;
}

.texto {
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

