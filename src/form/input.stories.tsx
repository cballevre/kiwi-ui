import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './input';

const meta = {
  title: 'Form/Input',
  tags: ['autodocs'],
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    name: 'text',
    label: 'Text Input',
  },
};

export const TextWithDescriptionInput: Story = {
  args: {
    name: 'text-with-description',
    label: 'Text Input',
    description: 'This is a text input with a description.',
  },
};

export const TextWithErrorInput: Story = {
  args: {
    name: 'text-with-error',
    label: 'Text Input',
    required: true,
    error: 'This is an error message.',
  },
};

export const NumberInput: Story = {
  args: {
    name: 'number',
    label: 'Number Input',
    type: 'number',
    placeholder: 'Enter a number',
  },
};

export const TimeInput: Story = {
  args: {
    name: 'time',
    label: 'Time Input',
    type: 'time',
    placeholder: 'Select a time',
  },
};

export const DateInput: Story = {
  args: {
    name: 'date',
    label: 'Date Input',
    type: 'date',
    placeholder: 'Select a date',
  },
};
