import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Phone, Mail, MapPin, Clock, Send, Check, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - get from .env
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS not configured. Please set up .env file.');
        toast({
          title: "Configuration Error",
          description: "Email service is not configured. Please contact the administrator.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'your-email@example.com', // ეს შეცვალე შენი email-ით
      };

      // Send email via EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll contact you soon.",
        variant: "default",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error: any) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Error",
        description: error.text || "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: ["(800) 123-4567", "Mon-Fri, 8am-6pm"],
      action: { text: "Call now", href: "tel:+18001234567" }
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: ["info@AllSeasonInsulation.com", "24/7 support"],
      action: { text: "Send email", href: "mailto:gigizam22@gmail.com" }
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: ["123 Roofing Way", "Chicago, IL 60007"],
      action: { text: "Get directions", href: "https://maps.google.com" }
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      details: ["Mon-Fri: 8am-6pm", "Sat: 9am-2pm"],
      action: { text: "Schedule call", href: "#contact" }
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="bg-roofing-light-blue">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "section-heading transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Get In Touch
          </h2>
          <p className={cn(
            "section-subheading transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            "delay-150"
          )}>
            Contact us today for a free, no-obligation roof inspection and estimate. We're here to help with all your roofing needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact form */}
          <div className={cn(
            "lg:col-span-2 bg-white rounded-lg shadow-card p-8 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          )}>
            <h3 className="text-2xl font-bold text-roofing-navy mb-6">
              Request a Free Estimate
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-roofing-charcoal mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-roofing-navy/30 focus:border-roofing-navy transition-all duration-200"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-roofing-charcoal mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-roofing-navy/30 focus:border-roofing-navy transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-roofing-charcoal mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-roofing-navy/30 focus:border-roofing-navy transition-all duration-200"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-roofing-charcoal mb-1">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-roofing-navy/30 focus:border-roofing-navy transition-all duration-200"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="roof-installation">Roof Installation</option>
                    <option value="roof-repair">Roof Repair</option>
                    <option value="roof-replacement">Roof Replacement</option>
                    <option value="gutter-services">Gutter Services</option>
                    <option value="roof-inspection">Roof Inspection</option>
                    <option value="storm-damage">Storm Damage</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-roofing-charcoal mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-roofing-navy/30 focus:border-roofing-navy transition-all duration-200"
                  placeholder="Please provide details about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={cn(
                  "w-full px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center",
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-roofing-orange text-white hover:bg-roofing-orange/90 hover:-translate-y-1 hover:shadow-button"
                )}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : isSubmitted ? (
                  <span className="inline-flex items-center">
                    <Check size={18} className="mr-2" />
                    Submitted
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <Send size={18} className="mr-2" />
                    Submit Request
                  </span>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact information */}
          <div className={cn(
            "space-y-6 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          )}
            style={{ transitionDelay: "200ms" }}
          >
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-roofing-orange bg-roofing-orange/10 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-roofing-navy mb-2">
                      {item.title}
                    </h4>
                    <div className="space-y-1 mb-3">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-roofing-charcoal/80">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <a 
                      href={item.action.href}
                      className="inline-flex items-center text-roofing-orange font-medium hover:text-roofing-navy transition-colors duration-300"
                    >
                      {item.action.text}
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Need to import this separately to avoid circular dependency
const ArrowRight = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default Contact;
