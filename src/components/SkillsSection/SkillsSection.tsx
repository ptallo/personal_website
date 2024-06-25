import './SkillsSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faDocker, faPython, faReact, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLanguage, faRobot, faDatabase, faFlask, faVial, faCheck } from '@fortawesome/free-solid-svg-icons';
import { CircleProgressBar } from '../CircleProgressBar/CircleProgressBar';


export function SkillsSection() {
  return <div className='skills'>

    <div className="summary">
      <h1>Skills</h1>
      <ul>
        <li><FontAwesomeIcon className='check' icon={faCheck}/>Designing clean experiences for the web!</li>
        <li><FontAwesomeIcon className='check' icon={faCheck}/>Building highly performant models!</li>
        <li><FontAwesomeIcon className='check' icon={faCheck}/>Continuously deploying it all to the cloud!</li>
      </ul>
    </div>

    <div className="cards">
      <CircleProgressBar text="Angular" icon={faAngular} progress={80} />
      <CircleProgressBar text="React" icon={faReact} progress={60} />
      <CircleProgressBar text="Docker" icon={faDocker} progress={80} />
      <CircleProgressBar text="Python" icon={faPython} progress={90} />
      <CircleProgressBar text="Natural Language Processing" icon={faLanguage} progress={90} />
      <CircleProgressBar text="Generative AI" icon={faRobot} progress={70} />
      <CircleProgressBar text="Google Cloud Platform" icon={faGoogle} progress={70} />
      <CircleProgressBar text="Entity Framework" icon={faDatabase} progress={60} />
      <CircleProgressBar text="Test Driven Development" icon={faFlask} progress={70} />
      <CircleProgressBar text="Experiment Design" icon={faVial} progress={80} />
    </div>

  </div>;
}
