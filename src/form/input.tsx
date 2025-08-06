import type { FC } from 'react';

import { InputWrapper, type InputWrapperProps } from './input-wrapper';

interface InputProps extends InputWrapperProps {
  type?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  error,
  description,
}) => {
  return (
    <InputWrapper label={label} error={error} description={description}>
      <input type={type} className="input" placeholder={placeholder} />
    </InputWrapper>
  );
};

export { Input };
