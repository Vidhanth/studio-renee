import React from 'react';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      {...props}
      className="block w-full border-x-transparent border-t-transparent py-2.5 font-light placeholder:text-lg placeholder:font-light focus:border-solid focus:border-gray-500 focus:ring-0"
    ></textarea>
  );
};
