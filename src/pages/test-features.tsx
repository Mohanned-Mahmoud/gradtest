import React from 'react';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: '3D Brain Explorer',
      description:
        'Explore the human brain in stunning 3D detail with our interactive visualization tool. Rotate, zoom, and learn about different brain regions and their functions.',
      image: '/src/assets/240_F_1344236340_F4P8ptxRYp0kWCmHl4BJFnI6YJKPShIA.jpg',
      features: [
        'Interactive 3D brain model',
        'Detailed region information',
        'Audio explanations',
        'Zoom and rotation controls',
        'Educational annotations',
      ],
      tryItLink: '/3dbrain.html',
    },
    {
      title: 'Virtual Dissection Lab',
      description:
        'Experience realistic virtual dissections with accurate tissue physics and comprehensive anatomical structures.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
      features: [
        'Realistic tissue simulation',
        'Step-by-step guided dissections',
        'Custom dissection paths',
        'Save and share progress',
        'VR compatibility',
      ],
      tryItLink: '/pages/virtual-dissection-lab.html',
    },
    {
title: 'Anatomy Chat Bot',
      description:
        'An interactive AI-powered chat bot that answers your questions about human anatomy, neuroscience, and brain functions in real-time.',
      image: '/src/assets/ChatGPT Image May 20, 2025, 09_28_55 AM.png', // Image of a digital interface/AI
      features: [
        'Real-time anatomy Q&A',
        'Covers brain, nervous system, and more',
        'Interactive learning experience',
        'Supports educational institutions',
        'Accessible 24/7',
      ],
      tryItLink: '/chat.html',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our cutting-edge tools for anatomy education and exploration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <a
                    href={product.tryItLink}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Try It
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;