import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

type NavLinkProps = {
  href: string;
  active?: boolean;
  children: ReactNode;
};

export const NavLink = ({ children, href, active }: NavLinkProps) => {
  return (
    <Link href={href}>
      <a
        className={clsx(
          'inline-flex text-xl h-full items-center px-2 font-montserrat leading-5 transition duration-150 ease-in-out',
          active
            ? 'text-gray-900 focus:outline-none underline font-bold'
            : 'text-gray-400 hover:text-gray-700 focus:text-gray-700 focus:outline-none'
        )}
      >
        {children}
      </a>
    </Link>
  );
};
