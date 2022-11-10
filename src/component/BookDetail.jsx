import React from 'react'
import {useParams} from 'react-router-dom'
import DATA from '../DATA.json'

const BookDetail = () => {
    console.log();
    const {name} = useParams()
  return (
    <>
   
    {
      DATA.filter((book)=>book.name === name).map((book)=>
      <div key={book.id} className="card card-detail">
  <img src={book.img} className="card-img-top container" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{book.name}</h5>
    <p className="card-text">{book.story}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Published:{book.published}</li>
    <li className="list-group-item">Pages: {book.pages}</li>
  </ul>
  </div>)
}

    </>
  )
}

export default BookDetail