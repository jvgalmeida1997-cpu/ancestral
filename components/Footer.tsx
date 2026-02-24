import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <div className="mb-10">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Protocolo <span className="text-brand-red">Ancestral</span>
            </h3>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                Reconstruindo a Saúde Original
            </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
            {['Termos', 'Privacidade', 'Contato'].map((link, idx) => (
                <a 
                    key={idx} 
                    href="#" 
                    className="text-gray-500 hover:text-white text-xs font-semibold transition-colors duration-300"
                >
                    {link}
                </a>
            ))}
        </div>

        <div className="text-gray-600 text-[10px]">
          <p>© 2025 Protocolo Ancestral. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};