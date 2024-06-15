import './HoverButton.scss';

export interface HoverButtonProps {
  text?: string;
  height?: number;
  width?: number;
}

export function HoverButton({
  text = 'Something',
  height = 60,
  width = 320,
}: HoverButtonProps) {
  return <div className='HoverButton'>
    <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <rect className="shape" height={height} width={width} />
      <div className="text">{text}</div>
    </svg>
  </div>;
}
