import React, { useContext } from 'react'
import NameInput from './NameInput'
import CharactersContext from './context'
import JobInput from './JobInput'

export default function Form() {
  const { state, dispatch } = useContext(CharactersContext)

  const handleSubmit = e => {
    e.preventDefault()
    if (state.isEditing) {
      dispatch({ type: 'EDIT', payload: { name: state.nameInput, job: state.jobInput } })
    } else {
      dispatch({ type: 'ADD', payload: { name: state.nameInput, job: state.jobInput } })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <NameInput />
      <JobInput />
      <input type="submit" value={state.isEditing ? 'Update' : 'Submit'} />
    </form>
  )
}
