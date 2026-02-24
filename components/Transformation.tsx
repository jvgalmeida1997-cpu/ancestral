import React from 'react';
import { Section } from './Section';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './ui/Button';

export const Transformation: React.FC = () => {
  const symptoms = [
    { emoji: "😴", text: "Cansaço mesmo dormindo" },
    { emoji: "🎈", text: "Inchaço constante no corpo e no rosto" },
    { emoji: "🚽", text: "Intestino preso, gases, desconforto" },
    { emoji: "😰", text: "Ansiedade sem motivo aparente" },
    { emoji: "☁️", text: "Falta de foco, memória fraca" },
    { emoji: "🥱", text: "Sono leve e quebrado" },
    { emoji: "🍫", text: "Vontade constante por doce" },
    { emoji: "🔥", text: "Corpo inflamado e travado" },
    { emoji: "🤕", text: "Dores que aparecem e somem" }
  ];

  const results = [
    { emoji: "🍃", text: "Corpo leve e desinflamado" },
    { emoji: "⚡", text: "Energia estável o dia inteiro" },
    { emoji: "🛌", text: "Sono profundo e restaurador" },
    { emoji: "🧠", text: "Clareza mental real" },
    { emoji: "💪", text: "Menos dores e mais disposição" },
    { emoji: "🍽️", text: "Fome e compulsão sob controle" },
    { emoji: "😊", text: "Humor estável" },
    { emoji: "🧘", text: "Autocontrole natural" },
    { emoji: "💎", text: "Disciplina sem esforço" }
  ];

  return (
    <Section className="relative py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-w-5xl mx-auto px-4">
        {/* Antes */}
        <ScrollReveal className="bg-brand-card border border-white/5 rounded-2xl p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-8 text-gray-500">
             <AlertCircle size={20} className="text-gray-600" />
             <h3 className="text-xs font-bold uppercase tracking-[0.2em]">❌ ANTES DO PROTOCOLO</h3>
          </div>
          <p className="text-gray-400 text-sm mb-8 font-medium italic">Sintomas que você sente, mas ninguém explica</p>
          <ul className="space-y-4 mb-8">
            {symptoms.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-500">
                  <span className="text-xl shrink-0">{item.emoji}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </li>
            ))}
          </ul>
          <div className="mt-auto pt-6 border-t border-white/5">
             <p className="text-brand-red font-bold text-sm italic">👉 Isso não é normal. É adaptação ao excesso.</p>
          </div>
        </ScrollReveal>

        {/* Depois */}
        <ScrollReveal delay={100} className="relative group h-full">
          <div className="absolute -inset-[1px] bg-brand-red/20 rounded-2xl blur-sm"></div>
          <div className="relative bg-[#0F0F0F] rounded-2xl p-8 border border-brand-red/30 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-8 text-brand-red">
               <CheckCircle size={20} />
               <h3 className="text-xs font-bold uppercase tracking-[0.2em]">✅ APÓS O PROTOCOLO</h3>
            </div>
            <p className="text-gray-300 text-sm mb-8 font-medium italic">Quando você remove o que irrita, o corpo responde</p>
            <ul className="space-y-4">
               {results.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white">
                    <span className="text-xl shrink-0">{item.emoji}</span>
                    <span className="text-sm font-semibold">{item.text}</span>
                  </li>
               ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal className="mt-16 text-center">
         <Button href="#offer">
            QUERO ESSA MUDANÇA
         </Button>
      </ScrollReveal>
    </Section>
  );
};