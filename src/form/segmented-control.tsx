import clsx from 'clsx';
import { forwardRef, useEffect, useState } from 'react';
import {
  type Key,
  ToggleButton,
  ToggleButtonGroup,
} from 'react-aria-components';

import { InputWrapper, type InputWrapperProps } from './input-wrapper';

interface SegmentedControlProps extends InputWrapperProps {
  options?: Key[] | SegmentedControlOption[];
  value?: Key;
  onChange?: (value: Key) => void;
  className?: string;
  name: string;
  inputWrapperProps?: {
    className?: string;
  };
}

export interface SegmentedControlOption {
  label: string;
  value: Key;
}

const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  (
    {
      label,
      description,
      options,
      value,
      onChange,
      className,
      name,
      inputWrapperProps,
    },
    ref,
  ) => {
    const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set());

    useEffect(() => {
      if (value !== undefined) {
        setSelectedKeys(new Set([value]));
      } else {
        setSelectedKeys(new Set());
      }
    }, [value]);

    const handleSelectionChange = (selected: Set<Key>) => {
      setSelectedKeys(selected);
      const selectedValue = Array.from(selected)[0];
      if (onChange && selectedValue !== undefined) {
        onChange(selectedValue);
      }
    };

    return (
      <InputWrapper
        {...inputWrapperProps}
        label={label}
        description={description}
        className={clsx(inputWrapperProps?.className, 'max-w-fit')}
        name={name}
      >
        <ToggleButtonGroup
          ref={ref}
          className={clsx('tabs tabs-box', className)}
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={selectedKeys}
          onSelectionChange={handleSelectionChange}
        >
          {options?.map((option) => {
            const value = option instanceof Object ? option.value : option;
            const label = option instanceof Object ? option.label : option;
            return (
              <ToggleButton
                key={value}
                id={value}
                className={({ isSelected }) =>
                  clsx('tab', isSelected && 'tab-active')
                }
              >
                {label}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </InputWrapper>
    );
  },
);

export { SegmentedControl };
