import React, { useContext } from 'react'
import CharactersContext from './context'

export default function TableBody() {
  const { state, dispatch } = useContext(CharactersContext)
  return (
    <tbody>
      {state.characters.map((char, i) => {
        return (
          <tr key={i}>
            <td>{char.name}</td>
            <td>{char.job}</td>
            <td>
              <button onClick={() => dispatch({ type: 'DELETE', payload: i })}>
                Delete
              </button>
            </td>
            <td>
              <button onClick={() => dispatch({ type: 'IS_EDITING', payload: i })}>
                Edit
              </button>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}
