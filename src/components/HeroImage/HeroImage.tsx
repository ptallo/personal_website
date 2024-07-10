import { HoverButton } from '../HoverButton/HoverButton';
import './HeroImage.scss';

export function HeroImage() {

  const scrollToClass = (className: string) => {
    document.getElementsByClassName(className).item(0)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  return <div className='hero-image'>

    <div className='intro'>
      <h1>Hey, I'm Philip Tallo, A <span>web developer</span>, <span>data scientist</span>, and <span>life long learner</span>.</h1>

      <ul>
        <li>Web Developer</li>
        <li>Data Scientist</li>
        <li>Life Long Learner</li>
      </ul>

      <HoverButton onClick={(_) => {scrollToClass('contact-me')}} text='Contact Me' />
    </div>

    <div className='image-container'>
      <img src="pictures/me-greyscale.png" />
    </div>

  </div>;
}
