import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface NewsItem {
  id: number;
  text: string;
  link?: string;
}

const NewsItem: React.FC<{ item: NewsItem }> = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex items-center space-x-2"
  >
    <ChevronRight className="h-4 w-4 text-indigo-500" />
    {item.link ? (
      <a href={item.link} className="text-gray-600 hover:text-indigo-600">
        {item.text}
      </a>
    ) : (
      <span className="text-gray-600">{item.text}</span>
    )}
  </motion.div>
);

const NewsTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const news: NewsItem[] = [
    { id: 1, text: "Join our next creator workshop this weekend!", link: "#events" },
    { id: 2, text: "New merchandise printing options available", link: "#printing" },
    { id: 3, text: "Featured Artist: Sarah's Digital Art Exhibition", link: "#community" },
    { id: 4, text: "Launch your own creative platform with Craybo", link: "#create" },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [news.length]);

  return (
    <div className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-12 flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <NewsItem key={news[currentIndex].id} item={news[currentIndex]} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;