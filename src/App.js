import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Banner from './banner';
// import Benefits from './benefits';
import {Routes, Route} from 'react-router-dom';
import FormPage from './formPage';
import {useState} from 'react';
// import * as XLSX from 'xlsx';
// import jspdf from 'jspdf';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    dob: '',
    email: '',
    pan: '',
    address: '',
    loanType: '',
    loanAmount: '',
    employmentType: '',
    monthlyIncome: ''
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newApplication = {
  //     "Full Name": formData.name,
  //     "Mobile Number": formData.mobile,
  //     "Date of Birth": formData.dob,
  //     "Email": formData.email,
  //     "PAN Number": formData.pan,
  //     "Address": formData.address,
  //     "Loan Type": formData.loanType,
  //     "Loan Amount": formData.loanAmount,
  //     "Employment Type": formData.employmentType,
  //     "Monthly Income": formData.monthlyIncome
  //   };

  //   const workSheet = XLSX.utils.json_to_sheet([newApplication]);
  //   const workBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workBook, workSheet, 'Loan Application');
  //   XLSX.writeFile(workBook, "LoanApplication.xlsx");

    
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const doc = new jspdf();
  //   doc.text("Loan Application", 90, 20);
  //   doc.text(`Full Name: ${formData.name}`, 20, 40);
  //   doc.text(`Mobile Number: ${formData.mobile}`, 20, 50);
  //   doc.text(`Date of Birth: ${formData.dob}`, 20, 60);
  //   doc.text(`Email: ${formData.email}`, 20, 70);
  //   doc.text(`PAN Number: ${formData.pan}`, 20, 80);
  //   doc.text(`Address: ${formData.address}`, 20, 90);
  //   doc.text(`Loan Type: ${formData.loanType}`, 20, 100);
  //   doc.text(`Loan Amount: ${formData.loanAmount}`, 20, 110);
  //   doc.text(`Employment Type: ${formData.employmentType}`, 20, 120);
  //   doc.text(`Monthly Income: ${formData.monthlyIncome}`, 20, 130);

  //   doc.save("Loan_Application.pdf");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch('http://localhost:5000/api/user',{
        method: 'POST',
        headers:{
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

    const data = await response.json();

    console.log("Server response:", data);


    }catch (error){
      console.log(error);
    }

  }

  return (
    <div className="App">           
      <NavBar />
      <Routes>
        <Route path='/' exact element={
          <>
            <Banner />
          </>
        } />
        <Route path='/contact' element={<FormPage handleInputChange={handleInputChange} handleSubmit={handleSubmit} formData={formData}/>} />
      </Routes>
    </div>
  );
}

export default App;
