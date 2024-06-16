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
  return <div className='hover-button'>
    <span>{text}</span>
  </div>
}
