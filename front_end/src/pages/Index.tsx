import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'You have not seen the real roof.';
  }, []);

  return (
    <main className="min-h-screen antialiased text-roofing-charcoal">
      <Header />
      <Hero />
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Welcome to AmeriRoof</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Explore our website to learn more about our professional roofing services.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: 'Home', href: '/home', desc: 'Return to our home page' },
            { name: 'Services', href: '/services', desc: 'Explore our roofing services' },
            { name: 'About Us', href: '/about', desc: 'Learn about our company' },
            { name: 'Testimonials', href: '/testimonials', desc: 'Read what our customers say' },
            { name: 'Contact', href: '/contact', desc: 'Get in touch with us' }
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.href}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-gray-100 w-64 transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-roofing-navy mb-2">{item.name}</h3>
              <p className="text-roofing-charcoal/80 text-center">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Index;