import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    imageSrc: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    buttonLabel: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    imageSrc:
      'https://cdn.pixabay.com/photo/2024/12/31/10/52/salamanca-9302112_1280.jpg',
    title: 'Card Title',
    description: 'This is a description of the card.',
    buttonLabel: 'Learn More',
    disabled: false,
    onButtonClick: () => {
      alert('Button Clicked!');
    },
  },
};

export const NoImage: Story = {
  args: {
    imageSrc: undefined,
    title: 'Card Without Image',
    description: 'This card does not have an image.',
    buttonLabel: 'Learn More',
    disabled: false,
    onButtonClick: () => {
      alert('Button Clicked!');
    },
  },
};

export const Disabled: Story = {
  args: {
    imageSrc:
      'https://cdn.pixabay.com/photo/2024/12/31/10/52/salamanca-9302112_1280.jpg',
    title: 'Card Title',
    description: 'This is a description of the card.',
    buttonLabel: 'Learn More',
    disabled: true,
    onButtonClick: () => {
      alert('Button Clicked!');
    },
  },
};
