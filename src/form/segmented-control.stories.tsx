import type { Meta, StoryObj } from '@storybook/react-vite';

import { SegmentedControl } from './segmented-control';

const meta = {
  title: 'Form/Segmented Control',
  component: SegmentedControl,
} satisfies Meta<typeof SegmentedControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Segmented Control',
    options: ['Banana', 'Apple', 'Orange'],
  },
};
