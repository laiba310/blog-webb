'use client';

import Link from 'next/link';
import React from 'react';
import { HousePlus, TableOfContents, UserPen } from 'lucide-react';

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:gap-5">
      <li>
        <Link href="/" className="ext-black hover:text-blue-500 flex  gap-2  mb-3">
          <HousePlus />
          Home
        </Link>
      </li>
      <li>
        <Link href="/blog" className="text-black hover:text-blue-500 flex  gap-2  mb-3">
          <TableOfContents />
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact" className="ext-black hover:text-blue-500 flex  gap-2  mb-3">
          <UserPen />
          Contact Us
        </Link>
      </li>
    </ul>
  );
};

export default NavItems;
