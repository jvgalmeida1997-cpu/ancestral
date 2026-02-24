import React from 'react';
import { Section } from './Section';
import { ScrollReveal } from './ScrollReveal';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { 
    name: "Carla Mendes", 
    image: "https://i.pravatar.cc/150?img=32",
    text: "Eu acordava cansada e dormia cansada. No 4º dia parecia que alguém tinha ligado minha energia." 
  },
  { 
    name: "Jéssica Pontes", 
    image: "https://i.pravatar.cc/150?img=44",
    text: "Meu intestino era um caos. Em 48h regulou como não acontecia há anos." 
  },
  { 
    name: "Leandro Silva", 
    image: "https://i.pravatar.cc/150?img=12",
    text: "Eu achava que tinha TDAH. Era minha alimentação me travando." 
  },
  { 
    name: "Amanda Ribeiro", 
    image: "https://i.pravatar.cc/150?img=25",
    text: "A primeira vez que parei de pensar em doce. Não era fraqueza." 
  },
  { 
    name: "Tatiane Lima", 
    image: "https://i.pravatar.cc/150?img=47",
    text: "Desinchei no rosto e no abdômen nos primeiros dias." 
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section className="py-12 relative overflow-hidden px-4">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.05),transparent_70%)] -z-10 pointer-events-none" />

       <ScrollReveal className="text-center mb-10 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white tracking-tight">
                O que dizem sobre o <span className="text-brand-red">Protocolo</span>
            </h2>
       </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, i) => (
          <ScrollReveal key={i} delay={i * 30} className="bg-brand-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
            <div>
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-brand-red fill-brand-red" />
                    ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium italic">
                    “{review.text}”
                </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img 
                    src={review.image} 
                    alt={review.name}
                    loading="lazy"
                    className="w-8 h-8 rounded-full object-cover border border-white/10"
                />
                <div>
                    <span className="font-bold text-white text-xs block">{review.name}</span>
                    <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Cliente Verificado</span>
                </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};