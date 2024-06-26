import { useState } from 'react';
import './ContactMe.scss';

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

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setInputs((values: InputsInterface) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <div className='contact-me'>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="firstname"
          value={inputs.firstname || ""}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastname"
          value={inputs.lastname || ""}
          onChange={handleChange}
        />
        
        <input
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />

        <input
          type="text"
          name="reason"
          value={inputs.reason || ""}
          onChange={handleChange}
        />

        <input type="submit" />
      </form>

    </div>
  )
}
