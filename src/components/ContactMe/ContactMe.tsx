import { useState } from 'react';
import './ContactMe.scss';


export function ContactMe() {
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert()
  }

  return <div className='contact-me'>
    <h1>Contact Me</h1>
    <form onSubmit={handleSubmit}>
      <label>Firstname
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
      <input type="submit" />
    </form>
  </div>;
}
