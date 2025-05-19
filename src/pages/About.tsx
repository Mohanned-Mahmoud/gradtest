import React from 'react';
import { ArrowRight, Award, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">About AnatomyLab</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Revolutionizing anatomy education through cutting-edge technology and interactive learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At AnatomyLab, we're dedicated to transforming how people learn and understand human anatomy. 
                Through innovative technology and interactive experiences, we make complex anatomical concepts 
                accessible and engaging for students, educators, and medical professionals worldwide.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence in education drives us to continuously develop and improve our 
                tools, ensuring they meet the evolving needs of modern medical education.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
                alt="Medical professionals collaborating"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">100,000+</h3>
              <p className="text-lg text-gray-600">Active Users</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-lg text-gray-600">Countries Reached</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-lg text-gray-600">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.position}</p>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Experience the Future of Anatomy Education?</h2>
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
          >
            Explore Our Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const teamMembers = [
  {
    name: "Dr. Emily Chen",
    position: "Chief Executive Officer",
    description: "With over 15 years of experience in medical education and technology, Dr. Chen leads our mission to revolutionize anatomy learning.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    name: "Dr. Marcus Rodriguez",
    position: "Chief Technology Officer",
    description: "A pioneer in medical visualization technology, Dr. Rodriguez oversees the development of our cutting-edge learning platforms.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  },
  {
    name: "Dr. Sarah Thompson",
    position: "Head of Education",
    description: "An experienced anatomist and educator, Dr. Thompson ensures our content meets the highest standards of academic excellence.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
  }
];

export default About;