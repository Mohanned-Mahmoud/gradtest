import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const organs = [
  {
    name: 'Brain',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    link: '/3dbrain.html',
    icon: <Brain className="h-8 w-8 text-blue-600" />,
  },
  // Add more organs here as you add their 3D pages
];

const OrganSelection = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose an Organ</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select an organ to explore its interactive 3D model.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {organs.map((organ, idx) => (
            <Link
              key={idx}
              to={organ.link}
              className="bg-white rounded-lg shadow-lg flex flex-col items-center p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{organ.icon}</div>
              <img
                src={organ.image}
                alt={organ.name}
                className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-blue-100"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{organ.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganSelection; 