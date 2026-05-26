interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'border';
  children?: React.ReactNode;
  onClick?: () => void;
}