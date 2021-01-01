import { ADD, BIND_INPUT, COMPLETE, DEL, DEL_INPUT } from "./action-type"

export const sendAddAction = title => {
  return {
    type: ADD,
    payload: {
      id: Math.random(),
      title,
      completed: false
    }
  }
}

export const sendDelAction = id => {
  return {
    type: DEL,
    payload: id 
  }
}

export const sendSwitchAction = id => {
  return {
    type: COMPLETE,
    payload: id
  }
}

export const sendBindAction = value => {
  return {
    type: BIND_INPUT,
    payload: value
  }
}

export const sendDelInputAction = () => {
  return {
    type: DEL_INPUT,
  }
}