import React, { Component } from 'react'
import DisplayComponent from './DisplayComponent'
import ChildComponent from './ChildComponent'
import '../styles/ParentComponent.css'

export default class ParentComponent extends Component {
  constructor (props) {
    super(props)

    // we are really in a *bind* here.... :)
    // fix it...

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    // state lives here
    this.state = {
      whatToSay: '',
      whatWasSaid: ''
    }
  }

  handleInput (e) {
    e.preventDefault()
    // set the state on input change
    this.setState({whatToSay: e.target.value})
  }
  handleSubmit (e) {
    e.preventDefault()
    // check console to see if firing
    console.log('fired')
    // set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay})
    // clear our input by resetting state
    this.setState({whatToSay: ''})
  }
  render () {
    return (

      <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">What would you like to say?</h1>
            <p className="lead">Enter what's on your mind below:</p>
          </div>
          <div>
            <input className="form-control" onChange={this.handleInput} type='text' placeholder="Say It, Don't Spray It!" value={this.state.whatToSay}/>
          </div>
          <div>
            <ChildComponent onClick={this.handleSubmit} />
            <DisplayComponent sayWhat={this.state.whatWasSaid} />
          </div>
      </div>
    )
  }
}
