import type { FC } from 'react';

interface TextProps {
  children?: React.ReactNode | undefined;
  className?: string;
}

const Text: FC<TextProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export { Text };
