import React from 'react';
import { Section } from './Section';
import { ScrollReveal } from './ScrollReveal';
import { Quote } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <Section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.05),transparent_70%)] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal className="text-center space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Quem está por trás do <span className="text-brand-red">método</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                <p>
                    Esse protocolo foi criado por alguém que viveu no próprio corpo o cansaço, o ganho de peso e a ansiedade que hoje parecem “normais”.
                </p>
                <p>
                    Ao invés de buscar mais soluções complexas, começou a <strong className="text-white">remover o excesso</strong>.
                </p>
                <p>
                    O resultado foi simples, previsível e repetível em outras pessoas. Foi assim que o <strong className="text-brand-red">Protocolo Ancestral</strong> nasceu.
                </p>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col items-center">
                <blockquote className="text-lg md:text-2xl font-display italic text-white flex flex-col items-center gap-4">
                    <Quote className="text-brand-red/40" size={32} fill="currentColor" />
                    “O corpo moderno não está doente — está sobrecarregado.”
                </blockquote>
            </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};