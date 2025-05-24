import React, { useState } from 'react'
import LOGO from '../assets/images/page-two/logo.png'
import SEARCH from '../assets/images/page-two/search.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-transparent flex justify-between items-center px-5 lg:px-10 py-4 relative">
      {/* Logo */}
      <div>
        <img src={LOGO} className="h-16 md:h-20" alt="logo" />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-12 justify-center items-center">
        <nav>
          <ul className="flex gap-10 text-white font-semibold">
            <li className="hover:text-yellow-400 cursor-pointer">HOME</li>
            <li className="hover:text-yellow-400 cursor-pointer">ABOUT</li>
            <li className="hover:text-yellow-400 cursor-pointer">PODCAST</li>
          </ul>
        </nav>
        <div>
          <img src={SEARCH} className="size-8" alt="search logo" />
        </div>
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center z-20"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-7 h-1 bg-white mb-1 rounded transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-1 bg-white mb-1 rounded transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-1 bg-white rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-6 md:hidden transition-all">
          <nav>
            <ul className="flex flex-col gap-6 text-white text-lg font-semibold">
              <li className="hover:text-yellow-400 cursor-pointer" onClick={() => setMenuOpen(false)}>HOME</li>
              <li className="hover:text-yellow-400 cursor-pointer" onClick={() => setMenuOpen(false)}>ABOUT</li>
              <li className="hover:text-yellow-400 cursor-pointer" onClick={() => setMenuOpen(false)}>PODCAST</li>
            </ul>
          </nav>
          <div className="mt-6">
            <img src={SEARCH} className="size-8" alt="search logo" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar