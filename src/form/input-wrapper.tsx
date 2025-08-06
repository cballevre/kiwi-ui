import type { FC, PropsWithChildren } from 'react';
import { Label, Text } from 'react-aria-components';

interface InputWrapperProps {
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
}

const InputWrapper: FC<PropsWithChildren<InputWrapperProps>> = ({
  children,
  label,
  description,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2 max-w-fit">
      <Label>{label}</Label>
      {description ? <Text slot="description">{description}</Text> : null}
      {children}
      {error ? (
        <Text slot="error" className="text-red-600">
          {error}
        </Text>
      ) : null}
    </div>
  );
};

export { InputWrapper, type InputWrapperProps };
