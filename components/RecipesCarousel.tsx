import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Utensils } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const recipes = [
  { id: 1, name: "Pratos Nutritivos", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Proteínas Nobres", img: "https://images.unsplash.com/photo-1558030006-4506719b7dcf?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Gorduras Boas", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Café da Manhã Real", img: "https://images.unsplash.com/photo-1525351484164-83fd1e8fa6f7?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "Lanches Práticos", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400" },
  { id: 6, name: "Ceia Saciante", img: "https://images.unsplash.com/photo-1485921325833-c519f76c4974?auto=format&fit=crop&q=80&w=400" },
];

export const RecipesCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8; 
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="py-20 relative overflow-hidden bg-black">
      <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
        <ScrollReveal>
           <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-red/10 text-brand-red mb-4">
               <Utensils size={20} />
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Receitas do Protocolo
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">Você vai aprender dezenas de combinações que saciam de verdade, utilizando alimentos densos em nutrientes que o seu corpo reconhece.</p>
        </ScrollReveal>
      </div>

      <div className="relative max-w-6xl mx-auto group">
        <button 
            onClick={() => scroll('left')} 
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/80 backdrop-blur-md p-3 rounded-full border border-white/10 text-white hover:bg-brand-red transition-all hidden md:flex"
        >
            <ChevronLeft size={20} />
        </button>
        <button 
            onClick={() => scroll('right')} 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/80 backdrop-blur-md p-3 rounded-full border border-white/10 text-white hover:bg-brand-red transition-all hidden md:flex"
        >
            <ChevronRight size={20} />
        </button>

        <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-6 scrollbar-hide scroll-smooth"
        >
            {recipes.map((recipe) => (
            <div key={recipe.id} className="snap-center shrink-0 w-[260px] md:w-80 group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/5 mb-3">
                <img 
                    loading="lazy"
                    src={recipe.img} 
                    alt={recipe.name} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <h3 className="absolute bottom-4 left-5 text-lg font-bold text-white tracking-tight">{recipe.name}</h3>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};