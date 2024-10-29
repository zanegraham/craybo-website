import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CommunityPage = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Craybo Community</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with fellow creators, share your work, and grow together.
          </p>
        </div>

        {/* Featured Creators */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Creators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Creator cards will be dynamically populated */}
          </div>
        </section>

        {/* Community Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Community Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Community highlight cards will be dynamically populated */}
          </div>
        </section>

        {/* Get Started */}
        <section className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join?</h2>
          <p className="text-gray-600 mb-8">
            Become part of our creative community and start sharing your work today.
          </p>
          <Button size="lg">Create Your Profile</Button>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;