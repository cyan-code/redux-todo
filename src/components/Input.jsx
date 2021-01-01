import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendAddAction, sendBindAction, sendDelInputAction } from '../actions/todo-action'
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
// const mapStateToProps = state => {
//   return state
// }
const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  sendBindAction: (value) => { dispatch(sendBindAction(value)) },
  sendAddAction: (title) => { dispatch(sendAddAction(title)) },
  sendDelInputAction: () => { dispatch(sendDelInputAction()) }
})
export default connect(mapStateToProps, mapDispatchToProps)(Input)