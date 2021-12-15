import React from 'react'

const imageUrlArray = [
  { url: '../dist/images/001.png', id: 1 },
  { url: '../dist/images/004.png', id: 2 },
  { url: '../dist/images/007.png', id: 3 },
  { url: '../dist/images/025.png', id: 4 },
  { url: '../dist/images/039.png', id: 5 }
 ]

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
          if (this.state.currentSlide >= imageUrlArray.length) {
            this.setState({ currentSlide: 1 })
          } else {
            this.setState({ currentSlide: this.state.currentSlide + 1 })
          }
        },
        3000
      )})
      if (event.target.className === 'fas fa-chevron-right fa-2x') {
        this.setState({ currentSlide: this.state.currentSlide + 1 })
        if (this.state.currentSlide >= imageUrlArray.length) {
          this.setState({ currentSlide: 1 })
        }
      } else if (event.target.className === 'fas fa-chevron-left fa-2x') {
        this.setState({ currentSlide: this.state.currentSlide - 1 })
        if (this.state.currentSlide <= 1) {
          this.setState({ currentSlide: imageUrlArray.length })
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
          if (this.state.currentSlide >= imageUrlArray.length) {
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
    let imgUrl = imageUrlArray[this.state.currentSlide - 1]
    let dotClassName
    const dots = imageUrlArray.map(imageUrl => {
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
