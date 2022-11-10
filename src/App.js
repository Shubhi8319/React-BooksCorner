import {lazy, Suspense } from "react";
import { Routes,Route} from 'react-router-dom'
import Home from "./component/Home";
const BookDetail = lazy(()=>import('./component/BookDetail'))

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/books/:name" element={<Suspense fallback ={<div><h1>Loading......</h1></div>}> <BookDetail/> </Suspense> }/> 
    </Routes>
    </>
  );
}

export default App;
