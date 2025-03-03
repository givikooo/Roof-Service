import React from 'react';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const TestimonialsPage = () => {
  return (
    <main className="min-h-screen antialiased text-roofing-charcoal">
      <Header />
      <div className="pt-20">
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
};

export default TestimonialsPage;