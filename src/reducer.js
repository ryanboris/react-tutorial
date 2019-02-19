export default function reducer(state, action) {
  switch (action.type) {
    case 'DELETE':
      const index = action.payload
      const { characters } = state
      return {
        ...state,
        characters: [...characters.slice(0, index), ...characters.slice(index + 1)]
      }
    default:
      return state
  }
}
