import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';  // Update the path based on your project structure
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <div className="bg-yellow-400">
      <header className="container mx-auto flex items-center justify-between border-b border-stone-200 px-4 py-3 uppercase sm:px-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Fast React Pizza Logo" className="h-12 mr-2" />
          <span className="tracking-widest">Fast React Pizza Co.</span>
        </Link>
        <SearchOrder />
        <Username />
      </header>
    </div>
  );
}

export default Header;
