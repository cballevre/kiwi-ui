import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import { InputWrapper, type InputWrapperProps } from './input-wrapper';

interface InputProps extends InputWrapperProps {
  type?: string;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, type = 'text', placeholder, error, description, ...props },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <InputWrapper label={label} error={error} description={description}>
        <input
          ref={ref}
          type={type}
          className="input"
          placeholder={placeholder}
          {...props}
        />
      </InputWrapper>
    );
  },
);

export { Input };
