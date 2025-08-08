import clsx from 'clsx';
import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import { InputWrapper, type InputWrapperProps } from './input-wrapper';

interface InputProps extends InputWrapperProps {
  type?: string;
  placeholder?: string;
  inputWrapperProps?: {
    className?: string;
  };
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      label,
      type = 'text',
      placeholder,
      error,
      description,
      required,
      className,
      inputWrapperProps = {},
      ...props
    },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <InputWrapper
        name={name}
        label={label}
        error={error}
        description={description}
        required={required}
        {...inputWrapperProps}
      >
        <input
          name={name}
          id={name}
          ref={ref}
          type={type}
          className={clsx('input', error && 'input-error', className)}
          placeholder={placeholder}
          required={required}
          {...props}
        />
      </InputWrapper>
    );
  },
);

export { Input };
