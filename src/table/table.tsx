import clsx from 'clsx';
import type { FC } from 'react';
import {
  Table as AriaTable,
  type TableProps as AriaTableProps,
  ResizableTableContainer,
} from 'react-aria-components';

interface TableProps extends AriaTableProps {
  striped?: boolean;
  bordered?: boolean;
}

const Table: FC<TableProps> = ({ striped = false, bordered, ...props }) => {
  return (
    <ResizableTableContainer
      className={clsx(bordered && 'rounded-box border border-base-content/5')}
    >
      <AriaTable
        {...props}
        className={clsx('table', striped && 'table-zebra')}
      />
    </ResizableTableContainer>
  );
};

export { Table };
