import React, { Component } from 'react'
import Table from './Table'
import { characters } from './Characters'
import Form from './Form'

export default class App extends Component {
  state = { characters, name: '', job: '', isEditing: false, currentClassName: null }

  removeCharacter = index => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter(char => characters.indexOf(char) !== index)
    })
  }

  editCharacter = () => {
    const { characters } = this.state
    const i = characters.findIndex(
      char => characters.indexOf(char) === this.state.currentClassName
    )
    this.setState({
      characters: [
        ...characters.slice(0, i),
        { name: this.state.name, job: this.state.job },
        ...characters.slice(i + 1)
      ],
      name: '',
      job: '',
      isEditing: false,
      currentClassName: null
    })
  }

  toggleEdit = i => {
    console.log(i)
    this.setState({ isEditing: true, currentClassName: i })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.name || !this.state.job) {
      alert('Provide both fields.')
      return this.setState({ name: '', job: '' })
    } else if (this.state.isEditing) {
      this.editCharacter()
    } else {
      this.setState({
        characters: [
          ...this.state.characters,
          { name: this.state.name, job: this.state.job }
        ],
        name: '',
        job: ''
      })
    }
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
        <Table
          characters={this.state.characters}
          removeCharacter={this.removeCharacter}
          toggleEdit={this.toggleEdit}
        />
        <Form
          name={this.state.name}
          job={this.state.job}
          handleSubmit={this.handleSubmit}
          onJobChange={this.onJobChange}
          onNameChange={this.onNameChange}
          isEditing={this.state.isEditing}
          editCharacter={this.editCharacter}
        />
      </div>
    )
  }
}
