import React, { Component } from 'react'
import { connect } from 'react-redux'
class Input extends Component {
  inputHandler = (e) => {
    this.props.sendBindAction(e.target.value)
  }
  submitHandler = () => {
    this.props.sendAddAction(this.props.inputValue)
    this.props.sendDelInputAction()
  }
  render() {
    return (
      <>
        <input
          type="text"
          placeholder="enter something..."
          value={ this.props.inputValue }
          onChange={ this.inputHandler }
        /> 
        <button onClick={ this.submitHandler }>submit</button>
      </>
    )
  }
}
const mapStateToProps = state => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendBindAction: (value) => {
      dispatch({
        type: 'BIND_INPUT',
        payload: value
      })
    },
    sendAddAction: (title) => {
      dispatch({
        type: 'ADD',
        payload: {
          id: Math.random(),
          title,
          completed: false
        }
      })
    },
    sendDelInputAction: () => {
      dispatch({
        type: 'DEL_INPUT',
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Input)