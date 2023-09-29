import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import Color from './components/Color'
import Home from './components/Home'


function App() {
  

  return (
    <>
      <div id="container">
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
        </div>


        <div id="main-section">
          <Routes>
            <Route path="/:color" element={<Color/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
    </div>
    </>
  )
}

export default App
