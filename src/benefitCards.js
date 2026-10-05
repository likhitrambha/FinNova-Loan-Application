import React from 'react'
import './benefitCard.css'

const benefitCards = () => {
  return (
    <div className= 'benefitCards'>
        <div className= 'benefitCardSection'>
            <div className= 'benefitCard'>
                <h3 className= 'benefitCardTitle'>Fast Approval</h3>
                <p className= 'benefitCardDescription'>Get your loan approved in record time with our streamlined process.</p>      
            </div>
            <div className= 'benefitCard'>
                <h3 className= 'benefitCardTitle'>Low Intrest Rates</h3>
                <p className= 'benefitCardDescription'>Enjoy competitive interest rates designed to make your repayments more affordable.</p>      
            </div>
            <div className= 'benefitCard'>
                <h3 className= 'benefitCardTitle'>Minimal Documentation</h3>
                <p className= 'benefitCardDescription'>Complete your application with simple documentation and less paperwork.</p>      
            </div>
        </div>
        <div className= 'benefitCardSection'>
            <div className= 'benefitCard'>
                <h3 className= 'benefitCardTitle'>Flexible Repayment</h3>
                <p className= 'benefitCardDescription'>Choose repayment options that fit your financial situation and budget.</p>      
            </div>
            <div className= 'benefitCard'>
                <h3 className= 'benefitCardTitle'>High Loan Amounts</h3>
                <p className= 'benefitCardDescription'>Access suitable loan amounts to meet your personal or financial requirements.</p>      
            </div>
            <div className= 'benefitCard'>
                <h3 className= 'benefitCardTitle'>24/7 Application</h3>
                <p className= 'benefitCardDescription'>Submit your loan application anytime at your convenience.</p>
            </div>
        </div>
    </div>
  )
}

export default benefitCards
