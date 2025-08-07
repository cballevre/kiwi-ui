import clsx from 'clsx';
import type { FC } from 'react';

interface DividerProps {
  label?: string;
  position?: 'start' | 'center' | 'end';
}

const Divider: FC<DividerProps> = ({ label, position = 'center' }) => {
  return (
    <div
      className={clsx(
        'divider',
        position === 'start' && 'divider-start',
        position === 'end' && 'divider-end',
      )}
    >
      {label}
    </div>
  );
};

export { Divider };
