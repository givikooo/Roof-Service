import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn, getBaseUrl } from '@/lib/utils';
import { ArrowRight, Shield, Clock, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_SLIDER_IMAGES = [
  { src: 'images/roof-installation.jpg', alt: 'roof installation' },
  { src: 'images/insulation-banner-original.jpg', alt: 'insulation banner' },
  { src: 'images/velux-installation.jpg', alt: 'velux installation' },
  { src: 'images/roof-inspection.jpeg', alt: 'roof inspection' },
  { src: 'images/roofing-background.webp', alt: 'roofing background' },
  { src: 'images/gutter-services.jpg', alt: 'Gutter Services' },
];

const Hero = () => {
  const base = getBaseUrl();
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        if (w > 0) setSlideWidth(w);
      }
    };
    updateWidth();
    const t = requestAnimationFrame(updateWidth);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateWidth) : null;
    if (containerRef.current && ro) ro.observe(containerRef.current);
    window.addEventListener('resize', updateWidth);
    return () => {
      cancelAnimationFrame(t);
      ro?.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setSlideIndex((index + HERO_SLIDER_IMAGES.length) % HERO_SLIDER_IMAGES.length);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col w-full max-w-full overflow-x-hidden items-center bg-roofing-navy"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0 hero-background" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.50), rgba(7, 42, 64, 0.55)), url('${base}/images/background-image.jpg')`,
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Full-width slider - no frames, edge to edge; pixel-based for reliable live behavior */}
      <div className="relative w-full max-w-full pt-20 md:pt-24 z-10 overflow-hidden">
        <div ref={containerRef} className="relative w-full bg-roofing-navy/80" style={{ aspectRatio: '25/9', minHeight: '200px' }}>
          <div 
            className="flex h-full transition-transform duration-700 ease-out"
            style={{ 
              width: slideWidth > 0 ? `${HERO_SLIDER_IMAGES.length * slideWidth}px` : `${HERO_SLIDER_IMAGES.length * 100}%`,
              transform: slideWidth > 0 ? `translateX(-${slideIndex * slideWidth}px)` : `translateX(-${(slideIndex / HERO_SLIDER_IMAGES.length) * 100}%)`
            }}
          >
            {HERO_SLIDER_IMAGES.map((img, i) => (
              <div 
                key={i} 
                className="h-full flex-shrink-0 relative"
                style={{ width: slideWidth > 0 ? `${slideWidth}px` : `${100 / HERO_SLIDER_IMAGES.length}%` }}
              >
                <img
                  src={`${base}/${img.src}`}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(slideIndex - 1)}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-2.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={() => goTo(slideIndex + 1)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-2.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {HERO_SLIDER_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSlideIndex(i)}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  i === slideIndex ? 'bg-white w-6' : 'bg-white/50 w-1.5 hover:bg-white/80'
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 pt-8 md:pt-10 pb-8 md:pb-12 relative z-20">
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