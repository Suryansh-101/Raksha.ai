import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Map as MapIcon, 
  Phone, 
  MessageSquare, 
  Lock, 
  Zap, 
  Menu, 
  X, 
  Navigation, 
  Users, 
  Battery, 
  Wifi, 
  Mic, 
  Eye, 
  Siren, 
  PhoneCall, 
  PhoneOff,
  Calculator,
  FileText,
  ChevronRight,
  Send,
  CheckCircle,
  Info,
  Heart,
  Scale,
  LogOut,
  Ghost,
  Loader2
} from 'lucide-react';

// --- STYLES & ANIMATIONS ---
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
  
  body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #030014; color: #e2e8f0; overflow-x: hidden; }
  .font-mono { font-family: 'JetBrains Mono', monospace; }
  
  /* Glass Panel */
  .glass-panel {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .glass-panel:hover {
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(225, 29, 72, 0.1);
    transform: translateY(-2px);
  }

  /* Premium Card */
  .glass-card {
    background: rgba(10, 10, 26, 0.6);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.03);
    position: relative;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .glass-card::before {
    content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 2px;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    opacity: 0; transition: opacity 0.4s ease;
  }
  .glass-card:hover::before { opacity: 1; }

  /* Buttons */
  .glass-button {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .glass-button:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 25px rgba(225, 29, 72, 0.4);
    transform: translateY(-2px) scale(1.02);
  }

  /* Animations */
  .text-flow {
    background: linear-gradient(to right, #fff 20%, #f43f5e 30%, #d946ef 50%, #06b6d4 70%, #fff 80%);
    background-size: 200% auto;
    color: #000;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textFlow 3s linear infinite;
  }
  @keyframes textFlow { to { background-position: 200% center; } }

  .shimmer { position: relative; overflow: hidden; }
  .shimmer::after {
    content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0;
    background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%);
    transform: skewX(-20deg) translateX(-150%);
    animation: shimmer-anim 3s infinite cubic-bezier(0.4, 0, 0.2, 1);
  }
  @keyframes shimmer-anim {
    0% { transform: skewX(-20deg) translateX(-150%); }
    15% { transform: skewX(-20deg) translateX(150%); }
    100% { transform: skewX(-20deg) translateX(150%); }
  }

  .aurora-bg {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: 
      radial-gradient(circle at 15% 50%, rgba(76, 29, 149, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 85% 30%, rgba(225, 29, 72, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
    filter: blur(60px); z-index: -2;
    animation: aurora-move 15s ease-in-out infinite alternate;
  }
  @keyframes aurora-move { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }

  .starfield { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -3; perspective: 500px; overflow: hidden; background: #030014; }
  .star { position: absolute; width: 2px; height: 2px; background: #fff; border-radius: 50%; animation: warp-speed linear infinite; }
  @keyframes warp-speed { from { transform: translateZ(0) translateY(0); opacity: 1; } to { transform: translateZ(400px) translateY(100px); opacity: 0; } }

  @keyframes radar-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  .animate-radar { animation: radar-spin 6s linear infinite; }
  .animate-spin-slow { animation: radar-spin 12s linear infinite; }

  @keyframes scanline { 0% { transform: translateY(-100%); opacity: 0.8; } 100% { transform: translateY(100vh); opacity: 0.8; } }
  .scanline { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom, transparent 45%, rgba(6, 182, 212, 0.15) 50%, transparent 55%); background-size: 100% 4px; animation: scanline 4s linear infinite; pointer-events: none; z-index: 50; }

  @keyframes pulse-ring { 0% { transform: scale(0.8); opacity: 0.6; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); } 70% { transform: scale(2.2); opacity: 0; box-shadow: 0 0 0 20px rgba(16, 185, 129, 0); } 100% { transform: scale(2.2); opacity: 0; } }
  .pulse-ring::before { content: ''; position: absolute; left: 0; top: 0; right: 0; bottom: 0; border-radius: 50%; border: 1px solid currentColor; animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite; }

  @keyframes ticker { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
  .animate-ticker { animation: ticker 35s linear infinite; }

  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
  .animate-float { animation: float 6s ease-in-out infinite; }
  
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 2px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.4); }
`;

// --- TYPES ---
type User = { email: string; id: string };
type ViewState = 'home' | 'features' | 'community' | 'legal';

// --- MOCK DATA ---
const MOCK_MESSAGES = [
  { id: 1, user_id: 'system', content: 'Welcome to the secure Raksha network. All communications are end-to-end encrypted.', created_at: new Date().toISOString() },
  { id: 2, user_id: 'other', content: 'Verified incident at Sector 4. Avoid the main road.', created_at: new Date(Date.now() - 100000).toISOString() }
];

const FEATURES = [
  { id: 1, title: "SOS & Emergency", Icon: Siren, desc: "One-tap SOS, Shake-to-Alert, and 'Help Me' voice trigger.", color: "text-rose-500", bg: "bg-rose-500/10" },
  { id: 2, title: "Auto Evidence", Icon: Mic, desc: "Auto-records 30s audio on SOS trigger. Secure cloud upload.", color: "text-blue-400", bg: "bg-blue-400/10" }, 
  { id: 4, title: "Safe Zone Map", Icon: MapIcon, desc: "Crowdsourced heatmaps. Green for safe, Red for unsafe areas.", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { id: 5, title: "Trusted Circle", Icon: Users, desc: "Live 'Walk With Me' tracking & auto-arrival alerts.", color: "text-pink-400", bg: "bg-pink-400/10" },
  { id: 6, title: "Stealth Tools", Icon: Ghost, desc: "Fake Call generator & Calculator disguise icon.", color: "text-gray-400", bg: "bg-gray-400/10" },
  { id: 7, title: "Travel Safety", Icon: Navigation, desc: "Route deviation detection & cab warnings.", color: "text-orange-400", bg: "bg-orange-400/10" },
  { id: 9, title: "Legal & Police", Icon: Scale, desc: "One-tap helpline (112) & Legal AI chatbot.", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { id: 10, title: "Profile Security", Icon: Lock, desc: "Low-Battery Emergency Mode & Secure Pin.", color: "text-cyan-400", bg: "bg-cyan-400/10" },
];

// --- COMPONENTS ---

// 1. Starfield Effect
const Starfield = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.opacity = Math.random().toString();
        containerRef.current.appendChild(star);
      }
    }
  }, []);
  return <div ref={containerRef} className="starfield" />;
};

// 2. Boot Sequence
const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const bootLogs = [
      "Initializing Raksha Neural Core...",
      "Establishing Satellite Uplink (Starlink V2)...",
      "Encrypting Biometric Data Layer...",
      "Loading Predictive Threat Algorithms...",
      "System Optimal. Access Granted."
    ];
    let i = 0;
    const timer = setInterval(() => {
      if (i < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[i]]);
        setProgress(prev => prev + (100 / bootLogs.length));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(onComplete, 800);
      }
    }, 300);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#030014] z-[100] flex flex-col items-center justify-center font-mono text-cyan-400 p-8">
      <div className="w-full max-w-md space-y-4 relative">
        <div className="absolute -top-12 left-0 text-[10px] text-slate-500 font-mono tracking-widest uppercase">Secure Boot // ID: 884-XJ-ALPHA</div>
        <div className="flex justify-between items-end border-b border-cyan-900/50 pb-3 mb-6">
          <span className="text-3xl font-black tracking-widest text-white">RAKSHA.OS</span>
          <span className="text-xs animate-pulse text-rose-500 font-bold">V5.1.0 ULTIMATE</span>
        </div>
        <div className="h-64 overflow-hidden space-y-3 text-sm">
          {logs.map((log, i) => (
            <div key={i} className="flex gap-3 font-mono text-xs items-center">
              <span className="text-slate-600">[{new Date().toLocaleTimeString()}]</span>
              <span className="animate-fade-in text-cyan-400 flex items-center gap-2">
                <span className="w-1 h-1 bg-cyan-400 rounded-full"></span> {log}
              </span>
            </div>
          ))}
        </div>
        <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-white/10"></div>
            <div className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-rose-500 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.8)]" style={{width: `${progress}%`}}></div>
        </div>
      </div>
    </div>
  );
};

// 3. Auth Screen (Simulated)
const AuthScreen = ({ onAuth }: { onAuth: (u: User) => void }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      onAuth({ email: email || 'demo@raksha.ai', id: 'user_123' });
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen z-50 relative p-4">
      <div className="glass-card p-10 rounded-[2.5rem] w-full max-w-md border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-500 to-purple-700 shadow-xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Welcome Back</h2>
            <p className="text-slate-400 text-sm font-light">Secure Access Portal V5.1</p>
          </div>
          <form onSubmit={handleAuth} className="space-y-5">
            <input
              type="email"
              placeholder="Email Identity"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-mono text-sm"
            />
            <input
              type="password"
              placeholder="Access Key"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-mono text-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="shimmer w-full bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-rose-600/20 active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider text-sm mt-4 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Authenticate'}
            </button>
          </form>
          <div className="mt-8 text-center text-xs font-mono text-cyan-400">
             SYSTEM STATUS: OPERATIONAL
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. HUD Components
const StatusHUD = ({ user }: { user: User }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden lg:flex fixed top-6 right-8 gap-6 z-40 font-mono text-[10px] tracking-[0.2em] text-cyan-200/70 glass-panel px-8 py-3 rounded-full uppercase transition-all hover:bg-white/5 border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
        <span className="text-emerald-400 font-bold">ONLINE</span>
      </div>
      <div className="w-px h-3 bg-white/10"></div>
      <div className="flex items-center gap-2">
        <Users className="w-3 h-3 text-cyan-400" />
        <span className="max-w-[100px] truncate">{user.email.split('@')[0]}</span>
      </div>
      <div className="w-px h-3 bg-white/10"></div>
      <div className="flex items-center gap-2">
        <Battery className="w-3 h-3 text-cyan-400" />
        <span>85%</span>
      </div>
      <div className="w-px h-3 bg-white/10"></div>
      <span className="text-white font-bold">{time}</span>
    </div>
  );
};

const LiveTicker = () => (
  <div className="fixed bottom-0 left-0 w-full bg-[#030014]/95 backdrop-blur-xl border-t border-cyan-500/20 z-40 overflow-hidden py-3 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
    <div className="flex animate-ticker whitespace-nowrap gap-24 text-xs font-mono font-bold tracking-widest uppercase">
      <span className="text-rose-400 flex items-center gap-3 drop-shadow-[0_0_5px_rgba(251,113,133,0.5)]"><AlertTriangle className="w-3.5 h-3.5" /> ALERT: Anomaly Detected in Sector 7</span>
      <span className="text-emerald-400 flex items-center gap-3 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]"><CheckCircle className="w-3.5 h-3.5" /> VERIFIED: Safe Zone Established at City Center</span>
      <span className="text-cyan-400 flex items-center gap-3 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"><Info className="w-3.5 h-3.5" /> INTEL: Drone Surveillance Active in North District</span>
      <span className="text-emerald-400 flex items-center gap-3 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]"><CheckCircle className="w-3.5 h-3.5" /> SYSTEM: Neural Network Update V5.2 Complete</span>
    </div>
  </div>
);

// 5. SOS Button
const SOSButton = ({ userId }: { userId: string }) => {
  const [active, setActive] = useState(false);
  const [countdown, setCountdown] = useState(3);
  
  const handleSOS = () => {
    if (active) { setActive(false); setCountdown(3); return; }
    setActive(true);
    let timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) { clearInterval(timer); return 0; }
        return prev - 1;
      });
    }, 1000);
  };
  
  return (
    <div className="flex flex-col items-center justify-center py-6 relative">
      {active && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-60 h-60 border border-rose-500/30 rounded-full animate-ping" style={{animationDuration: '2s'}}></div>
          <div className="w-80 h-80 border border-rose-500/10 rounded-full animate-ping" style={{animationDuration: '2s', animationDelay: '0.5s'}}></div>
        </div>
      )}

      <button onClick={handleSOS} className={`relative z-10 w-44 h-44 md:w-52 md:h-52 rounded-full flex items-center justify-center transition-all duration-500 ${active ? 'bg-rose-600 scale-110 shadow-[0_0_120px_rgba(225,29,72,0.6)]' : 'bg-gradient-to-br from-rose-600 to-rose-900 hover:scale-105 hover:shadow-[0_0_80px_rgba(225,29,72,0.4)]'} group overflow-hidden border-4 border-white/5`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute inset-0 rounded-full border-4 border-white/10 animate-[spin_10s_linear_infinite] border-t-white/40"></div>
        <div className="absolute inset-4 rounded-full border border-white/20"></div>
        
        <div className="flex flex-col items-center text-white z-20">
          <Siren className={`w-14 h-14 mb-2 transition-transform ${active ? 'animate-bounce' : 'group-hover:rotate-12'}`} />
          <span className="text-3xl font-black tracking-[0.2em] font-mono">SOS</span>
          {active && <span className="text-[10px] font-bold mt-2 bg-black/60 px-4 py-1 rounded-full backdrop-blur-md border border-red-400/50 font-mono tracking-widest uppercase animate-pulse">{countdown > 0 ? `SENDING ${countdown}s` : 'TRANSMITTING'}</span>}
        </div>
      </button>
      <p className="mt-12 text-slate-500 text-center max-w-[200px] text-[10px] font-bold opacity-60 tracking-[0.2em] uppercase">Press & Hold for Emergency</p>
    </div>
  );
};

// 6. Fake Call
const FakeCallInterface = ({ onClose }: { onClose: () => void }) => {
  const [status, setStatus] = useState('incoming');

  useEffect(() => {
    if (status === 'connected') {
      const msg = new SpeechSynthesisUtterance("Hello? Where are you? Are you safe? I am waiting for you.");
      msg.rate = 1; msg.pitch = 1.1;
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(v => v.name.includes('Female') || v.lang === 'en-US');
      if (femaleVoice) msg.voice = femaleVoice;
      window.speechSynthesis.speak(msg);
    } else {
      window.speechSynthesis.cancel();
    }
    return () => window.speechSynthesis.cancel();
  }, [status]);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-between py-12 text-white animate-in fade-in duration-500">
      {status === 'incoming' ? (
        <>
          <div className="flex flex-col items-center mt-20 animate-float">
            <div className="w-32 h-32 bg-gradient-to-b from-slate-200 to-slate-400 rounded-full flex items-center justify-center mb-8 shadow-2xl overflow-hidden ring-4 ring-white/10">
              <Users className="w-16 h-16 text-slate-600" />
            </div>
            <h2 className="text-5xl font-light tracking-tight mb-2">Mom</h2>
            <p className="text-xl opacity-60">Mobile</p>
          </div>
          <div className="w-full px-12 mb-20 flex justify-between items-center max-w-md">
            <button onClick={onClose} className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(244,63,94,0.4)]">
                <PhoneOff className="w-8 h-8 fill-current" />
              </div>
              <span className="text-sm font-medium opacity-80">Decline</span>
            </button>
            <button onClick={() => setStatus('connected')} className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(16,185,129,0.4)] animate-bounce">
                <PhoneCall className="w-8 h-8 fill-current" />
              </div>
              <span className="text-sm font-medium opacity-80">Accept</span>
            </button>
          </div>
        </>
      ) : (
        <>
           <div className="flex flex-col items-center mt-20">
               <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-6"><Users className="w-10 h-10 text-white" /></div>
               <h2 className="text-4xl font-medium">Mom</h2>
               <p className="text-xl mt-4 text-emerald-400 font-mono">00:12</p>
           </div>
           <div className="mb-20 grid grid-cols-3 gap-8">
               {[1,2,3,4,5,6].map(i => <div key={i} className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm border border-white/5"><div className="w-2 h-2 bg-white rounded-full"></div></div>)}
           </div>
           <div className="mb-20">
               <button onClick={onClose} className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center mx-auto hover:bg-rose-600 shadow-[0_0_40px_rgba(244,63,94,0.4)]"><PhoneOff className="w-10 h-10 fill-current" /></button>
           </div>
        </>
      )}
    </div>
  );
};

// 7. Chat Interface (Simulated)
const ChatInterface = ({ userId }: { userId: string }) => {
  const [messages, setMessages] = useState<any[]>(MOCK_MESSAGES);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now(), user_id: userId, content: input, created_at: new Date().toISOString() };
    setMessages(prev => [...prev, newMsg]);
    setInput('');
    // Auto-reply
    setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now() + 1, user_id: 'system', content: 'Support request received. An agent will join shortly.', created_at: new Date().toISOString() }]);
    }, 1000);
  };

  return (
    <div className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-[700px] border border-white/10 shadow-2xl relative">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent pointer-events-none"></div>
      <div className="p-8 border-b border-white/5 bg-black/20 flex items-center gap-6 backdrop-blur-xl">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
          <Scale className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-white tracking-wide text-xl">Community Secure Chat</h3>
          <div className="flex items-center gap-2 mt-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span><span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase">System Online</span></div>
        </div>
      </div>
      <div className="flex-1 p-8 overflow-y-auto space-y-6">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.user_id === userId ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-6 rounded-3xl text-sm leading-relaxed shadow-lg ${msg.user_id === userId ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-tr-sm' : 'bg-[#0f0f22] text-slate-200 rounded-tl-sm border border-white/10'}`}>
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-6 bg-black/40 border-t border-white/5 backdrop-blur-xl">
        <div className="flex gap-4">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-rose-500/50 transition-colors font-medium placeholder:text-slate-600 focus:bg-white/10" onKeyPress={(e) => e.key === 'Enter' && handleSend()} />
          <button onClick={handleSend} className="bg-rose-600 hover:bg-rose-700 text-white p-4 rounded-2xl transition-all shadow-lg shadow-rose-600/20 hover:scale-105 active:scale-95"><Send className="w-6 h-6" /></button>
        </div>
      </div>
    </div>
  );
};

// 8. Advanced Map
const AdvancedMap = () => {
  const [activeLayers, setActiveLayers] = useState({ heatmap: true, police: true, cctv: false, safeHavens: false });
  const [selectedZone, setSelectedZone] = useState<any>(null);
  const [showSatellite, setShowSatellite] = useState(false);

  const toggleLayer = (layer: keyof typeof activeLayers) => setActiveLayers(prev => ({ ...prev, [layer]: !prev[layer] }));

  return (
    <div className="flex flex-col lg:flex-row gap-10 h-[650px] lg:h-[800px] relative w-full">
      <div className="flex-1 glass-card rounded-[2.5rem] overflow-hidden relative group border border-white/10 shadow-2xl">
        {showSatellite ? (
            <div className="absolute inset-0 z-20 bg-black animate-in fade-in">
                <iframe 
                width="100%" height="100%" frameBorder="0" scrolling="no" 
                src="https://maps.google.com/maps?q=20.5937,78.9629&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                style={{ filter: 'grayscale(20%) contrast(1.2) brightness(0.8)' }}
                className="w-full h-full"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/80 via-transparent to-[#030014]/80 pointer-events-none"></div>
            </div>
        ) : (
            <>
                <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-cyan-500/10 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-radar origin-center"></div>
                </div>

                <div className="absolute inset-0 bg-[#050510] opacity-90">
                    <div className="grid grid-cols-12 grid-rows-12 h-full w-full opacity-10">
                    {[...Array(144)].map((_, i) => <div key={i} className="border border-slate-600/30"></div>)}
                    </div>
                    {activeLayers.heatmap && (
                    <>
                        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    </>
                    )}
                    <div className="absolute top-[35%] left-[28%] cursor-pointer group/marker z-30" onClick={() => setSelectedZone({ name: 'Sector 5 Park', risk: 'Low', lighting: 'Excellent', police: '2 min away', score: 92 })}>
                    <div className="pulse-ring w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center relative border border-emerald-500">
                        <Shield className="w-5 h-5 text-emerald-400" />
                    </div>
                    </div>
                    <div className="absolute bottom-[30%] right-[35%] cursor-pointer group/marker z-30" onClick={() => setSelectedZone({ name: 'Old Market Road', risk: 'High', lighting: 'Poor', police: '15 min away', score: 45 })}>
                    <div className="pulse-ring w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center relative border border-rose-500">
                        <AlertTriangle className="w-5 h-5 text-rose-500" />
                    </div>
                    </div>
                </div>
            </>
        )}
        <div className="absolute top-8 left-8 flex flex-col gap-2 z-40">
            <button onClick={() => setShowSatellite(!showSatellite)} className={`glass-panel px-5 py-2.5 rounded-xl flex items-center gap-3 text-xs font-bold text-white shadow-xl border-cyan-500/30 backdrop-blur-md transition-colors active:scale-95 group ${showSatellite ? 'bg-rose-500/20 border-rose-500/50 hover:bg-rose-500/30' : 'hover:bg-white/10'}`}>
                <span className={`w-2 h-2 rounded-full ${showSatellite ? 'bg-rose-500' : 'bg-cyan-400'} animate-pulse shadow-[0_0_10px_currentColor]`}></span> 
                {showSatellite ? "CLOSE SATELLITE FEED" : "OPEN LIVE SATELLITE FEED"} 
            </button>
        </div>
      </div>

      <div className="lg:w-[450px] glass-card rounded-[2.5rem] flex flex-col h-full border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>
        <div className="p-10 border-b border-white/10 bg-black/20">
            <h3 className="text-2xl font-bold text-white flex items-center gap-4 tracking-wide">
                <MapIcon className="w-7 h-7 text-cyan-400" /> COMMAND CENTER
            </h3>
            <p className="text-[10px] text-slate-400 mt-2 font-mono tracking-[0.2em] uppercase">Global Data Stream: Active</p>
        </div>
        <div className="p-10 flex-1 overflow-y-auto space-y-10">
            <div>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-5">Visual Filters</h4>
                <div className="grid grid-cols-2 gap-4">
                    {['heatmap', 'police', 'cctv', 'safeHavens'].map(layer => (
                        <button key={layer} onClick={() => toggleLayer(layer as any)} className={`p-5 rounded-2xl border text-xs font-bold uppercase transition-all flex items-center gap-3 ${activeLayers[layer as keyof typeof activeLayers] ? 'bg-cyan-900/30 border-cyan-500 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]' : 'bg-white/5 border-white/5 text-slate-500 hover:bg-white/10'}`}>
                            <div className={`w-2 h-2 rounded-full ${activeLayers[layer as keyof typeof activeLayers] ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`}></div> {layer}
                        </button>
                    ))}
                </div>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/50 to-black/50">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Zone Analytics</h4>
                {selectedZone ? (
                    <div className="space-y-6 animate-in fade-in">
                        <div className="flex justify-between items-center border-b border-white/10 pb-5">
                            <span className="text-2xl font-bold text-white tracking-tight">{selectedZone.name}</span>
                            <div className="flex flex-col items-end">
                                <span className={`text-4xl font-black ${selectedZone.score > 80 ? 'text-emerald-400' : 'text-rose-500'}`}>{selectedZone.score}</span>
                                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Safety Index</span>
                            </div>
                        </div>
                        <div className="space-y-4 text-xs font-mono tracking-wide">
                            <div className="flex justify-between text-slate-400 items-center"><span>RISK LEVEL</span><span className={`px-3 py-1 rounded-full ${selectedZone.risk === 'Low' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>{selectedZone.risk}</span></div>
                            <div className="flex justify-between text-slate-400"><span>LIGHTING</span><span className="text-yellow-400">{selectedZone.lighting}</span></div>
                            <div className="flex justify-between text-slate-400"><span>PATROL ETA</span><span className="text-cyan-400">{selectedZone.police}</span></div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-12 text-slate-600 text-xs font-mono tracking-wide">
                        <div className="w-16 h-16 border border-dashed border-slate-700 rounded-full mx-auto mb-5 flex items-center justify-center animate-spin-slow"><MapIcon className="w-6 h-6" /></div>
                        SELECT A ZONE FOR INTEL
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [view, setView] = useState<ViewState>('home');
  const [booted, setBooted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFakeCall, setShowFakeCall] = useState(false);

  // Inject styles
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = GLOBAL_STYLES;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  // Handle Boot
  if (!booted) return <BootSequence onComplete={() => setBooted(true)} />;

  // Handle Auth
  if (!user) return <AuthScreen onAuth={setUser} />;

  const navLinks = [
    { id: 'home', label: 'Command' }, 
    { id: 'features', label: 'Protocol' }, 
    { id: 'community', label: 'Global Map' },
    { id: 'legal', label: 'Legal Chat' }
  ];

  return (
    <div className="min-h-screen relative z-10 w-full flex flex-col pb-12 selection:bg-cyan-500/30 selection:text-white">
        {/* DYNAMIC BACKGROUND SYSTEM */}
        <div className="aurora-bg"></div>
        <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0 mix-blend-overlay"></div>
        <div className="scanline"></div>
        
        <Starfield />
        <StatusHUD user={user} />
        
        {showFakeCall && <FakeCallInterface onClose={() => setShowFakeCall(false)} />}
        
        {/* NAV BAR */}
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#030014]/70 border-b border-white/5 supports-[backdrop-filter]:bg-[#030014]/50 h-28 transition-all duration-300">
            <div className="max-w-[1400px] mx-auto px-8 h-full flex items-center justify-between">
                <div className="flex items-center gap-5 cursor-pointer group" onClick={() => setView('home')}>
                    <div className="bg-gradient-to-br from-rose-600 to-purple-800 p-4 rounded-2xl shadow-[0_0_40px_rgba(225,29,72,0.4)] group-hover:shadow-[0_0_60px_rgba(225,29,72,0.6)] transition-all duration-500 group-hover:rotate-6">
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-black text-white tracking-tighter uppercase group-hover:text-rose-400 transition-colors">Raksha<span className="text-rose-500">.ai</span></span>
                        <span className="text-[10px] text-cyan-400 font-mono tracking-[0.4em] uppercase opacity-80">Security Mainframe</span>
                    </div>
                </div>
                
                <div className="hidden md:flex items-center bg-white/5 rounded-full p-2 border border-white/5 backdrop-blur-md shadow-2xl">
                    {navLinks.map(link => (
                        <button 
                            key={link.id} 
                            onClick={() => setView(link.id as ViewState)} 
                            className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-500 relative overflow-hidden ${view === link.id ? 'text-white bg-white/10 shadow-inner border border-white/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            {link.label}
                            {view === link.id && <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full mb-1.5 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>}
                        </button>
                    ))}
                </div>
                
                <div className="hidden md:flex items-center gap-6">
                    <button onClick={() => setUser(null)} className="glass-button w-14 h-14 rounded-full flex items-center justify-center text-rose-400 hover:text-white transition-colors group" title="Logout">
                        <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm shadow-lg border border-white/10">
                        {user.email.charAt(0).toUpperCase()}
                    </div>
                </div>

                <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 absolute top-28 left-0 w-full p-6 flex flex-col gap-4 animate-in fade-in shadow-2xl z-50">
                    {navLinks.map(link => (
                        <button key={link.id} onClick={() => { setView(link.id as ViewState); setMobileMenuOpen(false); }} className="text-left py-5 px-8 rounded-2xl bg-white/5 text-lg font-bold text-slate-200 active:bg-rose-600 active:text-white border border-white/5 uppercase tracking-wide">
                            {link.label}
                        </button>
                    ))}
                    <button onClick={() => setUser(null)} className="text-left py-5 px-8 rounded-2xl bg-rose-500/10 text-lg font-bold text-rose-300 border border-rose-500/20 uppercase tracking-wide mt-4">
                        Sign Out
                    </button>
                </div>
            )}
        </nav>

        {/* MAIN CONTENT AREA */}
        <main className="max-w-[1400px] mx-auto px-8 py-20 md:py-24 min-h-[calc(100vh-100px)] w-full">
            
            {view === 'home' && (
                <section className="flex flex-col lg:flex-row items-center justify-between gap-32 animate-in slide-in-from-bottom-8 duration-700">
                    <div className="lg:w-1/2 space-y-14 z-10">
                        <div className="inline-flex items-center gap-4 bg-rose-500/10 backdrop-blur-xl border border-rose-500/20 text-rose-300 px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(225,29,72,0.15)] hover:bg-rose-500/20 transition-colors cursor-default">
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_rgba(225,29,72,0.8)]"></span>
                            Avishakar Hackathon 2025
                        </div>
                        
                        <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter">
                            FEARLESS <br/> 
                            <span className="text-flow">FUTURE.</span>
                        </h1>
                        
                        <p className="text-2xl text-slate-400 max-w-xl leading-relaxed font-light border-l-4 border-rose-600 pl-10">
                            The next generation of personal security. Integrating autonomous drone surveillance with predictive AI threat modeling.
                        </p>
                        
                        <div className="flex flex-wrap gap-8 pt-8">
                            <button onClick={() => setView('features')} className="shimmer px-14 py-7 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest transition-all transform hover:translate-y-[-4px] shadow-[0_0_80px_rgba(255,255,255,0.4)] flex items-center gap-4 hover:bg-cyan-50">
                                ACTIVATE PROTOCOLS <ChevronRight className="w-5 h-5" />
                            </button>
                            <button onClick={() => setShowFakeCall(true)} className="glass-button px-14 py-7 text-white rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-4 border-white/10 hover:border-white/30">
                                <Ghost className="w-5 h-5 text-purple-300" /> STEALTH MODE
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-10 pt-10">
                            <div className="glass-panel p-8 rounded-3xl flex items-center gap-6 border border-white/5 hover:bg-white/5 transition-colors group">
                                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform"><Shield className="w-8 h-8"/></div>
                                <div className="flex flex-col"><span className="text-4xl font-bold text-white">24/7</span><span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Active Monitoring</span></div>
                            </div>
                            <div className="glass-panel p-8 rounded-3xl flex items-center gap-6 border border-white/5 hover:bg-white/5 transition-colors group">
                                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform"><Siren className="w-8 h-8"/></div>
                                <div className="flex flex-col"><span className="text-4xl font-bold text-white">99.9%</span><span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Uptime Reliability</span></div>
                            </div>
                        </div>
                    </div>

                    {/* PHONE MOCKUP */}
                    <div className="lg:w-1/2 flex justify-center perspective-1000 w-full relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite]"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

                        <div className="relative w-[420px] max-w-full bg-[#030014] rounded-[4rem] border-[14px] border-[#1a1a2e] shadow-[0_0_150px_rgba(6,182,212,0.2)] overflow-hidden transform rotate-y-6 hover:rotate-0 transition-transform duration-700 ease-out z-20">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-10 bg-[#1a1a2e] rounded-b-3xl z-20"></div>
                            
                            <div className="bg-gradient-to-b from-[#0f172a] via-[#030014] to-black h-[850px] p-10 flex flex-col justify-between pt-24 relative overflow-hidden">
                                <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[150px] animate-pulse"></div>

                                <div className="flex justify-between items-center text-white mb-10 relative z-10">
                                    <div>
                                        <h3 className="font-bold text-3xl tracking-tight">Hi, {user.email.split('@')[0]}</h3>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                                            <p className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase">Secure Connection</p>
                                        </div>
                                    </div>
                                    <div className="w-16 h-16 bg-gradient-to-tr from-rose-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border border-white/10">{user.email.charAt(0).toUpperCase()}</div>
                                </div>
                                
                                <div className="flex-1 flex flex-col justify-center items-center">
                                    <SOSButton userId={user.id} />
                                </div>
                                
                                <div className="grid grid-cols-2 gap-6 mt-12 relative z-10">
                                    <button onClick={() => setView('community')} className="glass-panel p-6 rounded-[2rem] flex flex-col items-center gap-4 text-slate-300 hover:bg-white/10 hover:text-white transition-colors group border border-white/5 active:scale-95">
                                        <div className="p-4 bg-emerald-500/10 rounded-full group-hover:bg-emerald-500/20 transition-colors"><MapIcon className="w-8 h-8 text-emerald-400" /></div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Live Map</span>
                                    </button>
                                    <button onClick={() => setView('features')} className="glass-panel p-6 rounded-[2rem] flex flex-col items-center gap-4 text-slate-300 hover:bg-white/10 hover:text-white transition-colors group border border-white/5 active:scale-95">
                                        <div className="p-4 bg-pink-500/10 rounded-full group-hover:bg-pink-500/20 transition-colors"><Users className="w-8 h-8 text-pink-400" /></div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Guardians</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {view === 'features' && (
                <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <h2 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tight">Tactical Modules</h2>
                        <p className="text-slate-400 text-2xl font-light leading-relaxed">Advanced defense suite designed for every scenario. Powered by neural networks.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {FEATURES.map(feature => (
                           <div key={feature.id} className="glass-card p-8 rounded-[2rem] group h-full flex flex-col hover:border-cyan-500/30 transition-all duration-500">
                                <div className={`mb-6 p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500 ${feature.bg} ${feature.color} relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.2)]`}>
                                    <feature.Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 relative z-10 tracking-tight group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed relative z-10 font-medium group-hover:text-slate-300">{feature.desc}</p>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {view === 'community' && (
                <div className="w-full pt-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="text-center mb-20">
                        <h2 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tight">Global Intel Map</h2>
                        <p className="text-slate-400 text-2xl">Real-time crowdsourced data aggregation for predictive risk modeling.</p>
                    </div>
                    <AdvancedMap />
                </div>
            )}

            {view === 'legal' && (
                <div className="w-full pt-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="text-center mb-20">
                        <h2 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tight">Legal & Enforcement</h2>
                        <p className="text-slate-400 text-2xl">Direct encrypted line to authorities and AI-powered rights assistance.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-10">
                            <div className="glass-card p-12 rounded-[3rem] border-l-8 border-rose-500 relative overflow-hidden group hover:bg-white/5 transition-colors shadow-2xl">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] group-hover:bg-rose-500/20 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-10">
                                        <div>
                                            <h3 className="text-5xl font-bold text-white tracking-tight">Emergency Dispatch</h3>
                                            <p className="text-slate-400 text-sm mt-4 font-mono tracking-widest uppercase">Priority Line: 112</p>
                                        </div>
                                        <div className="p-6 bg-rose-500/20 rounded-3xl"><Siren className="w-12 h-12 text-rose-500" /></div>
                                    </div>
                                    <button className="shimmer w-full bg-gradient-to-r from-rose-600 to-rose-800 hover:from-rose-500 hover:to-rose-700 text-white py-8 rounded-3xl font-black text-2xl shadow-[0_0_50px_rgba(225,29,72,0.4)] flex items-center justify-center gap-5 transition-all hover:scale-[1.02] active:scale-95">
                                        <Phone className="w-8 h-8 animate-pulse" /> INITIATE CALL
                                    </button>
                                </div>
                            </div>

                            <div className="glass-card p-12 rounded-[3rem] border-l-8 border-purple-500 relative overflow-hidden group hover:bg-white/5 transition-colors shadow-2xl">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] group-hover:bg-purple-500/20 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-10">
                                        <div>
                                            <h3 className="text-5xl font-bold text-white tracking-tight">Support Network</h3>
                                            <p className="text-slate-400 text-sm mt-4 font-mono tracking-widest uppercase">Helpline: 1091</p>
                                        </div>
                                            <div className="p-6 bg-purple-500/20 rounded-3xl"><Heart className="w-12 h-12 text-purple-500" /></div>
                                    </div>
                                    <button className="shimmer w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white py-8 rounded-3xl font-black text-2xl shadow-[0_0_50px_rgba(147,51,234,0.4)] flex items-center justify-center gap-5 transition-all hover:scale-[1.02] active:scale-95">
                                        <Phone className="w-8 h-8" /> CONTACT SUPPORT
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="h-full">
                            <ChatInterface userId={user.id} />
                        </div>
                    </div>
                </div>
            )}
        </main>
        <LiveTicker />
    </div>
  );
}
