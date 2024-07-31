// components/Navbar.jsx

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-purple-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Super City</div>
        <div className="space-x-4 flex-row space-between">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link href="/community" className="text-gray-300 hover:text-white">
            Community
          </Link>
          <Link href="/community" className="text-gray-300 hover:text-white">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
