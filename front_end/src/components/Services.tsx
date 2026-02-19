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
    icon: <Home size={32} />,
    title: "Roof Installation",
    description: "Complete roof installation services using high-quality materials and expert craftsmanship for long-lasting results.",
    image: `${BASE_URL}images/roof-installation.jpg`,
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
    image: `${BASE_URL}images/roof-replacement.webp`,
    slug: "roof-replacement"
  },
  {
    icon: <Building2 size={32} />,
    title: "Flat Roofing",
    description: "Specialist flat roof installation and repair using modern materials like EPDM rubber, GRP fibreglass, and felt.",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "flat-roofing"
  },
  {
    icon: <Sparkles size={32} />,
    title: "Roof Cleaning",
    description: "Professional roof cleaning to remove moss, algae, and debris, extending your roof's lifespan and appearance.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "roof-cleaning"
  },
  {
    icon: <Settings size={32} />,
    title: "Roof Maintenance",
    description: "Regular maintenance programs to keep your roof in optimal condition and prevent costly repairs.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "roof-maintenance"
  },
  {
    icon: <Hammer size={32} />,
    title: "Roofing Leadwork",
    description: "Expert lead flashing, valleys, and weathering installation to ensure watertight seals around chimneys and dormers.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "roofing-leadwork"
  },
  {
    icon: <Layers size={32} />,
    title: "Slate Roofing",
    description: "Traditional slate roof installation and repairs using premium natural or synthetic slate tiles.",
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "slate-roofing"
  },
  {
    icon: <Grid3x3 size={32} />,
    title: "Tile Roofing",
    description: "Clay and concrete tile roofing installation, repair, and replacement with a wide selection of styles and colors.",
    image: "https://images.unsplash.com/photo-1606744837616-56c2e14d24d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "tile-roofing"
  },
  {
    icon: <Trees size={32} />,
    title: "Thatched Roofing",
    description: "Traditional thatched roof installation and restoration using high-quality natural materials and heritage techniques.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "thatched-roofing"
  },
  {
    icon: <Sun size={32} />,
    title: "Skylight Installation",
    description: "Professional skylight installation to bring natural light into your home while maintaining weatherproofing.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "skylight-installation"
  },
  {
    icon: <Maximize2 size={32} />,
    title: "Velux Installation",
    description: "Expert Velux roof window installation for improved ventilation, natural light, and energy efficiency.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "velux-installation"
  },
  {
    icon: <CloudRain size={32} />,
    title: "Downpipe Repair",
    description: "Professional downpipe repair and replacement to ensure proper rainwater drainage from your property.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "downpipe-repair"
  },
  {
    icon: <Droplets size={32} />,
    title: "Rainwater Systems",
    description: "Complete rainwater system installation and maintenance including gutters, downpipes, and drainage solutions.",
    image: "https://images.unsplash.com/photo-1637423461846-57a52a4bc697?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "rainwater-systems"
  },
  {
    icon: <AlignVerticalJustifyCenter size={32} />,
    title: "Fascia Replacement",
    description: "UPVC and timber fascia board replacement to protect your roofline and enhance your home's appearance.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "fascia-replacement"
  },
  {
    icon: <AlignVerticalJustifyCenter size={32} />,
    title: "Soffit Replacement",
    description: "Professional soffit replacement and installation for improved ventilation and roofline protection.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "soffit-replacement"
  },
  {
    icon: <Shield size={32} />,
    title: "Cladding Repair",
    description: "Expert repair and replacement of exterior cladding to protect your property from weather damage.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "cladding-repair"
  },
  {
    icon: <Triangle size={32} />,
    title: "Ridge Repointing",
    description: "Professional ridge tile repointing and bedding to prevent water ingress and extend roof lifespan.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "ridge-repointing"
  },
  {
    icon: <Hexagon size={32} />,
    title: "Apex Repointing",
    description: "Expert apex and gable end repointing to maintain structural integrity and weatherproofing.",
    image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "apex-repointing"
  },
  {
    icon: <Wrench size={32} />,
    title: "Dry Verge",
    description: "Modern dry verge system installation for long-lasting, maintenance-free roof edge protection.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "dry-verge"
  },
  {
    icon: <Activity size={32} />,
    title: "Roof Inspection",
    description: "Thorough roof inspections to identify potential issues before they become major problems.",
    image: `${BASE_URL}images/roof-inspection.jpeg`,
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