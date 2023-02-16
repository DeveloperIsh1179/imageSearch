import BookShow from './BookShow';

function BookList({ books, remove, onEdit }) {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} remove={remove} onEdit={onEdit} />
  })
  return <div className='book-list'>{renderedBooks}</div>
};

export default BookList;