import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Creator Workshop Series",
      date: "March 15, 2024",
      location: "Downtown Chico",
      description: "Join us for a hands-on workshop covering digital art, photography, and brand building.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      attendees: 42
    },
    {
      id: 2,
      title: "Local Artists Showcase",
      date: "March 20, 2024",
      location: "Chico Art Center",
      description: "Experience the best of local art and meet the creators behind the work.",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
      attendees: 89
    },
    {
      id: 3,
      title: "Print & Design Masterclass",
      date: "March 25, 2024",
      location: "Craybo Studio",
      description: "Learn professional printing techniques and design principles for merchandise.",
      image: "https://images.unsplash.com/photo-1601932151223-e5c6e38b5988",
      attendees: 35
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our creative events and connect with fellow artists and creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 mt-1">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Button className="w-full">Register Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Host an Event Section */}
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to Host an Event?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We support creators in organizing their own events. Get access to our venue,
              promotion tools, and community network.
            </p>
            <Button size="lg" variant="primary">
              Submit Event Proposal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;