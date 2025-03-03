import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Check, Users, Calendar, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
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

  const stats = [
    { icon: <Users size={24} />, value: "5,000+", label: "Happy Customers" },
    { icon: <Calendar size={24} />, value: "15+", label: "Years Experience" },
    { icon: <Award size={24} />, value: "100%", label: "Satisfaction" }
  ];

  const benefits = [
    "Licensed and insured roofing professionals",
    "Premium materials from trusted manufacturers",
    "Detailed written estimates with no hidden costs",
    "Thorough clean-up after project completion",
    "Flexible financing options to fit your budget",
    "Comprehensive warranty protection"
  ];

  return (
    <section id="about" ref={sectionRef} className="bg-white">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with border */}
          <div 
            className={cn(
              "relative transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            )}
          >
            {/* Border decoration */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-4 border-roofing-navy z-0 hidden md:block"></div>
            
            {/* Main image */}
            <div className="relative z-10 overflow-hidden rounded-lg shadow-lg h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" 
                alt="Team of professional roofers" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-card p-6 z-20 hidden md:block">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-roofing-orange mb-1 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-roofing-navy">
                      {stat.value}
                    </div>
                    <div className="text-xs text-roofing-charcoal/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div 
            className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            )}
          >
            <h2 className="section-heading text-left">
              Trusted Roofing Experts Since 2008
            </h2>
            
            <p className="text-lg text-roofing-charcoal/80 mb-6">
              With over 15 years of experience, we've established ourselves as a leader in the roofing industry, delivering exceptional craftsmanship and customer service. Our dedicated team of professionals is committed to providing reliable, high-quality roofing solutions for residential properties.
            </p>
            
            <p className="text-lg text-roofing-charcoal/80 mb-8">
              We believe in building lasting relationships with our clients through honest communication, transparent pricing, and superior workmanship that stands the test of time.
            </p>
            
            {/* Benefits list */}
            <div className="space-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start"
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="mr-3 mt-1 text-roofing-orange">
                    <Check size={18} />
                  </div>
                  <p className="text-roofing-charcoal">{benefit}</p>
                </div>
              ))}
            </div>
            
            {/* Stats for mobile */}
            <div className="grid grid-cols-3 gap-4 md:hidden mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-roofing-orange mb-1 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold text-roofing-navy">
                    {stat.value}
                  </div>
                  <div className="text-xs text-roofing-charcoal/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <a href="/contact" className="btn-secondary">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;