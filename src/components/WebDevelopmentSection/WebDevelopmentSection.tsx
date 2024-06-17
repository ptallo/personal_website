import './WebDevelopmentSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular } from '@fortawesome/free-brands-svg-icons';


export function WebDevelopmentSection() {
  return <div className='web-development'>
    <h1>Web Development</h1>
    <p>Designing clean and performent experiences for the web!</p>

    <div className="cards">
      <div className="card">
        <h1><FontAwesomeIcon icon={faAngular} size='xl' /> Angular</h1>
        <p>After spending years developing modern and performant web applications for Aptera, I now have</p>
      </div>
    </div>
  </div>;
}
