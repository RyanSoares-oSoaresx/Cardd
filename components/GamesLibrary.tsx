
import React, { useState, useEffect } from 'react';
import { Gamepad2, X, Trophy, Hourglass, PlayCircle, Star, Search, Ghost, Users, MessageSquare, RotateCcw, Tag, ChevronRight, Archive } from 'lucide-react';
import { GAMES_LIBRARY } from '../constants';
import { GameStatus } from '../types';

const GamesLibrary: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<GameStatus>('PLAYING');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const filteredGames = searchTerm
    ? GAMES_LIBRARY.filter(game => game.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : GAMES_LIBRARY.filter(game => game.status === activeTab);

  const tabs = [
    { id: 'PLAYING', label: 'Jogando', icon: PlayCircle, color: 'text-green-400', glow: 'shadow-[0_0_15px_rgba(74,222,128,0.2)]' },
    { id: 'COMPLETED', label: 'Zerados', icon: Trophy, color: 'text-yellow-400', glow: 'shadow-[0_0_15px_rgba(250,204,21,0.2)]' },
    { id: 'MULTIPLAYER', label: 'Party', icon: Users, color: 'text-cyan-400', glow: 'shadow-[0_0_15px_rgba(34,211,238,0.2)]' },
    { id: 'WISHLIST', label: 'Futuro', icon: Hourglass, color: 'text-purple-400', glow: 'shadow-[0_0_15px_rgba(192,132,252,0.2)]' },
    { id: 'DROPPED', label: 'Drops', icon: Ghost, color: 'text-red-400', glow: 'shadow-[0_0_15_rgba(248,113,113,0.2)]' },
  ];

  return (
    <>
      <div 
        className="group relative w-full bg-dark-card border border-white/10 rounded-2xl p-6 cursor-pointer overflow-hidden transition-all duration-500 hover:border-neon-pink/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]"
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-gradient-to-br from-gray-800 to-black rounded-xl border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
               <Archive className="w-8 h-8 text-neon-pink" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-display font-black text-white group-hover:text-neon-pink transition-colors uppercase tracking-widest">
                Arquivo de Games
              </h3>
              <p className="text-gray-400 text-xs md:text-sm font-medium flex items-center gap-2 mt-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                {GAMES_LIBRARY.length} Meus Reviews e Notas
              </p>
            </div>
          </div>
          <ChevronRight className="text-gray-600 group-hover:translate-x-1 group-hover:text-neon-pink transition-all" />
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 animate-fade-in">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setIsOpen(false)}></div>

          <div className="relative w-full max-w-7xl h-[95vh] md:h-[88vh] bg-[#0a0c14] border border-white/10 rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.9)] flex flex-col md:flex-row overflow-hidden animate-scale-in">
            
            <div className="w-full md:w-72 bg-black/40 border-b md:border-b-0 md:border-r border-white/5 p-6 flex flex-col shrink-0">
              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-neon-pink/20 rounded-lg">
                    <Gamepad2 className="text-neon-pink w-6 h-6" />
                  </div>
                  <span className="font-display font-black text-white tracking-widest text-xl italic">ARCHIVE</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="md:hidden text-gray-400 p-2"><X size={28}/></button>
              </div>

              <div className="mb-8 relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-neon-pink transition-colors" />
                <input 
                  type="text" 
                  placeholder="Pesquisar..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-sm text-gray-300 focus:outline-none focus:border-neon-pink/50 focus:bg-white/10 transition-all font-sans"
                />
              </div>

              <nav className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-y-auto pb-4 md:pb-0 scrollbar-hide">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id as GameStatus); setSearchTerm(''); }}
                    className={`
                      flex items-center gap-4 px-5 py-4 rounded-2xl text-xs font-black transition-all duration-300 whitespace-nowrap uppercase tracking-widest
                      ${activeTab === tab.id && !searchTerm 
                        ? `bg-white/10 text-white border border-white/10 ${tab.glow} translate-x-2` 
                        : 'text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent'}
                    `}
                  >
                    <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? tab.color : 'text-gray-700'}`} />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex-1 flex flex-col min-h-0 bg-[#0d0f17] relative">
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-8 right-8 z-20 hidden md:flex p-2.5 bg-dark-bg/50 hover:bg-red-500/20 text-gray-500 hover:text-red-500 rounded-xl border border-white/10 transition-all backdrop-blur-md"
              >
                <X size={20} />
              </button>

              <div className="px-8 md:px-12 pt-10 pb-6 border-b border-white/[0.03]">
                <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter italic">
                  {searchTerm ? 'Resultados' : tabs.find(t=>t.id===activeTab)?.label}
                </h2>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-12 h-1 bg-neon-pink rounded-full"></div>
                  <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Minhas Avaliações</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-12 pt-8 custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
                  {filteredGames.length > 0 ? filteredGames.map((game, idx) => (
                    <div 
                      key={idx} 
                      className="group flex flex-col bg-dark-card/30 border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-neon-pink/40 hover:-translate-y-2"
                    >
                      <div className="relative h-44 overflow-hidden shrink-0">
                        {game.coverImage ? (
                          <img src={game.coverImage} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700" alt={game.title} />
                        ) : (
                          <div className={`absolute inset-0 bg-gradient-to-br ${game.coverColor} opacity-20`}></div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-[#0d0f17]/60 to-transparent"></div>
                        
                        {game.rating && (
                          <div className="absolute top-4 right-5 bg-neon-pink text-[9px] font-black text-white px-3 py-1 rounded-full border border-white/20">
                            {game.rating.toUpperCase()}
                          </div>
                        )}
                        
                        {/* Notas no Header do Card */}
                        <div className="absolute bottom-4 left-6 flex flex-col gap-2 z-20">
                          {/* Minha Nota */}
                          <div className="flex flex-col">
                             <span className="text-[8px] font-black text-yellow-400 uppercase tracking-widest mb-1">Minha Nota</span>
                             <div className="flex gap-0.5">
                               {[1, 2, 3, 4, 5].map((s) => (
                                 <Star key={s} size={10} className={`${(game.stars ?? 0) >= s ? 'text-yellow-400 fill-yellow-400' : 'text-white/10'}`} />
                               ))}
                             </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-7 pb-8 -mt-2 relative z-10 flex flex-col gap-4">
                        <h4 className="text-xl font-display font-black text-white leading-tight">{game.title}</h4>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/5 rounded-xl w-fit">
                           <Tag size={12} className="text-neon-blue" />
                           <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{game.genre}</span>
                        </div>

                        {game.comment && (
                          <div className="relative bg-black/40 border border-white/5 rounded-2xl p-5 group-hover:bg-black/60 transition-colors">
                             <MessageSquare size={14} className="absolute right-4 top-4 text-white/5" />
                             <p className="text-[13px] text-gray-400 leading-relaxed font-sans italic">"{game.comment}"</p>
                          </div>
                        )}

                        {game.playAgain !== undefined && (
                          <div className="flex items-center justify-between pt-2 border-t border-white/5">
                             <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Rejogaria?</span>
                             <div className={`flex items-center gap-2 text-[10px] font-black uppercase ${game.playAgain ? 'text-green-400' : 'text-red-500'}`}>
                                <RotateCcw size={12} />
                                {game.playAgain ? 'SIM' : 'NÃO'}
                             </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )) : (
                    <div className="col-span-full py-20 flex flex-col items-center text-center opacity-30">
                       <Ghost size={64} className="mb-4" />
                       <p className="font-display font-bold text-xl uppercase tracking-widest">Nenhum registro encontrado</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GamesLibrary;
