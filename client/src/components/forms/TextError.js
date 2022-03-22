import React from 'react'
import './Form.css'

function TextError(props) {
  return (
    <div className='error'>{props.children}</div>
  )
}

export default TextError