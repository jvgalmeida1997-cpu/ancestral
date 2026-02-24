import React from 'react';
import { X, Zap, CheckCircle2 } from 'lucide-react';

interface UpgradePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpgradePopup: React.FC<UpgradePopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-300">
      <div className="relative w-full max-w-lg bg-[#0D0D0D] rounded-3xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in zoom-in duration-300">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-white transition-colors p-2 z-20"
        >
          <X size={20} />
        </button>

        <div className="p-8 pt-10">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 mb-4">
              <Zap size={12} className="text-brand-red" fill="currentColor" />
              <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest">Oportunidade</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Deseja adicionar o Método Completo?</h2>
            <p className="text-gray-500 text-sm font-medium">
              Por apenas <span className="text-white">R$ 8,00</span> a mais, você leva o guia de Jejum, Ciclo Circadiano e todos os bônus exclusivos.
            </p>
          </div>

          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-3 text-xs text-gray-400 bg-white/5 p-4 rounded-xl border border-white/5">
               <CheckCircle2 size={16} className="text-brand-red shrink-0" />
               <span className="font-medium text-gray-300">Acesso vitalício ao Bundle de Bônus</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400 bg-white/5 p-4 rounded-xl border border-white/5">
               <CheckCircle2 size={16} className="text-brand-red shrink-0" />
               <span className="font-medium text-gray-300">Manual de Jejum Ancestral + Ciclo Circadiano</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a 
              href="https://pay.lowify.com.br/checkout?product_id=bRm4T3&discount=UPGRADE_OFFER"
              className="w-full py-5 bg-brand-red text-white rounded-2xl text-center text-sm font-black shadow-lg shadow-brand-red/20 transition-all hover:brightness-110 active:scale-[0.98]"
            >
              SIM, QUERO O MÉTODO COMPLETO (R$ 17,90)
            </a>
            <a 
              href="https://pay.lowify.com.br/checkout?product_id=zDEBXY"
              className="w-full py-4 bg-transparent text-gray-600 hover:text-gray-400 rounded-2xl text-center text-[11px] font-bold uppercase tracking-widest transition-all"
            >
              Não, obrigado. Prefiro apenas o Básico (R$ 9,90)
            </a>
          </div>
          
          <p className="mt-8 text-center text-[9px] text-gray-700 font-bold uppercase tracking-[0.2em] border-t border-white/5 pt-6">
            🔒 Compra segura com garantia de 30 dias
          </p>
        </div>
      </div>
    </div>
  );
};