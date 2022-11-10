import React from 'react'
import  {Link} from 'react-router-dom'

const BookList = ({book}) => {
  return (
    <>
  <div className="card container">
 <div className="card-body">
    <Link to={`/books/${book.name}`}><h5 className="card-title">{book.name}</h5></Link>
  </div>
</div>
    </>
  )
}

export default BookList