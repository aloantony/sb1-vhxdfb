import React from 'react';
import { Database, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Database className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">PostgreSQL Master</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Home</a>
              <a href="#tutorials" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Tutorials</a>
              <a href="#exercises" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Exercises</a>
              <a href="#resources" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Resources</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block hover:bg-indigo-700 px-3 py-2 rounded-md">Home</a>
            <a href="#tutorials" className="block hover:bg-indigo-700 px-3 py-2 rounded-md">Tutorials</a>
            <a href="#exercises" className="block hover:bg-indigo-700 px-3 py-2 rounded-md">Exercises</a>
            <a href="#resources" className="block hover:bg-indigo-700 px-3 py-2 rounded-md">Resources</a>
          </div>
        </div>
      )}
    </nav>
  );
}