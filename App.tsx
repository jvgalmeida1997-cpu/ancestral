import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Transformation } from './components/Transformation';
import { AncestralMethod } from './components/AncestralMethod';
import { Deliverables } from './components/Deliverables';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Support } from './components/Support';
import { Footer } from './components/Footer';
import { TopBanner } from './components/TopBanner';
import { SocialProofPopup } from './components/SocialProofPopup';
import { UpgradePopup } from './components/UpgradePopup';

function App() {
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

  return (
    <main className="bg-black min-h-screen text-white selection:bg-brand-red selection:text-white overflow-hidden relative font-sans">
      <TopBanner />
      <SocialProofPopup />
      <UpgradePopup isOpen={isUpgradeOpen} onClose={() => setIsUpgradeOpen(false)} />
      
      <div className="relative z-10">
        {/* 1. Headline e Vídeo */}
        <Hero />
        
        {/* 2. Antes e Depois (Sintomas vs Resultados) */}
        <Transformation />
        
        {/* 3. O que é o Protocolo (Método e Lógica) */}
        <AncestralMethod />
        
        {/* 4. O que você recebe (Bundle e Bônus) */}
        <Deliverables />
        
        {/* 5. Provas Sociais */}
        <Testimonials />
        
        {/* 6. Escolha seu Plano */}
        <Pricing onShowUpgrade={() => setIsUpgradeOpen(true)} />
        
        {/* 7. FAQ */}
        <FAQ />

        {/* 8. Suporte */}
        <Support />
        
        {/* 9. Rodapé */}
        <Footer />
      </div>

      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-brand-red/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-red/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </main>
  );
}

export default App;