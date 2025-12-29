'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  const closeTimeout = useRef<number | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!expertiseOpen) return;
      if (menuRef.current && menuRef.current.contains(target)) return;
      if (buttonRef.current && buttonRef.current.contains(target)) return;
      setExpertiseOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [expertiseOpen]);

  const handleExpertiseEnter = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setExpertiseOpen(true);
  };

  const handleExpertiseLeave = () => {
    if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
    // delay closing so it doesn't vanish on small mouse movements or scroll
    closeTimeout.current = window.setTimeout(() => {
      setExpertiseOpen(false);
      closeTimeout.current = null;
    }, 350);
  };

  return (
    <header className="text-white sticky top-0 z-50 nav-clean nav-glass">
      {/* Top Bar */}
      <div className="bg-[#cc7514] py-2 px-5">
        <div className="flex justify-end">
          <div className="flex gap-3">
            <a href="tel:+2348033250313" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/90 hover:text-[#cc7514] transition-all no-underline hover:no-underline">
              <i className="fas fa-phone text-[15px]"></i>
            </a>
            <a href="mailto:Ikepeters@yahoo.com" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/90 hover:text-[#cc7514] transition-all no-underline hover:no-underline">
              <i className="fas fa-envelope text-[15px]"></i>
            </a>
            <a href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/90 hover:text-[#cc7514] transition-all no-underline hover:no-underline">
              <i className="fab fa-linkedin text-[15px]"></i>
            </a>
            <a href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/90 hover:text-[#cc7514] transition-all no-underline hover:no-underline">
              <i className="fab fa-twitter text-[15px]"></i>
            </a>
            <a href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/90 hover:text-[#cc7514] transition-all no-underline hover:no-underline">
              <i className="fab fa-youtube text-[15px]"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-3 bg-[#000f40] border-b border-white/10 shadow-[0_10px_32px_rgba(0,0,0,0.25)]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between">
            {/* Left Links - Desktop */}
            <ul className="hidden lg:flex gap-6 ml-5 items-center text-base tracking-[0.08em] font-semibold">
              <li>
                <Link href="/" className="px-3.5 py-2.5 font-semibold tracking-[0.08em] text-white rounded-full transition-all duration-200 hover:text-[#cc7514] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cc7514] no-underline hover:no-underline">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="px-3.5 py-2.5 font-semibold tracking-[0.08em] text-white rounded-full transition-all duration-200 hover:text-[#cc7514] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cc7514] no-underline hover:no-underline">
                  ABOUT
                </Link>
              </li>
              <li className="relative" onMouseEnter={handleExpertiseEnter} onMouseLeave={handleExpertiseLeave}>
                <button
                  ref={buttonRef}
                  onClick={() => setExpertiseOpen((s) => !s)}
                  aria-haspopup="true"
                  aria-expanded={expertiseOpen}
                  className="px-3.5 py-2.5 font-semibold tracking-[0.08em] text-white rounded-full transition-all duration-200 hover:text-[#cc7514] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cc7514] underline underline-offset-4 expertise-trigger"
                >
                  EXPERTISE
                </button>
                <ul ref={menuRef} className={`absolute left-1/2 -translate-x-1/2 top-full z-[60] mt-2 min-w-[200px] max-w-[260px] rounded-xl bg-[#000f40] text-white shadow-[0_14px_36px_rgba(0,0,0,0.20)] transition-all duration-300 ease-in-out transform ${expertiseOpen ? 'block opacity-100 scale-100 -translate-y-1 pointer-events-auto' : 'hidden opacity-0 scale-97 translate-y-2 pointer-events-none'}`}>
                  <li>
                    <Link href="/law" className="block text-center px-5 py-3 text-sm font-medium tracking-[0.04em] rounded-full text-white hover:bg-white/10 hover:text-[#cc7514] transition-colors no-underline hover:no-underline">
                      LAW
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.trinitypharmacareltd.com/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center px-5 py-3 text-sm font-medium tracking-[0.04em] rounded-full text-white hover:bg-white/10 hover:text-[#cc7514] transition-colors no-underline hover:no-underline"
                    >
                      HEALTHCARE
                    </a>
                  </li>
                  <li>
                    <Link href="/ministry" className="block text-center px-5 py-3 text-sm font-medium tracking-[0.04em] rounded-full text-white hover:bg-white/10 hover:text-[#cc7514] transition-colors no-underline hover:no-underline">
                      MINISTRY
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact" className="px-3.5 py-2.5 font-semibold tracking-[0.08em] text-white rounded-full transition-all duration-200 hover:text-[#cc7514] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cc7514] no-underline hover:no-underline">
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
            <ul className="hidden lg:flex gap-6 mr-5 items-center text-base tracking-[0.08em] font-semibold">
              <li>
                <Link href="/news" className="px-3.5 py-2.5 font-semibold tracking-[0.08em] text-white rounded-full transition-all duration-200 hover:text-[#cc7514] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cc7514] no-underline hover:no-underline">
                  NEWS
                </Link>
              </li>
              <li>
                <Link href="/books" className="px-3.5 py-2.5 font-semibold tracking-[0.08em] text-white rounded-full transition-all duration-200 hover:text-[#cc7514] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cc7514] no-underline hover:no-underline">
                  BOOKS
                </Link>
              </li>
              <li>
                <Link href="/media" className="px-3.5 py-2.5 font-semibold tracking-[0.08em] text-white rounded-full transition-all duration-200 hover:text-[#cc7514] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cc7514] no-underline hover:no-underline">
                  MEDIA
                </Link>
              </li>
              <li>
                <button className="h-10 w-10 grid place-items-center rounded-full border border-white/30 text-white hover:text-[#cc7514] hover:border-[#cc7514] transition-all">
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
        <div className="lg:hidden bg-[#000f40] border-t border-white/15 px-4 pb-4">
          <ul>
            <li className="border-b border-gray-700">
              <Link href="/" className="block text-white py-4 px-5 text-lg tracking-[0.08em] font-semibold hover:bg-white/10 transition-colors no-underline hover:no-underline">
                HOME
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <Link href="/about" className="block text-white py-4 px-5 text-lg tracking-[0.08em] font-semibold hover:bg-white/10 transition-colors no-underline hover:no-underline">
                ABOUT
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <button 
                onClick={() => setExpertiseOpen(!expertiseOpen)}
                className="block text-white py-4 px-5 text-lg tracking-[0.08em] font-semibold w-full text-left hover:bg-white/10 transition-colors no-underline hover:no-underline"
              >
                EXPERTISE
              </button>
              {expertiseOpen && (
                <ul className="bg-[#000f40]">
                  <li>
                    <Link href="/law" className="block text-white py-4 px-5 text-base tracking-[0.06em] font-semibold hover:bg-white/10 transition-colors no-underline hover:no-underline">
                      LAW
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="https://www.trinitypharmacareltd.com/about" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-white py-4 px-5 text-base tracking-[0.06em] font-semibold hover:bg-white/10 transition-colors no-underline hover:no-underline"
                    >
                      HEALTHCARE
                    </a>
                  </li>
                  <li>
                    <Link href="/ministry" className="block text-white py-4 px-5 text-base tracking-[0.06em] font-semibold hover:bg-white/10 transition-colors no-underline hover:no-underline">
                      MINISTRY
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="border-b border-gray-700">
              <Link href="/contact" className="block text-white py-4 px-5 text-lg tracking-[0.08em] font-semibold hover:bg-white/10 transition-colors no-underline hover:no-underline">
                CONTACT
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <Link href="/news" className="block text-white py-4 px-5 text-lg tracking-[0.08em] font-semibold hover:bg-white/10 transition-colors no-underline hover:no-underline">
                NEWS
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <Link href="/books" className="block text-white py-4 px-5 text-lg tracking-[0.08em] font-semibold hover:bg-white/10 transition-colors no-underline hover:no-underline">
                BOOKS
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <Link href="/media" className="block text-white py-4 px-5 text-lg tracking-[0.08em] font-semibold hover:bg-white/10 transition-colors no-underline hover:no-underline">
                MEDIA
              </Link>
            </li>
            <li>
              <button className="block text-white py-4 px-5 text-lg tracking-[0.08em] font-semibold hover:bg-white/10 transition-colors w-full text-left no-underline hover:no-underline">
                <i className="fas fa-search"></i>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
