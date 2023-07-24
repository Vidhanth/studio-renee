import clsx from 'clsx';
import React from 'react';

const variants = {
  primary: 'text-primary border-primary hover:bg-primary hover:text-white',
  inverse: 'text-white border-white hover:bg-white hover:text-primary',
  neutral: 'text-black border-black hover:bg-primary hover:text-white'
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

export const Button = ({ children, className, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        variants[variant],
        className,
        'inline-flex items-center border px-12 py-2 shadow-sm transition focus:outline-none'
      )}
    >
      {children}
    </button>
  );
};
