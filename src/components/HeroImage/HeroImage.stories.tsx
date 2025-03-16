import { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'UI/HeroImage',
  component: HeroImage,
  argTypes: {
    imageSrc: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    imageSrc:
      'https://cdn.pixabay.com/photo/2016/08/09/12/20/sunset-1580493_1280.jpg',
    title: 'Hero Title',
    description: 'This is the hero subtitle',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    imageSrc:
      'https://cdn.pixabay.com/photo/2016/08/09/12/20/sunset-1580493_1280.jpg',
    title: 'Hero Title',
    description: 'This is the hero subtitle',
    disabled: true,
  },
};
