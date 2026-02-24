import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Layers, ArrowRight, Wind } from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL;

const services = [
  {
    icon: <Home size={32} />,
    title: "External Insulation",
    description: "External wall insulation (EWI) systems to improve energy efficiency, reduce heat loss, and enhance your property's appearance.",
    image: `${BASE_URL}images/external-insulation.jpg`,
    slug: "external-insulation"
  },
  {
    icon: <Layers size={32} />,
    title: "Internal Insulation",
    description: "Internal wall insulation solutions to improve thermal performance and reduce energy bills from the inside.",
    image: `${BASE_URL}images/internal-insulation.jpg`,
    slug: "internal-insulation"
  },
  {
    icon: <Wind size={32} />,
    title: "Loft Insulation",
    description: "Professional loft and attic insulation to prevent heat loss through your roof and significantly reduce heating costs.",
    image: `${BASE_URL}images/loft-insulation.jpg`,
    slug: "loft-insulation"
  },
  {
    icon: <Home size={32} />,
    title: "Roof Insulation",
    description: "Comprehensive roof insulation systems for pitched and flat roofs to improve energy efficiency and comfort.",
    image: `${BASE_URL}images/roof-insulation.jpg`,
    slug: "roof-insulation"
  }
];

const InsulationServices = () => {
  const [isVisible, setIsVisible] = useState<boolean[]>(Array(services.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        services.forEach((_, index) => {
          setTimeout(() => {
            setIsVisible(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }, 100 * index);
        });
      }
    }, { threshold: 0.05, rootMargin: '50px' });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="insulation-services" ref={sectionRef} className="relative min-h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0 service-background" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.50), rgba(255, 255, 255, 0.50)), url('${BASE_URL}images/insulation-banner.jpg')`
        }}
      />
      
      <div className="container-section relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Insulation Services</h2>
          <p className="section-subheading">
            Expert insulation solutions to improve your home's energy efficiency, comfort, and reduce heating costs with professional installation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={`/services/${service.slug}`}
              className={cn(
                "bg-white rounded-lg overflow-hidden shadow-md card-hover border border-gray-100 transition-all duration-700 transform block",
                isVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-roofing-navy">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-roofing-navy">{service.title}</h3>
                </div>
                <p className="text-roofing-charcoal/80 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-roofing-orange font-medium hover:text-roofing-navy transition-colors duration-300">
                  Learn More 
                  <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-primary">
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsulationServices;
