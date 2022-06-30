import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type ResponsiveNavlinkProps = {
  children: React.ReactNode;
  href: string;
  active?: boolean;
};

export const ResponsiveNavLink = ({ active = false, children, href }: ResponsiveNavlinkProps) => (
  <Link href={href}>
    <a
      className={clsx(
        'block py-2 pl-3 pr-4 font-montserrat  leading-5 transition duration-150 ease-in-out focus:outline-none',
        active
          ? 'text-gray-900 focus:outline-none'
          : 'text-gray-400 hover:text-gray-700 focus:text-gray-700 focus:outline-none'
      )}
    >
      {children}
    </a>
  </Link>
);
