import React from 'react';
import { Section } from './Section';
import { ScrollReveal } from './ScrollReveal';

export const NutritionalTable: React.FC = () => {
  return (
    <Section className="bg-brand-card/30 rounded-3xl my-10 border border-white/5 px-6 py-12">
      <ScrollReveal className="mb-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          O que o Protocolo Ancestral <span className="text-brand-red">entrega ao seu corpo</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">Fundamentos biológicos para uma saúde inabalável.</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <ScrollReveal delay={0} className="bg-black/40 border border-white/5 p-8 rounded-2xl hover:border-brand-red/10 transition-colors">
          <h3 className="text-lg font-bold text-brand-red mb-6">Nutrição Essencial</h3>
          <ul className="space-y-5 text-sm">
            <li className="pb-3 border-b border-white/5">
                <strong className="text-white block mb-1">Vitaminas Biodisponíveis</strong>
                <span className="text-gray-500 font-medium">Suporte para visão, pele e imunidade forte.</span>
            </li>
            <li className="pb-3 border-b border-white/5">
                <strong className="text-white block mb-1">Complexo B Natural</strong>
                <span className="text-gray-500 font-medium">Energia real, clareza mental e metabolismo ativo.</span>
            </li>
            <li className="pb-3 border-b border-white/5">
                <strong className="text-white block mb-1">Suporte Hormonal</strong>
                <span className="text-gray-500 font-medium">Nutrientes base para equilíbrio endócrino.</span>
            </li>
            <li className="pb-3">
                <strong className="text-white block mb-1">Saúde Metabólica</strong>
                <span className="text-gray-500 font-medium">Estabilização da insulina e queima de gordura.</span>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={100} className="bg-black/40 border border-white/5 p-8 rounded-2xl hover:border-brand-red/10 transition-colors">
          <h3 className="text-lg font-bold text-brand-red mb-6">Minerais e Eletrólitos</h3>
          <ul className="space-y-5 text-sm">
            <li className="pb-3 border-b border-white/5">
                <strong className="text-white block mb-1">Ferro e Zinco</strong>
                <span className="text-gray-500 font-medium">Vitalidade física e sistema imune protegido.</span>
            </li>
            <li className="pb-3 border-b border-white/5">
                <strong className="text-white block mb-1">Magnésio e Cálcio</strong>
                <span className="text-gray-500 font-medium">Relaxamento muscular e densidade óssea.</span>
            </li>
            <li className="pb-3 border-b border-white/5">
                <strong className="text-white block mb-1">Hidratação Celular</strong>
                <span className="text-gray-500 font-medium">Equilíbrio de sais para evitar retenção.</span>
            </li>
            <li className="pb-3">
                <strong className="text-white block mb-1">Recuperação</strong>
                <span className="text-gray-500 font-medium">Menos dores musculares e inflamações.</span>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={200} className="bg-black/40 border border-white/5 p-8 rounded-2xl hover:border-brand-red/10 transition-colors">
          <h3 className="text-lg font-bold text-brand-red mb-6">Vitalidade Ancestral</h3>
          <ul className="space-y-5 text-sm">
            <li className="pb-3 border-b border-white/5">
                <strong className="text-white block mb-1">Foco Inabalável</strong>
                <span className="text-gray-500 font-medium">Eliminação da névoa mental moderna.</span>
            </li>
            <li className="pb-3 border-b border-white/5">
                <strong className="text-white block mb-1">Digestão Leve</strong>
                <span className="text-gray-500 font-medium">Fim dos desconfortos e inchaços abdominais.</span>
            </li>
            <li className="pb-3 border-b border-white/5">
                <strong className="text-white block mb-1">Ritmo Biológico</strong>
                <span className="text-gray-500 font-medium">Sono profundo e despertar com energia.</span>
            </li>
            <li className="pb-3">
                <strong className="text-white block mb-1">Longevidade</strong>
                <span className="text-gray-500 font-medium">Estilo de vida sustentável e preventivo.</span>
            </li>
          </ul>
        </ScrollReveal>
      </div>
    </Section>
  );
};