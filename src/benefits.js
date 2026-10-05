import React from 'react'
import './benefits.css'
import BenefitCards from './benefitCards'
import { Link } from 'react-router-dom'

const benefits = () => {
  return (
    <div className= 'benefits' id= 'benefits'>
      <div className= 'benefits-Header'>
        <h2>Benefits of Choosing FinNova</h2>
        <p>Discover the advantages of our loan services and how we can help you achieve your financial goals.</p>
      </div>
      <BenefitCards />
      <Link to="/contact"><button className='Apply-Button'>Apply Now</button></Link>
    </div>
  )
}

export default benefits
