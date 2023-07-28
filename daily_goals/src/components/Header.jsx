import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <>
    <header>
        <div className='left'>
        <ul className='list'>
            <li className='items'><h2 className='todo'>ToDo</h2></li>
            <li className='items'><Link to="/">Home</Link></li>
            <li className='items'><Link to="/about">About</Link></li>
            <li className='items'><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
        <div className="right">
            <button className='primary'>LogIn</button>
            <button className='secondary'>SignUp</button>
        </div>
        </header>
    </>
  )
}
