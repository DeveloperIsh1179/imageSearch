import BookShow from './BookShow';

function BookList({ books, remove, edit }) {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} remove={remove} edit={edit} />
  })
  return <div className='book-list'>{renderedBooks}</div>
};

export default BookList;