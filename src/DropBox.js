import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'



const boxTarget = {
  drop() {
    return { name: 'Dustbin' }
  },
}

@DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class DropBox extends Component{
  render(){
    const { connectDropTarget } = this.props
    return connectDropTarget(
      <div>
      Drop zone
      </div>
    )
  }
}