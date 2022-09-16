import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// pages and components
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Projects from './Pages/Projects';

const App = () => {
  return (
    <>
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
      

    </>
  )
}

export default App