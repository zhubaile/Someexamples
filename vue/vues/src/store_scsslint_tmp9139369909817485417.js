import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}
const mutation = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}
const actions = {
  increment: ({commit}) => {
    commit('increment')
  },
  decrement: ({commit}) => {
    commit('decrement')
  }
}
export default new Vues({
  state, mutation, actions
})
