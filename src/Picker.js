import React from 'react'
import Field from 'redux-form'
import DropBox from './DropBox'
import Box from './Box'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const renderField = field => (
  <DragDropContextProvider backend={HTML5Backend}>
    <div>

      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <DropBox />
        </div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Box name="answer1" onDrop={field.input.onChange} />
        <Box name="answer2" onDrop={field.input.onChange}/>
      </div>
    </div>

  </DragDropContextProvider>
)

export default renderField