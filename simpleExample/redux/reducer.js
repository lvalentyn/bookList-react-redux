import actionTypes from './actionTypes.js'
const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addTime:
      return [...state, action.payload]
    case actionTypes.clearTimes:
      return []

    default:
      return state
  }
}

export default reducer
