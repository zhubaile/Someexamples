const state = {
  content: '我是store，相当于redux'
}
const mutations = {
  addstatus (state) {
    state.content = '我成功了'
  },
  apps: ({commit}) => {
    (state) {
    state.content = '我又成功了'
  }
}
const actions = {
  addstatus: ({commit}) => {
    commit('addstatus')
  },
  apps: ({commit}) => {
    commit('addstatusss')
  }
}

export default ({
  namespaced: true,
  state,
  mutations,
  actions
})
