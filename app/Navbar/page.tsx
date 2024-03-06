"use client"
import React, { useState } from 'react';
import './navbar.css';


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
   
      <nav className="bg-gray-800 navbar">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      {/* <!-- Mobile menu button--> */}
                      <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu"
                          aria-expanded={isMobileMenuOpen} // Update attribute based on state
                          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                          <span className="absolute -inset-0.5"></span>
                          <span className="sr-only">Open main menu</span>
                          {/* <!--
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    --> */}
                          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                          </svg>
                          {/* <!--
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    --> */}
                          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                      </button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex shrink-0 items-center">
                          {/* <Image className="h-8 w-auto" src="/logo-highcore.png " alt="Your Company" height={32} width={200}/> */}
                          <h1 className='text-xl text-blue-200'>Highcore™</h1>
                      </div>
                      <div className="hidden sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                              <span className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</span>
                              <span className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</span>
                              <span className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</span>
                               <span className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact Us</span>
                      </div>
                  </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">View notifications</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                      </svg>
                  </button>

                  {/* <!-- Profile dropdown --> */}
                  <div className="relative ml-3">
                      <div>
                          <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                              <span className="absolute -inset-1.5"></span>
                              <span className="sr-only">Open user menu</span>
                              <div className='text-blue-300 hover:text-white'>Login</div>
                              <div className='text-gray-300 ml-5'>Legal</div>
                              {/* <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
                          </button>
                      </div>

       
                  </div>
              </div>
          </div>
      <div className={`sm:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
              <div className="space-y-1 px-2 pb-3 pt-2">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <span className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</span>
                  <span className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About Us</span>
                  <span className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</span>
                  <span className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact Us</span>
              </div>
          </div>
          </div>
</nav>
 


  )
}

export default Navbar