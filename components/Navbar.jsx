import getConfig from 'next/config'
import Link from 'next/link'
import { useState } from 'react'
import App from './App'
import useDarkMode from "../components/App";

export const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { publicRuntimeConfig } = getConfig()
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="transition duration-300 ease-in-out bg-gray-700 dark:bg-gray-900 z-50 h-auto">
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link href="/" aria-label="home" className=" inline-flex items-center" passHref > 
        <div>
          <span className="cursor-pointer ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
          {publicRuntimeConfig.serverName}
          </span>
          </div> 
        </Link>
        <ul className=" items-center hidden space-x-8 lg:flex">
          <li className="text-white">
            
          <Link href="/applications"
              aria-label="Applications"
              title="Applications"
              passHref
            >
              <button className="btn btn-ghost"> 
              Apply 
              </button>
            </Link>
          </li>
          <li className="text-white">
          <Link
              href="/about"
              aria-label="About us"
              title="About us"
              passHref
            >
              <button className="btn btn-ghost"> 
              About us 
              </button>
            </Link>
          </li>
          <li className="text-white">
            <Link
              href="/departments"
              aria-label="Departments"
              title="Departments"
              passHref
            >
              <button className="btn btn-ghost">
                Departments 
              </button>
            </Link>
          </li>
          <li className="text-white">
            <Link
              href={`${publicRuntimeConfig.discordLink}`}
              aria-label="discord"
              title="discord"
              passHref
            >
              <button className="btn btn-ghost">
                Discord 
              </button>
            </Link>
          </li>
          <li className="text-white">
            <Link
              href={`fivem://connect/${publicRuntimeConfig.fivemServerId}`}
              aria-label="Connect"
              title="Connect"
              passHref
            >
              <button className="btn btn-ghost">
                Connect 
              </button>
            </Link>
          </li>
          <li>
            <div>
            {colorTheme === "light" ? (
              <svg
                onClick={() => setTheme("light")}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setTheme("dark")}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  stroke="white"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
            </div>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-10 bg-gray-900 border border-gray-400 rounded shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-500 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.2z"
                        />
                        
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li className="text-white">
                      <Link
                        href="/applications"
                        aria-label="Applications"
                        title="Applications"
                        passHref
                      >
                        <button className="btn btn-block">
                          Applications
                        </button>
                      </Link>
                    </li>
                    <li className="text-white">
                      <Link
                        href="/about"
                        aria-label="About us"
                        title="About us"
                        passHref
                      >
                        <button className="btn btn-block">
                          About us
                        </button>
                      </Link>
                    </li>
                    <li className="text-white">
                      <Link
                        href="/departments"
                        aria-label="Departments"
                        title="Departments"
                        passHref
                      >
                        <button className="btn btn-block">
                          Departments
                        </button>
                        </Link>
                    </li>
                    <li className="text-white">
                      <Link
                        href={`${publicRuntimeConfig.discordLink}`}
                        aria-label="Discord"
                        title="Discord"
                        passHref
                      >
                        <button className="btn btn-block">
                          Discord
                        </button>
                      </Link>
                    </li>
                    <li className="text-white">
                      <Link
                        href={`fivem://connect/${publicRuntimeConfig.fivemServerId}`}
                        aria-label="Connect"
                        title="Connect"
                        passHref
                      >
                        <button className="btn btn-block">
                          Connect
                        </button>
                      </Link>
                    </li>
                    <li>
                    <div>
            {colorTheme === "light" ? (
              <svg
                onClick={() => setTheme("light")}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setTheme("dark")}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              > 
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  stroke="white"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
            </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};


export default Navbar;
