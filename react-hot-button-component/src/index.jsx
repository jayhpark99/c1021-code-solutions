import React from 'react'
import ReactDOM from 'react-dom'

class HotButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { timesClicked: 0 }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({ timesClicked: this.state.timesClicked+=1 })
  }
  render () {
    let className
    if (this.state.timesClicked < 3) {
      className = 'btn btn-primary'
    } else if (this.state.timesClicked < 6) {
      className = 'btn btn-info'
    } else if (this.state.timesClicked < 9) {
      className = 'btn btn-success'
    } else if (this.state.timesClicked < 12) {
      className = 'btn btn-warning'
    } else if (this.state.timesClicked < 15) {
      className = 'btn btn-danger'
    } else {
      className = 'btn btn-light'
    }
    return <button className={className} onClick={this.handleClick}>Hot Button</button>
  }
}

ReactDOM.render(<HotButton/>, document.querySelector('#root'))
