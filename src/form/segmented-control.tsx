import clsx from 'clsx';
import { forwardRef, useState } from 'react';
import {
  type Key,
  ToggleButton,
  ToggleButtonGroup,
} from 'react-aria-components';

import { InputWrapper, type InputWrapperProps } from './input-wrapper';

interface SegmentedControlProps extends InputWrapperProps {
  options?: string[];
}

const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  ({ label, description, options }, ref) => {
    const [value, setValue] = useState<Set<Key> | undefined>(
      options && options[1] !== undefined ? new Set([options[1]]) : undefined,
    );

    const handleSelectionChange = (selectedKeys: Set<Key>) => {
      setValue(selectedKeys);
    };

    return (
      <InputWrapper label={label} description={description}>
        <ToggleButtonGroup
          ref={ref}
          className="tabs tabs-box"
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={value}
          onSelectionChange={handleSelectionChange}
        >
          {options?.map((option) => (
            <ToggleButton
              key={option}
              id={option}
              className={({ isSelected }) =>
                clsx('tab', isSelected && 'tab-active')
              }
            >
              {option}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </InputWrapper>
    );
  },
);

export { SegmentedControl };
