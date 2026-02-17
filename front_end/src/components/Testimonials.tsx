import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "AllSeasonInsulation provided exceptional service from start to finish. The team was professional, efficient, and the quality of work exceeded our expectations. Our new roof looks amazing!",
    author: "Michael Johnson",
    location: "Chicago, IL",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    quote: "After a bad storm damaged my roof, AllSeasonInsulation came quickly to assess the damage and provided a fair estimate. The repairs were completed in just two days, and they even helped with my insurance claim.",
    author: "Sarah Williams",
    location: "Atlanta, GA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    quote: "I was impressed by the professionalism and attention to detail. The crew arrived on time, protected our landscaping, and cleaned up thoroughly after completing the installation. Highly recommend!",
    author: "Robert Davis",
    location: "Denver, CO",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    quote: "From the initial consultation to the final inspection, AllSeasonInsulation made the process easy and stress-free. Their team was knowledgeable and took the time to answer all my questions.",
    author: "Jennifer Martinez",
    location: "Phoenix, AZ",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="bg-roofing-light-blue relative overflow-hidden py-16 lg:py-24"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(#0B3954 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "section-heading transition-all duration-700 transform",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            What Our Clients Say
          </h2>
          <p className={cn(
            "section-subheading transition-all duration-700 transform",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            "delay-150"
          )}>
            Don't just take our word for it. Hear from homeowners who have experienced our exceptional roofing services.
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute z-10 top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
            <button 
              onClick={handlePrev}
              className="bg-white/80 hover:bg-white text-roofing-navy rounded-full p-3 shadow-md transition-all duration-300 hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="bg-white/80 hover:bg-white text-roofing-navy rounded-full p-3 shadow-md transition-all duration-300 hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonial carousel */}
          <div className={cn(
            "overflow-hidden",
            visible ? "opacity-100" : "opacity-0",
            "transition-opacity duration-700"
          )}>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="min-w-full"
                >
                  <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-card p-8 md:p-10">
                    <div className="flex items-center justify-center mb-6">
                      <Quote size={40} className="text-roofing-orange opacity-20" />
                    </div>
                    <p className="text-lg md:text-xl text-center text-roofing-charcoal mb-8">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h4 className="font-semibold text-roofing-navy text-lg">
                          {testimonial.author}
                        </h4>
                        <p className="text-roofing-charcoal/70">
                          {testimonial.location}
                        </p>
                        <div className="flex items-center justify-center md:justify-start mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              fill={i < testimonial.rating ? "#FF6B35" : "none"}
                              stroke={i < testimonial.rating ? "#FF6B35" : "#CBD5E1"}
                              className="mr-1"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAnimating(true);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={cn(
                  "w-3 h-3 rounded-full mx-1 transition-all duration-300",
                  index === currentIndex ? "bg-roofing-orange w-6" : "bg-roofing-navy/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;