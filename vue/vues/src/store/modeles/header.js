const state = {
  contents: '我是store，相当于redux'
}
const mutations = {
  addstatus (state, param) {
    console.log(111)
    console.log(param)
    state.contents = param.text
  }
}
const actions = {
  addstatus: ({commit}, param) => {
    commit('addstatus', param)
  }
}
export default ({
  namespaced: true,
  state,
  mutations,
  actions
})
