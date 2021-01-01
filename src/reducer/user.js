// 初始状态
const initialState = {
  username: '',
  token: ''
}

// reducer() 函数
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case 'LOGIN_SUCCESS':
    return { ...state, ...payload }

  default:
    return state
  }
}
export default reducer
