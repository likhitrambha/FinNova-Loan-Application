import React from 'react'
import './footer.css';
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-top-section'>
        <div className= 'Nav-Logo'>
            <h2 className= 'Nav-Logo-Text'>Fin<span className= 'nova'>Nova</span></h2>
            <p className= 'Nav-Logo-Subtext'>Finance Made Simple</p>
        </div>
        <div className='links'>
            <a href='/' className='footer-link-Item'>Home</a>
            <a href='/' className='footer-link-Item'>About</a>
            <a href='/' className='footer-link-Item'>Loans</a>
            <a href='/contact' className='footer-link-Item'>Contact</a>
        </div>
        <div className='services'>
            <h4>Services We Offer</h4>
            <a href='/' className='footer-link-Item'>Car Loan</a>
            <a href='/' className='footer-link-Item'>HomeLoan</a>
            <a href='/' className='footer-link-Item'>Personal Loan</a>
            <a href='/' className='footer-link-Item'>Business Loan</a>
            <a href='/' className='footer-link-Item'>Education Loan</a>
        </div>
        <div className='contactInfo'>
            <p className='nav-contact-Item'><MdLocalPhone className='footer-icon' /> 9876543211</p>
            <p className='nav-contact-Item'><IoIosMail className='footer-icon' /> support@finnova.com</p>
            <p className='nav-contact-Item'><ImLocation className='footer-icon' /> Opposit J.K gardens, J.N Road</p>
            <p className='nav-contact-Item'>Rajahmundry-533103</p>
        </div>
      </div>
      <div className='footer-bottom-section'>
        <h4 className='copy-right'> &copy; FinNova 2026</h4>
      </div>
    </footer>
  )
}

export default Footer
