import _ from 'lodash'
const initState = {todos: Array(6).fill(null).map((v, i) => {
  return {
    id: i,
    title: 'content' + i,
    completed: false
  }
}),
inputValue: ''
}
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD':
      let stateCopy = _.cloneDeep(state)
      stateCopy.todos.unshift(action.payload)
      return stateCopy
    case 'DEL':
      const stateCopy4 = _.cloneDeep(state)
      const newInputValue = stateCopy4.inputValue
      const newTodos = stateCopy4.todos.filter(item => item.id !== action.payload)
      const newState = {todos: newTodos, inputValue: newInputValue}
      return newState
    case "COMPLETE":
      const newInputValue2 = state.inputValue
      const newTodos2 = state.todos.map(item => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
        return item
      })
      const newState2 = {todos: newTodos2, inputValue: newInputValue2}
      return newState2
    case 'BIND_INPUT':
      let stateCopy2 = _.cloneDeep(state)
      stateCopy2.inputValue = action.payload
      return stateCopy2
    case 'DEL_INPUT':
      let stateCopy3 = _.cloneDeep(state)
      stateCopy3.inputValue = ''
      return stateCopy3
    default:
      return state;
  }
}
export default reducer