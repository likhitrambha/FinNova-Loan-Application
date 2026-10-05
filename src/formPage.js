import React from 'react'
import './formPage.css'

const FormPage = ({handleInputChange, handleSubmit, formData}) => {
  return (
    <div className= 'Form-Page'>
      <form className= 'Form-Container' onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name" className='label-name'>Full Name:</label><br/>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className='input-name'/>
        </div>

        <div>
            <label htmlFor="mobile" className='label-name'>Mobile Number:</label><br/>
            <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} required className='input-name'/>
        </div>

        <div>
            <label htmlFor="dob" className='label-name'>Date of Birth:</label><br/>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} required className='input-name'/>
        </div>

        <div>
            <label htmlFor="email" className='label-name'>Email:</label><br/>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className='input-name'/>
        </div>

        <div>
            <label htmlFor="pan" className='label-name'>Pan Number:</label><br/>
            <input type="text" id="pan" name="pan" value={formData.pan} onChange={handleInputChange} required className='input-name'/>
        </div>

        <div>
            <label htmlFor="address" className='label-name'>Address:</label><br/>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required className='input-name'/>
        </div>

        <select id="loan-type" name="loanType" value={formData.loanType} onChange={handleInputChange}  required className="input-name">
            <option value="">Select Loan Type</option>
            <option value="Personal Loan">Personal Loan</option>
            <option value="Home Loan">Home Loan</option>
            <option value="Car Loan">Car Loan</option>
            <option value="Education Loan">Education Loan</option>
            <option value="Business Loan">Business Loan</option>
            <option value="Gold Loan">Gold Loan</option>
        </select>

        <div>
            <label htmlFor="loan-amount" className='label-name'>Loan Amount:</label><br/>
            <input type="number" id="loan-amount" name="loanAmount" value={formData.loanAmount} onChange={handleInputChange} required className='input-name'/>
        </div>

        <select id="employment-type" name="employmentType" value={formData.employmentType} onChange={handleInputChange} required className="input-name">
            <option value="">Select Employment Type</option>
            <option value="Salaried">Salaried</option>
            <option value="Self Employed">Self Employed</option>
            <option value="Business">Business</option>
            <option value="Student">Student</option>
        </select>
        <div>
            <label htmlFor="monthly-income" className='label-name'>Monthly Income:</label><br/>
            <input type="number" id="monthly-income" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleInputChange} required className='input-name'/>
        </div>

        <button type="submit" className='submit-button'>Submit</button>
      </form>
      <img src="https://res.cloudinary.com/ds3qgsy6r/image/upload/v1790963321/pngwing.com_v2qxp3.png" alt="Loan" className='form-image'/>
    </div>
  )
}

export default FormPage