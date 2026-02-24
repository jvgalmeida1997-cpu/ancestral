import React from 'react';
import { Section } from './Section';
import { ScrollReveal } from './ScrollReveal';
import { Package, Gift, CheckCircle2 } from 'lucide-react';

const mainDeliverables = [
  "Protocolo Ancestral – 7 Dias (PDF)",
  "Guia Intestino & Absorção",
  "Protocolo de Sono & Luz (Ciclo Circadiano)",
  "Manual de Jejum Ancestral",
  "Blindagem Mental (Foco e Autocontrole)",
  "Manual de Rotina Prática",
  "Lista de Alimentos Reais",
  "Lista de Irritantes (Lista Vermelha)"
];

const bonusItems = [
  { title: "Desinflamação Rápida em 72h", color: "text-brand-red" },
  { title: "Ritual Noturno Ancestral", color: "text-brand-red" },
  { title: "Lista Vermelha Oculta", color: "text-brand-red" }
];

export const Deliverables: React.FC = () => {
  return (
    <Section className="py-20 relative bg-black">
      <ScrollReveal className="text-center mb-16 px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight uppercase">
          O que você recebe no <span className="text-brand-red">método completo</span>
        </h2>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {/* Bundle Principal */}
        <ScrollReveal className="bg-brand-card p-8 rounded-3xl border border-white/5 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-8">
               <Package className="text-brand-red" size={24} />
               <h3 className="text-lg font-bold text-white uppercase tracking-widest">O Método</h3>
            </div>
            <ul className="space-y-4 flex-1">
               {mainDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                     <CheckCircle2 size={18} className="text-brand-red shrink-0" />
                     <span className="text-gray-300 font-medium text-sm md:text-base">{item}</span>
                  </li>
               ))}
            </ul>
        </ScrollReveal>

        {/* Bônus */}
        <ScrollReveal delay={100} className="relative group flex flex-col h-full">
            <div className="absolute -inset-[1px] bg-brand-red/30 rounded-3xl blur-md"></div>
            <div className="relative bg-[#080808] p-8 rounded-3xl border border-brand-red/30 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                   <Gift className="text-brand-red" size={24} />
                   <h3 className="text-lg font-bold text-white uppercase tracking-widest">Bônus Exclusivos</h3>
                </div>
                <ul className="space-y-6 flex-1">
                   {bonusItems.map((item, idx) => (
                      <li key={idx} className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center gap-4 group-hover:border-brand-red/40 transition-colors">
                         <div className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_#E11D48]"></div>
                         <span className="text-white font-bold text-sm md:text-base">{item.title}</span>
                      </li>
                   ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                   <p className="text-[10px] font-bold text-brand-red uppercase tracking-[0.2em]">Acesso Imediato</p>
                </div>
            </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};