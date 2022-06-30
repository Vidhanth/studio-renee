import clsx from 'clsx';
import { ComponentProps,useEffect, useRef } from 'react';

type SelectProps = ComponentProps<'select'> & {
  focused?: boolean;
  invalid?: boolean;
};

type SelectOptionProps = ComponentProps<'option'>;

export const Select = ({ children, className, focused, invalid, ...props }: SelectProps) => {
  const select = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (focused) {
      select.current?.focus();
    }
  }, [focused]);

  return (
    <select
      {...props}
      ref={select}
      className="block w-full border-x-transparent border-t-transparent py-2.5 px-3.5 text-lg font-light focus:border-solid focus:border-gray-500 focus:ring-0"
    >
      {children}
    </select>
  );
};

const SelectOption = ({ children, ...props }: SelectOptionProps) => {
  return <option {...props}>{children}</option>;
};

Select.Option = SelectOption;
