import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InsulationServices from '@/components/InsulationServices';

const InsulationServicesPage = () => {
  return (
    <main className="min-h-screen antialiased text-roofing-charcoal">
      <Header />
      <div className="pt-20">
        <InsulationServices />
      </div>
      <Footer />
    </main>
  );
};

export default InsulationServicesPage;
