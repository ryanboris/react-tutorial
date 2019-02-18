import React from 'react'
import { characters } from './Characters'

const CharactersContext = React.createContext({
  characters,
  currentCharacter: '',
  isEditing: false,
  nameInput: '',
  jobInput: '',
  editIndex: null
})

export default CharactersContext
