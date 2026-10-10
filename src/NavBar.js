import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);


    const handleAboutClick = () => {

        closeMenu();

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


    return (
        <nav>

            {/* Logo */}

            <div className='Nav-Logo'>

                <h2 className='Nav-Logo-Text'>
                    Fin<span className='nova'>Nova</span>
                </h2>

                <p className='Nav-Logo-Subtext'>
                    Finance Made Simple
                </p>

            </div>


            {/* Hamburger */}

            <button
                className='hamburger'
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label='Toggle navigation'
            >
                {menuOpen ? '✕' : '☰'}
            </button>


            {/* Navigation */}

            <ul className={`Nav-List ${menuOpen ? 'active' : ''}`}>

                <li>
                    <Link
                        to='/'
                        className='Nav-Item'
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                </li>


                <li>
                    <button
                        className='Nav-Item nav-about-btn'
                        onClick={handleAboutClick}
                    >
                        About
                    </button>
                </li>


                <li>
                    <Link
                        to='/loans'
                        className='Nav-Item'
                        onClick={closeMenu}
                    >
                        Loans
                    </Link>
                </li>


                <li>
                    <Link
                        to='/contact'
                        className='Nav-Item'
                        onClick={closeMenu}
                    >
                        Contact Us
                    </Link>
                </li>


                <li>
                    <button
                        onClick={() => {
                            closeMenu();
                            navigate('/form');
                        }}
                        className='nav-btn'
                    >
                        Apply Now
                    </button>
                </li>

            </ul>

        </nav>
    )
}

export default NavBar