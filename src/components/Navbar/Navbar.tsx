import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const linkedInLink : string = 'https://www.linkedin.com/in/philip-tallo-444667107/';
const githubLink : string = 'https://github.com/ptallo';

export function Navbar() {
  return <div className='navbar'>
    <span className='initials'>PT.</span>

    <div className='flex-container'>
      <a href=''>Home</a>
      <a href=''>Web Development</a>
      <a href=''>Data Science</a>
      <a href=''>Testimonials</a>
      |
      <a href={linkedInLink}><FontAwesomeIcon icon={faLinkedin} size='xl'/></a>
      <a href={githubLink}><FontAwesomeIcon icon={faGithub} size='xl'/></a>
    </div>
  </div>;
}
