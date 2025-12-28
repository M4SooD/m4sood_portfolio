import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { FC } from 'react';
import ThemeToggle from './ThemeToggle';
export const Header: FC = () => {
  return (
    <header className="py-8 xl:py-12 bg-white text-primary dark:bg-primary dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            M4S <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <ThemeToggle />
          <Link href="/contact">
            <Button variant="primary">Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
