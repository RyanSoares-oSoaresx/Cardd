
import React, { useState } from 'react';
import { BATTLE_STATION_DATA } from '../constants';
import { MonitorPlay, CircuitBoard, Info, RefreshCw, ExternalLink } from 'lucide-react';

const SetupSection: React.FC = () => {
  // Estado para controlar a troca do monitor
  const [showSecondaryMonitor, setShowSecondaryMonitor] = useState(false);

  return (
    <section className="w-full py-12">
      <div className="flex items-center gap-4 mb-10 px-2 animate-fade-in">
        <div className="p-3 bg-neon-purple/10 rounded-xl border border-neon-purple/20">
            <MonitorPlay className="text-neon-purple w-8 h-8 md:w-10 md:h-10" />
        </div>
        <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wider">
            Área do <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Setup</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-medium mt-1 flex items-center gap-2">
                <CircuitBoard size={16} /> Especificações Técnicas & Equipamentos
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {BATTLE_STATION_DATA.map((category, idx) => (
          <div key={idx} className="group relative bg-dark-card rounded-2xl overflow-hidden border border-white/5 hover:border-neon-purple/30 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-purple/10 flex flex-col h-full">
            
            {/* Header do Card */}
            <div className="relative p-6 border-b border-white/5 bg-gradient-to-r from-white/5 to-transparent">
              <div className="absolute top-0 right-0 w-20 h-20 bg-neon-purple/20 blur-3xl rounded-full -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100"></div>
              <h3 className="relative font-display font-bold text-xl text-white tracking-wide z-10">
                {category.title}
              </h3>
              <div className="w-12 h-1 bg-neon-purple mt-2 rounded-full shadow-[0_0_10px_#a855f7]"></div>
            </div>

            {/* Lista de Items */}
            <div className="p-6 space-y-6 flex-grow bg-dark-card/50">
              {category.items.map((item, i) => {
                const Icon = item.icon!;
                
                // Lógica Específica para o Monitor (Toggle)
                const isMonitorToggle = item.component === "Monitor Principal";
                
                // Dados dinâmicos do monitor baseados no estado
                const displayComponent = isMonitorToggle 
                  ? (showSecondaryMonitor ? "Monitor Secundário" : "Monitor Principal")
                  : item.component;
                  
                const displayModel = isMonitorToggle
                  ? (showSecondaryMonitor ? "SuperFrame Horizon 21,8 75hz" : item.model)
                  : item.model;

                return (
                  <div key={i} className="flex items-start gap-4 relative group/item">
                    
                    {/* Estilo de fundo para o Monitor Toggle */}
                    {isMonitorToggle && (
                      <div className="absolute -inset-2 bg-neon-blue/5 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity border border-transparent group-hover/item:border-neon-blue/20 pointer-events-none"></div>
                    )}

                    {/* Ícone Lateral */}
                    <div 
                      onClick={isMonitorToggle ? () => setShowSecondaryMonitor(!showSecondaryMonitor) : undefined}
                      className={`mt-1 p-2.5 bg-dark-bg rounded-lg border border-white/5 transition-colors shadow-lg relative z-10 ${isMonitorToggle ? 'cursor-pointer hover:border-neon-blue/50 hover:bg-neon-blue/10' : 'group-hover/item:border-neon-purple/20'}`}
                    >
                      <Icon className={`w-5 h-5 text-gray-400 transition-colors ${isMonitorToggle ? 'text-neon-blue animate-pulse' : 'group-hover/item:text-neon-purple'}`} />
                    </div>
                    
                    <div className="flex flex-col flex-1 relative z-10">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-xs uppercase tracking-wider font-bold transition-colors ${isMonitorToggle && showSecondaryMonitor ? 'text-neon-blue' : 'text-gray-500'}`}>
                          {displayComponent}
                        </span>
                        
                        {/* Indicador de clique para o monitor */}
                        {isMonitorToggle && (
                          <RefreshCw className="w-3 h-3 text-neon-blue animate-spin-slow cursor-pointer" onClick={() => setShowSecondaryMonitor(!showSecondaryMonitor)} />
                        )}
                      </div>

                      <div className="flex items-center gap-2 justify-between">
                        <span 
                          onClick={isMonitorToggle ? () => setShowSecondaryMonitor(!showSecondaryMonitor) : undefined}
                          className={`text-base font-semibold leading-tight transition-all duration-300 ${isMonitorToggle ? 'text-white cursor-pointer hover:text-neon-blue' : 'text-gray-200 group-hover/item:text-white'}`}
                        >
                          {displayModel}
                        </span>
                        
                        {/* 🔘 BOTÃO DE INFORMAÇÃO E COMPRA (O RETORNO) */}
                        {(item.tooltip || item.buyUrl) && (
                          <div className="flex items-center gap-2">
                             {/* Tooltip Popup */}
                             <div className="group/tooltip relative inline-flex items-center">
                                <div className={`p-1.5 rounded-lg border transition-all duration-300 cursor-help ${item.buyUrl ? 'bg-neon-blue/10 border-neon-blue/30 text-neon-blue hover:bg-neon-blue hover:text-white' : 'bg-white/5 border-white/10 text-gray-500 hover:text-white'}`}>
                                  <Info size={14} />
                                </div>
                                
                                {/* Conteúdo do Tooltip */}
                                {item.tooltip && (
                                  <div className="absolute bottom-full right-0 mb-3 w-52 p-4 bg-black/95 border border-white/10 rounded-2xl text-[11px] text-gray-300 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 z-50 pointer-events-none transform translate-y-2 group-hover/tooltip:translate-y-0 font-sans leading-relaxed">
                                    <p className="mb-2 font-bold text-white uppercase tracking-widest text-[9px] flex items-center gap-2">
                                      <CircuitBoard size={10} className="text-neon-purple" /> Detalhes do Item
                                    </p>
                                    {item.tooltip}
                                    <div className="absolute top-full right-4 border-8 border-transparent border-t-black/95"></div>
                                  </div>
                                )}
                             </div>

                             {/* Link Externo se houver buyUrl */}
                             {item.buyUrl && (
                               <a 
                                 href={item.buyUrl} 
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 className="p-1.5 bg-neon-purple/10 border border-neon-purple/30 text-neon-purple rounded-lg hover:bg-neon-purple hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                                 title="Ver onde comprar"
                               >
                                 <ExternalLink size={14} />
                               </a>
                             )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Decorative Footer Line */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SetupSection;
