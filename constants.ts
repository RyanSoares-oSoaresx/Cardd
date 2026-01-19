
  import React from 'react';
  import { 
    Cpu, 
    CreditCard, 
    HardDrive, 
    Headphones, 
    Keyboard, 
    Mic, 
    Mouse, 
    Monitor, 
    Gamepad2,
    Youtube,
    Instagram,
    AtSign, 
    Camera,
    Laptop,
    Box 
  } from 'lucide-react';
  import { SetupCategory, StreamerAttribute, SocialLink, GameItem } from './types';

  // Ícones Customizados
  const DiscordIcon = (props: any) => React.createElement("svg", { ...props, viewBox: "0 0 127.14 96.36", fill: "currentColor" }, 
    React.createElement("path", { d: "M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22c2.36-24.44-5.42-48.18-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5.06-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" })
  );

  const KickIcon = (props: any) => React.createElement("svg", { ...props, viewBox: "0 0 24 24", fill: "currentColor" },
      React.createElement("path", { d: "M2,3v18h4.5v-6.5l4.5,6.5h5.5l-6-8l5.5-7h-5l-4.5,5.5v-5.5H2z" })
  );

  const XIcon = (props: any) => React.createElement("svg", { ...props, viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
  );

  const TwitchIcon = (props: any) => React.createElement("svg", { ...props, viewBox: "0 0 24 24", fill: "currentColor" },
      React.createElement("path", { d: "M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h2.998L22.286 11.57V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" })
  );

  const ThreadsIcon = AtSign;

  export const BIO_TEXT = "Fala, galera! Sou Ryan, brasileiro de 23 anos, dev, analista de suporte e tecnólogo em Segurança Cibernética. Quando não estou na TI, você me encontra jogando com a rapaziada! Decidi unir o útil ao agradável e comecei a fazer lives para compartilhar gameplay e boas risadas.";

  export const SCHEDULE_TEXT = "Mínimo 3x por semana (Segunda, Quarta e Sexta) às 20h. Sujeito a dias extras!";

  export const ATTRIBUTES_DATA: StreamerAttribute[] = [
    { subject: 'Mecânica', A: 95, fullMark: 100, description: 'Reflexo de Pro Player (ou quase)' },
    { subject: 'Noção de Jogo', A: 85, fullMark: 100, description: 'Leitura de jogo avançada' },
    { subject: 'Carisma', A: 99, fullMark: 100, description: 'Entretenimento garantido' },
    { subject: 'Sanidade', A: 20, fullMark: 100, description: 'Varia drasticamente na Ranked' }, 
    { subject: 'Sorte (RNG)', A: 10, fullMark: 100, description: 'O jogo me odeia' },
    { subject: 'Trab. Equipe', A: 80, fullMark: 100, description: 'Carrego ou afundo o time junto' },
  ];

  export const BATTLE_STATION_DATA: SetupCategory[] = [
    {
      title: "PC JOGOS (DESKTOP)",
      items: [
        { component: "Gabinete", model: "Superframe Onyx Mid Tower", icon: Box, tooltip: "Gabinete com excelente airflow e lateral em vidro temperado.", buyUrl: "https://www.mercadolivre.com.br/s/gabinete-superframe-onyx" },
        { component: "Processador", model: "Intel Core i9-14900K (14ª Ger)", icon: Cpu, tooltip: "O topo de linha da Intel para games e produtividade.", buyUrl: "https://www.amazon.com.br/s?k=i9-14900k" },
        { component: "Placa de Vídeo", model: "NVIDIA RTX 3060 Ti OC", icon: Monitor, tooltip: "Performance sólida para 1080p e 1440p com Ray Tracing.", buyUrl: "https://www.amazon.com.br/s?k=rtx+3060+ti" },
        { component: "Memória RAM", model: "32GB High-Speed", icon: CreditCard, tooltip: "Dual channel para máxima largura de banda em multitarefa.", buyUrl: "https://www.mercadolivre.com.br/s/memoria-ram-32gb-ddr5" },
        { component: "Armazenamento", model: "1TB NVMe Gen4 + 2TB HDD", icon: HardDrive, tooltip: "Velocidade de boot instantânea e muito espaço para clips.", buyUrl: "https://www.amazon.com.br/s?k=ssd+nvme+1tb+gen4" },
        { component: "Monitor Principal", model: "AOC Agon 24G42HE 200Hz", icon: Monitor, tooltip: "Fluidez absoluta para jogos competitivos.", buyUrl: "https://www.amazon.com.br/s?k=AOC+Agon+200Hz" },
      ]
    },
    {
      title: "NOTEBOOK STREAM",
      items: [
        { component: "Modelo", model: "Dell Inspiron 7000 Gaming", icon: Laptop, tooltip: "Máquina dedicada exclusivamente para o encoder da live.", buyUrl: "https://www.mercadolivre.com.br/s/dell+inspiron+7000+gaming" },
        { component: "Processador", model: "Intel Core i7-7700HQ", icon: Cpu },
        { component: "Placa de Vídeo", model: "NVIDIA GTX 1050 Ti (4GB)", icon: Monitor },
        { component: "Memória RAM", model: "16GB Dual Channel", icon: CreditCard },
        { component: "Armazenamento", model: "256GB SSD", icon: HardDrive },
      ]
    },
    {
      title: "Periféricos & Gear",
      items: [
        { component: "Headset", model: "Corsair Void Elite Pro Wireless", icon: Headphones, tooltip: "Som surround 7.1 e conforto para longas maratonas.", buyUrl: "https://www.amazon.com.br/s?k=Corsair+Void+Elite+Pro+Wireless" },
        { component: "Mouse Gamer", model: "Corsair Dark Core RGB", icon: Mouse, tooltip: "Sensor de 18.000 DPI e carregamento sem fio Qi.", buyUrl: "https://www.amazon.com.br/s?k=Corsair+Dark+Core+RGB" },
        { component: "Teclado Mecânico", model: "Corsair K70 MAX RGB", icon: Keyboard, tooltip: "Switches magnéticos ajustáveis para precisão milimétrica.", buyUrl: "https://www.amazon.com.br/s?k=Corsair+K70+MAX+RGB" },
        { component: "Microfone", model: "Fifine AM8 Dinâmico", icon: Mic, tooltip: "Qualidade de estúdio com conexão XLR e USB.", buyUrl: "https://www.mercadolivre.com.br/s/fifine-am8" },
        { component: "Controle", model: "DualSense Mystic Purple", icon: Gamepad2, tooltip: "Haptics avançados para jogos de aventura.", buyUrl: "https://www.amazon.com.br/s?k=DualSense+Mystic+Purple" },
        { component: "Webcam", model: "720p HD", icon: Camera, tooltip: "camera achada no lixo e funcionando", buyUrl: "https://www.google.com/search?q=macaco+mostrando+o+dedo+do+meio&tbm=isch" },
      ]
    }
  ];

  export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'Twitch', url: 'https://www.twitch.tv/otaldosoaresx', icon: TwitchIcon, color: 'hover:text-[#9146FF] hover:border-[#9146FF] hover:shadow-[0_0_20px_rgba(145,70,255,0.6)]' },
    { name: 'YouTube', url: 'https://www.youtube.com/@oSoaresx', icon: Youtube, color: 'hover:text-[#FF0000] hover:border-[#FF0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]' },
    { name: 'Kick', url: 'https://kick.com/osoaresx', icon: KickIcon, color: 'hover:text-[#53FC18] hover:border-[#53FC18] hover:shadow-[0_0_20px_rgba(83,252,24,0.6)]' },
    { name: 'Instagram', url: 'https://www.instagram.com/osoaresx_oficial/', icon: Instagram, color: 'hover:text-[#E1306C] hover:border-[#E1306C] hover:shadow-[0_0_20px_rgba(225,48,108,0.6)]' },
    { name: 'Discord', url: 'https://discord.com/invite/23vEUVMEnB', icon: DiscordIcon, color: 'hover:text-[#5865F2] hover:border-[#5865F2] hover:shadow-[0_0_20_rgba(88,101,242,0.6)]' },
    { name: 'Twitter (X)', url: 'https://x.com/oSoaresx_', icon: XIcon, color: 'hover:text-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]' },
    { name: 'Threads', url: 'https://www.threads.net/@osoaresx_oficial?igshid=NTc4MTIwNjQ2YQ%3D%3D', icon: ThreadsIcon, color: 'hover:text-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]' },
  ];

  export const GAMES_LIBRARY: GameItem[] = [
    
    // --- JOGANDO ATUALMENTE ---
    { 
      title: "Hytale", 
      status: "PLAYING", 
      genre: "RPG Sandbox", 
      stars: 5,
      comment: "O jogo que vai revolucionar o gênero. Expectativa a mil!",
      playAgain: true,
      coverColor: "from-green-500 to-cyan-700" 
    },

    // --- ZERADOS / PLATINAS ---
    { 
      title: "The Evil Within 2", 
      status: "COMPLETED", 
      genre: "Survival Horror", 
      stars: 5,
      comment: "Terror psicológico de altíssima qualidade. O mundo aberto funciona muito bem aqui.",
      playAgain: true,
      coverColor: "from-red-700 to-black",
      rating: "Zerado"
    },
    { 
      title: "Resident Evil 7: Biohazard", 
      status: "COMPLETED", 
      genre: "Survival Horror", 
      stars: 5,
      comment: "O retorno triunfante do terror na franquia. Imersão em primeira pessoa absurda.",
      playAgain: true,
      coverColor: "from-gray-900 to-green-900",
      rating: "Zerado"
    },
    { 
      title: "Resident Evil Village", 
      status: "COMPLETED", 
      genre: "Action Horror", 
      stars: 5,
      comment: "Mix perfeito de RE4 com RE7. Os cenários são obras de arte.",
      playAgain: true,
      coverColor: "from-blue-900 to-slate-900",
      rating: "Zerado"
    },
    { 
      title: "Outlast", 
      status: "COMPLETED", 
      genre: "Survival Horror", 
      stars: 5,
      comment: "O rei dos sustos. A atmosfera do hospício é inesquecível.",
      playAgain: true,
      coverColor: "from-green-950 to-black",
      rating: "Zerado"
    },
    { 
      title: "Outlast 2", 
      status: "COMPLETED", 
      genre: "Survival Horror", 
      stars: 4,
      comment: "Muito mais perturbador que o primeiro. A temática religiosa é pesada.",
      playAgain: true,
      coverColor: "from-red-950 to-black",
      rating: "Zerado"
    },
    { 
      title: "The Outlast Trials (Outlast 3)", 
      status: "COMPLETED", 
      genre: "Co-op Horror", 
      stars: 4,
      comment: "Diferente dos outros mas viciante. Jogar com amigos é sensacional.",
      playAgain: true,
      coverColor: "from-stone-800 to-emerald-900",
      rating: "Zerado"
    },
    { 
      title: "Amnesia: The Dark Descent", 
      status: "COMPLETED", 
      genre: "Survival Horror", 
      stars: 5,
      comment: "O jogo que definiu uma era de terror no YouTube. Clássico absoluto.",
      playAgain: true,
      coverColor: "from-amber-950 to-black",
      rating: "Zerado"
    },
    { 
      title: "Blair Witch", 
      status: "COMPLETED", 
      genre: "Psychological Horror", 
      stars: 4,
      comment: "Exploração na floresta muito bem feita. O Bullet (cachorro) é o melhor do jogo.",
      playAgain: false,
      coverColor: "from-emerald-950 to-black",
      rating: "Zerado"
    },
    { 
      title: "Terraria", 
      status: "COMPLETED", 
      genre: "Sandbox / RPG", 
      stars: 5,
      comment: "Zerei o Vanilla e o Calamity Mod. Conteúdo infinito e diversão garantida.",
      playAgain: true,
      coverColor: "from-sky-500 to-indigo-900",
      rating: "Calamity Mod"
    },
    { 
      title: "Resident Evil 4 Remake", 
      status: "COMPLETED", 
      genre: "Survival Horror", 
      stars: 5,
      comment: "Obra prima. Melhoraram o que já era perfeito no original.",
      playAgain: true,
      coverColor: "from-yellow-700 to-orange-900", 
      coverImage: "https://image.api.playstation.com/vulcan/ap/rnd/202210/0712/86V99XpAAL6OatdYm79NfCdf.png",
      rating: "GOTY"
    },
    { 
      title: "Minecraft", 
      status: "COMPLETED", 
      genre: "Sandbox", 
      stars: 5,
      comment: "Um clássico atemporal. Infinitas possibilidades.",
      playAgain: true,
      coverColor: "from-green-500 to-stone-800",
      coverImage: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/bcom/pt/games/switch/m/minecraft-switch/hero",
      rating: "Zerado"
    },

    // --- JOGADO COM AMIGOS (PARTY) ---
    { 
      title: "Pummel Party", 
      status: "MULTIPLAYER", 
      genre: "Party Game", 
      stars: 4,
      comment: "Destruidor de amizades profissional. Recomendo demais.",
      playAgain: true,
      coverColor: "from-pink-600 to-orange-600" 
    },
    { 
      title: "Sea of Thieves", 
      status: "MULTIPLAYER", 
      genre: "Pirate Adventure", 
      stars: 4,
      comment: "A melhor experiência de pirata, mas cansa se jogar sozinho.",
      playAgain: true,
      coverColor: "from-cyan-600 to-blue-900" 
    },
    { 
      title: "Repo", 
      status: "MULTIPLAYER", 
      genre: "Co-op Sci-fi", 
      stars: 4,
      comment: "Coletar sucata nunca foi tão perigoso e divertido.",
      playAgain: true,
      coverColor: "from-gray-700 to-blue-900" 
    },
    { 
      title: "Drive Beyond Horizons", 
      status: "MULTIPLAYER", 
      genre: "Driving Sim", 
      stars: 4,
      comment: "Estradas infinitas e muita resenha no rádio do carro.",
      playAgain: true,
      coverColor: "from-blue-400 to-orange-500" 
    },
    { 
      title: "Escape from Backrooms", 
      status: "MULTIPLAYER", 
      genre: "Co-op Horror", 
      stars: 5,
      comment: "Nível 0, 1, 2... a gente sempre se perde, mas os sustos valem a pena.",
      playAgain: true,
      coverColor: "from-yellow-200 to-yellow-600" 
    },
    { 
      title: "Lethal Company", 
      status: "MULTIPLAYER", 
      genre: "Co-op Horror", 
      stars: 5,
      comment: "O maior gerador de clipes engraçados da história das lives.",
      playAgain: true,
      coverColor: "from-orange-800 to-black" 
    },
    { 
      title: "Muck", 
      status: "MULTIPLAYER", 
      genre: "Survival Roguelike", 
      stars: 3,
      comment: "Caótico e estressante na medida certa. Muck!",
      playAgain: true,
      coverColor: "from-green-400 to-blue-500" 
    },
    { 
      title: "Ranch Simulator", 
      status: "MULTIPLAYER", 
      genre: "Simulation", 
      stars: 4,
      comment: "Trabalho braçal com os parças. Construir o rancho é pura terapia.",
      playAgain: true,
      coverColor: "from-amber-600 to-green-900" 
    },
    { 
      title: "RV There Yet", 
      status: "MULTIPLAYER", 
      genre: "Indie Survival", 
      stars: 4,
      comment: "Viagem de trailer com a galera. O caos no meio do nada é garantido.",
      playAgain: true,
      coverColor: "from-purple-800 to-indigo-900" 
    },

    // --- DROPS (ABANDONADOS) ---
    { 
      title: "Umamusume", 
      status: "DROPPED", 
      genre: "Gacha / RPG", 
      stars: 2,
      comment: "Visual incrível, mas o sistema de gacha é punitivo demais.",
      playAgain: false,
      coverColor: "from-pink-300 to-rose-500" 
    },
    { 
      title: "Devour", 
      status: "DROPPED", 
      genre: "Co-op Horror", 
      stars: 3,
      comment: "Divertido no começo, mas ficou muito repetitivo rápido.",
      playAgain: false,
      coverColor: "from-gray-900 to-red-900" 
    },
    { 
      title: "Resident Evil 5", 
      status: "DROPPED", 
      genre: "Action Horror", 
      stars: 2,
      comment: "Perdeu a essência do terror. Foco total em ação não me agradou.",
      playAgain: false,
      coverColor: "from-green-800 to-yellow-900" 
    },
    { 
      title: "GTA 5", 
      status: "DROPPED", 
      genre: "Open World", 
      stars: 4,
      comment: "Zerei a história, mas o Online ficou impossível de jogar em paz.",
      playAgain: false,
      coverColor: "from-green-600 to-black" 
    },
    { 
      title: "Dungeon Rampage", 
      status: "DROPPED", 
      genre: "Action RPG", 
      stars: 1,
      comment: "Saudades da época do Facebook, mas hoje em dia não sustenta.",
      playAgain: false,
      coverColor: "from-orange-700 to-black" 
    },

    // --- BACKLOG / DESEJOS ---
    { 
      title: "Resident Evil 9 (Requiem)", 
      status: "WISHLIST", 
      genre: "Horror", 
      stars: 0,
      coverColor: "from-gray-800 to-slate-900" 
    },
    { 
      title: "GTA VI", 
      status: "WISHLIST", 
      genre: "Open World", 
      stars: 0,
      coverColor: "from-purple-500 to-pink-600" 
    }
  ];
