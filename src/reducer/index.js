import { combineReducers } from 'redux'
import todosReducer from './todo'
import userReducer from './user'

export default combineReducers({
  todos: todosReducer,
  user: userReducer
})
