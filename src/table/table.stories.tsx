import type { Meta, StoryObj } from '@storybook/react-vite';

import { Cell, Column, Row, TableBody, TableHeader } from './index';
import { Table } from './table';

const meta = {
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    striped: false,
    bordered: false,
  },

  render: (args) => (
    <Table {...args} aria-label="Example Table">
      <TableHeader>
        <Column></Column>
        <Column isRowHeader>Name</Column>
        <Column>Job</Column>
        <Column>Favorite Color</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>1</Cell>
          <Cell>Cy Ganderton</Cell>
          <Cell>Quality Control Specialist</Cell>
          <Cell>Blue</Cell>
        </Row>
        <Row>
          <Cell>2</Cell>
          <Cell>Hart Hagerty</Cell>
          <Cell>Desktop Support Technician</Cell>
          <Cell>Purple</Cell>
        </Row>
        <Row>
          <Cell>3</Cell>
          <Cell>Brice Swyre</Cell>
          <Cell>Tax Accountant</Cell>
          <Cell>Red</Cell>
        </Row>
      </TableBody>
    </Table>
  ),
};
