import BookShow from './BookShow';

function BookList({ books, deleteBookById }) {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} deleteBookById={deleteBookById} />
  })
  return <div className='book-list'>{renderedBooks}</div>
};

export default BookList;