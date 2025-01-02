
// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(  
//       'your_service_id',
//       'your_template_id',  
//       e.target,  
//       'your_user_id'  
//     )
//     .then(
//       (result) => {
//         console.log(result.text);
//         setStatus('Your message has been sent successfully!');
//         setFormData({
//           name: '',
//           email: '',
//           message: ''
//         });
//       },
//       (error) => {
//         console.log(error.text);
//         setStatus('There was an error sending your message. Please try again.');
//       }
//     );
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <h2>Contact Me</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Send Message</button>
//       </form>

//       {status && <p>{status}</p>}
//     </section>
//   );
// }

// export default Contact;
import React, { useState } from 'react';

function ContactSection () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate a form submission (replace with actual API call or email service)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('Thank you for contacting me! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 2000); // Simulating a 2 second delay
  };

  return (
    <section id="contact-section" style={sectionStyle}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputContainerStyle}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={textareaStyle}
          />
        </div>
        <button type="submit" style={buttonStyle} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {submitStatus && <p>{submitStatus}</p>}
    </section>
  );
};

// Inline styles (you can replace them with your CSS/Styled Components)
const sectionStyle = {
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
  textAlign: 'center',
  backgroundColor:'red',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ddd',
  borderRadius: '5px',
};

const textareaStyle = {
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  minHeight: '150px',
};

const buttonStyle = {
  padding: '12px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default ContactSection;
