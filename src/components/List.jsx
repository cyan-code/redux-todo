import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'

class List extends Component {
  render() {
    return (
      <>
        <ul>
          {
            this.props.todos.map((todo, i) => {
              return <li key={ todo.id }><Item { ...todo }/></li>
            })
          }
        </ul>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(List)