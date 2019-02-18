import React, { useContext, useReducer } from 'react'
import Table from './Table'
import CharactersContext from './context'
import reducer from './reducer'

import './index.css'

export default function App() {
  const initialState = useContext(CharactersContext)
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CharactersContext.Provider value={{ state, dispatch }}>
      <Table />
    </CharactersContext.Provider>
  )
}
