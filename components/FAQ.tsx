import React, { useState } from 'react';
import { Section } from './Section';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './ui/Button';
import { ChevronDown, HelpCircle } from 'lucide-react';

const questions = [
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "Muitas pessoas sentem diferença nos primeiros dias. Resultados variam conforme o nível de sobrecarga."
  },
  {
    question: "Vou passar fome?",
    answer: "Não. O foco é saciedade com comida real."
  },
  {
    question: "Preciso treinar?",
    answer: "Não é obrigatório para sentir os efeitos de desinflamação do protocolo alimentar."
  },
  {
    question: "Funciona mesmo se já tentei de tudo?",
    answer: "Sim, porque aqui o foco é remover a causa (a sobrecarga moderna), não empurrar uma solução paliativa."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="py-20 max-w-3xl px-4">
        <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wider">❓ PERGUNTAS FREQUENTES</h2>
            <p className="text-gray-500 text-sm font-medium">Tire suas últimas dúvidas antes de começar.</p>
        </ScrollReveal>

        <div className="space-y-4 mb-20">
            {questions.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 50}>
                    <div className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-white/5 border-white/20' : 'bg-transparent border-white/5 hover:border-brand-red/30'}`}>
                        <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left">
                            <span className={`text-sm md:text-base font-bold uppercase tracking-tight transition-colors ${openIndex === idx ? 'text-brand-red' : 'text-gray-300 group-hover:text-white'}`}>
                                {item.question}
                            </span>
                            <ChevronDown className={`text-gray-600 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-brand-red' : 'rotate-0'}`} size={20} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-6 pt-0 text-gray-400 text-sm md:text-base leading-relaxed font-medium border-t border-white/5">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>

        <ScrollReveal className="text-center border-t border-white/5 pt-16">
             <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center">
                   <HelpCircle size={16} className="text-brand-red" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-widest">⚠️ AVISO FINAL</h3>
             </div>
             <p className="text-gray-300 max-w-lg mx-auto text-base leading-relaxed font-semibold mb-10">
                Se você continuar normalizando cansaço, inchaço e mente travada, nada muda. Esse método existe para corrigir a base.
             </p>
             <div className="flex justify-center">
                <Button href="#offer">
                    🔴 QUERO COMEÇAR AGORA
                </Button>
             </div>
        </ScrollReveal>
    </Section>
  );
};