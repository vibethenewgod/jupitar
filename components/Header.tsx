'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  return (
    <header className="bg-[#000f40] text-white sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-[#cc7514] py-2 px-5">
        <div className="flex justify-end">
          <div className="flex gap-4">
            <a href="tel:+2348033250313" className="text-white hover:text-[#000f40] transition-colors">
              <i className="fas fa-phone text-[15px]"></i>
            </a>
            <a href="mailto:Ikepeters@yahoo.com" className="text-white hover:text-[#000f40] transition-colors">
              <i className="fas fa-envelope text-[15px]"></i>
            </a>
            <a href="#" className="text-white hover:text-[#000f40] transition-colors">
              <i className="fab fa-linkedin text-[15px]"></i>
            </a>
            <a href="#" className="text-white hover:text-[#000f40] transition-colors">
              <i className="fab fa-twitter text-[15px]"></i>
            </a>
            <a href="#" className="text-white hover:text-[#000f40] transition-colors">
              <i className="fab fa-youtube text-[15px]"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-2">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between">
            {/* Left Links - Desktop */}
            <ul className="hidden lg:flex gap-6 ml-5">
              <li>
                <Link href="/" className="text-white hover:text-[#cc7514] transition-colors font-medium text-[15px]">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-[#cc7514] transition-colors font-medium text-[15px]">
                  ABOUT
                </Link>
              </li>
              <li className="relative group">
                <button className="text-white hover:text-[#cc7514] transition-colors font-medium text-[15px]">
                  EXPERTISE
                </button>
                <ul className="absolute hidden group-hover:block bg-[#000f40] min-w-[160px] shadow-lg rounded-md py-2 mt-1 -ml-2.5">
                  <li>
                    <Link href="/law" className="block text-white hover:text-[#cc7514] px-4 py-3 text-[15px] font-semibold ml-5">
                      LAW
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="https://www.trinitypharmacareltd.com/about" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-white hover:text-[#cc7514] px-4 py-3 text-[15px] font-semibold ml-5"
                    >
                      HEALTHCARE
                    </a>
                  </li>
                  <li>
                    <Link href="/ministry" className="block text-white hover:text-[#cc7514] px-4 py-3 text-[15px] font-semibold ml-5">
                      MINISTRY
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-[#cc7514] transition-colors font-medium text-[15px]">
                  CONTACT
                </Link>
              </li>
            </ul>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image 
                  src="/assets/piaaaa white.png" 
                  alt="Logo" 
                  width={65} 
                  height={65}
                  className="h-[65px] w-auto"
                />
              </Link>
            </div>

            {/* Right Links - Desktop */}
            <ul className="hidden lg:flex gap-6 mr-5">
              <li>
                <Link href="/news" className="text-white hover:text-[#cc7514] transition-colors font-medium text-[15px]">
                  NEWS
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-white hover:text-[#cc7514] transition-colors font-medium text-[15px]">
                  BOOKS
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-white hover:text-[#cc7514] transition-colors font-medium text-[15px]">
                  MEDIA
                </Link>
              </li>
              <li>
                <button className="text-white hover:text-[#cc7514] transition-colors">
                  <i className="fas fa-search"></i>
                </button>
              </li>
            </ul>

            {/* Hamburger Menu - Mobile */}
            <button 
              className="lg:hidden text-white text-2xl mr-8"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000f40] px-4 pb-4">
          <ul>
            <li className="border-b border-gray-700">
              <Link href="/" className="block text-white py-4 px-5 text-base">
                HOME
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <Link href="/about" className="block text-white py-4 px-5 text-base">
                ABOUT
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <button 
                onClick={() => setExpertiseOpen(!expertiseOpen)}
                className="block text-white py-4 px-5 text-base w-full text-left"
              >
                EXPERTISE
              </button>
              {expertiseOpen && (
                <ul className="bg-[#000f40]">
                  <li>
                    <Link href="/law" className="block text-white py-4 px-5 text-[15px]">
                      LAW
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="https://www.trinitypharmacareltd.com/about" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-white py-4 px-5 text-[15px]"
                    >
                      HEALTHCARE
                    </a>
                  </li>
                  <li>
                    <Link href="/ministry" className="block text-white py-4 px-5 text-[15px]">
                      MINISTRY
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="border-b border-gray-700">
              <Link href="/contact" className="block text-white py-4 px-5 text-base">
                CONTACT
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <Link href="/news" className="block text-white py-4 px-5 text-base">
                NEWS
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <Link href="/books" className="block text-white py-4 px-5 text-base">
                BOOKS
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <Link href="/media" className="block text-white py-4 px-5 text-base">
                MEDIA
              </Link>
            </li>
            <li>
              <button className="block text-white py-4 px-5 text-base">
                <i className="fas fa-search"></i>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
