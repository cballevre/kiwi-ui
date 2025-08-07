import type { Meta, StoryObj } from '@storybook/react-vite';

import { SegmentedControl } from './segmented-control';

const meta = {
  title: 'Form/Segmented Control',
  tags: ['autodocs'],
  component: SegmentedControl,
} satisfies Meta<typeof SegmentedControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'fruits',
    label: 'Fruits',
    description: 'Select your favorite fruit',
    options: ['Banana', 'Apple', 'Orange'],
    value: 'Banana',
  },
};

export const WithValue: Story = {
  args: {
    name: 'fruits',
    label: 'Fruits',
    description: 'Select your favorite fruit',
    options: [
      {
        label: 'Banana',
        value: 0,
      },
      {
        label: 'Apple',
        value: 1,
      },
      {
        label: 'Orange',
        value: 2,
      },
    ],
    value: 2,
  },
};
