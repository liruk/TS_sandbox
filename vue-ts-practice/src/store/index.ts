import Vue from 'vue'
import Vuex from 'vuex'
import {bcdices} from '@/store/BCDice'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version:'0.1.0'
  },
  modules:{
    bcdices,
  }
})
