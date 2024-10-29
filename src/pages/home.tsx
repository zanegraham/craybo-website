import React from 'react';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import { Users, Calendar, Printer, BookOpen } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Creator Community",
      description: "Connect with local artists, musicians, and creators in Chico and beyond."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Events & Challenges",
      description: "Participate in exclusive events and creative challenges to showcase your talent."
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Print On Demand",
      description: "Turn your designs into merchandise with our professional printing services."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learning Resources",
      description: "Access tutorials and guides to enhance your creative skills."
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Empower Your Creative Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a thriving community of creators and access the tools you need to grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Creators Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Creators</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing talent in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured creator cards will be dynamically populated */}
          </div>
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us at our next creative gathering
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event cards will be dynamically populated */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;