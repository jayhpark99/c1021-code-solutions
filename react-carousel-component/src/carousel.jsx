import React from 'react'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentSlide: 1, intervalID: null}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    if (event.target.tagName === 'I') {
      clearInterval(this.state.intervalID)
      this.setState({intervalID: setInterval(
        () => {
          if (this.state.currentSlide >= this.props.images.length) {
            this.setState({ currentSlide: 1 })
          } else {
            this.setState({ currentSlide: this.state.currentSlide + 1 })
          }
        },
        3000
      )})
      if (event.target.className === 'fas fa-chevron-right fa-2x') {
        this.setState({ currentSlide: this.state.currentSlide + 1 })
        if (this.state.currentSlide >= this.props.images.length) {
          this.setState({ currentSlide: 1 })
        }
      } else if (event.target.className === 'fas fa-chevron-left fa-2x') {
        this.setState({ currentSlide: this.state.currentSlide - 1 })
        if (this.state.currentSlide <= 1) {
          this.setState({ currentSlide: this.props.images.length })
        }
      } else if (event.target.className.includes('fa-circle')) {
        this.setState({ currentSlide: Number(event.target.getAttribute('id'))})
      }
    }
  }
  componentDidMount() {
    this.setState({
      intervalID: setInterval(
        () => {
          if (this.state.currentSlide >= this.props.images.length) {
            this.setState({ currentSlide: 1 })
          } else {
            this.setState({ currentSlide: this.state.currentSlide + 1 })
          }
        },
        3000
      )
    })
  }
  render() {
    let imgUrl = this.props.images[this.state.currentSlide - 1]
    let dotClassName
    const dots = this.props.images.map(imageUrl => {
      if (imageUrl.id === this.state.currentSlide) {
        dotClassName = 'fas fa-circle'
      } else dotClassName = 'far fa-circle'
      return <i onClick={this.handleClick} className={dotClassName} id={imageUrl.id} key={imageUrl.id}></i>
    })
    return (
      <div className="carousel border border-dark text-center">
        <div className="inner d-flex align-items-center justify-content-between">
          <i onClick={this.handleClick} className="fas fa-chevron-left fa-2x"></i>
          <img src={imgUrl.url}></img>
          <i onClick={this.handleClick} className="fas fa-chevron-right fa-2x"></i>
        </div>
        {dots}
      </div>
    )
  }
}
