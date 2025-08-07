import { clsx } from 'clsx';
import type { FC, PropsWithChildren } from 'react';

interface ContainerProps {
  className?: string;
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
}) => {
  return <div className={clsx('container mx-auto', className)}>{children}</div>;
};

export { Container };
