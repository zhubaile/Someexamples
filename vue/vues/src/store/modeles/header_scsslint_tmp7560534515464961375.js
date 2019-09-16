const state = {
  contents: '我是store，相当于redux'
}
const mutations = {
  addstatus (state) {
    console.log(111)
    state.contents = '我还是成功了'
  }
}
const actions = {
  addstatus: ({commit}, param) => {
    commit('addstatus')
  }
}
export default ({
  namespaced: true,
  state,
  mutations,
  actions
})
