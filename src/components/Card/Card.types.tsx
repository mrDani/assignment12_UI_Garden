export interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    buttonLabel: string;
    onButtonClick: () => void;
    disabled?: boolean;
  }
  