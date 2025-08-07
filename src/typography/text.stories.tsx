import type { Meta, StoryObj } from '@storybook/react-vite';

import { Text } from './text';

const meta = {
  title: 'Typography/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Principal: Story = {
  args: {
    children: 'Text',
  },
};
