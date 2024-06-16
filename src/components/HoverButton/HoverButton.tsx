import './HoverButton.scss';

export interface HoverButtonProps {
  text?: string;
}

export function HoverButton({
  text = 'Something',
}: HoverButtonProps) {
  return <button className="hover-button">
    <span>{text}</span>
  </button>
}
