'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

type LinkItem = { name: string; path: string };
const links: LinkItem[] = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

const Nav: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.path}
            className={`${
              link.path === pathname && 'text-accent border-b-2 border-accent'
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
