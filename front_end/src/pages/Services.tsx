import React from 'react';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  return (
    <main className="min-h-screen antialiased text-roofing-charcoal">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage