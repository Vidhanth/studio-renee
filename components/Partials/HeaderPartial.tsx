import React from 'react';

type HeaderPartialProps = {
  children: React.ReactNode;
};

export const HeaderPartial = ({ children }: HeaderPartialProps) => {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="py-12">
        <hr className="border-b-1 border border-x-0 border-t-[0.2rem] border-gray-900 py-0.5" />
        <div className="py-6 px-12 text-center">
          <h2 className="font-montserrat text-2xl font-semibold tracking-wider lg:text-3xl">
            {children}
          </h2>
        </div>
        <hr className="border-b-1 border border-x-0 border-t-[0.2rem] border-gray-900 py-0.5" />
      </div>
    </div>
  );
};
