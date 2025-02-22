import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'UI/HeroImage',
  component: HeroImage,
  argTypes: {
    backgroundImage: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    backgroundImage: 'https://cdn.pixabay.com/photo/2016/08/09/12/20/sunset-1580493_1280.jpg',
    title: 'Hero Title',
    subtitle: 'This is the hero subtitle',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    backgroundImage: 'https://cdn.pixabay.com/photo/2016/08/09/12/20/sunset-1580493_1280.jpg',
    title: 'Hero Title',
    subtitle: 'This is the hero subtitle',
    disabled: true,
  },
};
