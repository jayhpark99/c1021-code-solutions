import React from 'react'

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '', errorMessage: '', iconClassName: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault()
    if (this.state.value.length === 0) {
      this.setState({ errorMessage: 'A password is required.' })
      this.setState({ iconClassName: 'fas fa-times text-danger ms-2' })
    } else if (this.state.value.length < 8) {
      this.setState({ errorMessage: 'Your password is too short.' })
      this.setState({ iconClassName: 'fas fa-times text-danger ms-2' })
    } else {
      this.setState({ errorMessage: '' })
      this.setState({ iconClassName: 'fas fa-check text-success ms-2' })
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="password" className="d-block">Password</label>
        <input onChange={this.handleChange} type="password" name="password" value={this.state.value} id="password" />
        <i className={this.state.iconClassName}></i>
        <p className="error-message text-danger">{this.state.errorMessage}</p>
      </form>
    )
  }
}
