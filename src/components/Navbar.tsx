"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <Image 
                src="/New folder (2)/download-removebg-preview.png" 
                alt="OBA'MI Logo" 
                width={120} 
                height={60} 
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium text-sm uppercase tracking-wide transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-orange-600 font-medium text-sm uppercase tracking-wide transition-colors">
              Menu
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-orange-600 font-medium text-sm uppercase tracking-wide transition-colors">
              Gallery
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium text-sm uppercase tracking-wide transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium text-sm uppercase tracking-wide transition-colors">
              Contact
            </Link>
            <a
              href="https://www.ubereats.com/au/store/obami/UXcrBC3PSjmUGlCklwod9Q?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-6 py-2.5 rounded-md font-semibold text-sm uppercase tracking-wide hover:bg-orange-700 transition-all"
            >
              Order Online
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-orange-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md uppercase tracking-wide text-sm font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md uppercase tracking-wide text-sm font-medium"
              onClick={toggleMenu}
            >
              Menu
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md uppercase tracking-wide text-sm font-medium"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md uppercase tracking-wide text-sm font-medium"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md uppercase tracking-wide text-sm font-medium"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <a
              href="https://www.ubereats.com/au/store/obami/UXcrBC3PSjmUGlCklwod9Q"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-orange-600 font-semibold uppercase tracking-wide hover:bg-orange-50 rounded-md"
              onClick={toggleMenu}
            >
              Order Online
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
