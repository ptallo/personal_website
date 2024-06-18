import './SkillsSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faDocker, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';


export function SkillsSection() {
  return <div className='skills'>
    <h1>Skills</h1>
    <p>Designing clean experiences for the web! Building highly performant models! Deploying it all to the cloud!</p>

    <div className="cards">

      <div className="card">
        <FontAwesomeIcon className="icon" icon={faAngular} />
        <h1>Angular</h1>
        <p>During my tenure at Aptera I spent 2+ years developing enterprise Angular applications for many clients!</p>
      </div>

      <div className="card">
        <FontAwesomeIcon className="icon" icon={faDocker} />
        <h1>Docker</h1>
        <p>Both on professional and personal projects, such as this website, I use docker to create highly portable code which can run anywhere!</p>
      </div>

      <div className="card">
        <FontAwesomeIcon className="icon" icon={faPython} />
        <h1>Python</h1>
        <p>Python was the first programming language I ever learned! 10+ years later I have used it from everything from building Django Web Apps to Streamlit Applications to Neural Networks!</p>
      </div>

      <div className="card">
        <FontAwesomeIcon className="icon" icon={faReact} />
        <h1>React</h1>
        <p>Although I am new to React, I have begun to appreciate the ways in which this differs from Angular. This has much simpler implementation overall and is favorable for smaller applications.</p>
      </div>

      <div className="card">
        <FontAwesomeIcon className="icon" icon={faLanguage} />
        <h1>NLP</h1>
        <p></p>
      </div>

      <div className="card">
        <FontAwesomeIcon className="icon" icon={faAngular} />
        <h1>Angular</h1>
        <p>I have extensive experience developing enterprise Angular applications which I gained while working for Aptera! </p>
      </div>

      <div className="card">
        <FontAwesomeIcon className="icon" icon={faAngular} />
        <h1>Angular</h1>
        <p>I have extensive experience developing enterprise Angular applications which I gained while working for Aptera! </p>
      </div>

      <div className="card">
        <FontAwesomeIcon className="icon" icon={faAngular} />
        <h1>Angular</h1>
        <p>I have extensive experience developing enterprise Angular applications which I gained while working for Aptera! </p>
      </div>

    </div>
  </div>;
}
