/*Área de armazenamento para compartilhar dentre
os componentes, sem necessariamente um componente
ter que diretamente mexer em outro componente */

/*Através do Vuex eu consigo compartilhar dados
dentro de uma aplicação VueJs */

import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    /*Aqui serão criados os dados e as funções
    que irão manipular os dados (mutations) */

    state: {
        isMenuVisible: true,
        user: null,
        path: 'inicio',
    },
    mutations: {
        toggleMenu(state, isVisible){
            if(!state.user) {
                state.isMenuVisible = false
                return
            }
            
            if(isVisible === undefined){
                state.isMenuVisible =!state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }
        },
        setUser(state, user){
            state.user = user
            if(user) {
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
                state.isMenuVisible = true
            } else {
                delete axios.defaults.headers.common['Authorization']
                state.isMenuVisible = false
            }
        },
        setPath(state, path){
            state.path = path;
        }
    }


})


