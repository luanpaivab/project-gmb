import Vue from 'vue'

export const userKey = '__gbelpa_user'
export const baseApiUrl = 'http://localhost:3005' 
export const baseApiUrl153 = 'http://localhost:3011'
// export const baseApiUrl = 'http://18.231.165.116:3005'
// export const baseApiUrl153 = 'http://18.231.165.116:3011'

export function showError(e) {
    if(e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg : e.response.data })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg : e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey }
