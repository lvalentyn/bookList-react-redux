import { ADD_BOOK, DELETE_BOOK, TOGGLE_FAVORITE } from './actionTypes.js'
const initialState = []

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload]
    case DELETE_BOOK:
      return state.filter(book => book.id !== action.payload)
    case TOGGLE_FAVORITE:
      return state.map(book =>
        book.id === action.payload ? { ...book, fav: !book.fav } : book
      )

    default:
      return state
  }
}

export default booksReducer
