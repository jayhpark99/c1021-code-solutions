import React from 'react'

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isOpened: false}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    if (event.target.className === 'background-off') {
      return
    }
    this.setState({isOpened: !this.state.isOpened})
  }
  render() {
    let sideBarClassName
    let backgroundClassName
    if (this.state.isOpened === false) {
      sideBarClassName = 'sidebar'
      backgroundClassName = 'background'
    } else {
      sideBarClassName = 'sidebar on'
      backgroundClassName = 'background on'
    }
    return (
      <div>
        <i onClick={this.handleClick} className="fas fa-align-justify ms-2 mt-2 fa-2x"></i>
        <div className={backgroundClassName} onClick={this.handleClick}></div>
        <nav className={sideBarClassName}>
          <ul onClick={this.handleClick} className="list-unstyled">
            <li><a className="h1" href="#">Menu</a></li>
            <li><a className="h5" href="#">About</a></li>
            <li><a className="h5" href="#">Get Started</a></li>
            <li><a className="h5" href="#">Sign In</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}
