import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Img from './Img';

const meta: Meta<typeof Img> = {
  title: 'UI/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://cdn.pixabay.com/photo/2022/05/28/22/44/multi-storey-parking-garage-7228120_1280.jpg',
    alt: 'Placeholder Image',
    width: '300px',
    height: '200px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://cdn.pixabay.com/photo/2022/05/28/22/44/multi-storey-parking-garage-7228120_1280.jpg',
    alt: 'Placeholder Image',
    width: '300px',
    height: '200px',
    disabled: true,
  },
};
