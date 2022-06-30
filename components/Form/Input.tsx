import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="block w-full border-x-transparent border-t-transparent py-2.5 px-3.5 placeholder:text-lg placeholder:font-light focus:border-solid focus:border-gray-500 focus:ring-0 font-light"
    />
  );
};
