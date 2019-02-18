export default function reducer(state, action) {
  const { characters } = state
  switch (action.type) {
    case 'DELETE':
      const i = action.payload
      return {
        ...state,
        characters: [...characters.slice(0, i), ...characters.slice(i + 1)]
      }

    case 'ADD':
      if (!action.payload.name || !action.payload.job) {
        return state
      }
      return {
        ...state,
        characters: [...characters, { name: state.nameInput, job: state.jobInput }],
        nameInput: '',
        jobInput: ''
      }

    case 'EDIT':
      if (!action.payload.name || !action.payload.job) {
        return state
      }
      return {
        ...state,
        characters: [
          ...characters.slice(0, state.editIndex),
          { name: state.nameInput, job: state.jobInput },
          ...characters.slice(state.editIndex + 1)
        ],
        isEditing: false,
        editIndex: null,
        nameInput: '',
        jobInput: ''
      }

    case 'CURRENT_NAME':
      return {
        ...state,
        nameInput: action.payload
      }

    case 'CURRENT_JOB':
      return {
        ...state,
        jobInput: action.payload
      }

    case 'IS_EDITING':
      return {
        ...state,
        isEditing: true,
        editIndex: action.payload
      }

    default:
      return state
  }
}
