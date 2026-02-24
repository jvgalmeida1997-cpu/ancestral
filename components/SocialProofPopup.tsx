
import React, { useState, useEffect } from 'react';

const names = [
  "Jéssica", "Roberto", "Larissa", "Marcos", "Patrícia", "Ana Clara", "Rafael", 
  "Beatriz", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana", 
  "Lucas", "Mariana", "Otávio", "Camila", "Rodrigo", "Sabrina", "Thiago", 
  "Ursula", "Vinícius", "Amanda", "Bruno", "Carla", "Daniel", "Eliane", 
  "Felipe", "Gabriela", "Henrique", "Isabela", "João", "Karina", "Leonardo",
  "André", "Renata", "Paulo", "Vanessa", "Gustavo", "Letícia"
];

const phrases = [
  "entrou no Protocolo",
  "entrou na Comunidade"
];

export const SocialProofPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', phrase: '' });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const triggerNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      
      setData({ name: randomName, phrase: randomPhrase });
      
      setVisible(true);

      timeoutId = setTimeout(() => {
        setVisible(false);
        timeoutId = setTimeout(triggerNotification, 7000);
      }, 3000);
    };

    timeoutId = setTimeout(triggerNotification, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 transition-all duration-700 ease-out transform ${
        visible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-[#0A0A0A] border border-[#FF003C] rounded-lg px-4 py-2 shadow-[0_0_20px_rgba(255,0,60,0.4)] flex items-center gap-2.5 min-w-max">
        <div className="w-1.5 h-1.5 rounded-full bg-[#FF003C] animate-pulse shadow-[0_0_8px_#FF003C]"></div>
        <p className="text-[#EAEAEA] text-xs font-medium tracking-wide">
            <span className="font-bold text-white">{data.name}</span> {data.phrase}
        </p>
      </div>
    </div>
  );
};
