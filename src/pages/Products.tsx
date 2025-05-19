import React from 'react';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: "3D Anatomy Explorer Pro",
      description: "Our flagship product featuring comprehensive 3D models of the human body with interactive layers, cross-sections, and detailed annotations.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      features: [
        "High-resolution 3D models",
        "Interactive layer system",
        "Cross-sectional viewing",
        "Detailed annotations",
        "Educational quizzes"
      ],
      price: "$299/year"
    },
    {
      title: "Virtual Dissection Lab",
      description: "Experience realistic virtual dissections with accurate tissue physics and comprehensive anatomical structures.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
      features: [
        "Realistic tissue simulation",
        "Step-by-step guided dissections",
        "Custom dissection paths",
        "Save and share progress",
        "VR compatibility"
      ],
      price: "$399/year"
    },
    {
      title: "Anatomy Learning Suite",
      description: "Complete educational package for institutions, featuring our full range of anatomy learning tools and resources.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
      features: [
        "All premium features",
        "Institution-wide licensing",
        "Custom content integration",
        "Analytics dashboard",
        "24/7 support"
      ],
      price: "Contact for pricing"
    }
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
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </button>
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