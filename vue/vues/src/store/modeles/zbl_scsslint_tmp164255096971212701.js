/* const state = {
  content: '我是store，相当于redux'
}
const mutations = {
  addstatus (state) {
    state.content = '我成功了'
  },
  apps (state) {
    state.content = '我又成功了'
  }
}
const actions = {
  addstatus: ({commit}) => {
    commit('addstatus')
  },
  apps: ({commit}) => {
    commit('apps')
  }
} */

const state = {
  count: 10
}
const mutations = {
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

export default ({
  namespaced: true,
  state,
  mutations,
  actions
})
