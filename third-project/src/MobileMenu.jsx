import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=''>
      <button className='sm:hidden block' onClick={toggleMenu}>
        <div className='w-12 h-12 border-2 border-violet-700 rounded-lg p-2 '>
          <div className='w-full h-1 rounded-lg bg-violet-700 mb-2'>
          </div>
          <div className='w-2/3  mt-2 h-1 rounded-lg bg-violet-700 mb-2'>
          </div>
          <div className='w-1/2  mt-2 h-1 rounded-lg bg-violet-700'>
          </div>
        </div>
      </button>

      <div className={`sm:hidden shadow-md w-full ${isOpen ? '' : 'hidden'}`} >
        <nav ClassName="z-50">
          <ul className='text-center'>
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/pricing">Pricing</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
