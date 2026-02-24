import React from 'react';
import { Section } from './Section';
import { ScrollReveal } from './ScrollReveal';
import { Flame, Brain, Zap, Battery, ShieldCheck, Smile, Moon, Trash2, Ban, Activity, Lock, Shirt } from 'lucide-react';

const outcomes = [
  { icon: Flame, text: "Reduza medidas de forma natural sem contar calorias ou passar fome" },
  { icon: Brain, text: "Aumente seu foco e clareza mental ao eliminar irritantes modernos" },
  { icon: Zap, text: "Tenha energia constante o dia todo, sem picos de cansaço repentino" },
  { icon: Activity, text: "Coma comida de verdade e se sinta satisfeito com refeições simples" },
  { icon: Smile, text: "Recupere sua autoestima ao ver seu corpo desinflamando visivelmente" },
  { icon: ShieldCheck, text: "Reduza inflamações silenciosas e inchaços que tiram sua qualidade de vida" },
  { icon: Moon, text: "Durma melhor e acorde mais disposto, com um sono profundo e real" },
  { icon: Trash2, text: "Dê um reset no seu organismo, eliminando o excesso de toxinas" },
  { icon: Ban, text: "Diga adeus à compulsão por doces ao estabilizar sua química interna" },
  { icon: Lock, text: "Restaure seus ciclos naturais sem depender de soluções artificiais" },
  { icon: Battery, text: "Tenha disciplina e disposição automática com um plano fácil de manter" },
  { icon: Shirt, text: "Sinta suas roupas mais confortáveis e prazer ao se olhar no espelho" }
];

export const Outcomes: React.FC = () => {
  return (
    <Section className="py-20 bg-black">
      <ScrollReveal className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
          O que você vai conquistar em 30 dias com o <span className="text-brand-red">Protocolo Ancestral</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 px-4">
        {outcomes.map((item, i) => (
            <ScrollReveal key={i} delay={i * 30} className="flex flex-col items-start gap-4 p-5 bg-brand-card border border-white/5 rounded-2xl hover:border-brand-red/20 transition-all duration-300 h-full">
                 <div className="bg-brand-red/10 p-2 rounded-xl shrink-0">
                    <item.icon className="w-5 h-5 text-brand-red" />
                 </div>
                 <p className="text-gray-300 font-medium text-xs md:text-sm leading-relaxed">{item.text}</p>
            </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};