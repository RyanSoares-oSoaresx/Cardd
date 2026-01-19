import React from 'react';
import { Mail, Briefcase, Star, Sparkles } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-8 animate-fade-in relative mt-8">
      {/* Background Glow suave */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-transparent to-neon-blue/10 rounded-3xl blur-2xl pointer-events-none"></div>

      <div className="relative bg-gradient-to-br from-dark-card to-dark-bg border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-neon-purple/40 transition-all duration-500 shadow-2xl">
        
        {/* Elemento decorativo de fundo */}
        <Mail className="absolute -right-12 -bottom-12 w-64 h-64 text-white/[0.03] rotate-12 pointer-events-none transition-transform duration-700 group-hover:rotate-[20deg] group-hover:scale-110" />
        <div className="absolute top-0 right-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>

        {/* Texto e Conteúdo */}
        <div className="space-y-4 max-w-2xl relative z-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-neon-purple mb-2">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="font-display font-bold tracking-widest uppercase text-xs md:text-sm text-neon-blue">Trabalhos & Eventos</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
            Quer elevar o nível <br className="hidden md:block" />
            da sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Marca?</span>
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Estou disponível para parcerias, patrocínios, convites para eventos e ativações. 
            Vamos criar algo épico juntos para a comunidade!
          </p>
        </div>

        {/* Botão de Ação (CTA) */}
        <div className="relative z-10 w-full md:w-auto flex justify-center">
          <a 
            href="mailto:osoaresx@icloud.com?subject=Contato%20Profissional%20-%20Parceria/Evento" 
            className="group/btn relative flex items-center justify-center gap-3 bg-white text-dark-bg font-bold font-display px-8 py-5 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] w-full md:w-auto"
          >
            {/* Ícone Animado */}
            <div className="relative">
              <div className="absolute inset-0 bg-neon-purple rounded-full blur opacity-40 animate-ping"></div>
              <Briefcase className="w-5 h-5 relative z-10 text-dark-bg group-hover/btn:text-neon-purple transition-colors" />
            </div>
            
            <span className="text-lg tracking-wide group-hover/btn:text-neon-purple transition-colors">
              ENTRAR EM CONTATO
            </span>

            {/* Brilho no Hover do Botão */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover/btn:border-neon-purple/20 pointer-events-none"></div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;