import React from 'react'
import ReactDOM from 'react-dom'

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {email: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({email: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log('state:', this.state)
  }
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Email:
        <input onChange={this.handleChange} type="email" name="email" value={this.state.email}/>
      </label>
      <input type="submit" value="Sign Up"/>
    </form>
    )
  }
}

ReactDOM.render(<NewsletterForm/>, document.querySelector('#root'))
