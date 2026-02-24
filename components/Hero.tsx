import React, { useEffect } from 'react';
import { Button } from './ui/Button';
import { ScrollReveal } from './ScrollReveal';
import { ShieldCheck, Users, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  useEffect(() => {
    const sdkScriptId = "converteai-sdk";
    
    if (!document.getElementById(sdkScriptId)) {
      const s = document.createElement("script");
      s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
      s.async = true;
      s.id = sdkScriptId;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <header className="relative flex flex-col items-center text-center px-6 pt-12 pb-16 bg-black overflow-hidden">
      {/* Efeito visual de profundidade no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(225,29,72,0.12),transparent_70%)] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center w-full relative z-10">
        <ScrollReveal className="w-full flex flex-col items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 mb-2">
              <ShieldCheck size={14} className="text-brand-red" />
              <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest">Protocolo Ancestral</span>
            </div>
            
            <h1 className="font-display font-extrabold text-white leading-[1.2] text-3xl md:text-5xl lg:text-6xl text-balance">
              Se você vive <span className="text-brand-red">cansado</span>, inchado e sem foco... isso não é normal.
            </h1>
            
            <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
              Um método direto que remove irritantes modernos e devolve a vitalidade que você perdeu em apenas 7 dias.
            </p>
          </div>
        </ScrollReveal>

        {/* Player de Vídeo Vturb - Fora do ScrollReveal para garantir carregamento imediato */}
        <div className="w-full max-w-3xl mx-auto mt-12 relative group">
          <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(225,29,72,0.15)] bg-zinc-950">
            <div 
              id="ifr_699cf07c7d7b375b25f420ce_wrapper" 
              style={{margin: '0 auto', width: '100%'}}
              dangerouslySetInnerHTML={{
                __html: `
                  <div style="position: relative; padding: 56.25% 0 0 0;" id="ifr_699cf07c7d7b375b25f420ce_aspect">
                    <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_699cf07c7d7b375b25f420ce" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload="this.onload=null, this.src='https://scripts.converteai.net/a82bdf0f-1b19-4cc5-997f-9ed4060cd3bd/players/699cf07c7d7b375b25f420ce/v4/embed.html' + (location.search || '?') + '&vl=' + encodeURIComponent(location.href)"></iframe>
                  </div>
                `
              }}
            />
          </div>
          
          {/* Suporte visual e técnico para o usuário */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-brand-red/80 animate-pulse">
              <PlayCircle size={16} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Assista ao vídeo acima para começar</span>
            </div>
          </div>

          {/* Glow effect atrás do player */}
          <div className="absolute -inset-10 bg-brand-red/5 blur-[100px] -z-10 rounded-full opacity-30 pointer-events-none"></div>
        </div>

        <ScrollReveal className="w-full flex flex-col items-center">
          <div className="mt-12 flex flex-col items-center gap-6 w-full max-w-md">
            <Button href="#offer" className="w-full">
              QUERO COMEÇAR AGORA
            </Button>

            <div className="flex flex-col items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 20}`} className="w-8 h-8 rounded-full border-2 border-black" alt="Membro" />
                ))}
              </div>
              <p className="text-xs text-gray-500 font-medium flex items-center gap-2">
                <Users size={14} className="text-brand-red" />
                Mais de <span className="text-white font-bold">4.000 pessoas</span> já aplicaram
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </header>
  );
};