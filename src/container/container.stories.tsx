import type { Meta, StoryObj } from '@storybook/react-vite';

import { Container } from './container';

const meta = {
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'bg-gray-100 p-4',
    children: 'This is a container',
  },
};
