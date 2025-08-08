import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { Form } from './index';
import { Input } from './input';

const meta = {
  title: 'Form/Form',
  tags: ['autodocs'],
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Form {...args} className="max-w-sm mx-auto">
      <Input
        type="email"
        name="email"
        label="Your email"
        required
        placeholder="name@kiwi-ui.com"
        inputWrapperProps={{ className: 'mb-4' }}
      />
      <Input
        type="password"
        name="password"
        label="Your password"
        required
        inputWrapperProps={{ className: 'mb-4' }}
      />
      <Button type="submit" label="Submit" />
    </Form>
  ),
};
