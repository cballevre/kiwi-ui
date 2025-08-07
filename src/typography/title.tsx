import type { FC } from 'react';
import React from 'react';
import { tv } from 'tailwind-variants';

interface TitleProps {
  level?: 1 | 2 | 3 | 4;
  className?: string;
  children?: React.ReactNode | undefined;
}

const titleVariants = tv({
  base: 'font-bold',
  variants: {
    level: {
      1: 'text-3xl',
      2: 'text-2xl',
      3: 'text-xl',
      4: 'text-lg',
    },
  },
  defaultVariants: {
    level: 1,
  },
});

const Title: FC<TitleProps> = ({ level = 1, children, className }) => {
  const Tag = `h${level}`;

  return React.createElement(
    Tag,
    {
      className: titleVariants({ level, className }),
    },
    children,
  );
};

export { Title };
