'use client';

import Link from 'next/link';
import React from 'react';
import { HousePlus, TableOfContents, UserPen } from 'lucide-react';

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:gap-5">
      <li>
        <Link href="/" className="text-black hover:text-blue-500 flex items-center gap-2">
          <HousePlus />
          Home
        </Link>
      </li>
      <li>
        <Link href="/blog" className="text-black hover:text-blue-500 flex items-center gap-2">
          <TableOfContents />
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact" className="text-black hover:text-blue-500 flex items-center gap-2">
          <UserPen />
          Contact Us
        </Link>
      </li>
    </ul>
  );
};

export default NavItems;
