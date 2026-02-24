import React from 'react';
import { Section } from './Section';
import { ScrollReveal } from './ScrollReveal';
import { ShieldCheck, Zap, Target } from 'lucide-react';

export const WhyCarnivore: React.FC = () => {
  return (
    <Section className="py-12 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,60,0.12),transparent_60%)] -z-10 pointer-events-none"></div>

      <ScrollReveal className="text-center mb-10 relative z-10">
        <h2 className="text-2xl md:text-4xl font-black text-center text-white mb-4 uppercase tracking-tight">
          O que é o <span className="text-brand-red text-glow">Protocolo Ancestral?</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          Um método direto e aplicável, criado para:
        </p>
      </ScrollReveal>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {[
          { icon: ShieldCheck, title: "Remover", text: "remover os principais irritantes modernos que inflamam seu corpo" },
          { icon: Zap, title: "Aliviar", text: "aliviar a sobrecarga metabólica causada por excessos artificiais" },
          { icon: Target, title: "Devolver", text: "devolver ao organismo as condições de vitalidade que ele sempre teve" }
        ].map((item, i) => (
          <ScrollReveal key={i} delay={i * 100} className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-brand-red/40 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(255,0,60,0.15)]">
            <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red mb-4 group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(255,0,60,0.2)]">
              <item.icon size={24} />
            </div>
            <h4 className="text-white font-bold uppercase mb-2 tracking-widest group-hover:text-brand-red transition-colors">{item.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-12 text-center max-w-3xl mx-auto relative z-10">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-brand-red/10 to-transparent border border-brand-red/30 backdrop-blur-md shadow-[0_0_30px_rgba(255,0,60,0.15)]">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 font-bold text-xs md:text-sm uppercase tracking-widest">
                <span>Sem extremismo</span>
                <span className="text-brand-red text-glow">•</span>
                <span>Sem complicação</span>
                <span className="text-brand-red text-glow">•</span>
                <span>Sem depender de remédios</span>
            </div>
          </div>
      </ScrollReveal>
    </Section>
  );
};