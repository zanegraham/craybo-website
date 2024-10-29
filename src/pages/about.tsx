import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Star, DollarSign } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Love",
      description: "We believe in fostering genuine connections and supporting each other's creative journeys."
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Truth",
      description: "We promote authenticity and honest expression in all forms of creativity."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: "Fair Compensation",
      description: "We're committed to helping creators earn fair compensation for their work."
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Craybo</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Supporting young creators and local artists through community, resources, and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <CardTitle className="text-center">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="prose prose-lg mx-auto">
          <h2>Our Mission</h2>
          <p>
            Craybo exists to empower the next generation of creators by providing them with the tools,
            resources, and community they need to thrive. We believe that creativity should be
            accessible to everyone, and that artists deserve to be fairly compensated for their work.
          </p>

          <h2>Our Story</h2>
          <p>
            Founded in Chico, California, Craybo began as a small collective of artists and creators
            who wanted to make a difference in their local creative community. Today, we're growing
            into a global network while maintaining our commitment to supporting local artists and
            fostering genuine connections.
          </p>

          <h2>Join Our Community</h2>
          <p>
            Whether you're an established artist or just beginning your creative journey, there's a
            place for you at Craybo. Join us in building a more supportive, collaborative, and
            sustainable creative economy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;