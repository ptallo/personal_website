import './HeroImage.scss';

export function HeroImage() {
  return <div className='hero-image'>

    <div className='intro'>
      <h1>Hey, I'm Philip Tallo, A fullstack web developer, data scientist, and life long learner.</h1>

      <ul>
        <li>Web Developer</li>
        <li>Data Scientist</li>
        <li>Life Long Learner</li>
      </ul>
    </div>

    <div className='image-container'>
      <img src="me.png"/>
    </div>
  </div>;
}
