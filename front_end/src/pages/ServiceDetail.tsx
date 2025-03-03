import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetailContent from '@/components/ServiceDetailContent';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // If service doesn't exist, redirect to services page
    if (!serviceId || !['roof-installation', 'roof-repair', 'roof-replacement', 
                        'gutter-services', 'roof-inspection', 'storm-damage'].includes(serviceId)) {
      navigate('/services');
    }
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [serviceId, navigate]);

  return (
    <main className="min-h-screen antialiased text-roofing-charcoal">
      <Header />
      <div className="pt-20">
        <ServiceDetailContent serviceId={serviceId} />
      </div>
      <Footer />
    </main>
  );
};

export default ServiceDetail;