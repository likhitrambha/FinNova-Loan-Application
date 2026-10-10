import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './loans.css';

const Loans = () => {

    const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

      const loanType = location.state?.loanType;

      if (loanType) {

          setTimeout(() => {

              const loanSection = document.getElementById(loanType);

              if (loanSection) {
                  loanSection.scrollIntoView({
                      behavior: 'smooth'
                  });
              }

          }, 100);

      }

  }, [location.state]);

  return (
    <div className="loans-page">

      {/* Car Loan */}
      <section className="loan-section" id="car-loan">
        <div className="loan-info">

          <h1>Car Loan</h1>

          <h2>Drive Your Dream Car</h2>

          <p className="loan-description">
            Make your dream car a reality with FinNova's flexible
            car loan solutions. Enjoy convenient repayment options
            and a simple application process.
          </p>

          <ul className="loan-benefits">
            <li>Quick and easy approval</li>
            <li>Flexible repayment options</li>
            <li>Competitive interest rates</li>
            <li>Minimal documentation</li>
          </ul>

        <button className="loan-apply-btn" onClick={() => navigate('/form', { state: { loanType: 'Car Loan' } })}>
            Apply for Car Loan →
        </button>
        </div>

        <div className="loan-image">
          <img
            src="https://res.cloudinary.com/ds3qgsy6r/image/upload/v1791475278/Luxury_Sedan_Finance_Growth_Scene_xhgnfo.png"
            alt="Car Loan"
          />
        </div>
      </section>


      {/* Home Loan */}
      <section className="loan-section reverse" id="home-loan">
        <div className="loan-info">

          <h1>Home Loan</h1>

          <h2>Build Your Dream Home</h2>

          <p className="loan-description">
            Turn your dream of owning a home into reality with
            flexible financing solutions designed around your needs.
          </p>

          <ul className="loan-benefits">
            <li>Attractive interest rates</li>
            <li>Flexible repayment tenure</li>
            <li>Simple documentation</li>
            <li>Expert financial guidance</li>
          </ul>

          <button className="loan-apply-btn" onClick={() => navigate('/form', { state: { loanType: 'Home Loan' } })}>
            Apply for Home Loan →
        </button>
        </div>

        <div className="loan-image">
          <img
            src="https://res.cloudinary.com/ds3qgsy6r/image/upload/v1791475277/Modern_Home_with_Rising_Property_Value_jlpyzd.png"
            alt="Home Loan"
          />
        </div>
      </section>


      {/* Personal Loan */}
      <section className="loan-section" id="personal-loan">
        <div className="loan-info">
    
          <h1>Personal Loan</h1>

          <h2>Financial Support When You Need It</h2>

          <p className="loan-description">
            Handle your personal expenses with a convenient loan
            solution and flexible repayment options.
          </p>

          <ul className="loan-benefits">
            <li>Fast processing</li>
            <li>Minimal documentation</li>
            <li>Flexible repayment options</li>
            <li>Quick access to funds</li>
          </ul>

          <button className="loan-apply-btn" onClick={() => navigate('/form', { state: { loanType: 'Personal Loan' } })}>
            Apply for Personal Loan →
        </button>
        </div>

        <div className="loan-image">
          <img
            src="https://res.cloudinary.com/ds3qgsy6r/image/upload/v1791475470/Confident_Growth_in_the_City_ull3wc.png"
            alt="Personal Loan"
          />
        </div>
      </section>


      {/* Business Loan */}
      <section className="loan-section reverse" id="business-loan">
        <div className="loan-info">
          
          <h1>Business Loan</h1>

          <h2>Power Your Business Growth</h2>

          <p className="loan-description">
            Get the financial support you need to expand your
            business, manage working capital, or pursue new opportunities.
          </p>

          <ul className="loan-benefits">
            <li>Flexible funding solutions</li>
            <li>Simple application process</li>
            <li>Competitive rates</li>
            <li>Business-focused financial support</li>
          </ul>

        <button className="loan-apply-btn" onClick={() => navigate('/form', { state: { loanType: 'Business Loan' } })}>
            Apply for Business Loan →
        </button>
        </div>

        <div className="loan-image">
          <img
            src="https://res.cloudinary.com/ds3qgsy6r/image/upload/v1791475454/Confident_Entrepreneur_Amid_Finance_Growth_plzbf3.png"
            alt="Business Loan"
          />
        </div>
      </section>


      {/* Education Loan */}
      <section className="loan-section" id="education-loan">
        <div className="loan-info">
          
          <h1>Education Loan</h1>

          <h2>Invest in Your Future</h2>

          <p className="loan-description">
            Pursue your educational goals with financial assistance
            designed to support higher studies and career growth.
          </p>

          <ul className="loan-benefits">
            <li>Support for higher education</li>
            <li>Flexible repayment options</li>
            <li>Simple documentation</li>
            <li>Guidance throughout the process</li>
          </ul>

        <button className="loan-apply-btn" onClick={() => navigate('/form', { state: { loanType: 'Education Loan' } })}>
            Apply for Education Loan →
        </button>
        </div>

        <div className="loan-image">
          <img
            src="https://res.cloudinary.com/ds3qgsy6r/image/upload/v1791475454/Student_Dreams_Rising_Futures_snkdbu.png"
            alt="Education Loan"
          />
        </div>
      </section>

    </div>
  );
};

export default Loans;