import React from 'react'
import { characters } from './Characters'

const CharactersContext = React.createContext({
  characters,
  currentCharacter: '',
  isEditing: false
})

export default CharactersContext
