import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className= 'Nav-Logo'>
        <h2 className= 'Nav-Logo-Text'>Fin<span className= 'nova'>Nova</span></h2>
        <p className= 'Nav-Logo-Subtext'>Finance Made Simple</p>
      </div>
      {/* <div className='Nav-Logo-container'>
        <img src='https://res.cloudinary.com/ds3qgsy6r/image/upload/v1791359666/3_yhhhac.png' className='nav-logo'/>
      </div> */}
      <ul className= 'Nav-List'>
        <li><Link to="/" className= 'Nav-Item'>Home</Link></li>
        <li><a href="#benefits" className= 'Nav-Item'>About</a></li>
        <li><a href="#benefits" className= 'Nav-Item'>Loans</a></li>
        <li><Link to="/contact" className= 'Nav-Item'>Contact Us</Link></li>
        <li><button onClick={() => navigate("/form")} className= 'nav-btn'>Apply Now</button></li>
      </ul>
    </nav>
  )
}

export default NavBar
