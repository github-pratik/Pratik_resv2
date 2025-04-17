import React from 'react';
const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <p className="text-sm text-center text-gray-400">
          © {new Date().getFullYear()} Designed with <span role="img" aria-label="unicorn">🦄</span> and Made with <span role="img" aria-label="heart">💖</span> by Pratik Patil.
        </p>
      </div>
    </footer>
  );
};
export default Footer;