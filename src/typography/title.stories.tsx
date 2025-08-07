import type { Meta, StoryObj } from '@storybook/react-vite';

import { Title } from './title';

const meta = {
  title: 'Typography/Title',
  component: Title,
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Principal: Story = {
  args: {
    children: 'Title nb 1',
  },
};
