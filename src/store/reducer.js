const initialState = { selectedItems: [], value: '' }

const selectItems = (state, action) => {
  const { selected, value } = action.payload,
    selectedItems = [...state.selectedItems]
  selected
    ? selectedItems.push(value)
    : selectedItems.splice(selectedItems.indexOf(value), 1)
  return { ...state, selectedItems, value }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT':
      return selectItems(state, action)
    default:
      return state
  }
}

export default reducer
