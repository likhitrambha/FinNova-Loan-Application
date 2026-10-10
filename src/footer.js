import React from 'react';
import './footer.css';
import { Link, useNavigate } from 'react-router-dom';

import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";

const Footer = () => {

  const navigate = useNavigate();


  /* ========================= */
  /* About → Benefits */
  /* ========================= */

  const handleAboutClick = () => {

    navigate('/');

    setTimeout(() => {

      const benefitsSection = document.getElementById('benefits');

      if (benefitsSection) {

        benefitsSection.scrollIntoView({
          behavior: 'smooth'
        });

      }

    }, 100);

  };


  /* ========================= */
  /* Loans → Top of Loans Page */
  /* ========================= */

  const handleLoansClick = () => {

    navigate('/loans');

    setTimeout(() => {

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    }, 100);

  };

  const navigateToLoan = (loanType) => {

    navigate('/loans', {
      state: {
        loanType: loanType
      }
    });

  };


  return (
    <footer className='footer-container'>

      <div className='footer-top-section'>

        <div className='Nav-Logo'>

          <h2 className='Nav-Logo-Text'>
            Fin<span className='nova'>Nova</span>
          </h2>

          <p className='Nav-Logo-Subtext'>
            Finance Made Simple
          </p>

        </div>


        <div className='links'>

          <h4>Quick Links</h4>


          <Link
            to='/'
            className='footer-link-Item'
          >
            Home
          </Link>


          {/* About → Benefits */}

          <button
            className='footer-link-Item'
            onClick={handleAboutClick}
          >
            About
          </button>


          {/* Loans → Top of Loans Page */}

          <button
            className='footer-link-Item'
            onClick={handleLoansClick}
          >
            Loans
          </button>


          <Link
            to='/contact'
            className='footer-link-Item'
          >
            Contact
          </Link>

        </div>


        {/* ========================= */}
        {/* Services */}
        {/* ========================= */}

        <div className='services'>

          <h4>Services We Offer</h4>


          <button
            className='footer-link-Item'
            onClick={() => navigateToLoan('car-loan')}
          >
            Car Loan
          </button>


          <button
            className='footer-link-Item'
            onClick={() => navigateToLoan('home-loan')}
          >
            Home Loan
          </button>


          <button
            className='footer-link-Item'
            onClick={() => navigateToLoan('personal-loan')}
          >
            Personal Loan
          </button>


          <button
            className='footer-link-Item'
            onClick={() => navigateToLoan('business-loan')}
          >
            Business Loan
          </button>


          <button
            className='footer-link-Item'
            onClick={() => navigateToLoan('education-loan')}
          >
            Education Loan
          </button>

        </div>


        {/* ========================= */}
        {/* Contact Information */}
        {/* ========================= */}

        <div className='contactInfo'>

          <p className='nav-contact-Item'>

            <MdLocalPhone className='footer-icon' />

            9876543211

          </p>


          <p className='nav-contact-Item'>

            <IoIosMail className='footer-icon' />

            support@finnova.com

          </p>


          <p className='nav-contact-Item'>

            <ImLocation className='footer-icon' />

            Opposit J.K gardens, J.N Road

          </p>


          <p className='nav-contact-Item'>

            Rajahmundry-533103

          </p>

        </div>

      </div>


      {/* ========================= */}
      {/* Footer Bottom */}
      {/* ========================= */}

      <div className='footer-bottom-section'>

        <h4 className='copy-right'>

          &copy; FinNova 2026

        </h4>

      </div>

    </footer>
  );
};

export default Footer;