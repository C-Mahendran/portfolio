import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: " ",
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Send "Thank You" email to the user
    const userParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,

    };

    emailjs
      .send(
        'service_gkivl1n',    // YOUR_SERVICE_ID
        'template_pgurxdq',      // template_id
        userParams,           // Pass the user details as parameters
        'UeDqUjMJOYFvDRBfp'        // public key
      )
      .then((response) => {
        console.log('Thank You email sent successfully to the user!', response.status, response.text);
      })
      .catch((err) => console.error('Failed to send Thank You email to the user:', err));

    // 2. Send admin email with user details
    const adminParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        'service_gkivl1n',   // YOUR_SERVICE_ID
        'template_0ndcyb8',     // template_id
        adminParams,          // Pass the user details as parameters
        'UeDqUjMJOYFvDRBfp'        // public key
      )
      .then((response) => {
        console.log('Admin email sent successfully!', response.status, response.text);
      })
      .catch((err) => console.error('Failed to send admin email:', err));
  };

  return (
    <div>
      <section style={{ paddingtop: '5rem' }} id="contact-section">
        <div style={{ paddingtop: '5rem' }} className="container">
          <form onSubmit={sendEmail}>
            <div style={{ color: 'yellow' }} className="text-center">
              <h1>Contact</h1>
            </div>
            <div className="row">
              <div className="col-lg-6 p-4">
                <div className='contact'>
                  <div>
                    <p
                      style={{
                        fontSize: '20px',
                        color: 'white',
                      }}
                    >
                      <span className='call'><i className="fa-solid fa-phone p-2 fs-4"></i></span>9345350437
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '17px',
                        color: 'white',
                        width: '80%',
                      }}
                    >
                      <span className='email'><i className="fa-regular fa-envelope p-2 fs-3 "></i></span>
                      mahendranc0414@gmail.com
                    </p></div>
                  <div>
                    <p style={{
                      fontSize: '17px',
                      color: 'white',
                      width: '80%',
                    }}>
                      <span>
                        <a className='locat' href="https://www.google.com/maps?q=Tamil+Nadu,+India" ><i class="fa-solid fa-location-dot p-2 fs-3"></i></a>
                      </span> Tamil Nadu
                    </p>
                  </div>
                  <div>
                    <p className='icon'>
                      <span >
                        <a className='facebook' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                          <i class="fa-brands fa-facebook"></i>
                        </a>
                      </span>

                      <span>
                        <a className='whatsapp' href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                          <i class="fa-brands fa-whatsapp white"></i>
                        </a>
                      </span>
                      <span>
                        <a className='twiter' href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                          <i class="fa-brands fa-x-twitter"></i>
                        </a>
                      </span>
                      <span>
                        <a className='insta' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                          <i class="fa-brands fa-square-instagram"></i>
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 emilbox p-4">
                <div className="">
                  <div style={{ width: '100%', marginBottom: '10px' }}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                      placeholder="Enter Email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                      placeholder="Mobile Number"

                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className='w-100 p-2 mb-2'
                      // style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                      placeholder="Enter Message"
                      required
                    />
                  </div>
                  <button className='submit p-2 mb-2'
                    type="submit"
                  >
                    Send Message
                  </button></div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Contact;
