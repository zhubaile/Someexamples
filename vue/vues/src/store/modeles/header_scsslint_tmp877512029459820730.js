const state = {
  contents: '我是store，相当于redux'
}
const mutation = {
  addstatus (state) {
    console.log(111)
    state.contents = '我还是成功了'
  }
}
const action = {
  addstatus: ({commit}) => {
    commit('addstatus')
  }
}
export default ({
  namespaced: true,
  state,
  mutation,
  action
})
