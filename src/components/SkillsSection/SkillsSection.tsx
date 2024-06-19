import './SkillsSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faDocker, faPython, faReact, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLanguage, faRobot, faDatabase, faFlaskVial } from '@fortawesome/free-solid-svg-icons';


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
        <h1>Natural Language Processing</h1>
        <p>I completed my Master's of Computer Science with a focus in NLP in 2022. Since then it has been a pleasure to watch NLP hit the mainstream!</p>
      </div>

      <div className="card">
        <FontAwesomeIcon className="icon" icon={faRobot} />
        <h1>Generative AI</h1>
        <p>Since I studied this in my master's degree I am uniquely position to take advantage of advances, but also understand weaknesses in Generative AI!</p>
      </div>

      <div className="card">
        <FontAwesomeIcon className="icon" icon={faGoogle} />
        <h1>Google Cloud Platform</h1>
        <p>For several years now I have had the pleasure of working with many aspects of GCP. Including but not limited to: Cloud Run, Looker, Big Query, Cloud Storage, Container Registry and Kubernetes Engine!</p>
      </div>

      <div className="card">
        <FontAwesomeIcon className="icon" icon={faDatabase} />
        <h1>Entity Framwork</h1>
        <p>While developing enterprise applications during my consulting work at Aptera, Entity Framwork was a key component of our architecture. We utilized it's code driven ORM to quickly develop new features!</p>
      </div>

      <div className="card">
        <FontAwesomeIcon className="icon" icon={faFlaskVial} />
        <h1>Test Driven Development</h1>
        <p>Using TDD for any serious application is a must! It's hard to pass up either the efficient coding it enforces or the feature regression it protects against!</p>
      </div>
    </div>
  </div>;
}
