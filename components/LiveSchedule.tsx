import React from 'react';
import { CalendarClock, Zap } from 'lucide-react';
import { SCHEDULE_TEXT } from '../constants';

const LiveSchedule: React.FC = () => {
  return (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-neon-pink rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
      <div className="relative h-full bg-dark-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-neon-purple/20 rounded-lg">
            <CalendarClock className="text-neon-purple w-6 h-6" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white">Agenda de Lives</h2>
        </div>
        
        <div className="flex-grow flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-semibold text-gray-200 leading-snug">
            {SCHEDULE_TEXT}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-neon-pink font-medium">
            <Zap size={16} />
            <span className="uppercase tracking-wider">Live ON</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSchedule;