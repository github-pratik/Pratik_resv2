import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certificates', path: '/Certifications' },
    { name: 'Education', path: '/Education' },
    { name: 'Skills', path: '/Skills' }
  ];

  // TODO: Implement dark mode toggle functionality
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   // Add logic to apply dark mode class to the body or root element
  // };

  return (
    <nav className="bg-black border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-white">Pratik Patil</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'px-3 py-2 text-sm font-medium text-white'
                    : 'px-3 py-2 text-sm font-medium text-gray-400 hover:text-white'
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)} // Placeholder action
              className="p-1 rounded-full bg-gray-800 text-white"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-b border-gray-800">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'block px-3 py-2 text-base font-medium text-white'
                    : 'block px-3 py-2 text-base font-medium text-gray-400 hover:text-white'
                }
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;