import Link from 'next/link';
import React from 'react';

import MobileNav from './MobileNav';
import Navitems from './navitems';

const Header = () => {
  return (
    <div>
      <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/">
            <img src="/file.png" alt="Logo" className="w-[10rem] h-[6rem]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block w-full max-w-xs">
            <Navitems />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
