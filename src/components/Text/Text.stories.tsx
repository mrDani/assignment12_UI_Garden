import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    color: { control: 'color' },
    size: { 
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: 'This is a text component.',
    color: '#000',
    size: 'medium',
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    content: 'This is a large text component.',
    color: '#000',
    size: 'large',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    content: 'This text is disabled.',
    color: '#000',
    size: 'medium',
    disabled: true,
  },
};
