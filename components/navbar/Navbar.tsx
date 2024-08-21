import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';

import { ActiveLink } from '../active-link/ActiveLink';

const navItems = [
  // { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Contact', url: '/contact' },
  { name: 'Pricing', url: '/pricing' },
];

export const Navbar = () => {
  return (
    <nav className="flex p-2 m-2 rounded bg-blue-800 bg-opacity-30 gap-2">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2" />
        Home
      </Link>
      <div className="flec flex-1"></div>
      {navItems.map((item) => (
        <ActiveLink key={item.url} path={item.url} text={item.name} />
      ))}
    </nav>
  );
};
