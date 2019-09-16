const state = {
  contents: '我是store，相当于redux'
}
const mutation = {
  addstatus (state) {
    state.contents = '我成功了'
  }
}
const action = {
  addstatus: ({conent}) => {
    conent('addstatus')
  }
}
export default ({
  namespaced: true,
  state,
  mutation,
  action
})
