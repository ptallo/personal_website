import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const linkedinLink : string = 'https://www.linkedin.com/in/philip-tallo-444667107/';
const githubLink : string = 'https://github.com/ptallo';

export function Navbar() {
  return <div className='navbar'>
    <span className='initials'>PT.</span>

    <div className='flex-container'>
      <a href=''>Home</a>
      <a href=''>Skills</a>
      <a href=''>Employment</a>
      <a href=''>Contact Me</a>
      <a href=''>|</a>
      <a href={linkedinLink} target='_blank'><FontAwesomeIcon icon={faLinkedin} size='xl'/></a>
      <a href={githubLink} target='_blank'><FontAwesomeIcon icon={faGithub} size='xl'/></a>
    </div>
  </div>;
}
