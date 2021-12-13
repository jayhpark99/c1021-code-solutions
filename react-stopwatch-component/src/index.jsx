import React from 'react'
import ReactDOM from 'react-dom'

class Stopwatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPaused: true,
      secondsPassed: 3
    }
    this.handleIconClick = this.handleIconClick.bind(this)
    this.handleWatchClick = this.handleWatchClick.bind(this)
  }
  handleIconClick() {
    if (this.state.isPaused === true) {
      this.timerID = setInterval(
        () => this.setState({
          isPaused: false,
          secondsPassed: this.state.secondsPassed + 1 }),
        1000
      )
    } else if (this.state.isPaused === false) {
      this.setState({isPaused: true})
      clearInterval(this.timerID)
    }
  }
  handleWatchClick() {
    if (this.state.isPaused === true) {
      this.setState({ secondsPassed: 0 })
    }
  }
  render() {
    let className
    if (this.state.isPaused === true) {
      className = 'fas fa-play'
    } else {
      className = 'fas fa-pause'
    }
    return (
      <div className="outer">
        <div onClick={this.handleWatchClick} className="circle">
          <h3>{this.state.secondsPassed}</h3>
        </div>
        <i onClick={this.handleIconClick} className={className}></i>
      </div>
      )
    }
  }


ReactDOM.render(<Stopwatch/>, document.querySelector('#root'))
