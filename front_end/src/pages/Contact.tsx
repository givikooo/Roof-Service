import React from 'react';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <main className="min-h-screen antialiased text-roofing-charcoal">
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;