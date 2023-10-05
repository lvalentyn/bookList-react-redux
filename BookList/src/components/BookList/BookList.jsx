import { useSelector } from 'react-redux'
import './BookList.css'

const BookList = () => {
  const books = useSelector(state => state.books)

  console.log(books)

  return (
    <div className='app-block book-list'>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>Not book avalible</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.title + i}>
              <div className='book-info'>
                {book.title} by <strong>{book.author}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList