export interface RadioButtonProps {
  options: string[];
  selected?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}
