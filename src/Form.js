import React, { Component } from 'react'
import NameInput from './NameInput'
import JobInput from './JobInput'

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <NameInput name={this.props.name} onNameChange={this.props.onNameChange} />
        <JobInput job={this.props.job} onJobChange={this.props.onJobChange} />
        <input type="submit" value="submit" />
      </form>
    )
  }
}
