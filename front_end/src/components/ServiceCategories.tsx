import { Link } from 'react-router-dom';
import { Home, Sparkles, ArrowRight } from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL;
const ServiceCategories = () => {
  const categories = [
    {
      title: "Roofing Services",
      description: "Comprehensive roofing solutions including installation, repair, maintenance, and specialized roofing work for residential and commercial properties.",
      icon: <Home size={64} />,
      image: `${BASE_URL}images/roof-repair.jpg`,
      link: "/services/roofing",
      servicesCount: 20
    },
    {
      title: "Insulation Services",
      description: "Expert insulation solutions to improve your home's energy efficiency, comfort, and reduce heating costs with professional installation.",
      icon: <Sparkles size={64} />,
      image: `${BASE_URL}images/internal-insulation.jpg`,
      link: "/services/insulation",
      servicesCount: 4
    }
  ];

  return (
    <section className="relative py-20 min-h-screen">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0 service-background" 
        style={{ 
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-roofing-navy mb-4">
            Our Services
          </h1>
          <p className="text-lg text-roofing-charcoal/80">
            We offer comprehensive roofing and insulation services to protect and improve your property. Choose a category to explore our specialized services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="mb-2">{category.icon}</div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                  <p className="text-white/90 text-sm mt-1">{category.servicesCount} specialized services</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-roofing-charcoal/80 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-roofing-orange font-semibold group-hover:text-roofing-navy transition-colors duration-300">
                    View All Services
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="text-sm text-gray-500">
                    {category.servicesCount} services
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-roofing-charcoal/70 mb-6">
            Not sure which service you need?
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
