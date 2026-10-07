import React from 'react'
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMdTrendingDown } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { GiMoneyStack, GiTakeMyMoney  } from "react-icons/gi";
import { Ri24HoursLine } from "react-icons/ri";
import './banner.css'

const banner = () => {
  return (
    <>
      <div className='banner'>
          <h1 className='banner-text'>Welcome to FinNova</h1>
          <p className='banner-subtext'>We provide personalized financial advice and services to help you achieve your goals.</p>
      </div>

      <div className= 'benefits' id= 'benefits'>
        <div className= 'benefits-Header'>
          <h2>Benefits of Choosing FinNova</h2>
          <p>Discover the advantages of our loan services and how we can help you achieve your financial goals.</p>
        </div>

        <div className= 'benefitCards'>
          <div className= 'benefitCardSection'>
              <div className= 'benefitCard'>
                  <AiFillThunderbolt className='benefitCardIcon thunder'/>
                  <h3 className= 'benefitCardTitle'>Fast Approval</h3>
                  <p className= 'benefitCardDescription'>Get your loan approved in record time with our streamlined process.</p>      
              </div>
              <div className= 'benefitCard'>
                <IoMdTrendingDown className='benefitCardIcon lowRate'/>
                  <h3 className= 'benefitCardTitle'>Low Intrest Rates</h3>
                  <p className= 'benefitCardDescription'>Enjoy competitive interest rates designed to make your repayments more affordable.</p>      
              </div>
              <div className= 'benefitCard'>
                  <IoDocuments className='benefitCardIcon docs'/>
                  <h3 className= 'benefitCardTitle'>Minimal Documentation</h3>
                  <p className= 'benefitCardDescription'>Complete your application with simple documentation and less paperwork.</p>      
              </div>
          </div>
          <div className= 'benefitCardSection'>
              <div className= 'benefitCard'>
                  <GiMoneyStack className='benefitCardIcon money'/>
                  <h3 className= 'benefitCardTitle'>Flexible Repayment</h3>
                  <p className= 'benefitCardDescription'>Choose repayment options that fit your financial situation and budget.</p>      
              </div>
              <div className= 'benefitCard'>
                  <GiTakeMyMoney className='benefitCardIcon money'/>
                  <h3 className= 'benefitCardTitle'>High Loan Amounts</h3>
                  <p className= 'benefitCardDescription'>Access suitable loan amounts to meet your personal or financial requirements.</p>      
              </div>
              <div className= 'benefitCard'>
                  <Ri24HoursLine className='benefitCardIcon time'/>
                  <h3 className= 'benefitCardTitle'>24/7 Application</h3>
                  <p className= 'benefitCardDescription'>Submit your loan application anytime at your convenience.</p>
              </div>
          </div>
      </div>
        
      <a href="/form"><button className='Apply-Button'>Apply Now</button></a>
      </div>

      
    </>
    
  )
}

export default banner
