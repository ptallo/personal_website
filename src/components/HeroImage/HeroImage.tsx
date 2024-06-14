import './HeroImage.scss';

export function HeroImage() {
  return <div className='hero-image'>

    <div className='content-container'>
      <div className='intro'>
        <h1>Hey, I'm Philip Tallo, A <span>web developer</span>, <span>data scientist</span>, and <span>life long learner</span>.</h1>

        <ul>
          <li>Web Developer</li>
          <li>Data Scientist</li>
          <li>Life Long Learner</li>
        </ul>
      </div>

      <div className='image-container'>
          <img src="pictures/me-greyscale.png"/>
      </div>
    </div>


    <div className="triangle-div">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
        </svg>
    </div>
  </div>;
}
