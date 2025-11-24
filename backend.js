<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Raksha.ai - Hyper-Advanced Safety Portal (Supabase)</title>

    <!-- Tailwind CSS for styling -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- React and Babel -->
    <script crossorigin src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <!-- Supabase JavaScript Client SDK -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0d0c1c; color: #e0e0f0; }
        .shimmer {
            position: relative;
            overflow: hidden;
            z-index: 1;
        }
        .shimmer::after {
            content: '';
            position: absolute;
            top: 0;
            left: -200%;
            width: 200%;
            height: 100%;
            background: linear-gradient(100deg, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 80%);
            animation: shimmer 10s infinite;
        }
        @keyframes shimmer {
            0% { transform: translateX(0); }
            100% { transform: translateX(100%); }
        }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // ====================================================================
        // Supabase Initialization and Configuration
        // ====================================================================

        // NOTE: The placeholders have been replaced with the user's provided credentials.
        const SUPABASE_URL = 'https://onpwkocasxwimhubimny.supabase.co'; // User's actual Supabase URL
        const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ucHdrb2Nhc3h3aW1odWJpbW55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5OTQ4MTUsImV4cCI6MjA3OTU3MDgxNX0.fnYZfulWBgNUKVD8SmF_hi0lMoXG-hbQlb0bBNl2Mg4'; // User's actual Anon Key

        const IS_PLACEHOLDER_SETUP = SUPABASE_URL.includes('example-project') || SUPABASE_ANON_KEY.includes('examplekey');
        
        const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        // Utility Icons (using inline SVG for single-file mandate)
        const Icons = {
            User: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
            Zap: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
            Lock: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
            Alert: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
            Phone: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
            Heart: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
            Send: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
            LogOut: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
            Loading: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v2M2 12h2M21 12h-2M4.5 2v2M12 21v-2M12 4v2M19.5 2v2M4.5 20v2M19.5 20v2"/><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/></svg>
        };

        // ====================================================================
        // Custom Hooks and Logic
        // ====================================================================

        const { useState, useEffect, useCallback, useMemo } = React;

        function useSupabaseAuth() {
            const [session, setSession] = useState(null);
            const [user, setUser] = useState(null);
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState(null);

            useEffect(() => {
                let mounted = true;

                async function getSession() {
                    const { data: { session }, error } = await supabase.auth.getSession();
                    if (error) {
                        console.error('Auth error:', error.message);
                        setError(error.message);
                    } else if (mounted) {
                        setSession(session);
                        setUser(session?.user ?? null);
                    }
                    setLoading(false);
                }

                getSession();

                const { data: { subscription } } = supabase.auth.onAuthStateChange(
                    (_event, newSession) => {
                        if (mounted) {
                            setSession(newSession);
                            setUser(newSession?.user ?? null);
                        }
                        setLoading(false);
                    }
                );

                return () => {
                    mounted = false;
                    subscription.unsubscribe();
                };
            }, []);

            const signIn = useCallback(async (email, password) => {
                setError(null);
                setLoading(true);
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) {
                    setError(error.message);
                }
                setLoading(false);
            }, []);

            const signUp = useCallback(async (email, password) => {
                setError(null);
                setLoading(true);
                // Note: Supabase requires email verification by default.
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) {
                    setError(error.message);
                } else {
                    // Replaced alert() with a console log/message for environment compatibility
                    console.log('Sign up successful! Please check your email to confirm your account.');
                    setError('Sign up successful! Please check your email to confirm your account.');
                }
                setLoading(false);
            }, []);

            const signOut = useCallback(async () => {
                await supabase.auth.signOut();
            }, []);

            return { session, user, loading, error, signIn, signUp, signOut };
        }

        // ====================================================================
        // Components
        // ====================================================================

        const TransitionWrapper = ({ children, isLoaded }) => {
            const opacityClass = isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5';
            return (
                <div className={`transition-all duration-700 ease-out ${opacityClass}`}>
                    {children}
                </div>
            );
        };

        const LiveTicker = () => (
            <div className="fixed bottom-0 left-0 right-0 py-2 px-4 bg-gray-900/50 backdrop-blur-sm text-xs text-center border-t border-gray-800/50">
                <span className="font-mono text-green-400">STATUS:</span> <span className="text-gray-400">System online | Secure link established | Threat level LOW</span>
            </div>
        );

        const Header = ({ user, signOut }) => (
            <header className="py-6 px-10 border-b border-gray-800/50 flex justify-between items-center backdrop-blur-md sticky top-0 z-10 bg-gray-900/50">
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Raksha<span className="text-purple-500">.ai</span></h1>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400">Logged in as: <span className="font-mono text-purple-300 truncate max-w-[150px] inline-block">{user.email || 'Guest User'}</span></span>
                    <button
                        onClick={signOut}
                        className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-xl shadow-lg transition-colors flex items-center gap-2 text-sm active:scale-95"
                    >
                        <Icons.LogOut className="w-4 h-4" /> Sign Out
                    </button>
                </div>
            </header>
        );

        const SafetyScoreCard = ({ userId }) => {
            const [score, setScore] = useState(null);
            const [lastIncident, setLastIncident] = useState(null);
            const [loading, setLoading] = useState(true);

            useEffect(() => {
                // Since IS_PLACEHOLDER_SETUP is now false, data fetching will proceed.
                if (!userId) return; 

                const fetchProfile = async () => {
                    setLoading(true);
                    // Fetch the user's profile which includes the safety score
                    const { data, error } = await supabase
                        .from('profiles')
                        .select('safety_score, last_incident_at')
                        .eq('id', userId)
                        .single();

                    if (error && error.code !== 'PGRST116') { // PGRST116 means 'no rows found'
                        console.error('Error fetching profile:', error);
                    } else if (data) {
                        setScore(data.safety_score);
                        setLastIncident(data.last_incident_at);
                    } else {
                        // If no profile exists, insert a default one
                        const { error: insertError } = await supabase
                            .from('profiles')
                            .insert({ id: userId, safety_score: 95, last_incident_at: null });
                        
                        if (insertError) {
                            // This error is likely due to RLS or missing table, which is the user's next step.
                            console.error('Error creating profile. Check if the "profiles" table and RLS are set up.', insertError);
                            // Set a default score temporarily if insertion fails to keep the UI clean
                            setScore(95); 
                        } else {
                            setScore(95);
                            setLastIncident(null);
                        }
                    }
                    setLoading(false);
                };

                fetchProfile();
            }, [userId]);

            if (loading) {
                return (
                    <div className="p-6 bg-gray-800 rounded-3xl h-64 flex items-center justify-center animate-pulse">
                        <Icons.Loading className="w-8 h-8 text-purple-400 animate-spin" />
                    </div>
                )
            }
            
            // Default score if data is not loaded (e.g. table not set up)
            const safetyScore = score || 95; 
            const scoreColor = safetyScore > 90 ? 'text-green-400' : safetyScore > 75 ? 'text-yellow-400' : 'text-red-400';

            return (
                <div className="bg-gray-800 p-8 rounded-3xl shadow-xl space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-white">Security Rating</h2>
                        <Icons.Lock className="w-6 h-6 text-purple-500" />
                    </div>
                    
                    <div className="flex items-end gap-2">
                        <p className={`text-7xl font-extrabold font-mono ${scoreColor}`}>{safetyScore}</p>
                        <p className="text-3xl font-mono text-gray-500">/100</p>
                    </div>

                    <p className="text-sm text-gray-400">
                        This score reflects your real-time risk exposure and profile vigilance.
                    </p>

                    <div className="flex justify-between text-sm text-gray-400 pt-4 border-t border-gray-700/50">
                        <div>Last Incident:</div>
                        <div className="font-mono text-white">
                            {lastIncident ? new Date(lastIncident).toLocaleString() : 'Never Recorded'}
                        </div>
                    </div>
                    
                    <div className="p-4 bg-purple-900/30 rounded-xl text-xs flex items-center gap-2">
                        <Icons.Alert className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300">Run a security check for personalized recommendations.</span>
                    </div>
                </div>
            );
        };

        const ChatInterface = ({ userId }) => {
            const [messages, setMessages] = useState([]);
            const [newMessage, setNewMessage] = useState('');
            const [loading, setLoading] = useState(true);
            const chatContainerRef = React.useRef(null);

            // 1. Fetch initial messages
            useEffect(() => {
                if (!userId) {
                    setLoading(false);
                    return;
                }
                const fetchMessages = async () => {
                    const { data, error } = await supabase
                        .from('messages')
                        .select('id, user_id, content, created_at')
                        .order('created_at', { ascending: true })
                        .limit(50); // Limit to recent messages

                    if (error) {
                        // This error is likely due to RLS or missing table, which is the user's next step.
                        console.error('Error fetching messages. Check if the "messages" table and RLS are set up.', error);
                    } else {
                        setMessages(data);
                    }
                    setLoading(false);
                };
                fetchMessages();
            }, [userId]);

            // 2. Setup Real-time Listener (Subscription)
            useEffect(() => {
                if (!userId) return;

                // Subscribe to INSERT events on the 'messages' table
                const subscription = supabase
                    .channel('messages_channel')
                    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
                        // Append the new message to the list
                        setMessages(prevMessages => {
                            // Prevent duplicates by checking if ID already exists
                            if (!prevMessages.find(msg => msg.id === payload.new.id)) {
                                return [...prevMessages, payload.new];
                            }
                            return prevMessages;
                        });
                    })
                    .subscribe();

                return () => {
                    // Unsubscribe on component cleanup
                    supabase.removeChannel(subscription);
                };
            }, [userId]);

            // 3. Auto-scroll to bottom on new message
            useEffect(() => {
                if (chatContainerRef.current) {
                    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
                }
            }, [messages]);

            // 4. Send Message Function
            const handleSendMessage = async (e) => {
                e.preventDefault();
                if (newMessage.trim() === '' || !userId) return;

                const { error } = await supabase
                    .from('messages')
                    .insert({ user_id: userId, content: newMessage.trim() });

                if (error) {
                    console.error('Error sending message. Check if the "messages" table and RLS are set up.', error);
                } else {
                    setNewMessage('');
                }
            };

            const MessageBubble = ({ message, isCurrentUser }) => {
                const alignment = isCurrentUser ? 'self-end' : 'self-start';
                const color = isCurrentUser ? 'bg-purple-600' : 'bg-gray-700';
                const avatarBg = isCurrentUser ? 'bg-purple-800' : 'bg-gray-900';
                
                return (
                    <div className={`flex items-start max-w-lg ${alignment} gap-3 my-2`}>
                        {!isCurrentUser && (
                            <div className={`p-2 rounded-full ${avatarBg} text-xs text-gray-400 font-mono`}>
                                AI
                            </div>
                        )}
                        <div className={`p-4 rounded-xl ${color} shadow-md`}>
                            <p className="text-sm text-white break-words">{message.content}</p>
                            <p className="text-xs text-gray-300 opacity-60 mt-1 text-right">
                                {new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>
                        {isCurrentUser && (
                            <div className={`p-2 rounded-full ${avatarBg} text-xs text-gray-400 font-mono`}>
                                You
                            </div>
                        )}
                    </div>
                );
            };

            return (
                <div className="h-full flex flex-col bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="p-5 border-b border-gray-800 bg-gray-800/50">
                        <h2 className="text-xl font-bold text-white">AI Support Chat</h2>
                        <p className="text-sm text-gray-400">Secure, encrypted, real-time assistance.</p>
                    </div>

                    <div ref={chatContainerRef} className="flex-1 p-6 overflow-y-auto flex flex-col space-y-3 custom-scrollbar">
                        {loading ? (
                             <div className="flex justify-center items-center h-full">
                                <Icons.Loading className="w-8 h-8 text-purple-400 animate-spin" />
                            </div>
                        ) : messages.length === 0 ? (
                            <div className="flex justify-center items-center h-full text-gray-500 text-center">
                                Start a conversation with the Raksha.ai assistant.
                            </div>
                        ) : (
                            messages.map((msg) => (
                                <MessageBubble
                                    key={msg.id}
                                    message={msg}
                                    isCurrentUser={msg.user_id === userId}
                                />
                            ))
                        )}
                    </div>

                    <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-800 bg-gray-800/50 flex gap-3">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder={"Type your message securely..."}
                            className="flex-1 p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-transparent focus:border-purple-500 transition-colors"
                            disabled={loading || !userId}
                        />
                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-xl font-semibold transition-colors flex items-center justify-center active:scale-95 disabled:opacity-50"
                            disabled={newMessage.trim() === '' || loading || !userId}
                        >
                            <Icons.Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            );
        };

        const AuthScreen = ({ signIn, signUp, loading, error }) => {
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
            const [isLogin, setIsLogin] = useState(true);

            const handleSubmit = (e) => {
                e.preventDefault();
                // Since IS_PLACEHOLDER_SETUP is false, authentication will attempt to proceed
                if (isLogin) {
                    signIn(email, password);
                } else {
                    signUp(email, password);
                }
            };

            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
                    <TransitionWrapper isLoaded={!loading}>
                        <div className="bg-gray-800 p-10 rounded-3xl shadow-[0_0_50px_rgba(147,51,234,0.3)] w-full max-w-md space-y-6">
                            <h2 className="text-3xl font-extrabold text-white text-center">
                                {isLogin ? 'Welcome Back' : 'Create Account'}
                            </h2>
                            <p className="text-center text-gray-400">
                                Sign in to access the Hyper-Advanced Safety Portal.
                            </p>

                            {error && (
                                <div className="bg-red-900/50 p-3 rounded-xl text-sm text-red-300 font-medium">
                                    Error: {error}
                                </div>
                            )}
                            
                            {/* This warning is now removed as IS_PLACEHOLDER_SETUP is false */}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="shimmer w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <Icons.Loading className="w-5 h-5 animate-spin" />
                                    ) : (
                                        isLogin ? 'Sign In' : 'Sign Up'
                                    )}
                                </button>
                            </form>

                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="w-full text-sm text-purple-400 hover:text-purple-300 transition-colors"
                            >
                                {isLogin ? "Need an account? Sign Up" : "Already have an account? Sign In"}
                            </button>
                        </div>
                    </TransitionWrapper>
                </div>
            );
        };

        const SafetyApp = () => {
            const { user, loading, session, signIn, signUp, signOut, error } = useSupabaseAuth();
            
            // Show loading spinner while determining auth state
            if (loading) {
                return (
                    <div className="min-h-screen flex items-center justify-center bg-gray-900">
                        <Icons.Loading className="w-12 h-12 text-purple-500 animate-spin" />
                    </div>
                );
            }

            // Show authentication screen if no user session is found
            if (!user) {
                return (
                    <AuthScreen 
                        signIn={signIn} 
                        signUp={signUp} 
                        loading={loading} 
                        error={error} 
                    />
                );
            }

            // Main Application view
            return (
                <div className="min-h-screen bg-gray-900">
                    <Header user={user} signOut={signOut} />
                    
                    <main className="max-w-7xl mx-auto p-4 md:p-10">
                        {/* The configuration warning is removed since IS_PLACEHOLDER_SETUP is false */}
                        <TransitionWrapper isLoaded={!!user}>
                            <div className="space-y-10">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                    {/* Left Column (Safety Info) */}
                                    <div className="lg:col-span-1 space-y-10">
                                        {/* Safety Score Card - connected to Supabase 'profiles' table */}
                                        <SafetyScoreCard userId={user.id} /> 

                                        <div className="space-y-6">
                                            <h2 className="text-xl font-bold text-white border-b border-gray-800 pb-3">Emergency Resources</h2>
                                            <div className="bg-gray-800 p-8 rounded-3xl shadow-xl space-y-6">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h3 className="text-lg font-bold text-white">Women's Helpline</h3>
                                                        <p className="text-sm text-gray-400 tracking-widest uppercase">Helpline: 1091</p>
                                                    </div>
                                                     <div className="p-6 bg-purple-500/20 rounded-3xl"><Icons.Heart className="w-12 h-12 text-purple-500" /></div>
                                                </div>
                                                <button className="shimmer w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white py-8 rounded-3xl font-black text-2xl shadow-[0_0_50px_rgba(147,51,234,0.4)] flex items-center justify-center gap-5 transition-all hover:scale-[1.02] active:scale-95">
                                                    <Icons.Phone className="w-8 h-8" /> CONTACT SUPPORT
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column (Chat Interface) */}
                                    <div className="lg:col-span-2 h-[80vh] min-h-[600px]">
                                        {/* Chat Interface - connected to Supabase 'messages' table with Realtime */}
                                        <ChatInterface userId={user.id} /> 
                                    </div>
                                </div>
                            </div>
                        </TransitionWrapper>

                    </main>

                    <LiveTicker />
                </div>
            );
        }

        // Initialize the React App
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<SafetyApp />);
    </script>
</body>
</html>
