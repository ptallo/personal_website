import { HoverButton } from '../HoverButton/HoverButton';
import './Navbar.scss';

let ids = [
  "Home",
  "Web Development",
  "Data Science",
  "Testamonials",
]


export function Navbar() {
  return <div className='navbar'>
    <span className='initials'>PT.</span>

    <div className='flex-container'>
      {ids.map(t => <HoverButton text={t} />)}
    </div>
  </div>;
}
