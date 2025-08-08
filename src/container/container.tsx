import { clsx } from 'clsx';
import type { FC, PropsWithChildren } from 'react';

interface ContainerProps {
  className?: string;
  focusReadability?: boolean;
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
  focusReadability = false,
}) => {
  return (
    <div
      className={clsx(
        className,
        'container mx-auto px-4',
        focusReadability && 'focus-readability',
      )}
    >
      {children}
    </div>
  );
};

export { Container };
