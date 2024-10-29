import React from 'react';
import { Palette } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Palette className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Craybo</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Events</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;