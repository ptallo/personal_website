import './HoverButton.scss';

export interface HoverButtonProps {
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function HoverButton({
  text = 'Something',
  onClick = (_) => {},
}: HoverButtonProps) {
  return <button onClick={onClick} className="hover-button">
    {text}
  </button>
}
