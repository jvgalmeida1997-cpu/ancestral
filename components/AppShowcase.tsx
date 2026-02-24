import React from 'react';
import { Section } from './Section';
import { ScrollReveal } from './ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

export const AppShowcase: React.FC = () => {
  return (
    <Section className="py-16">
      <ScrollReveal className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          O Protocolo Ancestral é seu <span className="text-brand-red">guia definitivo</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Um método estruturado passo a passo para você nunca mais se sentir perdido na sua própria saúde.
        </p>
      </ScrollReveal>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-5xl mx-auto px-4">
        <ScrollReveal className="w-full lg:w-1/2 flex justify-center">
             {/* Device Mockup Elegante */}
             <div className="relative w-full max-w-[280px] h-[520px] bg-[#0A0A0A] rounded-[2.5rem] border-[6px] border-[#1A1A1A] shadow-2xl overflow-hidden flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#1A1A1A] rounded-b-xl z-20"></div>
                <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
                    <span className="text-brand-red font-bold uppercase tracking-widest text-[9px] mb-4 opacity-80">Acesso Exclusivo</span>
                    <h4 className="text-white font-bold text-lg mb-6 leading-tight">Sua Jornada Ancestral</h4>
                    <div className="w-28 h-28 rounded-full border-2 border-brand-red flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(225,29,72,0.2)]">
                        <span className="text-5xl font-extrabold text-white">07</span>
                    </div>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Dias para o Reset</p>
                    <div className="w-full h-1.5 bg-white/5 rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-brand-red w-3/4 animate-pulse"></div>
                    </div>
                </div>
             </div>
        </ScrollReveal>

        <ScrollReveal delay={200} className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">O que você recebe no Bundle:</h3>
            <div className="grid gap-3">
                {[
                    "Protocolo Ancestral Completo (PDF)",
                    "90+ Receitas que saciam de verdade",
                    "Guia de Jejum para Iniciantes",
                    "Manual do Ciclo Circadiano",
                    "Lista de Compras Anti-inflamatória",
                    "Acesso à Comunidade de Alunos",
                    "Suporte para dúvidas no WhatsApp"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 glass-card p-4 rounded-xl border border-white/5 hover:border-brand-red/20 transition-all group">
                        <CheckCircle2 className="text-brand-red w-5 h-5 shrink-0" />
                        <span className="text-gray-300 font-medium text-sm md:text-base">{item}</span>
                    </div>
                ))}
            </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};