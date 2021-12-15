import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './carousel'

const imageUrlArray = [
  { url: '../dist/images/001.png', id: 1 },
  { url: '../dist/images/004.png', id: 2 },
  { url: '../dist/images/007.png', id: 3 },
  { url: '../dist/images/025.png', id: 4 },
  { url: '../dist/images/039.png', id: 5 }
]

const element = <Carousel images={imageUrlArray}/>

ReactDOM.render(element, document.querySelector('#root'))
