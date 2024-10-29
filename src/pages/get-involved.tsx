import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Users, PenTool, Printer } from 'lucide-react';

const GetInvolvedPage = () => {
  const opportunities = [
    {
      icon: <Palette className="w-8 h-8 text-indigo-600" />,
      title: "Join as a Creator",
      description: "Launch your own creative platform and connect with our community.",
      action: "Apply Now"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Community Ambassador",
      description: "Help grow and nurture our creative community in Chico.",
      action: "Learn More"
    },
    {
      icon: <PenTool className="w-8 h-8 text-indigo-600" />,
      title: "Workshop Leader",
      description: "Share your skills and knowledge with fellow creators.",
      action: "Submit Proposal"
    },
    {
      icon: <Printer className="w-8 h-8 text-indigo-600" />,
      title: "Print Partner",
      description: "Collaborate with us on merchandise production and fulfillment.",
      action: "Partner With Us"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the Craybo community and help build the future of creativity in Chico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-indigo-100 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    {opportunity.icon}
                  </div>
                  <div>
                    <CardTitle>{opportunity.title}</CardTitle>
                    <CardDescription>{opportunity.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full">{opportunity.action}</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Impact Section */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Make an Impact</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Your involvement helps build a stronger, more vibrant creative community in Chico.
              Together, we can create opportunities for artists and innovators to thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Active Creators</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Monthly Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$100K+</div>
              <div className="text-lg opacity-90">Creator Earnings</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetInvolvedPage;