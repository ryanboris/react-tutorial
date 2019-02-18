import React, { Component } from 'react'
import Table from './Table'
import { characters } from './Characters'
import Form from './Form'

export default class App extends Component {
  state = { characters, name: '', job: '' }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      characters: [
        ...this.state.characters,
        { name: this.state.name, job: this.state.job }
      ],
      name: '',
      job: ''
    })
  }

  onNameChange = name => {
    this.setState({
      name
    })
  }

  onJobChange = job => {
    this.setState({
      job
    })
  }
  render() {
    return (
      <div className="container">
        <Table characters={this.state.characters} />
        <Form
          name={this.state.name}
          job={this.state.job}
          handleSubmit={this.handleSubmit}
          onJobChange={this.onJobChange}
          onNameChange={this.onNameChange}
        />
      </div>
    )
  }
}
