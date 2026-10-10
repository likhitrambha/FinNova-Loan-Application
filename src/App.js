import React from 'react';
import {Toaster, toast} from 'react-hot-toast';
import './App.css';
import NavBar from './NavBar';
import Banner from './banner';
import Contact from './contact';
import Footer from './footer';
import Loans from './loans';
import {Routes, Route} from 'react-router-dom';
import FormPage from './formPage';
import {useState} from 'react';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch('https://finnova-loan-application.onrender.com/api/user',{
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

    toast.success('Application Submitted Succcessfully!')

    setFormData({
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

    }catch (error){
      console.log(error);
      toast.error('Failed to submit the application!')
    }

  }

  return (
    <div className="App">           
      <NavBar />
      <Toaster position='top-center' toastOptions={{duration:3000,}} />
      <Routes>
        <Route path='/' exact element={
          <>
            <Banner />
          </>
        } />
        <Route path='/loans' element={<Loans />} />
        <Route
          path='/form'
          element={
            <FormPage
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              formData={formData}
              setFormData={setFormData}
            />
          }
        />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
