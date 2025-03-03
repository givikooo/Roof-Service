import React from 'react';
import { 
  Home, Palette, Wrench, Droplets, 
  Activity, Shield, Check, ArrowRight,
  Clock, Award, ThumbsUp, Coins
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Service details data
const serviceDetails = {
  'roof-installation': {
    title: 'Professional Roof Installation',
    icon: <Home size={48} />,
    description: 'Complete roof installation services using high-quality materials and expert craftsmanship for long-lasting results.',
    fullDescription: 'Our professional roof installation service provides homeowners with durable, weather-resistant roofing solutions tailored to their specific needs. We use only premium materials and employ skilled craftsmen who follow industry best practices to ensure your new roof will protect your home for decades to come.',
    image: "https://images.unsplash.com/photo-1654264758369-3bbdf7c0a292?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    benefits: [
      'Expert installation by certified professionals',
      'High-quality materials from trusted manufacturers',
      'Energy-efficient roofing options',
      'Comprehensive warranties',
      'Clean job site with thorough debris removal',
      'Timely project completion'
    ],
    process: [
      { title: 'Initial Consultation', description: 'We assess your needs and discuss material options.' },
      { title: 'Detailed Estimate', description: 'We provide a comprehensive quote with no hidden costs.' },
      { title: 'Material Selection', description: 'Choose from our wide range of quality roofing materials.' },
      { title: 'Installation', description: 'Our expert team completes the installation with precision.' },
      { title: 'Final Inspection', description: 'We conduct a thorough inspection to ensure quality.' },
      { title: 'Cleanup', description: 'We leave your property clean and free of debris.' }
    ],
    faqs: [
      { 
        question: 'How long does a typical roof installation take?', 
        answer: 'Most residential roof installations take 1-3 days, depending on the size and complexity of your roof.'
      },
      { 
        question: 'What types of roofing materials do you offer?', 
        answer: 'We offer a wide range of materials including asphalt shingles, metal roofing, tile, slate, and more.'
      },
      { 
        question: 'Do you provide warranties?', 
        answer: 'Yes, we offer manufacturer warranties on materials and our own workmanship warranty.'
      },
      { 
        question: 'How do I know if I need a new roof?', 
        answer: 'Signs include missing or damaged shingles, leaks, age of roof (over 20 years), and visible wear and tear.'
      }
    ]
  },
  'roof-repair': {
    title: 'Expert Roof Repair',
    icon: <Wrench size={48} />,
    description: 'Professional repair services to fix leaks, damaged shingles, and other roofing issues to protect your home.',
    fullDescription: 'Our roof repair services address a wide range of issues from minor leaks to major structural damage. Our experienced technicians can identify problems quickly and implement effective solutions to extend the life of your roof and prevent costly water damage to your home.',
    image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    benefits: [
      'Fast response to prevent further damage',
      'Accurate diagnosis of roofing problems',
      'Cost-effective solutions',
      'Quality repair materials',
      'Experienced repair technicians',
      'Preventative maintenance options'
    ],
    process: [
      { title: 'Inspection', description: 'We thoroughly assess the damage to your roof.' },
      { title: 'Diagnosis', description: 'We identify the root cause of your roofing issue.' },
      { title: 'Repair Plan', description: 'We develop a comprehensive repair strategy.' },
      { title: 'Cost Estimate', description: 'We provide a transparent, detailed quote.' },
      { title: 'Repairs', description: 'Our skilled technicians implement the necessary repairs.' },
      { title: 'Final Check', description: 'We verify that all issues have been properly addressed.' }
    ],
    faqs: [
      { 
        question: 'How quickly can you respond to a roof leak?', 
        answer: 'We offer emergency services and can typically respond within 24-48 hours for urgent situations.'
      },
      { 
        question: 'Can you repair just a section of my roof?', 
        answer: 'Yes, we specialize in targeted repairs that address specific problem areas without replacing the entire roof.'
      },
      { 
        question: 'How do I know if a repair will be sufficient?', 
        answer: 'Our inspection will determine if repair is adequate or if replacement would be more cost-effective long-term.'
      },
      { 
        question: 'Do you provide temporary repairs during bad weather?', 
        answer: 'Yes, we can implement emergency tarping and temporary solutions until permanent repairs can be made safely.'
      }
    ]
  },
  'roof-replacement': {
    title: 'Complete Roof Replacement',
    icon: <Palette size={48} />,
    description: 'Full roof replacement services when repairs aren\'t enough, with various material options to choose from.',
    fullDescription: 'When repairs are no longer cost-effective or your roof has reached the end of its lifespan, our roof replacement service provides a comprehensive solution. We handle everything from tear-off to installation of your new roof, offering a variety of materials to enhance both the protection and appearance of your home.',
    image: "https://images.unsplash.com/photo-1530334565651-208b8a2b238b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    benefits: [
      'Enhanced home value and curb appeal',
      'Improved energy efficiency',
      'Better protection against the elements',
      'Updated warranty coverage',
      'Selection of modern roofing materials',
      'Opportunity for structural improvements'
    ],
    process: [
      { title: 'Comprehensive Assessment', description: 'We evaluate your current roof condition and structural needs.' },
      { title: 'Material Consultation', description: 'We help you select the best materials for your budget and needs.' },
      { title: 'Detailed Proposal', description: 'We provide a complete project plan and transparent pricing.' },
      { title: 'Tear-off', description: 'We remove your old roofing materials completely.' },
      { title: 'Structural Repairs', description: 'We address any underlying issues before installing the new roof.' },
      { title: 'New Roof Installation', description: 'We install your new roof with precision and attention to detail.' }
    ],
    faqs: [
      { 
        question: 'How long does a roof replacement take?', 
        answer: 'Most residential roof replacements take 2-5 days, depending on size, complexity, and weather conditions.'
      },
      { 
        question: 'Can you install a new roof over my existing one?', 
        answer: 'While possible in some cases, we generally recommend complete removal to inspect and address underlying issues.'
      },
      { 
        question: 'What\'s the best time of year for roof replacement?', 
        answer: 'Spring through fall is ideal, but we can work year-round in most weather conditions except severe precipitation.'
      },
      { 
        question: 'How do I choose the right roofing material?', 
        answer: 'We\'ll help you evaluate factors like durability, appearance, energy efficiency, and budget to find the best option.'
      }
    ]
  },
  'gutter-services': {
    title: 'Comprehensive Gutter Services',
    icon: <Droplets size={48} />,
    description: 'Installation, repair, and cleaning of gutters to ensure proper water drainage and prevent water damage.',
    fullDescription: 'Our gutter services ensure that your home\'s water drainage system functions properly to protect your foundation, landscaping, and exterior. We offer gutter installation, repair, cleaning, and maintenance, as well as gutter guard installation to prevent clogs and reduce maintenance needs.',
    image: "https://images.unsplash.com/photo-1637423461846-57a52a4bc697?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    benefits: [
      'Prevention of water damage to foundation',
      'Protection of siding and exterior paint',
      'Reduced soil erosion around property',
      'Prevention of basement flooding',
      'Extended roof lifespan',
      'Reduction of insect breeding areas'
    ],
    process: [
      { title: 'System Evaluation', description: 'We inspect your current gutters and drainage patterns.' },
      { title: 'Recommendation', description: 'We suggest appropriate repairs or improvements.' },
      { title: 'Material Selection', description: 'We help you choose from aluminum, copper, or steel options.' },
      { title: 'Installation/Repair', description: 'We perform precise installation or targeted repairs.' },
      { title: 'Downspout Placement', description: 'We ensure proper water discharge away from foundation.' },
      { title: 'Final Testing', description: 'We verify proper water flow and drainage.' }
    ],
    faqs: [
      { 
        question: 'How often should gutters be cleaned?', 
        answer: 'We recommend cleaning gutters at least twice a year, typically in spring and fall, or more frequently if you have many trees.'
      },
      { 
        question: 'What are gutter guards and are they worth it?', 
        answer: 'Gutter guards are protective systems that prevent debris from entering your gutters while allowing water to flow. They can significantly reduce maintenance and are particularly valuable for homes near trees.'
      },
      { 
        question: 'What material is best for gutters?', 
        answer: 'Aluminum is most common due to cost and durability, but we also offer copper (more aesthetic but expensive) and steel (very durable but heavier) options.'
      },
      { 
        question: 'Can you fix sagging gutters?', 
        answer: 'Yes, we can repair sagging gutters by reinforcing hangers, replacing sections, or realigning the entire system as needed.'
      }
    ]
  },
  'roof-inspection': {
    title: 'Thorough Roof Inspection',
    icon: <Activity size={48} />,
    description: 'Thorough roof inspections to identify potential issues before they become major problems.',
    fullDescription: 'Our comprehensive roof inspection service provides homeowners with peace of mind by identifying potential problems before they lead to significant damage. Using advanced techniques and our years of experience, we thoroughly examine all aspects of your roofing system and provide detailed reports with clear recommendations.',
    image: "https://images.unsplash.com/photo-1605808394094-dfa5ac897608?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    benefits: [
      'Early problem detection',
      'Prevention of costly future repairs',
      'Extension of roof lifespan',
      'Documentation for insurance purposes',
      'Peace of mind',
      'Professional assessment for real estate transactions'
    ],
    process: [
      { title: 'Exterior Inspection', description: 'We examine shingles, flashing, and visible roofing materials.' },
      { title: 'Structural Assessment', description: 'We check for sagging and structural integrity issues.' },
      { title: 'Interior Inspection', description: 'We look for signs of leaks or water damage in the attic.' },
      { title: 'Ventilation Check', description: 'We ensure your roof ventilation system is functioning properly.' },
      { title: 'Detailed Documentation', description: 'We photograph and document all findings thoroughly.' },
      { title: 'Comprehensive Report', description: 'We provide a clear report with prioritized recommendations.' }
    ],
    faqs: [
      { 
        question: 'How often should I have my roof inspected?', 
        answer: 'We recommend annual inspections and additional checks after severe weather events like major storms or high winds.'
      },
      { 
        question: 'What does a roof inspection include?', 
        answer: 'Our inspections include examination of shingles/materials, flashing, gutters, chimney, ventilation, interior signs of leaks, and structural elements.'
      },
      { 
        question: 'How long does an inspection take?', 
        answer: 'A typical residential roof inspection takes 1-2 hours, depending on the size and complexity of your roof.'
      },
      { 
        question: 'Do you offer free inspections?', 
        answer: 'We offer free initial assessments for potential customers. Detailed inspections for insurance or real estate purposes may have a fee.'
      }
    ]
  },
  'storm-damage': {
    title: 'Storm Damage Repair',
    icon: <Shield size={48} />,
    description: 'Emergency services and repairs for roofs damaged by storms, high winds, or other natural disasters.',
    fullDescription: 'When severe weather strikes, our storm damage repair service provides rapid response to protect your home from further damage. We handle everything from emergency tarping to complete restoration, and we can assist with insurance claims to make the process as smooth as possible during a stressful time.',
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    benefits: [
      'Emergency response services',
      'Temporary protective measures',
      'Insurance claims assistance',
      'Complete documentation of damage',
      'Quality repairs to restore protection',
      'Prevention of secondary damage'
    ],
    process: [
      { title: 'Rapid Response', description: 'We quickly assess and secure your roof after storm damage.' },
      { title: 'Emergency Protection', description: 'We install tarps or temporary covers to prevent further damage.' },
      { title: 'Damage Documentation', description: 'We thoroughly document all damage for insurance purposes.' },
      { title: 'Insurance Coordination', description: 'We help navigate the claims process with your insurance.' },
      { title: 'Repair Planning', description: 'We develop a comprehensive plan to restore your roof.' },
      { title: 'Complete Restoration', description: 'We perform all necessary repairs to return your roof to optimal condition.' }
    ],
    faqs: [
      { 
        question: 'What should I do immediately after storm damage?', 
        answer: 'First ensure everyone\'s safety, then call us for emergency tarping services to prevent water infiltration, and contact your insurance company to report the damage.'
      },
      { 
        question: 'Will you work with my insurance company?', 
        answer: 'Yes, we have extensive experience working with insurance companies and can help facilitate the claims process, from documentation to final inspection.'
      },
      { 
        question: 'How quickly can you respond after a storm?', 
        answer: 'We prioritize emergency situations and typically respond within 24 hours after severe weather events, often sooner depending on conditions.'
      },
      { 
        question: 'Can you identify all storm damage?', 
        answer: 'Yes, our experienced inspectors can identify both obvious and hidden storm damage that might be missed by the untrained eye.'
      }
    ]
  }
};

interface ServiceDetailContentProps {
  serviceId: string | undefined;
}

const ServiceDetailContent: React.FC<ServiceDetailContentProps> = ({ serviceId }) => {
  if (!serviceId || !serviceDetails[serviceId as keyof typeof serviceDetails]) {
    return <div className="container-section">Service not found</div>;
  }

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  return (
    <section className="bg-white">
      {/* Hero section */}
      <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-roofing-navy/80 to-roofing-navy/40 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <div className="text-white mb-4">{service.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
              <p className="text-xl text-white/90">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-8 py-12 lg:py-16">
        {/* Overview section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-roofing-navy mb-6">Service Overview</h2>
          <p className="text-lg text-roofing-charcoal/80 mb-8">{service.fullDescription}</p>
          
          <div className="bg-roofing-light-blue p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-roofing-navy mb-4">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Check size={20} className="text-roofing-orange mr-2 mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-roofing-navy text-center mb-10">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-roofing-navy text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-roofing-navy">{step.title}</h3>
                </div>
                <p className="text-roofing-charcoal/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why choose us */}
        <div className="bg-roofing-gray rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-roofing-navy text-center mb-10">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Award className="text-roofing-orange" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-roofing-navy mb-2">Quality Workmanship</h3>
              <p className="text-roofing-charcoal/80">Expert craftsmen with years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <ThumbsUp className="text-roofing-orange" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-roofing-navy mb-2">Fully Licensed & Insured</h3>
              <p className="text-roofing-charcoal/80">Peace of mind with complete coverage</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Clock className="text-roofing-orange" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-roofing-navy mb-2">On-Time Service</h3>
              <p className="text-roofing-charcoal/80">We value your time and stick to schedules</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Coins className="text-roofing-orange" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-roofing-navy mb-2">Competitive Pricing</h3>
              <p className="text-roofing-charcoal/80">Great value without compromising quality</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-roofing-navy text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-roofing-navy mb-2">{faq.question}</h3>
                <p className="text-roofing-charcoal/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-roofing-navy text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/80 mb-8">Contact us today for a free consultation and estimate</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
            <a href="tel:555-123-4567" className="btn-outline border-white text-white hover:bg-white/10">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailContent;