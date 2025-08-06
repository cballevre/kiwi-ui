import type { FC } from 'react';
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';

export interface ButtonProps extends AriaButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const buttonVariants = tv({
  base: 'px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2',
  variants: {
    size: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    },
    variant: {
      primary: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-400',
      secondary: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-400',
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});

const Button: FC<ButtonProps> = ({
  label,
  variant,
  className,
  size,
  ...rest
}) => {
  return (
    <AriaButton
      {...rest}
      className={composeRenderProps(className, (className, renderProps) =>
        buttonVariants({
          ...renderProps,
          variant,
          className,
          size,
        }),
      )}
    >
      {label}
    </AriaButton>
  );
};

export { Button };
