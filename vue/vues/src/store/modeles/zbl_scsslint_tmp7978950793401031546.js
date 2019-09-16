const state = {
  content: '我是store，相当于redux'
}
const mutation = {
  addstatus (state) {
    state.content = '我成功了'
  }
  addstatusss (state) {
    state.content = '我又成功了'
  }
}
const action = {
  addstatus: ({conent}) => {
    conent('addstatus')
  },
  addstatusss: ({conent}) => {
    conent('addstatus')
  }
}
export default ({
  namespaced: true,
  state,
  mutation,
  action
})
