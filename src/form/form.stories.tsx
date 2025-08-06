import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { Form } from './index';
import { Input } from './input';

const meta = {
  title: 'Form/Form',
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Form {...args}>
      <Input type="text" label="Name" />
      <Input type="number" label="Age" />
      <Input type="time" label="Date" />
      <Input type="date" label="Time" />
      <Button type="submit" label="Submit" />
    </Form>
  ),
};
