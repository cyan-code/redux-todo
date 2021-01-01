import React, { Component } from 'react'
import { connect } from 'react-redux'

class Item extends Component {
  clickHandler = () => {
    this.props.sendDelAction(this.props.id)
  }
  clickComplteteHandler = () => {
    this.props.sendSwitchAction(this.props.id)
  }
  render() {
    // console.log(this.props);
    const { title, completed } = this.props
    return (
      <div>
        {title}
        <button onClick={ this.clickComplteteHandler }>{`设置${completed ? '未' : '已'}完成`}</button>
        <button onClick={ this.clickHandler }>删除</button>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendDelAction: (value) => {
      dispatch({
        type: 'DEL',
        payload: value
      })
    },
    sendSwitchAction: (value) => {
      dispatch({
        type: 'COMPLETE',
        payload: value
      })
    }
  }
}
export default connect(null, mapDispatchToProps)(Item)