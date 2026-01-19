
import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface SpecItem {
  component: string;
  model: string;
  icon?: LucideIcon | React.ComponentType<any>; 
  tooltip?: string;
  buyUrl?: string;
}

export interface SetupCategory {
  title: string;
  items: SpecItem[];
}

export interface StreamerAttribute {
  subject: string;
  A: number;
  fullMark: number;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon | React.ComponentType<any>;
  color: string;
}

export type GameStatus = 'PLAYING' | 'COMPLETED' | 'WISHLIST' | 'DROPPED' | 'MULTIPLAYER';

export interface GameItem {
  title: string;           // Nome do Jogo
  stars?: number;          // SUA NOTA (0 a 5)
  comment?: string;        // SEU COMENTÁRIO/REVIEW
  genre: string;           // Gênero
  playAgain?: boolean;     // Rejogaria?
  status: GameStatus;      // Categoria (Aba)
  coverColor: string;      // Cor caso não tenha foto
  coverImage?: string;     // URL da foto da capa
  rating?: string;         // Badge extra (ex: "Platinado", "Lançamento")
}
