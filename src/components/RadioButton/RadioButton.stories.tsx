import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'UI/RadioButton',
  component: RadioButton,
  argTypes: {
    options: { control: 'object' },
    selected: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    options: ['Option A', 'Option B', 'Option C'],
    selected: 'Option A',
    disabled: false,
    onChange: (value: string) => {
      console.log('Selected:', value);
    },
  },
};

export const Disabled: Story = {
  args: {
    options: ['Option A', 'Option B', 'Option C'],
    selected: 'Option A',
    disabled: true,
    onChange: (value: string) => {
      console.log('Selected (Disabled):', value);
    },
  },
};
