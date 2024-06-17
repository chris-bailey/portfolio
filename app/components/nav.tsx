'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const navItems = {
  '#home': {
    name: 'home',
  },
  '#work': {
    name: 'work',
  },
  '#projects': {
    name: 'projects',
  },
  '#skills': {
    name: 'skills',
  },
  '#contact': {
    name: 'contact',
  },
  // '#blog': {       // CJB TODO
  //   name: 'blog',
  // },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('#nav-drawer') === null && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <aside className="sticky md:static top-0 z-50 mb-16 tracking-tight bg-white dark:bg-[#111010]">
      <div className="md:static">
        <nav className="relative flex items-center justify-between px-4 py-2 md:px-0 md:pb-0 fade md:overflow-auto">
          {/* Nav button that opens nav drawer */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          >
            <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          
          {/* Nav drawer */}
          <div
            id="nav-drawer"
            className={`${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            } fixed top-0 left-0 z-50 h-full w-1/4 bg-white dark:bg-gray-800 transform transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:flex md:space-x-4`}
          >

            {/* Button that closes nav drawer */}
            <button
              onClick={() => setIsOpen(false)}
              className="block md:hidden px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
            >
              <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Close</title>
                <path d="M10 8.586L1.293 0l1.414-1.414L10 7.172l7.293-7.293 1.414 1.414L10 8.586z" />
              </svg>
            </button>

            {/* Nav bar elements */}
            <div className="flex flex-col space-y-4 p-4 md:space-y-0 md:flex-row md:p-0">
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className="nav-item block transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="https://github.com/chris-bailey" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" className="text-black dark:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/chris-bailey-dev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-blue-600 dark:text-blue-400" />
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
