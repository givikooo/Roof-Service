import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoofingServices from '@/components/RoofingServices';

const RoofingServicesPage = () => {
  return (
    <main className="min-h-screen antialiased text-roofing-charcoal">
      <Header />
      <div className="pt-20">
        <RoofingServices />
      </div>
      <Footer />
    </main>
  );
};

export default RoofingServicesPage;
