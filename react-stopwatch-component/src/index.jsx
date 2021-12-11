import React from 'react'
import ReactDOM from 'react-dom'

class Stopwatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPaused: true,
      secondsPassed: 0
    }
    this.handleIconClick = this.handleIconClick.bind(this)
    this.handleWatchClick = this.handleWatchClick.bind(this)
  }
  handleIconClick() {
    if (event.target.className === 'fas fa-play') {
      this.timerID = setInterval(
        () => this.setState({
          isPaused: false,
          secondsPassed: this.state.secondsPassed + 1 }),
        1000
      )
    } else if (event.target.className === 'fas fa-pause') {
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
    if (this.state.isPaused === true) {
      return (
        <div>
          <div onClick={this.handleWatchClick} className="circle d-flex justify-content-center align-items-center">
            <h3>{this.state.secondsPassed}</h3>
          </div>
          <i onClick={this.handleIconClick} className="fas fa-play"></i>
        </div>
      )
    } else {
      return (
        <div>
          <div onClick={this.handleWatchClick} className="circle d-flex justify-content-center align-items-center">
            <h3>{this.state.secondsPassed}</h3>
          </div>
          <i onClick={this.handleIconClick} className="fas fa-pause"></i>
        </div>
      )
    }
  }
}

ReactDOM.render(<Stopwatch/>, document.querySelector('#root'))
