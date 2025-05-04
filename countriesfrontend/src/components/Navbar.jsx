import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const user = useSelector((state) => state.user.user);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#1B5D4C] to-[#5B7F72] w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-2xl sm:text-3xl">
          Country Explorer
        </Link>

        {/* Hamburger Button (mobile only) */}
        <button
          className="text-white sm:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Nav Links */}
        <div className={`flex-col sm:flex sm:flex-row sm:items-center sm:space-x-6 absolute sm:static top-full left-0 w-full sm:w-auto bg-[#1B5D4C] sm:bg-transparent transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'}`}>
          <Link to="/" className="block px-4 py-2 text-white hover:text-teal-300 text-lg sm:px-0">
            Home
          </Link>
          <Link to="/all-countries" className="block px-4 py-2 text-white hover:text-teal-300 text-lg sm:px-0">
            All Countries
          </Link>
          {user ? (
            <Link to="/profile" className="block px-4 py-2 text-white hover:text-teal-300 text-lg sm:px-0">
              Profile
            </Link>
          ) : (
            <>
              <Link to="/login" className="block px-4 py-2 text-white hover:text-teal-300 text-lg sm:px-0">
                Login
              </Link>
              <Link to="/register" className="block px-4 py-2 text-white hover:text-teal-300 text-lg sm:px-0">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
