<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RAKSHA.OS - Secure Neural Interface</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">

    <style>
        /* --- CORE STYLES FROM REACT COMPONENT --- */
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #030014; color: #e2e8f0; overflow-x: hidden; margin: 0; padding: 0; }
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
            pointer-events: none;
        }
        .glass-card:hover::before { opacity: 1; }

        /* Buttons */
        .glass-button {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
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
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }

        /* Utility */
        .hidden { display: none !important; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.4); }
    </style>
</head>
<body>

    <!-- 1. Background Effects -->
    <div class="aurora-bg"></div>
    <div class="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0 mix-blend-overlay"></div>
    <div class="scanline"></div>
    <div id="starfield-container" class="starfield"></div>

    <!-- 2. Boot Sequence Screen -->
    <div id="boot-screen" class="fixed inset-0 bg-[#030014] z-[100] flex flex-col items-center justify-center font-mono text-cyan-400 p-8">
        <div class="w-full max-w-md space-y-4 relative">
            <div class="absolute -top-12 left-0 text-[10px] text-slate-500 font-mono tracking-widest uppercase">Secure Boot // ID: 884-XJ-ALPHA</div>
            <div class="flex justify-between items-end border-b border-cyan-900/50 pb-3 mb-6">
                <span class="text-3xl font-black tracking-widest text-white">RAKSHA.OS</span>
                <span class="text-xs animate-pulse text-rose-500 font-bold">V5.1.0 ULTIMATE</span>
            </div>
            <div id="boot-logs" class="h-64 overflow-hidden space-y-3 text-sm flex flex-col justify-end"></div>
            <div class="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden relative">
                <div class="absolute inset-0 bg-white/10"></div>
                <div id="boot-progress" class="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-rose-500 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.8)]" style="width: 0%"></div>
            </div>
        </div>
    </div>

    <!-- 3. Authentication Screen -->
    <div id="auth-screen" class="hidden fixed inset-0 z-[90] flex items-center justify-center p-4">
        <div class="glass-card p-10 rounded-[2.5rem] w-full max-w-md border border-white/10 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px]"></div>
            <div class="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
            <div class="relative z-10">
                <div class="text-center mb-10">
                    <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-500 to-purple-700 shadow-xl mb-6">
                        <i data-lucide="shield" class="w-10 h-10 text-white"></i>
                    </div>
                    <h2 class="text-3xl font-black text-white uppercase tracking-tight mb-2">Welcome Back</h2>
                    <p class="text-slate-400 text-sm font-light">Secure Access Portal V5.1</p>
                </div>
                <form id="auth-form" class="space-y-5">
                    <input type="email" id="auth-email" placeholder="Email Identity" value="demo@raksha.ai" class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-mono text-sm">
                    <input type="password" placeholder="Access Key" value="********" class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-mono text-sm">
                    <button type="submit" id="auth-btn" class="shimmer w-full bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-rose-600/20 active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider text-sm mt-4">
                        Authenticate
                    </button>
                </form>
                <div class="mt-8 text-center text-xs font-mono text-cyan-400">
                     SYSTEM STATUS: OPERATIONAL
                </div>
            </div>
        </div>
    </div>

    <!-- 4. Main Application -->
    <div id="main-app" class="hidden min-h-screen relative z-10 w-full flex flex-col pb-12 selection:bg-cyan-500/30 selection:text-white">
        
        <!-- Status HUD -->
        <div class="hidden lg:flex fixed top-6 right-8 gap-6 z-40 font-mono text-[10px] tracking-[0.2em] text-cyan-200/70 glass-panel px-8 py-3 rounded-full uppercase transition-all hover:bg-white/5 border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
                <span class="text-emerald-400 font-bold">ONLINE</span>
            </div>
            <div class="w-px h-3 bg-white/10"></div>
            <div class="flex items-center gap-2">
                <i data-lucide="users" class="w-3 h-3 text-cyan-400"></i>
                <span id="user-display" class="max-w-[100px] truncate">USER</span>
            </div>
            <div class="w-px h-3 bg-white/10"></div>
            <div class="flex items-center gap-2">
                <i data-lucide="battery" class="w-3 h-3 text-cyan-400"></i>
                <span>85%</span>
            </div>
            <div class="w-px h-3 bg-white/10"></div>
            <span id="time-display" class="text-white font-bold">--:--:--</span>
        </div>

        <!-- Fake Call Interface (Overlay) -->
        <div id="fake-call-interface" class="hidden fixed inset-0 bg-black z-[100] flex flex-col items-center justify-between py-12 text-white animate-in fade-in duration-500">
            <!-- Incoming State -->
            <div id="fc-incoming" class="flex flex-col items-center justify-between h-full w-full">
                <div class="flex flex-col items-center mt-20 animate-float">
                    <div class="w-32 h-32 bg-gradient-to-b from-slate-200 to-slate-400 rounded-full flex items-center justify-center mb-8 shadow-2xl overflow-hidden ring-4 ring-white/10">
                        <i data-lucide="user" class="w-16 h-16 text-slate-600"></i>
                    </div>
                    <h2 class="text-5xl font-light tracking-tight mb-2">Mom</h2>
                    <p class="text-xl opacity-60">Mobile</p>
                </div>
                <div class="w-full px-12 mb-20 flex justify-between items-center max-w-md">
                    <button onclick="RakshaApp.toggleFakeCall(false)" class="flex flex-col items-center gap-4 group cursor-pointer">
                        <div class="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(244,63,94,0.4)]">
                            <i data-lucide="phone-off" class="w-8 h-8 fill-current"></i>
                        </div>
                        <span class="text-sm font-medium opacity-80">Decline</span>
                    </button>
                    <button onclick="RakshaApp.acceptFakeCall()" class="flex flex-col items-center gap-4 group cursor-pointer">
                        <div class="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(16,185,129,0.4)] animate-bounce">
                            <i data-lucide="phone-call" class="w-8 h-8 fill-current"></i>
                        </div>
                        <span class="text-sm font-medium opacity-80">Accept</span>
                    </button>
                </div>
            </div>
            <!-- Connected State -->
            <div id="fc-connected" class="hidden flex flex-col items-center justify-between h-full w-full">
                <div class="flex flex-col items-center mt-20">
                   <div class="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-6"><i data-lucide="user" class="w-10 h-10 text-white"></i></div>
                   <h2 class="text-4xl font-medium">Mom</h2>
                   <p class="text-xl mt-4 text-emerald-400 font-mono">00:12</p>
                </div>
                <div class="mb-20 grid grid-cols-3 gap-8">
                   <div class="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/5"><div class="w-2 h-2 bg-white rounded-full"></div></div>
                   <div class="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/5"><div class="w-2 h-2 bg-white rounded-full"></div></div>
                   <div class="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/5"><div class="w-2 h-2 bg-white rounded-full"></div></div>
                   <div class="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/5"><div class="w-2 h-2 bg-white rounded-full"></div></div>
                   <div class="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/5"><div class="w-2 h-2 bg-white rounded-full"></div></div>
                   <div class="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/5"><div class="w-2 h-2 bg-white rounded-full"></div></div>
                </div>
                <div class="mb-20">
                   <button onclick="RakshaApp.toggleFakeCall(false)" class="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center mx-auto hover:bg-rose-600 shadow-[0_0_40px_rgba(244,63,94,0.4)] cursor-pointer"><i data-lucide="phone-off" class="w-10 h-10 fill-current"></i></button>
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <nav class="sticky top-0 z-50 backdrop-blur-xl bg-[#030014]/70 border-b border-white/5 supports-[backdrop-filter]:bg-[#030014]/50 h-28 transition-all duration-300">
            <div class="max-w-[1400px] mx-auto px-8 h-full flex items-center justify-between">
                <div class="flex items-center gap-5 cursor-pointer group" onclick="RakshaApp.navigate('home')">
                    <div class="bg-gradient-to-br from-rose-600 to-purple-800 p-4 rounded-2xl shadow-[0_0_40px_rgba(225,29,72,0.4)] group-hover:shadow-[0_0_60px_rgba(225,29,72,0.6)] transition-all duration-500 group-hover:rotate-6">
                        <i data-lucide="shield" class="w-8 h-8 text-white"></i>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-3xl font-black text-white tracking-tighter uppercase group-hover:text-rose-400 transition-colors">Raksha<span class="text-rose-500">.ai</span></span>
                        <span class="text-[10px] text-cyan-400 font-mono tracking-[0.4em] uppercase opacity-80">Security Mainframe</span>
                    </div>
                </div>
                
                <div class="hidden md:flex items-center bg-white/5 rounded-full p-2 border border-white/5 backdrop-blur-md shadow-2xl">
                    <button onclick="RakshaApp.navigate('home')" class="nav-btn px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-500 relative overflow-hidden text-slate-400 hover:text-white hover:bg-white/5" data-target="home">
                        Command
                    </button>
                    <button onclick="RakshaApp.navigate('features')" class="nav-btn px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-500 relative overflow-hidden text-slate-400 hover:text-white hover:bg-white/5" data-target="features">
                        Protocol
                    </button>
                    <button onclick="RakshaApp.navigate('community')" class="nav-btn px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-500 relative overflow-hidden text-slate-400 hover:text-white hover:bg-white/5" data-target="community">
                        Global Map
                    </button>
                    <button onclick="RakshaApp.navigate('legal')" class="nav-btn px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-500 relative overflow-hidden text-slate-400 hover:text-white hover:bg-white/5" data-target="legal">
                        Legal Chat
                    </button>
                </div>
                
                <div class="hidden md:flex items-center gap-6">
                    <button onclick="location.reload()" class="glass-button w-14 h-14 rounded-full flex items-center justify-center text-rose-400 hover:text-white transition-colors group" title="Logout">
                        <i data-lucide="log-out" class="w-5 h-5 group-hover:scale-110 transition-transform"></i>
                    </button>
                    <div id="avatar-initial" class="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm shadow-lg border border-white/10">
                        U
                    </div>
                </div>

                <button class="md:hidden text-white p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
                    <i data-lucide="menu"></i>
                </button>
            </div>
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 absolute top-28 left-0 w-full p-6 flex flex-col gap-4 animate-in fade-in shadow-2xl z-50">
                <button onclick="RakshaApp.navigate('home')" class="text-left py-5 px-8 rounded-2xl bg-white/5 text-lg font-bold text-slate-200 border border-white/5 uppercase tracking-wide">Command</button>
                <button onclick="RakshaApp.navigate('features')" class="text-left py-5 px-8 rounded-2xl bg-white/5 text-lg font-bold text-slate-200 border border-white/5 uppercase tracking-wide">Protocol</button>
                <button onclick="RakshaApp.navigate('community')" class="text-left py-5 px-8 rounded-2xl bg-white/5 text-lg font-bold text-slate-200 border border-white/5 uppercase tracking-wide">Global Map</button>
                <button onclick="RakshaApp.navigate('legal')" class="text-left py-5 px-8 rounded-2xl bg-white/5 text-lg font-bold text-slate-200 border border-white/5 uppercase tracking-wide">Legal Chat</button>
            </div>
        </nav>

        <!-- Dynamic Content Area -->
        <main id="content-area" class="max-w-[1400px] mx-auto px-8 py-20 md:py-24 min-h-[calc(100vh-100px)] w-full">
            <!-- Content Injected via JS -->
        </main>

        <!-- Live Ticker -->
        <div class="fixed bottom-0 left-0 w-full bg-[#030014]/95 backdrop-blur-xl border-t border-cyan-500/20 z-40 overflow-hidden py-3 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
            <div class="flex animate-ticker whitespace-nowrap gap-24 text-xs font-mono font-bold tracking-widest uppercase">
                <span class="text-rose-400 flex items-center gap-3 drop-shadow-[0_0_5px_rgba(251,113,133,0.5)]"><i data-lucide="alert-triangle" class="w-3.5 h-3.5"></i> ALERT: Anomaly Detected in Sector 7</span>
                <span class="text-emerald-400 flex items-center gap-3 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]"><i data-lucide="check-circle" class="w-3.5 h-3.5"></i> VERIFIED: Safe Zone Established at City Center</span>
                <span class="text-cyan-400 flex items-center gap-3 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"><i data-lucide="info" class="w-3.5 h-3.5"></i> INTEL: Drone Surveillance Active in North District</span>
                <span class="text-emerald-400 flex items-center gap-3 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]"><i data-lucide="check-circle" class="w-3.5 h-3.5"></i> SYSTEM: Neural Network Update V5.2 Complete</span>
            </div>
        </div>
    </div>

    <!-- JAVASCRIPT LOGIC -->
    <script>
        const RakshaApp = {
            state: {
                view: 'home',
                user: null,
                sosActive: false,
                sosCountdown: 3,
                messages: [
                    { id: 1, user_id: 'system', content: 'Welcome to the secure Raksha network. All communications are end-to-end encrypted.', created_at: new Date().toISOString() },
                    { id: 2, user_id: 'other', content: 'Verified incident at Sector 4. Avoid the main road.', created_at: new Date(Date.now() - 100000).toISOString() }
                ],
                activeLayers: { heatmap: true, police: true, cctv: false, safeHavens: false },
                showSatellite: false,
                selectedZone: null
            },
            
            init: function() {
                this.createStars();
                this.startBootSequence();
                this.updateTime();
                setInterval(() => this.updateTime(), 1000);
            },

            createStars: function() {
                const container = document.getElementById('starfield-container');
                for (let i = 0; i < 200; i++) {
                    const star = document.createElement('div');
                    star.className = 'star';
                    star.style.left = `${Math.random() * 100}%`;
                    star.style.top = `${Math.random() * 100}%`;
                    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
                    star.style.animationDelay = `${Math.random() * 5}s`;
                    star.style.opacity = Math.random().toString();
                    container.appendChild(star);
                }
            },

            startBootSequence: function() {
                const logs = [
                    "Initializing Raksha Neural Core...",
                    "Establishing Satellite Uplink (Starlink V2)...",
                    "Encrypting Biometric Data Layer...",
                    "Loading Predictive Threat Algorithms...",
                    "System Optimal. Access Granted."
                ];
                const logContainer = document.getElementById('boot-logs');
                const progressBar = document.getElementById('boot-progress');
                let i = 0;
                
                const timer = setInterval(() => {
                    if (i < logs.length) {
                        const div = document.createElement('div');
                        div.className = "flex gap-3 font-mono text-xs items-center";
                        div.innerHTML = `<span class="text-slate-600">[${new Date().toLocaleTimeString()}]</span><span class="text-cyan-400 flex items-center gap-2"><span class="w-1 h-1 bg-cyan-400 rounded-full"></span> ${logs[i]}</span>`;
                        logContainer.appendChild(div);
                        progressBar.style.width = `${(i + 1) / logs.length * 100}%`;
                        i++;
                    } else {
                        clearInterval(timer);
                        setTimeout(() => {
                            document.getElementById('boot-screen').classList.add('hidden');
                            document.getElementById('auth-screen').classList.remove('hidden');
                            lucide.createIcons();
                        }, 800);
                    }
                }, 300);

                // Setup Auth Listener
                document.getElementById('auth-form').addEventListener('submit', (e) => {
                    e.preventDefault();
                    const email = document.getElementById('auth-email').value;
                    const btn = document.getElementById('auth-btn');
                    btn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i>`;
                    lucide.createIcons();
                    
                    setTimeout(() => {
                        this.state.user = { email: email || 'demo@raksha.ai', id: 'user_123' };
                        document.getElementById('auth-screen').classList.add('hidden');
                        document.getElementById('main-app').classList.remove('hidden');
                        document.getElementById('user-display').innerText = email.split('@')[0];
                        document.getElementById('avatar-initial').innerText = email.charAt(0).toUpperCase();
                        this.navigate('home');
                    }, 1500);
                });
            },

            updateTime: function() {
                const el = document.getElementById('time-display');
                if(el) el.innerText = new Date().toLocaleTimeString();
            },

            navigate: function(viewId) {
                this.state.view = viewId;
                const area = document.getElementById('content-area');
                
                // Update Nav State
                document.querySelectorAll('.nav-btn').forEach(btn => {
                    const isActive = btn.getAttribute('data-target') === viewId;
                    btn.className = `nav-btn px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-500 relative overflow-hidden ${isActive ? 'text-white bg-white/10 shadow-inner border border-white/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}`;
                    if(isActive) btn.innerHTML = `${btn.getAttribute('data-target') === 'home' ? 'Command' : btn.getAttribute('data-target') === 'features' ? 'Protocol' : btn.getAttribute('data-target') === 'community' ? 'Global Map' : 'Legal Chat'} <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full mb-1.5 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>`;
                    else btn.innerHTML = `${btn.getAttribute('data-target') === 'home' ? 'Command' : btn.getAttribute('data-target') === 'features' ? 'Protocol' : btn.getAttribute('data-target') === 'community' ? 'Global Map' : 'Legal Chat'}`;
                });

                document.getElementById('mobile-menu').classList.add('hidden');

                // Inject Content
                if (viewId === 'home') area.innerHTML = this.renderHome();
                if (viewId === 'features') area.innerHTML = this.renderFeatures();
                if (viewId === 'community') area.innerHTML = this.renderCommunity();
                if (viewId === 'legal') area.innerHTML = this.renderLegal();
                
                lucide.createIcons();
            },

            // --- RENDERERS ---

            renderHome: function() {
                return `
                <section class="flex flex-col lg:flex-row items-center justify-between gap-32 animate-in slide-in-from-bottom-8 duration-700">
                    <div class="lg:w-1/2 space-y-14 z-10">
                        <div class="inline-flex items-center gap-4 bg-rose-500/10 backdrop-blur-xl border border-rose-500/20 text-rose-300 px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(225,29,72,0.15)] hover:bg-rose-500/20 transition-colors cursor-default">
                            <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_rgba(225,29,72,0.8)]"></span>
                            Avishakar Hackathon 2025
                        </div>
                        
                        <h1 class="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter">
                            FEARLESS <br/> 
                            <span class="text-flow">FUTURE.</span>
                        </h1>
                        
                        <p class="text-2xl text-slate-400 max-w-xl leading-relaxed font-light border-l-4 border-rose-600 pl-10">
                            The next generation of personal security. Integrating autonomous drone surveillance with predictive AI threat modeling.
                        </p>
                        
                        <div class="flex flex-wrap gap-8 pt-8">
                            <button onclick="RakshaApp.navigate('features')" class="shimmer px-14 py-7 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest transition-all transform hover:translate-y-[-4px] shadow-[0_0_80px_rgba(255,255,255,0.4)] flex items-center gap-4 hover:bg-cyan-50 cursor-pointer">
                                ACTIVATE PROTOCOLS <i data-lucide="chevron-right" class="w-5 h-5"></i>
                            </button>
                            <button onclick="RakshaApp.toggleFakeCall(true)" class="glass-button px-14 py-7 text-white rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-4 border-white/10 hover:border-white/30 cursor-pointer">
                                <i data-lucide="ghost" class="w-5 h-5 text-purple-300"></i> STEALTH MODE
                            </button>
                        </div>

                        <div class="grid grid-cols-2 gap-10 pt-10">
                            <div class="glass-panel p-8 rounded-3xl flex items-center gap-6 border border-white/5 hover:bg-white/5 transition-colors group">
                                <div class="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform"><i data-lucide="shield" class="w-8 h-8"></i></div>
                                <div class="flex flex-col"><span class="text-4xl font-bold text-white">24/7</span><span class="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Active Monitoring</span></div>
                            </div>
                            <div class="glass-panel p-8 rounded-3xl flex items-center gap-6 border border-white/5 hover:bg-white/5 transition-colors group">
                                <div class="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform"><i data-lucide="siren" class="w-8 h-8"></i></div>
                                <div class="flex flex-col"><span class="text-4xl font-bold text-white">99.9%</span><span class="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Uptime Reliability</span></div>
                            </div>
                        </div>
                    </div>

                    <!-- PHONE MOCKUP -->
                    <div class="lg:w-1/2 flex justify-center perspective-1000 w-full relative">
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite]"></div>
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

                        <div class="relative w-[420px] max-w-full bg-[#030014] rounded-[4rem] border-[14px] border-[#1a1a2e] shadow-[0_0_150px_rgba(6,182,212,0.2)] overflow-hidden transform rotate-y-6 hover:rotate-0 transition-transform duration-700 ease-out z-20">
                            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-10 bg-[#1a1a2e] rounded-b-3xl z-20"></div>
                            
                            <div class="bg-gradient-to-b from-[#0f172a] via-[#030014] to-black h-[850px] p-10 flex flex-col justify-between pt-24 relative overflow-hidden">
                                <div class="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[150px] animate-pulse"></div>

                                <div class="flex justify-between items-center text-white mb-10 relative z-10">
                                    <div>
                                        <h3 class="font-bold text-3xl tracking-tight">Hi, ${this.state.user ? this.state.user.email.split('@')[0] : 'User'}</h3>
                                        <div class="flex items-center gap-2 mt-2">
                                            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                                            <p class="text-[10px] text-emerald-400 font-mono tracking-widest uppercase">Secure Connection</p>
                                        </div>
                                    </div>
                                    <div class="w-16 h-16 bg-gradient-to-tr from-rose-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border border-white/10">${this.state.user ? this.state.user.email.charAt(0).toUpperCase() : 'U'}</div>
                                </div>
                                
                                <div class="flex-1 flex flex-col justify-center items-center">
                                    <div id="sos-container" class="flex flex-col items-center justify-center py-6 relative">
                                       ${this.renderSOSButton()}
                                    </div>
                                </div>
                                
                                <div class="grid grid-cols-2 gap-6 mt-12 relative z-10">
                                    <button onclick="RakshaApp.navigate('community')" class="glass-panel p-6 rounded-[2rem] flex flex-col items-center gap-4 text-slate-300 hover:bg-white/10 hover:text-white transition-colors group border border-white/5 active:scale-95 cursor-pointer">
                                        <div class="p-4 bg-emerald-500/10 rounded-full group-hover:bg-emerald-500/20 transition-colors"><i data-lucide="map" class="w-8 h-8 text-emerald-400"></i></div>
                                        <span class="text-[10px] font-bold uppercase tracking-widest">Live Map</span>
                                    </button>
                                    <button onclick="RakshaApp.navigate('features')" class="glass-panel p-6 rounded-[2rem] flex flex-col items-center gap-4 text-slate-300 hover:bg-white/10 hover:text-white transition-colors group border border-white/5 active:scale-95 cursor-pointer">
                                        <div class="p-4 bg-pink-500/10 rounded-full group-hover:bg-pink-500/20 transition-colors"><i data-lucide="users" class="w-8 h-8 text-pink-400"></i></div>
                                        <span class="text-[10px] font-bold uppercase tracking-widest">Guardians</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`;
            },

            renderFeatures: function() {
                const features = [
                    { id: 1, title: "SOS & Emergency", icon: "siren", desc: "One-tap SOS, Shake-to-Alert, and 'Help Me' voice trigger.", color: "text-rose-500", bg: "bg-rose-500/10" },
                    { id: 2, title: "Auto Evidence", icon: "mic", desc: "Auto-records 30s audio on SOS trigger. Secure cloud upload.", color: "text-blue-400", bg: "bg-blue-400/10" }, 
                    { id: 4, title: "Safe Zone Map", icon: "map", desc: "Crowdsourced heatmaps. Green for safe, Red for unsafe areas.", color: "text-emerald-400", bg: "bg-emerald-400/10" },
                    { id: 5, title: "Trusted Circle", icon: "users", desc: "Live 'Walk With Me' tracking & auto-arrival alerts.", color: "text-pink-400", bg: "bg-pink-400/10" },
                    { id: 6, title: "Stealth Tools", icon: "ghost", desc: "Fake Call generator & Calculator disguise icon.", color: "text-gray-400", bg: "bg-gray-400/10" },
                    { id: 7, title: "Travel Safety", icon: "navigation", desc: "Route deviation detection & cab warnings.", color: "text-orange-400", bg: "bg-orange-400/10" },
                    { id: 9, title: "Legal & Police", icon: "scale", desc: "One-tap helpline (112) & Legal AI chatbot.", color: "text-yellow-400", bg: "bg-yellow-400/10" },
                    { id: 10, title: "Profile Security", icon: "lock", desc: "Low-Battery Emergency Mode & Secure Pin.", color: "text-cyan-400", bg: "bg-cyan-400/10" },
                ];

                let html = `
                <div class="w-full animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div class="text-center max-w-4xl mx-auto mb-24">
                        <h2 class="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tight">Tactical Modules</h2>
                        <p class="text-slate-400 text-2xl font-light leading-relaxed">Advanced defense suite designed for every scenario. Powered by neural networks.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">`;

                features.forEach(f => {
                    html += `
                    <div class="glass-card p-8 rounded-[2rem] group h-full flex flex-col hover:border-cyan-500/30 transition-all duration-500">
                        <div class="mb-6 p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500 ${f.bg} ${f.color} relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                            <i data-lucide="${f.icon}" class="w-8 h-8"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 relative z-10 tracking-tight group-hover:text-cyan-300 transition-colors">${f.title}</h3>
                        <p class="text-slate-400 text-sm leading-relaxed relative z-10 font-medium group-hover:text-slate-300">${f.desc}</p>
                        <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>`;
                });
                
                html += `</div></div>`;
                return html;
            },

            renderCommunity: function() {
                // Re-rendering logic for map state
                return `
                <div class="w-full pt-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div class="text-center mb-20">
                        <h2 class="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tight">Global Intel Map</h2>
                        <p class="text-slate-400 text-2xl">Real-time crowdsourced data aggregation for predictive risk modeling.</p>
                    </div>
                    <div id="advanced-map-container" class="flex flex-col lg:flex-row gap-10 h-[650px] lg:h-[800px] relative w-full">
                       ${this.renderMapComponent()}
                    </div>
                </div>`;
            },

            renderMapComponent: function() {
                const s = this.state;
                return `
                 <div class="flex-1 glass-card rounded-[2.5rem] overflow-hidden relative group border border-white/10 shadow-2xl">
                    ${s.showSatellite ? `
                        <div class="absolute inset-0 z-20 bg-black animate-in fade-in">
                            <iframe 
                            width="100%" height="100%" frameborder="0" scrolling="no" 
                            src="https://maps.google.com/maps?q=20.5937,78.9629&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                            style="filter: grayscale(20%) contrast(1.2) brightness(0.8); width: 100%; height: 100%;"
                            ></iframe>
                            <div class="absolute inset-0 bg-gradient-to-b from-[#030014]/80 via-transparent to-[#030014]/80 pointer-events-none"></div>
                        </div>
                    ` : `
                        <div class="absolute inset-0 pointer-events-none z-10 opacity-30">
                            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)]"></div>
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-cyan-500/10 rounded-full"></div>
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-radar origin-center"></div>
                        </div>

                        <div class="absolute inset-0 bg-[#050510] opacity-90">
                            <div class="grid grid-cols-12 grid-rows-12 h-full w-full opacity-10">
                            ${Array(144).fill(0).map(() => `<div class="border border-slate-600/30"></div>`).join('')}
                            </div>
                            ${s.activeLayers.heatmap ? `
                                <div class="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>
                                <div class="absolute bottom-1/4 right-1/3 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] animate-pulse"></div>
                            ` : ''}
                            
                            <!-- Interactive Markers -->
                            <div class="absolute top-[35%] left-[28%] cursor-pointer group/marker z-30" onclick="RakshaApp.selectZone({ name: 'Sector 5 Park', risk: 'Low', lighting: 'Excellent', police: '2 min away', score: 92 })">
                                <div class="pulse-ring w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center relative border border-emerald-500">
                                    <i data-lucide="shield" class="w-5 h-5 text-emerald-400"></i>
                                </div>
                            </div>
                            <div class="absolute bottom-[30%] right-[35%] cursor-pointer group/marker z-30" onclick="RakshaApp.selectZone({ name: 'Old Market Road', risk: 'High', lighting: 'Poor', police: '15 min away', score: 45 })">
                                <div class="pulse-ring w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center relative border border-rose-500">
                                    <i data-lucide="alert-triangle" class="w-5 h-5 text-rose-500"></i>
                                </div>
                            </div>
                        </div>
                    `}
                    <div class="absolute top-8 left-8 flex flex-col gap-2 z-40">
                        <button onclick="RakshaApp.toggleSatellite()" class="glass-panel px-5 py-2.5 rounded-xl flex items-center gap-3 text-xs font-bold text-white shadow-xl border-cyan-500/30 backdrop-blur-md transition-colors active:scale-95 group ${s.showSatellite ? 'bg-rose-500/20 border-rose-500/50 hover:bg-rose-500/30' : 'hover:bg-white/10'} cursor-pointer">
                            <span class="w-2 h-2 rounded-full ${s.showSatellite ? 'bg-rose-500' : 'bg-cyan-400'} animate-pulse shadow-[0_0_10px_currentColor]"></span> 
                            ${s.showSatellite ? "CLOSE SATELLITE FEED" : "OPEN LIVE SATELLITE FEED"} 
                        </button>
                    </div>
                  </div>

                  <div class="lg:w-[450px] glass-card rounded-[2.5rem] flex flex-col h-full border border-white/10 relative overflow-hidden shadow-2xl">
                    <div class="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>
                    <div class="p-10 border-b border-white/10 bg-black/20">
                        <h3 class="text-2xl font-bold text-white flex items-center gap-4 tracking-wide">
                            <i data-lucide="map" class="w-7 h-7 text-cyan-400"></i> COMMAND CENTER
                        </h3>
                        <p class="text-[10px] text-slate-400 mt-2 font-mono tracking-[0.2em] uppercase">Global Data Stream: Active</p>
                    </div>
                    <div class="p-10 flex-1 overflow-y-auto space-y-10">
                        <div>
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-5">Visual Filters</h4>
                            <div class="grid grid-cols-2 gap-4">
                                ${Object.keys(s.activeLayers).map(layer => `
                                    <button onclick="RakshaApp.toggleLayer('${layer}')" class="p-5 rounded-2xl border text-xs font-bold uppercase transition-all flex items-center gap-3 cursor-pointer ${s.activeLayers[layer] ? 'bg-cyan-900/30 border-cyan-500 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]' : 'bg-white/5 border-white/5 text-slate-500 hover:bg-white/10'}">
                                        <div class="w-2 h-2 rounded-full ${s.activeLayers[layer] ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}"></div> ${layer}
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                        <div class="glass-panel p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/50 to-black/50">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Zone Analytics</h4>
                            ${s.selectedZone ? `
                                <div class="space-y-6 animate-in fade-in">
                                    <div class="flex justify-between items-center border-b border-white/10 pb-5">
                                        <span class="text-2xl font-bold text-white tracking-tight">${s.selectedZone.name}</span>
                                        <div class="flex flex-col items-end">
                                            <span class="text-4xl font-black ${s.selectedZone.score > 80 ? 'text-emerald-400' : 'text-rose-500'}">${s.selectedZone.score}</span>
                                            <span class="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Safety Index</span>
                                        </div>
                                    </div>
                                    <div class="space-y-4 text-xs font-mono tracking-wide">
                                        <div class="flex justify-between text-slate-400 items-center"><span>RISK LEVEL</span><span class="px-3 py-1 rounded-full ${s.selectedZone.risk === 'Low' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}">${s.selectedZone.risk}</span></div>
                                        <div class="flex justify-between text-slate-400"><span>LIGHTING</span><span class="text-yellow-400">${s.selectedZone.lighting}</span></div>
                                        <div class="flex justify-between text-slate-400"><span>PATROL ETA</span><span class="text-cyan-400">${s.selectedZone.police}</span></div>
                                    </div>
                                </div>
                            ` : `
                                <div class="text-center py-12 text-slate-600 text-xs font-mono tracking-wide">
                                    <div class="w-16 h-16 border border-dashed border-slate-700 rounded-full mx-auto mb-5 flex items-center justify-center animate-spin-slow"><i data-lucide="map" class="w-6 h-6"></i></div>
                                    SELECT A ZONE FOR INTEL
                                </div>
                            `}
                        </div>
                    </div>
                  </div>
                `;
            },

            renderLegal: function() {
                return `
                <div class="w-full pt-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div class="text-center mb-20">
                        <h2 class="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tight">Legal & Enforcement</h2>
                        <p class="text-slate-400 text-2xl">Direct encrypted line to authorities and AI-powered rights assistance.</p>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div class="space-y-10">
                            <!-- Emergency Dispatch Card -->
                            <div class="glass-card p-12 rounded-[3rem] border-l-8 border-rose-500 relative overflow-hidden group hover:bg-white/5 transition-colors shadow-2xl">
                                <div class="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] group-hover:bg-rose-500/20 transition-colors"></div>
                                <div class="relative z-10">
                                    <div class="flex justify-between items-start mb-10">
                                        <div>
                                            <h3 class="text-5xl font-bold text-white tracking-tight">Emergency Dispatch</h3>
                                            <p class="text-slate-400 text-sm mt-4 font-mono tracking-widest uppercase">Priority Line: 112</p>
                                        </div>
                                        <div class="p-6 bg-rose-500/20 rounded-3xl"><i data-lucide="siren" class="w-12 h-12 text-rose-500"></i></div>
                                    </div>
                                    <button class="shimmer w-full bg-gradient-to-r from-rose-600 to-rose-800 hover:from-rose-500 hover:to-rose-700 text-white py-8 rounded-3xl font-black text-2xl shadow-[0_0_50px_rgba(225,29,72,0.4)] flex items-center justify-center gap-5 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer">
                                        <i data-lucide="phone" class="w-8 h-8 animate-pulse"></i> INITIATE CALL
                                    </button>
                                </div>
                            </div>

                            <!-- Support Network Card -->
                            <div class="glass-card p-12 rounded-[3rem] border-l-8 border-purple-500 relative overflow-hidden group hover:bg-white/5 transition-colors shadow-2xl">
                                    <div class="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] group-hover:bg-purple-500/20 transition-colors"></div>
                                <div class="relative z-10">
                                    <div class="flex justify-between items-start mb-10">
                                        <div>
                                            <h3 class="text-5xl font-bold text-white tracking-tight">Support Network</h3>
                                            <p class="text-slate-400 text-sm mt-4 font-mono tracking-widest uppercase">Helpline: 1091</p>
                                        </div>
                                            <div class="p-6 bg-purple-500/20 rounded-3xl"><i data-lucide="heart" class="w-12 h-12 text-purple-500"></i></div>
                                    </div>
                                    <button class="shimmer w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white py-8 rounded-3xl font-black text-2xl shadow-[0_0_50px_rgba(147,51,234,0.4)] flex items-center justify-center gap-5 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer">
                                        <i data-lucide="phone" class="w-8 h-8"></i> CONTACT SUPPORT
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Chat Interface -->
                        <div class="h-full">
                            <div class="glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-[700px] border border-white/10 shadow-2xl relative">
                                <div class="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent pointer-events-none"></div>
                                <div class="p-8 border-b border-white/5 bg-black/20 flex items-center gap-6 backdrop-blur-xl">
                                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                                        <i data-lucide="scale" class="w-8 h-8 text-white"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-white tracking-wide text-xl">Community Secure Chat</h3>
                                        <div class="flex items-center gap-2 mt-1.5"><span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span><span class="text-[10px] text-emerald-400 font-mono tracking-widest uppercase">System Online</span></div>
                                    </div>
                                </div>
                                <div id="chat-messages" class="flex-1 p-8 overflow-y-auto space-y-6">
                                    ${this.renderMessages()}
                                </div>
                                <div class="p-6 bg-black/40 border-t border-white/5 backdrop-blur-xl">
                                    <div class="flex gap-4">
                                        <input id="chat-input" type="text" placeholder="Type a message..." class="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-rose-500/50 transition-colors font-medium placeholder:text-slate-600 focus:bg-white/10" onkeypress="if(event.key === 'Enter') RakshaApp.sendMessage()">
                                        <button onclick="RakshaApp.sendMessage()" class="bg-rose-600 hover:bg-rose-700 text-white p-4 rounded-2xl transition-all shadow-lg shadow-rose-600/20 hover:scale-105 active:scale-95 cursor-pointer"><i data-lucide="send" class="w-6 h-6"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            },

            // --- INTERACTIVITY FUNCTIONS ---

            toggleSOS: function() {
                if (this.state.sosActive) {
                    this.state.sosActive = false;
                    this.state.sosCountdown = 3;
                    clearInterval(this.sosTimer);
                    this.renderSOSUpdate(); // Re-render button part
                    return;
                }
                
                this.state.sosActive = true;
                this.renderSOSUpdate();
                
                this.sosTimer = setInterval(() => {
                    this.state.sosCountdown--;
                    if (this.state.sosCountdown <= 0) {
                         clearInterval(this.sosTimer);
                         // Keep active state saying "TRANSMITTING"
                    }
                    this.renderSOSUpdate();
                }, 1000);
            },

            renderSOSButton: function() {
                const active = this.state.sosActive;
                return `
                 ${active ? `
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                        <div class="w-60 h-60 border border-rose-500/30 rounded-full animate-ping" style="animation-duration: 2s"></div>
                        <div class="w-80 h-80 border border-rose-500/10 rounded-full animate-ping" style="animation-duration: 2s; animation-delay: 0.5s"></div>
                    </div>` : ''}

                    <button onclick="RakshaApp.toggleSOS()" class="relative z-10 w-44 h-44 md:w-52 md:h-52 rounded-full flex items-center justify-center transition-all duration-500 ${active ? 'bg-rose-600 scale-110 shadow-[0_0_120px_rgba(225,29,72,0.6)]' : 'bg-gradient-to-br from-rose-600 to-rose-900 hover:scale-105 hover:shadow-[0_0_80px_rgba(225,29,72,0.4)]'} group overflow-hidden border-4 border-white/5 cursor-pointer">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        <div class="absolute inset-0 rounded-full border-4 border-white/10 animate-[spin_10s_linear_infinite] border-t-white/40"></div>
                        <div class="absolute inset-4 rounded-full border border-white/20"></div>
                        
                        <div class="flex flex-col items-center text-white z-20">
                        <i data-lucide="siren" class="w-14 h-14 mb-2 transition-transform ${active ? 'animate-bounce' : 'group-hover:rotate-12'}"></i>
                        <span class="text-3xl font-black tracking-[0.2em] font-mono">SOS</span>
                        ${active ? `<span class="text-[10px] font-bold mt-2 bg-black/60 px-4 py-1 rounded-full backdrop-blur-md border border-red-400/50 font-mono tracking-widest uppercase animate-pulse">${this.state.sosCountdown > 0 ? `SENDING ${this.state.sosCountdown}s` : 'TRANSMITTING'}</span>` : ''}
                        </div>
                    </button>
                    <p class="mt-12 text-slate-500 text-center max-w-[200px] text-[10px] font-bold opacity-60 tracking-[0.2em] uppercase">Press & Hold for Emergency</p>
                `;
            },
            
            renderSOSUpdate: function() {
                const container = document.getElementById('sos-container');
                if(container) {
                    container.innerHTML = this.renderSOSButton();
                    lucide.createIcons();
                }
            },

            toggleFakeCall: function(show) {
                const el = document.getElementById('fake-call-interface');
                const incoming = document.getElementById('fc-incoming');
                const connected = document.getElementById('fc-connected');

                if (show) {
                    el.classList.remove('hidden');
                    incoming.classList.remove('hidden');
                    connected.classList.add('hidden');
                } else {
                    el.classList.add('hidden');
                    window.speechSynthesis.cancel();
                }
            },

            acceptFakeCall: function() {
                document.getElementById('fc-incoming').classList.add('hidden');
                document.getElementById('fc-connected').classList.remove('hidden');
                lucide.createIcons();

                const msg = new SpeechSynthesisUtterance("Hello? Where are you? Are you safe? I am waiting for you.");
                msg.rate = 1; 
                msg.pitch = 1.1;
                const voices = window.speechSynthesis.getVoices();
                const femaleVoice = voices.find(v => v.name.includes('Female') || v.lang === 'en-US');
                if (femaleVoice) msg.voice = femaleVoice;
                window.speechSynthesis.speak(msg);
            },

            toggleLayer: function(layer) {
                this.state.activeLayers[layer] = !this.state.activeLayers[layer];
                this.refreshMap();
            },

            toggleSatellite: function() {
                this.state.showSatellite = !this.state.showSatellite;
                this.refreshMap();
            },

            selectZone: function(zoneData) {
                this.state.selectedZone = zoneData;
                this.refreshMap();
            },

            refreshMap: function() {
                const container = document.getElementById('advanced-map-container');
                if(container) {
                    container.innerHTML = this.renderMapComponent();
                    lucide.createIcons();
                }
            },

            renderMessages: function() {
                const userId = this.state.user ? this.state.user.id : 'user_123';
                return this.state.messages.map(msg => `
                    <div class="flex ${msg.user_id === userId ? 'justify-end' : 'justify-start'}">
                        <div class="max-w-[85%] p-6 rounded-3xl text-sm leading-relaxed shadow-lg ${msg.user_id === userId ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-tr-sm' : 'bg-[#0f0f22] text-slate-200 rounded-tl-sm border border-white/10'}">
                            ${msg.content}
                        </div>
                    </div>
                `).join('');
            },

            sendMessage: function() {
                const input = document.getElementById('chat-input');
                const text = input.value.trim();
                if (!text) return;

                const newMsg = { id: Date.now(), user_id: this.state.user.id, content: text, created_at: new Date().toISOString() };
                this.state.messages.push(newMsg);
                input.value = '';
                
                this.updateChatUI();

                setTimeout(() => {
                    this.state.messages.push({ id: Date.now() + 1, user_id: 'system', content: 'Support request received. An agent will join shortly.', created_at: new Date().toISOString() });
                    this.updateChatUI();
                }, 1000);
            },

            updateChatUI: function() {
                const container = document.getElementById('chat-messages');
                if(container) {
                    container.innerHTML = this.renderMessages();
                    container.scrollTop = container.scrollHeight;
                }
            }
        };

        // Initialize App
        window.onload = function() {
            RakshaApp.init();
        };
    </script>
</body>
</html>
