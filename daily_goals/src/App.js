import React from 'react'
import Header from "./components/Header"
import "./styles/header.css"
import "./styles/home.css"
import "./App.css"
import "./styles/task.css"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import "./styles/about.css"
import "./styles/contacts.css"

import {BrowserRouter,Route,Routes} from "react-router-dom"
export default function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>

    </BrowserRouter>
  )
}
