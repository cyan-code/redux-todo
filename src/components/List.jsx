import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'

class List extends Component {
  render() {
    return (
      <>
        <ul>
          {
            // 判断todos是否为空，如果为空显示span当中的提示
            this.props.todos.length === 0 ?
            <li>待办事项为空</li>
            :
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