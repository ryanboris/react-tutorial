import React, { useContext } from 'react'
import CharactersContext from './context'

export default function TableBody() {
  const { state, dispatch } = useContext(CharactersContext)
  const { characters } = state
  return (
    <tbody>
      {characters.map((char, i) => (
        <tr key={i}>
          <td>{char.name}</td>
          <td>{char.job}</td>
          <button onClick={() => dispatch({ type: 'DELETE', payload: i })}>Delete</button>
        </tr>
      ))}
    </tbody>
  )
}
