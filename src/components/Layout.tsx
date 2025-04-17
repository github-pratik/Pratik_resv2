import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = () => {
  return <div className="min-h-screen flex flex-col bg-white dark:bg-black relative">
      {/* Grid background overlay for depth effect */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern dark:bg-grid-pattern-dark opacity-30 z-0"></div>
      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>;
};
export default Layout;