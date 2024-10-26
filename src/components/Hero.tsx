import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-indigo-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
          alt="Database background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Master PostgreSQL
          <span className="block text-indigo-400">The World's Most Advanced Open Source Database</span>
        </h1>
        <p className="mt-6 max-w-3xl text-xl">
          Learn PostgreSQL from basics to advanced concepts with our comprehensive tutorials, 
          hands-on exercises, and real-world examples.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
            Start Learning <ArrowRight className="h-5 w-5" />
          </button>
          <button className="bg-white text-indigo-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">
            View Tutorials
          </button>
        </div>
      </div>
    </div>
  );
}