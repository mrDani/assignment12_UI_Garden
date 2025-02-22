import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  argTypes: {
    headers: { control: 'object' },
    rows: { control: 'object' },
    footer: { control: 'text' },
    disabled: { control: 'boolean' },
  },  
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ['Name', 'Age', 'Country'],
    rows: [
      ['Alice', '25', 'USA'],
      ['Bob', '30', 'UK'],
    ],
    footer: 'Footer text',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    headers: ['Name', 'Age', 'Country'],
    rows: [
      ['Alice', '25', 'USA'],
      ['Bob', '30', 'UK'],
    ],
    footer: 'Footer text',
    disabled: true,
  },
};
