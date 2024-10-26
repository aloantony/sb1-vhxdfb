import React from 'react';
import { CheckCircle } from 'lucide-react';

const courses = [
  {
    title: 'PostgreSQL Basics',
    description: 'Start your journey with fundamental concepts',
    topics: ['Database creation', 'Basic queries', 'Data types', 'Table relationships'],
    level: 'Beginner',
    duration: '2 weeks'
  },
  {
    title: 'Intermediate PostgreSQL',
    description: 'Advance your database management skills',
    topics: ['Joins & subqueries', 'Indexes', 'Views', 'Stored procedures'],
    level: 'Intermediate',
    duration: '3 weeks'
  },
  {
    title: 'Advanced PostgreSQL',
    description: 'Master complex database concepts',
    topics: ['Performance tuning', 'Partitioning', 'Replication', 'Custom extensions'],
    level: 'Advanced',
    duration: '4 weeks'
  }
];

export default function CourseSection() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Learning Path</h2>
          <p className="mt-4 text-xl text-gray-600">
            Structured courses to take you from beginner to expert
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <p className="mt-2 text-gray-600">{course.description}</p>
                
                <div className="mt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">Level: {course.level}</span>
                    <span>Duration: {course.duration}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900">What you'll learn:</h4>
                  <ul className="mt-2 space-y-2">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50">
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Start Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}