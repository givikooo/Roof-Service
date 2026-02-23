import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, Palette, Wrench, Droplets, Activity, Shield, ArrowRight,
  Building2, Sparkles, Settings, Hammer, Layers, Grid3x3, 
  Trees, Sun, CloudRain, AlignVerticalJustifyCenter, Triangle, 
  Hexagon, Maximize2
} from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL;

const services = [
  {
    icon: <Shield size={32} />,
    title: "Cladding Repair",
    description: "Expert repair and replacement of exterior cladding to protect your property from weather damage.",
    image: `${BASE_URL}images/cladding-repair.jpg`,
    slug: "cladding-repair"
  },
  {
    icon: <CloudRain size={32} />,
    title: "Downpipe Repair",
    description: "Professional downpipe repair and replacement to ensure proper rainwater drainage from your property.",
    image: `${BASE_URL}images/downpipe-repair.webp`,
    slug: "downpipe-repair"
  },
  {
    icon: <Wrench size={32} />,
    title: "Dry Verge",
    description: "Modern dry verge system installation for long-lasting, maintenance-free roof edge protection.",
    image: `${BASE_URL}images/dry-verge.jpg`,
    slug: "dry-verge"
  },
  {
    icon: <AlignVerticalJustifyCenter size={32} />,
    title: "Fascia Replacement",
    description: "UPVC and timber fascia board replacement to protect your roofline and enhance your home's appearance.",
    image: `${BASE_URL}images/fascia-replacement.jpg`,
    slug: "fascia-replacement"
  },
  {
    icon: <Building2 size={32} />,
    title: "Flat Roofing",
    description: "Specialist flat roof installation and repair using modern materials like EPDM rubber, GRP fibreglass, and felt.",
    image: `${BASE_URL}images/flat-roofing.jpg`,
    slug: "flat-roofing"
  },
  {
    icon: <Droplets size={32} />,
    title: "Gutter Services",
    description: "Professional gutter cleaning, installation, replacement, and repair services for complete water drainage protection.",
    image: `${BASE_URL}images/gutter-services.jpg`,
    slug: "gutter-services"
  },
  {
    icon: <CloudRain size={32} />,
    title: "Rainwater Systems",
    description: "Complete rainwater management systems including drainage, collection, and efficient water channeling solutions.",
    image: `${BASE_URL}images/rainwater-system.webp`,
    slug: "rainwater-systems"
  },
  {
    icon: <Triangle size={32} />,
    title: "Ridge Repointing",
    description: "Professional ridge tile repointing and bedding to prevent water ingress and extend roof lifespan.",
    image: `${BASE_URL}images/ridge-repointing.jpg`,
    slug: "ridge-repointing"
  },
  {
    icon: <Sparkles size={32} />,
    title: "Roof Cleaning",
    description: "Professional roof cleaning to remove moss, algae, and debris, extending your roof's lifespan and appearance.",
    image: `${BASE_URL}images/roof-cleaning.jpg`,
    slug: "roof-cleaning"
  },
  {
    icon: <Activity size={32} />,
    title: "Roof Inspection",
    description: "Thorough roof inspections to identify potential issues before they become major problems.",
    image: `${BASE_URL}images/roof-inspection.jpeg`,
    slug: "roof-inspection"
  },
  {
    icon: <Home size={32} />,
    title: "Roof Installation",
    description: "Complete roof installation services using high-quality materials and expert craftsmanship for long-lasting results.",
    image: `${BASE_URL}images/roof-installation.jpg`,
    slug: "roof-installation"
  },
  {
    icon: <Settings size={32} />,
    title: "Roof Maintenance",
    description: "Regular maintenance programs to keep your roof in optimal condition and prevent costly repairs.",
    image: `${BASE_URL}images/roof-maintenance.jpg`,
    slug: "roof-maintenance"
  },
  {
    icon: <Wrench size={32} />,
    title: "Roof Repair",
    description: "Professional repair services to fix leaks, damaged shingles, and other roofing issues to protect your home.",
    image: `${BASE_URL}images/roof-repair.jpg`,
    slug: "roof-repair"
  },
  {
    icon: <Palette size={32} />,
    title: "Roof Replacement",
    description: "Full roof replacement services when repairs aren't enough, with various material options to choose from.",
    image: `${BASE_URL}images/roof-replacement.webp`,
    slug: "roof-replacement"
  },
  {
    icon: <Hammer size={32} />,
    title: "Roofing Leadwork",
    description: "Expert lead flashing, valleys, and weathering installation to ensure watertight seals around chimneys and dormers.",
    image: `${BASE_URL}images/roofing-leadwork.jpg`,
    slug: "roofing-leadwork"
  },

  {
    icon: <Layers size={32} />,
    title: "Slate Roofing",
    description: "Traditional slate roof installation and repairs using premium natural or synthetic slate tiles.",
    image: `${BASE_URL}images/slate-roofing.jpg`,
    slug: "slate-roofing"
  },
  {
    icon: <AlignVerticalJustifyCenter size={32} />,
    title: "Soffit Replacement",
    description: "Professional soffit replacement and installation for improved ventilation and roofline protection.",
    image: `${BASE_URL}images/soffit-replacement.webp`,
    slug: "soffit-replacement"
  },
  {
    icon: <Shield size={32} />,
    title: "Storm Damage",
    description: "Emergency services and repairs for roofs damaged by storms, high winds, or other natural disasters.",
    image: `${BASE_URL}images/storm-damage.jpg`,
    slug: "storm-damage"
  },

  {
    icon: <Grid3x3 size={32} />,
    title: "Tile Roofing",
    description: "Clay and concrete tile roofing installation, repair, and replacement with a wide selection of styles and colors.",
    image: `${BASE_URL}images/tile-roofing.jpg`,
    slug: "tile-roofing"
  },
  {
    icon: <Maximize2 size={32} />,
    title: "Velux Installation",
    description: "Expert Velux roof window installation for improved ventilation, natural light, and energy efficiency.",
    image: `${BASE_URL}images/velux-installation.jpg`,
    slug: "velux-installation"
  }
];

const RoofingServices = () => {
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
    <section id="roofing-services" ref={sectionRef} className="relative min-h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.50), rgba(255, 255, 255, 0.50)), url('${BASE_URL}images/roofing-background.webp')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="container-section relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Roofing Services</h2>
          <p className="section-subheading">
            Professional roofing solutions for installation, repair, maintenance, and specialized work. All services backed by our quality guarantee.
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

export default RoofingServices;
