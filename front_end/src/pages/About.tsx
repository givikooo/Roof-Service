import React from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <main className="min-h-screen antialiased text-roofing-charcoal">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;