import React from 'react';
import { BookOpen, Code, Database, Flask, Layout, Shield } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Comprehensive Tutorials',
    description: 'Step-by-step guides covering everything from basic queries to advanced database management.'
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Interactive Examples',
    description: 'Practice with real-world scenarios and get instant feedback on your queries.'
  },
  {
    icon: <Flask className="h-6 w-6" />,
    title: 'Hands-on Exercises',
    description: 'Reinforce your learning with practical exercises and challenges.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Best Practices',
    description: 'Learn industry-standard practices for database design and optimization.'
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: 'Performance Tuning',
    description: 'Master the art of optimizing queries and improving database performance.'
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Advanced Concepts',
    description: 'Dive deep into advanced PostgreSQL features like partitioning and replication.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Learn With Us?</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive curriculum designed for both beginners and advanced users
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex p-3 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100">
                {feature.icon}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}