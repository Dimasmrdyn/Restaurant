import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/3 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-amber-400 drop-shadow-md">
            Foodie's Delight
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Menu", "Reservation", "Location", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-yellow-300/90 font-medium transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-yellow-300/90 focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-lg px-4 py-3 space-y-2">
          {["Home", "Menu", "Reservation", "Location", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-white/80 hover:text-yellow-300/90 font-medium transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
