import React, { Component } from 'react'
import NameInput from './NameInput'
import JobInput from './JobInput'

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <NameInput
          name={this.props.name}
          onNameChange={this.props.onNameChange}
          editCharacter={this.props.editCharacter}
          isEditing={this.props.isEditing}
        />
        <JobInput
          job={this.props.job}
          onJobChange={this.props.onJobChange}
          editCharacter={this.props.editCharacter}
          isEditing={this.props.isEditing}
        />
        {!this.props.isEditing && <input type="submit" value="submit" />}
        {this.props.isEditing && <input type="submit" value="update" />}
      </form>
    )
  }
}
