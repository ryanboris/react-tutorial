import React from 'react'

export default function TableBody(props) {
  console.log(props.characters)
  return (
    <tbody>
      {props.characters.map((char, i) => {
        return (
          <tr key={i}>
            <td>{char.name}</td>
            <td>{char.job}</td>
          </tr>
        )
      })}
    </tbody>
  )
}
