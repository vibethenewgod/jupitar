import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#000f40] text-gray-200 py-8 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between gap-8 mb-8">
          {/* Navigation Section - Split into 2 columns */}
          <div className="flex-1 min-w-[220px]">
            <h4 className="text-lg mb-4 text-[#cc7514] font-bold uppercase tracking-wide">Navigation</h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 text-sm hover:text-[#cc7514] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 text-sm hover:text-[#cc7514] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#experts" className="text-gray-300 text-sm hover:text-[#cc7514] transition-colors">
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 text-sm hover:text-[#cc7514] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <Link href="/news" className="text-gray-300 text-sm hover:text-[#cc7514] transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/books" className="text-gray-300 text-sm hover:text-[#cc7514] transition-colors">
                    Books
                  </Link>
                </li>
                <li>
                  <Link href="/media" className="text-gray-300 text-sm hover:text-[#cc7514] transition-colors">
                    Media
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="text-gray-300 text-sm hover:text-[#cc7514] transition-colors">
                    Insights
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="flex-1 min-w-[220px]">
            <h4 className="text-lg mb-4 text-[#cc7514] font-bold uppercase tracking-wide">Contact Information</h4>
            <address className="not-italic text-sm leading-relaxed space-y-3">
              <p className="text-gray-300">House 1, Block 1, Pacesetter Bitek Estate, Onireke, Ibadan, Oyo State, Nigeria</p>
              <p>
                <a href="tel:+2348033250313" className="text-gray-300 hover:text-[#cc7514] transition-colors">
                  +234 803 325 0313
                </a>
              </p>
              <p>
                <a href="tel:+18178914924" className="text-gray-300 hover:text-[#cc7514] transition-colors">
                  +1 (817) 891-4924
                </a>
              </p>
              <p>
                <a href="mailto:Ikepeters@yahoo.com" className="text-gray-300 hover:text-[#cc7514] transition-colors">
                  Ikepeters@yahoo.com
                </a>
              </p>
            </address>
          </div>

          {/* Opening Hours Section */}
          <div className="flex-1 min-w-[220px]">
            <h4 className="text-lg mb-4 text-[#cc7514] font-bold uppercase tracking-wide">Opening Hours</h4>
            <p className="text-gray-300 text-sm mb-2"><span className="font-semibold">Mon - Fri:</span> 8:30am - 6:00pm</p>
            <p className="text-gray-300 text-sm"><span className="font-semibold">Sat & Sun:</span> Closed</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-wrap justify-between items-center pt-8 border-t border-gray-700 gap-4">
          <p className="text-xs m-0 text-gray-400">© 2024. All Rights Reserved. Dr. Peters Ikechukwu Adonu</p>
          <div className="flex gap-5">
            <a href="tel:+2348033250313" className="text-gray-300 hover:text-[#cc7514] text-lg transition-colors duration-300 transform hover:scale-110">
              <i className="fas fa-phone"></i>
            </a>
            <a href="mailto:Ikepeters@yahoo.com" className="text-gray-300 hover:text-[#cc7514] text-lg transition-colors duration-300 transform hover:scale-110">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-[#cc7514] text-lg transition-colors duration-300 transform hover:scale-110">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-[#cc7514] text-lg transition-colors duration-300 transform hover:scale-110">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-[#cc7514] text-lg transition-colors duration-300 transform hover:scale-110">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
