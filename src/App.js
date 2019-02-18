import React, { Component } from 'react'
import Table from './Table'
import { characters } from './Characters'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Table characters={characters} />
      </div>
    )
  }
}
