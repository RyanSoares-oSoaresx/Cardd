import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ATTRIBUTES_DATA } from '../constants';
import { Activity, BrainCircuit } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-dark-bg/95 border border-neon-purple p-4 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.3)] backdrop-blur-md z-50 max-w-[200px]">
        <p className="font-display font-bold text-neon-purple mb-1 text-lg">{label}</p>
        <div className="flex items-center gap-2 mb-2">
          <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-neon-blue rounded-full" style={{ width: `${data.A}%` }}></div>
          </div>
          <span className="text-white font-bold text-sm">{data.A}%</span>
        </div>
        <p className="text-gray-300 text-xs italic leading-relaxed">"{data.description}"</p>
      </div>
    );
  }
  return null;
};

const AttributesChart: React.FC = () => {
  const [data, setData] = useState(ATTRIBUTES_DATA);

  // Efeito para variar "Sanidade" e "Sorte (RNG)" dinamicamente
  useEffect(() => {
    const interval = setInterval(() => {
      setData(currentData => {
        return currentData.map(item => {
          // Lógica da Sanidade (Instável)
          if (item.subject === 'Sanidade') {
            const randomValue = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
            return { 
              ...item, 
              A: randomValue,
              description: `Estado Mental: ${randomValue > 40 ? 'Estável (por enquanto)' : 'CRÍTICO! TILT IMINENTE'}`
            };
          }
          
          // Lógica da Sorte (Caos total 0-99%)
          if (item.subject === 'Sorte (RNG)') {
            const randomValue = Math.floor(Math.random() * 100); // 0 a 99
            let desc = 'Aleatoriedade Pura';
            
            if (randomValue > 90) desc = 'GOD SEED ativada! (Drop Lendário)';
            else if (randomValue > 50) desc = 'RNG aceitável (50/50)';
            else if (randomValue > 10) desc = 'O jogo está roubando...';
            else desc = 'Azar Absoluto (Zicou tudo)';

            return {
              ...item,
              A: randomValue,
              description: desc
            };
          }

          return item;
        });
      });
    }, 1500); // Atualiza a cada 1.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group relative h-full">
      {/* Efeito de brilho de fundo no hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>

      <div className="h-full bg-dark-card p-6 rounded-2xl border border-white/10 flex flex-col relative overflow-hidden">
        {/* Decorative BG element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex items-center justify-between mb-2 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-neon-purple/20 to-neon-blue/10 rounded-lg border border-white/5">
              <BrainCircuit className="text-neon-purple w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-display font-bold text-white tracking-wide">
                Nível de Poder
              </h2>
              <p className="text-xs text-gray-500 font-mono">RYAN-01 // FICHA_TÉCNICA</p>
            </div>
          </div>
        </div>

        <div className="flex-grow w-full min-h-[200px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
              <defs>
                <linearGradient id="radarFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.4}/>
                </linearGradient>
              </defs>
              
              <PolarGrid gridType="polygon" stroke="#334155" strokeWidth={1} strokeDasharray="4 4" />
              
              <PolarAngleAxis 
                dataKey="subject" 
                tick={({ payload, x, y, textAnchor, stroke, radius }) => {
                  return (
                    <g className="recharts-layer recharts-polar-angle-axis-tick">
                      <text 
                        radius={radius} 
                        stroke={stroke} 
                        x={x} 
                        y={y} 
                        className="font-display font-bold text-[10px] md:text-xs fill-gray-300" 
                        textAnchor={textAnchor}
                      >
                        <tspan dy="0em">{payload.value}</tspan>
                      </text>
                    </g>
                  );
                }} 
              />
              
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              
              <Radar
                name="Atributos"
                dataKey="A"
                stroke="#a855f7"
                strokeWidth={2}
                fill="url(#radarFill)"
                fillOpacity={1}
                isAnimationActive={true}
                animationDuration={500}
              />
              <Tooltip content={<CustomTooltip />} cursor={false} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AttributesChart;