import _ from 'lodash' // 深克隆用的插件

// 初始化state
const initState = {todos: Array(6).fill(null).map((v, i) => {
  return {
    id: i,
    title: 'content' + i,
    completed: false
  }
}), 
inputValue: '' // 绑定input框中的字符
}
// 创建reducer
const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    
    // 向todos增加一项的操作
    case 'ADD':
      state.todos.unshift(payload)
      return state
    
    // 删除一项item
    case 'DEL':
      const newInputValue = state.inputValue
      const newTodos = state.todos.filter(item => item.id !== payload)
      const newState = {todos: newTodos, inputValue: newInputValue}
      console.log(newState);
      return newState
    
    // toggle completed
    case "COMPLETE":
      const newInputValue2 = state.inputValue
      const newTodos2 = state.todos.map(item => {
        if (item.id === payload) {
          item.completed = !item.completed
        }
        return item
      })
      const newState2 = {todos: newTodos2, inputValue: newInputValue2}
      return newState2

    // 绑定input框当中的输入
    case 'BIND_INPUT':
      let stateCopy = _.cloneDeep(state)
      stateCopy.inputValue = payload
      return stateCopy

    // 当点击提交之后删除input内容
    case 'DEL_INPUT':
      let stateCopy3 = _.cloneDeep(state)
      stateCopy3.inputValue = ''
      return stateCopy3
    default:
      return state;
  }
}
export default reducer