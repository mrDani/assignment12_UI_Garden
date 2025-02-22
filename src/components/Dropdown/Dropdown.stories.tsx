import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'object' },
    selected: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    selected: 'Option 1',
    disabled: false,
    onChange: (value: string) => {
      console.log('Selected:', value);
    },
  },
};

export const Disabled: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    selected: 'Option 1',
    disabled: true,
    onChange: (value: string) => {
      console.log('Selected (Disabled):', value);
    },
  },
};
