import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-gray-300">
              Master's Student in Computer Science
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-300">
              <GithubIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-indigo-300">
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-indigo-300">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-indigo-300">
              <MailIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;