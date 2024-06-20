
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CircleProgressBar.scss';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface CircleProgressBarProps {
  icon: IconDefinition;
  text: string;
  progress: number;
}

function getCircleStyle(progress: number): React.CSSProperties {
  return {
    '--bar-progress': `${progress}%`
  } as React.CSSProperties;
}

export function CircleProgressBar(props: CircleProgressBarProps) {
  return <div className='circle-progress-bar'>
    <div className='circle' style={getCircleStyle(props.progress)}>
      <FontAwesomeIcon className="icon" icon={props.icon} />
    </div>
    <p>{props.text}</p>
  </div>;
}
