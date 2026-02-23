import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-roofing-navy"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-hero-pattern" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(11, 57, 84, 0.8), rgba(7, 42, 64, 0.9)), url('https://images.unsplash.com/photo-1632759145351-4a5313e6fc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" 
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Quality Insulation & Roofing Solutions for Your Home
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Protect what matters most with premium roofing services backed by expertise and professional craftsmanship.
            </p>
            
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/services/insulation" 
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Insulation Services
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/services/roofing" 
                className="btn-outline border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Roofing Services
              </Link>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-roofing-orange" size={32} />,
                title: "Quality Guaranteed",
                description: "Industry-leading warranties on all our roofing services"
              },
              {
                icon: <Clock className="text-roofing-orange" size={32} />,
                title: "Fast Turnaround",
                description: "Efficient service with minimal disruption to your daily life"
              },
              {
                icon: <Award className="text-roofing-orange" size={32} />,
                title: "Certified Experts",
                description: "Fully licensed and insured roofing professionals"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass-effect p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex justify-center items-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg 
          className="relative block w-full h-20 text-white" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C250,0,321.39,56.44,321.39,56.44Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;