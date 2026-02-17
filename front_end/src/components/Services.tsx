import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Palette, Wrench, Droplets, Activity, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Home size={32} />,
    title: "Roof Installation",
    description: "Complete roof installation services using high-quality materials and expert craftsmanship for long-lasting results.",
    image: "/images/roof-installation.jpg",
    slug: "roof-installation"
  },
  {
    icon: <Wrench size={32} />,
    title: "Roof Repair",
    description: "Professional repair services to fix leaks, damaged shingles, and other roofing issues to protect your home.",
    image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "roof-repair"
  },
  {
    icon: <Palette size={32} />,
    title: "Roof Replacement",
    description: "Full roof replacement services when repairs aren't enough, with various material options to choose from.",
    image: "/images/roof-replacement.webp",
    slug: "roof-replacement"
  },
  {
    icon: <Droplets size={32} />,
    title: "Gutter Services",
    description: "Installation, repair, and cleaning of gutters to ensure proper water drainage and prevent water damage.",
    image: "https://images.unsplash.com/photo-1637423461846-57a52a4bc697?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "gutter-services"
  },
  {
    icon: <Activity size={32} />,
    title: "Roof Inspection",
    description: "Thorough roof inspections to identify potential issues before they become major problems.",
    image: "/images/roof-inspection.jpeg",
    slug: "roof-inspection"
  },
  {
    icon: <Shield size={32} />,
    title: "Storm Damage",
    description: "Emergency services and repairs for roofs damaged by storms, high winds, or other natural disasters.",
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "storm-damage"
  }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState<boolean[]>(Array(services.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const timeouts = services.map((_, index) => {
          return setTimeout(() => {
            setIsVisible(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }, 150 * index);
        });
        
        return () => {
          timeouts.forEach(timeout => clearTimeout(timeout));
        };
      }
    }, { threshold: 0.1 });

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
    <section id="services" ref={sectionRef} className="bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Our Roofing Services</h2>
          <p className="section-subheading">
            We offer a comprehensive range of professional roofing services to meet all your needs, from installation to repair and maintenance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default Services;