import React from 'react'

const accordionItemsArray = [
  {
    header: 'Hypertext Markup Language',
    content: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
    id: 1
  },
  {
    header: 'Cascading Style Sheets',
    content: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
    id: 2
  },
  {
    header: 'JavaScript',
    content: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
    id: 3
  },
]

export default class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentItem: null}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    let clickedItemNumber = Number(event.target.closest('.accordion-item').getAttribute('id'))
    if (this.state.currentItem === clickedItemNumber) {
      this.setState({ currentItem: null })
    } else { this.setState({ currentItem: clickedItemNumber })}
  }
  render() {
    const accordionItems = accordionItemsArray.map(accordionItem => {
      let accordionContentClassName = 'accordion-content'
      if (this.state.currentItem === accordionItem.id) {
        accordionContentClassName = 'accordion-content on'
      }
      return (
        <div className="accordion-item" id={accordionItem.id} key={accordionItem.id}>
          <div onClick={this.handleClick} className="accordion-header border">
            <h3>{accordionItem.header}</h3>
          </div>
          <div className={accordionContentClassName}>
            <p>{accordionItem.content}</p>
          </div>
        </div>
      )
    })
    return <div className="accordion col-6">{accordionItems}</div>
  }
}
