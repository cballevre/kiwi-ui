import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import { Label } from 'react-aria-components';

import { Text } from '../typography/text';

interface InputWrapperProps {
  name: string;
  label: string;
  description?: string;
  error?: string | boolean;
  required?: boolean;
  className?: string;
}

const InputWrapper: FC<PropsWithChildren<InputWrapperProps>> = ({
  name,
  children,
  label,
  description,
  error,
  required = false,
  className,
}) => {
  return (
    <div className={clsx('flex flex-col items-start', className)}>
      <Label className="text-sm font-medium text-gray-900" htmlFor={name}>
        {label}
        {required ? <span className="text-red-500"> *</span> : null}
      </Label>
      {description ? (
        <Text className="text-xs text-gray-500">{description}</Text>
      ) : null}
      <div className="my-2">{children}</div>
      {typeof error === 'string' ? (
        <Text className="text-xs text-red-500">{error}</Text>
      ) : null}
    </div>
  );
};

export { InputWrapper, type InputWrapperProps };
