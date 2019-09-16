const state = {
  content: '我是store，相当于redux'
}
const mutation = {
  addstatus (state) {
    state.content = '我成功了'
  }
}
const action = {
  increment: ({commit}) => {
    commit('increment')
  },
  addstatus: ({conent}) => {
    conent('addstatus')
  }
}
export default ({
  state, mutation, action
})
