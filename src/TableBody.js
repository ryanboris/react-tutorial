import React from 'react'

export default function TableBody(props) {
  return (
    <tbody>
      {props.characters.map((char, i) => {
        return (
          <tr key={i}>
            <td>{char.name}</td>
            <td>{char.job}</td>
            <td>
              <button onClick={() => props.removeCharacter(i)}>Delete</button>
            </td>
            <td>
              <button onClick={() => props.toggleEdit(i)}>Edit</button>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}
