import React from 'react'
import ReactDOM from 'react-dom'

function CustomButton() {
  return <button type="button" class="btn btn-primary">Click Me!</button>
}

ReactDOM.render(<CustomButton/>, document.querySelector('#root'))
