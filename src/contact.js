import React, {useState} from 'react';
import './contact.css';
import {toast} from 'react-hot-toast';

function Contact() {

    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        query: ''
    });

    const handleChange = (e) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await fetch(
              'https://finnova-loan-application.onrender.com/api/contact',
              {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(contactData)
              }
          );

          const data = await response.json();

          if (response.ok) {

              toast.success('Message sent successfully!');

              setContactData({
                  name: '',
                  email: '',
                  query: ''
              });

          } else {
              toast.error(data.message || 'Something went wrong');
          }

      } catch (error) {

          console.log(error);
          toast.error('Unable to send message');

      }
  };

    return (
        <div className="contact-page">

            <div className="contact-heading">
                <h1>Contact Us</h1>
                <p>
                    Have a question or need help? We're here to assist you.
                </p>
            </div>

            <div className="contact-content">

                <div className="contact-info">
                    <img src='https://res.cloudinary.com/ds3qgsy6r/image/upload/v1791396017/Flat_Customer_Support_Call_Center_Illustration_iwg8zv.png' alt='supportImg' className='supportImg'/>
                    <h2>Let's Talk</h2>
                    <p>
                        Have a question about our loan services or application
                        process? Send us your query and our team will be happy to help you.
                    </p>

                </div>

                <div className="contact-form">

                    <h2>Send Us a Message</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="input-group">
                            <label htmlFor="name">Name</label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={contactData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Email</label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={contactData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="query">Query / Doubt</label>

                            <textarea
                                id="query"
                                name="query"
                                placeholder="How can we help you?"
                                value={contactData.query}
                                onChange={handleChange}
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="contact-btn">
                            Send Message →
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Contact;