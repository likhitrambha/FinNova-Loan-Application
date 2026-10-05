import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className= 'Nav-Logo'>
        <h2 className= 'Nav-Logo-Text'>Fin<span className= 'Nav-Logo-Text-Part'>Nova</span></h2>
        <p className= 'Nav-Logo-Subtext'>Finance Made Simple</p>
      </div>
      <ul className= 'Nav-List'>
        <li><Link to="/" className= 'Nav-Item'>Home</Link></li>
        <li><a href="#benefits" className= 'Nav-Item'>About</a></li>
        <li><a href="#benefits" className= 'Nav-Item'>Loans</a></li>
        <li><Link to="/contact" className= 'Nav-Item'>Contact</Link></li>
        <li><button onClick={() => navigate("/contact")} className= 'nav-btn'>Apply Now</button></li>
      </ul>
    </nav>
  )
}

export default NavBar
