import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './input';

const meta = {
  title: 'Form/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    label: 'Text Input',
  },
};

export const NumberInput: Story = {
  args: {
    label: 'Number Input',
    type: 'number',
    placeholder: 'Enter a number',
  },
};

export const TimeInput: Story = {
  args: {
    label: 'Time Input',
    type: 'time',
    placeholder: 'Select a time',
  },
};

export const DateInput: Story = {
  args: {
    label: 'Date Input',
    type: 'date',
    placeholder: 'Select a date',
  },
};
