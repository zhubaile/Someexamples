const state = {
  content: '我是store，相当于redux'
}
const mutations = {
  addstatus (state) {
    state.content = '我成功了'
  },
  addstatustwo (state, params) {
    state.content = params.id + params.text
  }
}
const actions = {
  addstatus: ({ commit }) => {
    commit('addstatus')
  },
  addstatustwo: ({ commit }, params) => {
    debugger
    commit('addstatustwo', params)
  }
}

export default ({
  namespaced: true,
  state,
  mutations,
  actions
})
