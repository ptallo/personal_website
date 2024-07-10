import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { MouseEventHandler, useRef } from 'react';

const linkedinLink: string = 'https://www.linkedin.com/in/philip-tallo-444667107/';
const githubLink: string = 'https://github.com/ptallo';

export function Navbar() {
  const scrollToClass = (className: string) => {
    document.getElementsByClassName(className).item(0)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  return <div className='navbar'>
    <span className='initials'>PT.</span>

    <div className='flex-container'>
      {/* <div className='' onClick={scrollToElement}>Home</div> */}
      <div className='to-hide' onClick={(e) => { scrollToClass('skills') }}>Skills</div>
      <div className='to-hide' onClick={(e) => { scrollToClass('employment-history') }}>Employment</div>
      <div className='to-hide' onClick={(e) => { scrollToClass('contact-me') }}>Contact Me</div>
      <div className='to-hide' >|</div>
      <a href={linkedinLink} target='_blank'><FontAwesomeIcon icon={faLinkedin} size='xl' /></a>
      <a href={githubLink} target='_blank'><FontAwesomeIcon icon={faGithub} size='xl' /></a>
    </div>
  </div>;
}
