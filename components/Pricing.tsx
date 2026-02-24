import React from 'react';
import { Section } from './Section';
import { Button } from './ui/Button';
import { ScrollReveal } from './ScrollReveal';
import { Check, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onShowUpgrade: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onShowUpgrade }) => {
  return (
    <Section id="offer" className="py-20 scroll-mt-24">
        <ScrollReveal className="mb-20">
            <h3 className="text-[10px] font-bold text-gray-500 text-center uppercase tracking-[0.3em] mb-12 flex items-center justify-center gap-4">
               <span className="w-8 h-[1px] bg-white/10"></span>
               🛒 COMO FUNCIONA NA PRÁTICA
               <span className="w-8 h-[1px] bg-white/10"></span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-2">
                {[
                    {step: "1", title: "Compra única", desc: "Sem surpresas"},
                    {step: "2", title: "Acesso e-mail", desc: "Link imediato"},
                    {step: "3", title: "Guia simples", desc: "Direto ao ponto"},
                    {step: "4", title: "Mudanças 48h", desc: "Sinta a energia"}
                ].map((item, idx) => (
                    <div key={idx} className="bg-brand-card/50 border border-white/5 p-6 rounded-2xl text-center">
                        <div className="w-8 h-8 mx-auto border border-brand-red/30 rounded-full flex items-center justify-center font-bold text-brand-red mb-4 text-xs">
                            {item.step}
                        </div>
                        <h4 className="text-white font-bold text-xs mb-1 uppercase tracking-tight">{item.title}</h4>
                        <p className="text-gray-500 text-[10px] font-medium leading-tight">{item.desc}</p>
                    </div>
                ))}
            </div>
            <p className="text-center mt-10 text-gray-500 text-sm italic font-medium">Você aplica em casa, com comida real.</p>
        </ScrollReveal>

        <ScrollReveal className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight uppercase">
                💳 ESCOLHA SEU <span className="text-brand-red">PLANO</span>
            </h2>
        </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto px-4">
        {/* Plano Básico */}
        <ScrollReveal className="bg-[#0A0A0A] rounded-[2.5rem] overflow-hidden flex flex-col border border-white/5 p-10 md:p-12">
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">🔹 PLANO BÁSICO</h3>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-10">Inicie a desinflamação</p>
            
            <div className="mb-10 flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-gray-400">R$</span>
                    <span className="text-5xl font-extrabold text-white tracking-tighter">9,90</span>
                </div>
            </div>
            
            <ul className="space-y-5 mb-12 flex-1">
                {[
                    "Protocolo 7 Dias",
                    "Lista de alimentos",
                    "Lista de irritantes",
                    "Checklist diário"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm font-semibold text-gray-400">
                        <Check className="w-5 h-5 text-brand-red shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>

            <Button 
                onClick={onShowUpgrade} // Aciona o popup em vez de ir direto ao checkout
                variant="outline" 
                fullWidth 
                showIcon={false}
            >
                QUERO O BÁSICO
            </Button>
        </ScrollReveal>

        {/* Plano Completo */}
        <ScrollReveal delay={100} className="relative group flex flex-col h-full">
            <div className="absolute -inset-[1px] bg-brand-red rounded-[2.5rem] blur-[2px] opacity-40"></div>
            <div className="bg-[#080808] rounded-[2.5rem] relative overflow-hidden h-full flex flex-col border border-brand-red/40 shadow-2xl">
                <div className="bg-brand-red text-white text-center py-3 text-[11px] font-black uppercase tracking-[0.25em] shadow-lg">
                    🔥 MAIS ESCOLHIDO
                </div>
                
                <div className="p-10 md:p-12 flex flex-col h-full">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest">PLANO COMPLETO</h3>
                        <p className="text-brand-red text-[10px] font-bold uppercase tracking-widest">Método Completo</p>
                    </div>

                    <div className="mb-10 flex flex-col gap-1 border-b border-white/5 pb-8">
                         <div className="text-gray-600 line-through text-sm font-medium italic">De R$ 97,00</div>
                         <div className="flex items-baseline gap-2">
                            <span className="text-brand-red text-sm font-bold">POR R$</span>
                            <span className="text-6xl font-extrabold text-white tracking-tighter">29,90</span>
                         </div>
                    </div>

                    <ul className="space-y-5 mb-12 flex-1">
                        {[
                            "Tudo do Plano Básico",
                            "Todos os Guias Avançados",
                            "Todos os Bônus Exclusivos",
                            "Manual de Jejum Ancestral",
                            "Protocolo de Sono & Luz",
                            "Blindagem Mental (Foco)"
                        ].map((item, i) => (
                            <li key={i} className={`flex items-center gap-4 text-sm font-bold ${item.includes("Bônus") || item.includes("Tudo") ? "text-brand-red" : "text-gray-200"}`}>
                                <Check className="w-5 h-5 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    
                    <Button 
                        href="https://pay.lowify.com.br/checkout?product_id=bRm4T3" 
                        fullWidth 
                    >
                        QUERO O MÉTODO COMPLETO
                    </Button>
                </div>
            </div>
        </ScrollReveal>
      </div>

      <div className="max-w-4xl mx-auto mt-20 px-4">
        <ScrollReveal className="relative flex flex-col md:flex-row items-center gap-8 bg-[#0a0a0a] p-10 rounded-[2rem] border border-white/5">
             <div className="shrink-0 bg-brand-red/10 p-6 rounded-full border border-brand-red/20">
                 <ShieldCheck className="w-12 h-12 text-brand-red" />
             </div>
             <div className="text-center md:text-left relative z-10">
                 <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">🛡️ GARANTIA BLINDADA DE 30 DIAS</h3>
                 <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                    Use o método por 30 dias. Se você não sentir melhora real em energia, sono e disposição, devolvemos 100% do seu dinheiro. Sem risco. Sem burocracia.
                 </p>
             </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};