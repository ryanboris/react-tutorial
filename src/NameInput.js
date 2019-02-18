import React, { Component } from 'react'

export default class NameInput extends Component {
  handleChange = e => {
    this.props.onNameChange(e.target.value)
  }
  handleEdit = e => {
    this.props.onNameChange(e.target.value)
  }

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="name"
          value={this.props.name}
          onChange={!this.props.isEditing ? this.handleChange : this.handleEdit}
        />
      </>
    )
  }
}
