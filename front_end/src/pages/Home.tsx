import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const HomePage = () => {
  useEffect(() => {
    // effect code
  }, []);

  return (
    <main className="min-h-screen antialiased text-roofing-charcoal overflow-x-hidden max-w-full">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
};

export default HomePage;
