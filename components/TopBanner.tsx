import React from 'react';

export const TopBanner: React.FC = () => {
  const today = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="w-full relative z-50 bg-brand-red h-[36px] flex items-center justify-center border-b border-white/10 overflow-hidden">
        <p className="text-white font-bold text-[10px] uppercase tracking-[0.15em] whitespace-nowrap px-4">
          Últimas vagas hoje — {today}
        </p>
    </div>
  );
};