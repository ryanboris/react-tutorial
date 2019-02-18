import React, { useContext } from 'react'
import CharactersContext from './context'

export default function NameInput() {
  const { state, dispatch } = useContext(CharactersContext)
  return (
    <>
      <input
        type="text"
        placeholder="name"
        value={state.nameInput}
        onChange={e => dispatch({ type: 'CURRENT_NAME', payload: e.target.value })}
      />
    </>
  )
}
