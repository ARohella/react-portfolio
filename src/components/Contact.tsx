import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      var templateParams = {
        name: name,
        time: new Date().toLocaleString(),
        message: `From: ${email}\n\n${message}`,
      };

      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSent(true);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error);
          // Fallback to mailto
          window.location.href = `mailto:akshat.rohella@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
        },
      );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Interested in working together or have a question? Feel free to reach out!</p>
          {sent ? (
            <p className="success-message">Thanks for reaching out! I'll get back to you soon.</p>
          ) : (
            <Box
              ref={form}
              component="form"
              noValidate
              autoComplete="off"
              className='contact-form'
            >
              <div className='form-flex'>
                <TextField
                  required
                  id="outlined-required"
                  label="Your Name"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  error={nameError}
                  helperText={nameError ? "Please enter your name" : ""}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Email / Phone"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  error={emailError}
                  helperText={emailError ? "Please enter your email or phone number" : ""}
                />
              </div>
              <TextField
                required
                id="outlined-multiline-static"
                label="Message"
                placeholder="Send me any inquiries or questions"
                multiline
                rows={10}
                className="body-form"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                error={messageError}
                helperText={messageError ? "Please enter the message" : ""}
              />
              <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
                Send
              </Button>
            </Box>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
