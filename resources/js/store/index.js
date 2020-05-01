import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import currentUser from './modules/currentUser'
export default  new Vuex.Store({
    modules:{
        currentUser
    }
})

