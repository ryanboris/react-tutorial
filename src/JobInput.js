import React, { useContext } from 'react'
import CharactersContext from './context'

export default function JobInput() {
  const { state, dispatch } = useContext(CharactersContext)

  return (
    <>
      <input
        type="text"
        placeholder="job"
        value={state.jobInput}
        onChange={e => {
          dispatch({ type: 'CURRENT_JOB', payload: e.target.value })
        }}
      />
    </>
  )
}
