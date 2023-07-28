import React from 'react';

const Contact = () => {
  return (
    <div className='containerform'>
      <h2 className='mainHeading'>Contact Us</h2>
      <p className='contactp'>
        If you have any questions, feedback, or need assistance, please feel free to contact us.
        We'd love to hear from you!
      </p>
      <div>
        <p className='contactp'>Email: info@dailygoalswebsite.com</p>
        <p className='contactp'>Phone: +1 (123) 456-7890</p>
      </div>
      <div className='formcontact'>
        <h3 className='formheading'>Send us a message</h3>
        <form className='contactform'>
          <div className='name'>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className='email'>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className='message'>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
