import { HoverButton } from '../HoverButton/HoverButton';
import './Navbar.scss';

let buttonOptions = {
  height: 60,
  width: 320,
  ids: [
    "Home",
    "Web Development",
    "Data Science",
    "Testamonials",
  ],
}

export function Navbar() {
  return <div className='navbar'>
    <span>PT.</span>

    <div className='flex-container'>
      {buttonOptions.ids.map(t => <HoverButton 
        text={t} 
        height={buttonOptions.height} 
        width={buttonOptions.width}
      />)}
    </div>
  </div>;
}
