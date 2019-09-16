import Vue from 'vue'
import Vuex from 'vuex'
import Header from './modeles/header'
import Zbl from './modeles/zbl'

Vue.use(Vuex)

export default new Vuex.Store({
  modeles: {
    Header, Zbl
  }
})
