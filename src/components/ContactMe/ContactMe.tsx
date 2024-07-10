import { useState } from 'react';
import './ContactMe.scss';
import EmailService from "../../services/EmailService";

interface InputsInterface {
  firstname: string;
  lastname: string;
  email: string;
  reason: string;
}

export function ContactMe() {
  const [inputs, setInputs]: [InputsInterface, Function] = useState({
    'firstname': '',
    'lastname': '',
    'email': '',
    'reason': '',
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setInputs((values: InputsInterface) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    EmailService.sendContactForm().then(
      (response) => {
        alert('Successfully sent email!');
        clearInputs();
      },
      (error) => {
        alert('Failed to send email!');
      }
    );
  }

  const clearInputs = () => {
    setInputs({
      'firstname': '',
      'lastname': '',
      'email': '',
      'reason': '',
    });
  }

  return (
    <div className='contact-me'>
      <h1>Contact Me</h1>
      <form id='contact-me-form' onSubmit={handleSubmit}>

        <input
          type="text"
          name="firstname"
          placeholder='First Name...'
          value={inputs.firstname || ""}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="lastname"
          placeholder='Last Name...'
          value={inputs.lastname || ""}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder='Email...'
          value={inputs.email || ""}
          onChange={handleChange}
          required
        />

        <textarea
          name="reason"
          placeholder='Reason...'
          value={inputs.reason || ""}
          onChange={handleChange}
          required
        />

        <input type="submit" />
      </form>

    </div>
  )
}
