import React, { useState, useEffect } from 'react';
import { BIO_TEXT, SOCIAL_LINKS } from '../constants';
import { 
  Terminal, // Dev
  Shield, // Security
  Gamepad2, // Gamer
  Wrench, // Support/Tools
  Radio, // Live Signal
  WifiOff, // Offline
  Share2, // Share
  ChevronDown,
  ChevronUp,
  X, // Close
  Maximize2,
  ExternalLink
} from 'lucide-react';

// CERTIFIQUE-SE QUE A FOTO ESTÁ NA PASTA PUBLIC COM ESTE NOME
const PROFILE_PIC_URL = "/ryan-profile.png"; 

const BioHeader: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [streamStatus, setStreamStatus] = useState<'ONLINE' | 'OFFLINE'>('OFFLINE');

  // Lógica para verificar o status da live baseado nos horários (Seg, Qua, Sex às 20h)
  useEffect(() => {
    const checkSchedule = () => {
      const now = new Date();
      const day = now.getDay(); // 0=Dom, 1=Seg, 2=Ter, 3=Qua, 4=Qui, 5=Sex, 6=Sab
      const hour = now.getHours();

      // Live days: Segunda (1), Quarta (3), Sexta (5)
      // Live time: Considerado "ON" entre 20h e 23h
      const isLiveDay = [1, 3, 5].includes(day);
      const isLiveTime = hour >= 20 && hour < 23;

      if (isLiveDay && isLiveTime) {
        setStreamStatus('ONLINE');
      } else {
        setStreamStatus('OFFLINE');
      }
    };

    checkSchedule();
    // Verifica a cada minuto para atualizar caso o horário mude enquanto a página está aberta
    const interval = setInterval(checkSchedule, 60000);
    return () => clearInterval(interval);
  }, []);

  const roles = [
    { 
      label: "Developer", 
      icon: Terminal, 
      color: "text-neon-purple", 
      tooltip: "Desenvolvo soluções web e automações full-stack."
    },
    { 
      label: "CyberSec", 
      icon: Shield, 
      color: "text-neon-blue", 
      tooltip: "Especialista em segurança ofensiva e defesa de dados."
    },
    {
      label: "Suporte T.I.",
      icon: Wrench,
      color: "text-green-400",
      tooltip: "Analista de suporte técnico, hardware e infraestrutura."
    },
    { 
      label: "Gamer", 
      icon: Gamepad2, 
      color: "text-neon-pink", 
      tooltip: "Viciado em MMORPG competitivo e games de terror mundo aberto."
    }
  ];

  return (
    <section className="w-full py-12 px-4 flex flex-col items-center text-center space-y-8 animate-fade-in relative">
      
      {/* Área do Monograma / Foto de Perfil */}
      <div 
        className="relative mb-4 group cursor-pointer z-10"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Brilho de fundo pulsante */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
        
        {/* Círculo Principal - Fundo Preto para combinar com a foto de terno */}
        <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.15)] overflow-hidden z-10 transition-transform duration-700 ease-in-out transform group-hover:-translate-y-2 group-hover:scale-105">
          
          {/* Imagem de Fundo (Foto) - Visibilidade 100% por padrão */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-100"
            style={{ backgroundImage: `url(${PROFILE_PIC_URL})` }}
          ></div>
          
          {/* Overlay Escuro (Aparece apenas no hover para dar leitura ao R.S) */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Texto R.S (RETRO FONT - MANTIDO) */}
          <span className="relative z-10 font-display font-black text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-400 tracking-widest italic select-none drop-shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            R.S
          </span>
          
          {/* Ícone de Zoom no Hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
             <Maximize2 className="text-white drop-shadow-lg w-8 h-8 opacity-80 translate-y-8 group-hover:translate-y-12 transition-transform duration-500" />
          </div>

          {/* Brilho interno decorativo */}
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>

        {/* Indicador Online (Badge pequena na foto - visível apenas se Online) */}
        {streamStatus === 'ONLINE' && (
          <div className="absolute bottom-3 right-3 z-30 bg-[#4ade80] w-6 h-6 rounded-full border-2 border-dark-bg shadow-[0_0_15px_#4ade80] animate-pulse" title="Status: Online"></div>
        )}
      </div>
      
      {/* Modal de Visualização da Foto (Lightbox) */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Botão Fechar */}
          <button 
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10 z-50"
            onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
          >
            <X size={32} />
          </button>

          {/* Container da Imagem */}
          <div 
            className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.3)] border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()} 
          >
             <div className="relative flex-grow overflow-hidden bg-black flex items-center justify-center">
                <img 
                  src={PROFILE_PIC_URL} 
                  alt="Ryan Soares Profile" 
                  className="w-auto h-full max-h-[80vh] object-contain"
                />
             </div>
             
             {/* Legenda/Badge no Modal */}
             <div className="w-full bg-dark-card border-t border-white/10 p-8 text-center">
                <span className="font-bold text-xl md:text-2xl text-white tracking-widest block uppercase">Ryan Soares</span>
                <span className="text-neon-purple text-sm font-mono tracking-wide">FULL STACK DEVELOPER // STREAMER</span>
             </div>
          </div>
        </div>
      )}
      
      <div className="space-y-3">
        {/* Nome Principal de Streamer (RETRO FONT - MANTIDO) */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-white to-neon-blue drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] py-2">
          oTalDoSoaresx
        </h1>
        
        {/* Subtítulo / AKA */}
        <p className="text-gray-400 font-medium text-sm md:text-base tracking-widest uppercase opacity-80">
          // Conhecido como <span className="text-neon-pink font-bold hover:text-white transition-colors">oSoaresx</span>
        </p>
        
        {/* Tags com Tooltip */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium pt-4">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div key={index} className="group relative cursor-help flex items-center gap-2 px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <Icon size={22} className={role.color} />
                <span className="text-gray-300 group-hover:text-white transition-colors">{role.label}</span>
                
                {/* Separador (exceto no último) */}
                {index < roles.length - 1 && (
                  <span className="absolute -right-3 text-gray-700 pointer-events-none hidden md:block">|</span>
                )}

                {/* Tooltip Popup com Animação */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-56 bg-dark-card border border-neon-purple/30 text-gray-200 text-sm text-center p-4 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-[0_0_15px_rgba(168,85,247,0.2)] z-20 pointer-events-none font-sans">
                  {role.tooltip}
                  {/* Seta do tooltip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-dark-card"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Caixa de Bio */}
      <div className="max-w-3xl bg-dark-card/50 backdrop-blur-sm p-8 rounded-xl border border-white/5 shadow-lg relative overflow-hidden group hover:border-neon-purple/20 transition-colors duration-500">
         <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-purple to-neon-blue opacity-50 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#a855f7]"></div>
        <p className="text-gray-300 leading-relaxed font-normal text-base md:text-lg">
          "{BIO_TEXT}"
        </p>
      </div>

      {/* --- BOTÃO DE EXPANSÃO SOCIAL --- */}
      <div className="w-full flex flex-col items-center">
        <button
          onClick={() => setShowSocials(!showSocials)}
          className={`
            group relative flex items-center gap-3 px-8 py-3.5 rounded-full 
            border transition-all duration-300 outline-none
            ${showSocials 
              ? 'bg-neon-purple/20 border-neon-purple text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
              : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/30'}
          `}
        >
          <Share2 size={22} className={`${showSocials ? 'text-neon-purple' : 'text-gray-400'} group-hover:rotate-12 transition-transform duration-300`} />
          <span className="font-bold tracking-wider text-sm uppercase">
            {showSocials ? 'Ocultar Links' : 'Plataformas e Redes'}
          </span>
          {showSocials ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </button>

        {/* --- GRID DE LINKS (EXPANSÍVEL) --- */}
        <div 
          className={`
            w-full max-w-6xl overflow-hidden transition-all duration-500 ease-in-out
            ${showSocials ? 'max-h-[800px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'}
          `}
        >
          <div className="flex flex-wrap justify-center gap-5 p-2">
            {SOCIAL_LINKS.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group relative flex items-center gap-4 p-4 rounded-xl 
                    bg-dark-card border border-white/5 
                    hover:scale-[1.02] active:scale-95 transition-all duration-300
                    w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]
                    ${social.color}
                  `}
                >
                   {/* Ícone */}
                   <div className="p-3 bg-dark-bg rounded-lg group-hover:bg-white/10 transition-colors">
                     <Icon className="w-7 h-7 md:w-9 md:h-9 transition-transform group-hover:scale-110" />
                   </div>
                   
                   {/* Texto */}
                   <div className="flex flex-col text-left">
                     <span className="text-xs text-gray-500 font-mono leading-none mb-1.5 group-hover:text-gray-300">Seguir no</span>
                     <span className="text-base font-bold text-white group-hover:tracking-wide transition-all">{social.name}</span>
                   </div>

                   {/* Ícone Link Externo (Canto) */}
                   <ExternalLink size={16} className="absolute top-3 right-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- BOTÃO DE STATUS DA TRANSMISSÃO (Compacto) --- */}
      <div className="w-full flex justify-center mt-6">
        <div className={`
          relative flex items-center gap-3 px-8 py-3.5 rounded-full 
          border transition-all duration-500
          ${streamStatus === 'ONLINE' 
            ? 'bg-black/80 border-green-500/50 shadow-[0_0_20px_rgba(74,222,128,0.2)]' 
            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/30'}
        `}>
          
          {/* Fundo RGB Pulsante - Só aparece se ONLINE */}
          {streamStatus === 'ONLINE' && (
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 blur opacity-40 animate-pulse"></div>
          )}

          {/* Conteúdo do Botão */}
          <div className="relative z-10 flex items-center gap-3">
            {streamStatus === 'ONLINE' ? (
              <Radio size={22} className="text-green-400 animate-pulse" />
            ) : (
              <WifiOff size={22} />
            )}
            
            <span className={`font-bold tracking-wider text-sm uppercase ${streamStatus === 'ONLINE' ? 'text-white' : ''}`}>
              Status: {streamStatus}
            </span>

            {/* Bolinha Indicadora */}
            <span className={`w-2.5 h-2.5 rounded-full ${streamStatus === 'ONLINE' ? 'bg-green-500 animate-ping' : 'bg-red-500/30'}`}></span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default BioHeader;