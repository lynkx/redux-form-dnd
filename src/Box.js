import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from './ItemTypes'

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
    }
  },

  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()

    if (dropResult) {
      props.onDrop(item.name)
    }
  },
}

@DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class Box extends Component {
  render(){
    const { connectDragSource, name } = this.props

    return connectDragSource(
      <div>
        Answer: {name}
      </div>
    )
  }
}