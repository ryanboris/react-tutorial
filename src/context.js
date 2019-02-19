import React from 'react'
import { characters } from './Characters'

const CharactersContext = React.createContext({
  characters,
  isEditing: false
})

export default CharactersContext
