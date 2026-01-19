import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-24 py-16 border-t border-white/10 bg-dark-bg/80 backdrop-blur-xl relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <h3 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Conecte-se Comigo
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-5xl">
          {SOCIAL_LINKS.map((social, idx) => {
            const Icon = social.icon;
            const isTwitch = social.name === 'Twitch';

            // Estilos específicos para a Twitch (Destaque) vs Outros
            const containerClasses = isTwitch 
              ? "w-24 h-24 md:w-32 md:h-32 bg-[#9146FF]/10 border-[#9146FF] shadow-[0_0_30px_rgba(145,70,255,0.4)] hover:bg-[#9146FF]/20 hover:shadow-[0_0_50px_rgba(145,70,255,0.6)] scale-110 md:scale-100 md:hover:scale-110 z-10"
              : "w-20 h-20 md:w-24 md:h-24 bg-dark-card border-white/10 hover:-translate-y-2 hover:scale-105 hover:bg-white/5";

            const iconSize = isTwitch 
              ? "w-10 h-10 md:w-14 md:h-14 text-[#9146FF] drop-shadow-[0_0_10px_rgba(145,70,255,0.8)]" 
              : "w-8 h-8 md:w-10 md:h-10";

            return (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group relative flex items-center justify-center 
                  rounded-2xl border 
                  transition-all duration-300 ease-out transform
                  ${containerClasses}
                  ${!isTwitch ? social.color : ''} 
                `}
                aria-label={social.name}
              >
                {/* Badge Exclusivo da Twitch */}
                {isTwitch && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#9146FF] text-white text-[10px] md:text-xs font-display font-bold px-3 py-1 rounded-full border border-white/20 shadow-[0_0_15px_#9146FF] flex items-center gap-1 whitespace-nowrap z-20">
                     <Zap size={12} fill="currentColor" /> PLATAFORMA PRINCIPAL
                  </div>
                )}

                <div className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                
                <Icon className={`${iconSize} transition-all duration-300 group-hover:scale-110 drop-shadow-lg ${isTwitch ? 'animate-pulse-slow' : ''}`} />
                
                {/* Tooltip simples (Reposicionado para Twitch) */}
                <span className={`absolute ${isTwitch ? '-bottom-12' : '-bottom-10'} opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-bold tracking-wider text-white bg-dark-bg border border-white/10 px-3 py-1 rounded-full pointer-events-none whitespace-nowrap shadow-xl transform translate-y-2 group-hover:translate-y-0 z-30`}>
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 w-full text-center">
          <p className="text-gray-500 text-sm md:text-base font-light">
            &copy; {new Date().getFullYear()} <span className="font-display font-bold text-white">Ryan Soares.</span> 
            <span className="mx-2 opacity-30">|</span> 
            Feito com 💜, código e café.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;