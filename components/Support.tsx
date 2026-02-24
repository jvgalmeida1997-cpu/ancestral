import React from 'react';
import { Section } from './Section';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './ui/Button';
import { MessageCircle } from 'lucide-react';

export const Support: React.FC = () => {
  return (
    <Section className="py-16 border-t border-white/5 bg-gradient-to-b from-transparent to-brand-red/5 px-4">
      <ScrollReveal className="text-center max-w-2xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Ainda ficou com alguma dúvida?
        </h2>
        
        <div className="space-y-2">
            <p className="text-gray-200 font-semibold text-base md:text-lg">Não compre com incerteza.</p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Fale agora com nosso suporte individualizado no WhatsApp e receba orientação clara antes de decidir.
            </p>
        </div>

        <div className="pt-4">
            <Button 
                href="https://api.whatsapp.com/message/6QUT7X54EZNCN1?autoload=1&app_absent=0" 
                className="w-full md:w-auto px-10 rounded-2xl border-white/10"
                variant="outline"
            >
                <MessageCircle className="w-5 h-5 shrink-0" /> Falar com suporte no WhatsApp
            </Button>
        </div>
      </ScrollReveal>
    </Section>
  );
};