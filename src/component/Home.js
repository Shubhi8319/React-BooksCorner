
import React, { useState } from 'react'
import DATA from '../DATA.json'
import BookList from './BookList'

const Home = () => {
console.log(DATA);
const[dropDown,setDropDown] = useState("")

function handleClick(e){
  e.preventDefault()
  console.log(e.target.innerText);
  setDropDown(e.target.innerText)
}
  
  return (
    <>
   <nav className='d-flex container justify-content-between align-items-center '>
    <a className='logo mt-1 me-5 p-2 fs-1'>BooksCorner</a>
    
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle p-2 fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Book type
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="" onClick={handleClick}>kids</a></li>
    <li><a className="dropdown-item" href="" onClick={handleClick}>Adventure</a></li>
    <li><a className="dropdown-item" href="" onClick={handleClick}>Mystery and thriller</a></li>
    <li><a className="dropdown-item" href="" onClick={handleClick}>Horror</a></li>
    <li><a className="dropdown-item" href="" onClick={handleClick}>All</a></li>
  </ul>
</div>
   </nav>
   <h1 className='container text-center mt-5'>Welcome to the BooksCorner!!!!!!</h1>
   <h3 className='container mt-3'>Here some books for you.....</h3>
   
   {

   DATA.filter((book)=>{
   if(book.type.includes(dropDown)){
    return book
   }
  else if(dropDown.includes("All")){
    return book
  }
  }
   ).map((book)=>
   <BookList key={book.id} book={book}/>
   )
  }
</>
  )
  
}

export default Home