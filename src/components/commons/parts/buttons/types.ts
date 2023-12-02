export interface IButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  background?: string;
  border?: string;
  src?: string;
  color?: string;
  content: string;
}
