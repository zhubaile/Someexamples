import Vue from 'vue'
import Vuex from 'vuex'
import cuservice from './modules/cuservice'
import home from './modules/home'
import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cuservice,
    home
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
