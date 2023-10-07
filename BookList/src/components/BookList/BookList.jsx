import { useSelector, useDispatch } from 'react-redux'

import { deleteBook, toggleFav } from '../../redux/books/actionCreators'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import './BookList.css'

const BookList = () => {
  const dispatch = useDispatch()
  const books = useSelector(state => state.books)

  const handleDelete = id => {
    dispatch(deleteBook(id))
  }
  const handleToggle = id => {
    dispatch(toggleFav(id))
  }

  return (
    <div className='app-block book-list'>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>Not book avalible</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id} className='book-list'>
              <div className='book-info'>
                {++i}. {book.title} by <strong>{book.author}</strong>{' '}
              </div>
              <div className='book-actions'>
                <span onClick={() => handleToggle(book.id)}>
                  {book.fav ? (
                    <BsBookmarkStarFill className='star-icon' />
                  ) : (
                    <BsBookmarkStar className='star-icon' />
                  )}
                </span>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
