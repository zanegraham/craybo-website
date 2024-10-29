import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsTicker from './components/news-ticker';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import CommunityPage from './pages/community';
import EventsPage from './pages/events';
import GetInvolvedPage from './pages/get-involved';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <NewsTicker />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/get-involved" element={<GetInvolvedPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </Router>
    </QueryClientProvider>
  );
}

export default App;