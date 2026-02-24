import React from 'react';
import { Section } from './Section';
import { ScrollReveal } from './ScrollReveal';
import { ShieldCheck, Zap, Brain, Quote, Microscope, Target } from 'lucide-react';

export const AncestralMethod: React.FC = () => {
  return (
    <Section className="py-20 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.05),transparent_70%)] -z-10 pointer-events-none"></div>

      <ScrollReveal className="text-center mb-16 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight uppercase">
          O que é o <span className="text-brand-red">Protocolo Ancestral?</span>
        </h2>
        <div className="space-y-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          <p>O Protocolo Ancestral é um método comprovado de reequilíbrio fisiológico, criado para remover o excesso moderno e devolver ao corpo as condições naturais de funcionamento.</p>
          <div className="flex flex-col items-center gap-2 text-white py-4 font-bold italic">
             <span>Não é dieta da moda.</span>
             <span>Não é detox milagroso.</span>
             <span>Não é promessa vazia.</span>
          </div>
          <p className="text-brand-red font-bold">É remoção estratégica + retorno ao essencial.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="max-w-4xl mx-auto mb-20">
         <div className="bg-brand-card border border-white/5 p-8 rounded-3xl text-center relative overflow-hidden">
            <Quote className="absolute top-4 left-4 text-brand-red/20 w-16 h-16 -rotate-12" />
            <blockquote className="text-xl md:text-3xl font-display italic text-white relative z-10">
               “O corpo moderno não está doente — está sobrecarregado.”
            </blockquote>
         </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
        <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
               <Microscope className="text-brand-red" />
               <h3 className="text-xl font-bold text-white uppercase tracking-wider">Como o método funciona</h3>
            </div>
            <ul className="space-y-6">
               {[
                 "Remove alimentos e estímulos inflamatórios invisíveis",
                 "Reduz sobrecarga metabólica e intestinal",
                 "Estabiliza energia, fome e sono",
                 "Diminui ansiedade e névoa mental",
                 "Facilita emagrecimento como consequência",
                 "Cria base sustentável, não efeito sanfona"
               ].map((text, i) => (
                 <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
                       <ShieldCheck size={12} className="text-brand-red" />
                    </div>
                    <span className="text-gray-300 font-medium">{text}</span>
                 </li>
               ))}
            </ul>
        </ScrollReveal>

        <ScrollReveal delay={100}>
            <div className="flex items-center gap-3 mb-8">
               <Brain className="text-brand-red" />
               <h3 className="text-xl font-bold text-white uppercase tracking-wider">A lógica por trás</h3>
            </div>
            <div className="space-y-6 text-gray-400 font-medium leading-relaxed">
               <p>O erro comum é adicionar soluções a um corpo cansado. O Protocolo faz o oposto:</p>
               <p className="text-white font-bold text-lg border-l-2 border-brand-red pl-4">👉 Remove primeiro.</p>
               <p>Quando o corpo sai do modo defesa, ele regula sozinho. Isso explica por que os resultados aparecem rápido, o foco volta e a energia se mantém.</p>
               <p className="text-brand-red italic font-bold">É fisiologia. Não força de vontade.</p>
            </div>
        </ScrollReveal>
      </div>

      <ScrollReveal className="mt-16 text-center max-w-3xl mx-auto px-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-wrap justify-center gap-4 text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em]">
                <span>Sem extremismo</span>
                <span className="text-brand-red">•</span>
                <span>Sem contagem de calorias</span>
                <span className="text-brand-red">•</span>
                <span>Sem depender de remédios</span>
          </div>
      </ScrollReveal>
    </Section>
  );
};