import React from 'react';
import { Section } from './Section';
import { ScrollReveal } from './ScrollReveal';
import { Target, ArrowDown } from 'lucide-react';

const painPoints = [
  { emoji: "😫", title: "Cansaço", text: "Você acorda cansada e passa o dia se arrastando." },
  { emoji: "🔥", title: "Inflamação", text: "Rosto inchado e dores articulares frequentes." },
  { emoji: "😰", title: "Ansiedade", text: "Mente acelerada e dificuldade para relaxar." },
  { emoji: "🚽", title: "Intestino", text: "Desconforto abdominal e idas irregulares." },
  { emoji: "☁️", title: "Foco", text: "Dificuldade de concentração e esquecimentos." },
];

export const TargetAudience: React.FC = () => {
  return (
    <Section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.05),transparent_70%)] -z-10 pointer-events-none"></div>

      <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Para quem é este Protocolo?
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Se você se identifica com <span className="text-white font-semibold">3 ou mais</span> sinais abaixo, seu corpo está pedindo socorro.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-6xl mx-auto px-2">
        {painPoints.map((item, idx) => (
          <ScrollReveal key={idx} delay={idx * 50} className="h-full">
            <div className="h-full bg-brand-card border border-white/5 rounded-2xl p-5 text-center flex flex-col items-center">
              <span className="text-3xl mb-3 block">{item.emoji}</span>
              <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
              <p className="text-gray-500 text-[11px] leading-snug font-medium">
                {item.text}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-12 text-center">
        <a href="#offer" className="inline-flex items-center gap-2 text-brand-red font-bold text-sm hover:underline">
          Quero resolver isso agora <ArrowDown size={14} />
        </a>
      </ScrollReveal>
    </Section>
  );
};