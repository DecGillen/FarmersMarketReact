import React, { useState } from 'react';

function ContactBox() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);//.test returns a boolean if the target matches the format
  };

  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setIsValidEmail(validateEmail(inputValue));
  };

  const handleMessageChange = (event) => {
    const inputValue = event.target.value;
    setMessage(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValidEmail && name.trim() !== '') {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      setName('');
      setEmail('');
      setMessage('');
      setIsValidEmail(false);
    }
  };

  return (
    <div className="container">
      <div className="contact-container">
        <div className="mailer">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={handleNameChange}
                required 
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="textbox">
              <textarea
                placeholder="Write your message here"
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactBox;
