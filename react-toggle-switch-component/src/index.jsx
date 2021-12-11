import React from 'react'
import ReactDOM from 'react-dom'

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isClicked: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({ isClicked: !this.state.isClicked })
  }
  render() {
    if (this.state.isClicked === true) {
      return (
      <div>
        <span onClick={this.handleClick} className="outer off d-flex">
          <span className="inner"></span>
        </span>
        <h3>OFF</h3>
      </div>
      )
    }
    return (
      <div>
        <span onClick={this.handleClick} className="outer on d-flex flex-row-reverse bg-success">
          <span className="inner"></span>
        </span>
        <h3>ON</h3>
      </div>
    )
  }
}

ReactDOM.render(<ToggleSwitch/>, document.querySelector('#root'))
