export default function reducer(state, action) {
  switch (action.type) {
    case 'DELETE':
      const { characters } = state
      const i = action.payload
      return {
        ...state,
        characters: [...characters.slice(0, i), ...characters.slice(i + 1)]
      }

    default:
      return state
  }
}
