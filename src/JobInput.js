import React, { Component } from 'react'

export default class JobInput extends Component {
  handleChange = e => {
    this.props.onJobChange(e.target.value)
  }
  render() {
    return (
      <>
        <input
          type="text"
          placeholder="job"
          value={this.props.job}
          onChange={this.handleChange}
        />
      </>
    )
  }
}
