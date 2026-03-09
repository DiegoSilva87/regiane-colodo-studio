import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuemSouSection from "@/components/QuemSouSection";
import PsicologiaSection from "@/components/PsicologiaSection";
import NeuropsicologiaSection from "@/components/NeuropsicologiaSection";
import ConsultoriaSection from "@/components/ConsultoriaSection";
import PalestrasSection from "@/components/PalestrasSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <QuemSouSection />
        <PsicologiaSection />
        <NeuropsicologiaSection />
        <ConsultoriaSection />
        <PalestrasSection />
        <DepoimentosSection />
        <ContatoSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
