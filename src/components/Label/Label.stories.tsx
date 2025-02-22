import { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Default Label',
    color: '#000',
    disabled: false,
  },
};

export const Colored: Story = {
  args: {
    text: 'Colored Label',
    color: '#ff69b4',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    color: '#000',
    disabled: true,
  },
};
