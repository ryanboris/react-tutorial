import React, { useContext } from 'react'
import NameInput from './NameInput'
import CharactersContext from './context'
import JobInput from './JobInput'

export default function Form() {
  const { state, dispatch } = useContext(CharactersContext)
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        dispatch({ type: 'ADD', payload: { name: state.nameInput, job: state.jobInput } })
      }}
    >
      <NameInput />
      <JobInput />
      <input type="submit" value="submit" />
    </form>
  )
}
