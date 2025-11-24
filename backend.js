// ==========================================
// --- APP.XYZ / BACKEND.JS (OFFLINE MODE) ---
// ==========================================
// Instructions: 
// 1. This script mocks a backend using Browser LocalStorage.
// 2. No internet connection or API keys are required.

console.log("⚠️ RUNNING IN OFFLINE DEMO MODE");

// --- 1. LOCAL STORAGE HELPERS ---
const DB_KEYS = {
    ALERTS: 'raksha_alerts_v1',
    LOCATIONS: 'raksha_locations_v1',
    USER: 'raksha_user_v1'
};

// Seed initial data if empty
const seedDatabase = () => {
    if (!localStorage.getItem(DB_KEYS.LOCATIONS)) {
        const initialLocations = [
            { id: '1', type: 'safe', lat: 28.5, lng: 77.2, verified: true, timestamp: Date.now() },
            { id: '2', type: 'danger', lat: 28.51, lng: 77.21, verified: false, timestamp: Date.now() }
        ];
        localStorage.setItem(DB_KEYS.LOCATIONS, JSON.stringify(initialLocations));
    }
    if (!localStorage.getItem(DB_KEYS.ALERTS)) {
        localStorage.setItem(DB_KEYS.ALERTS, JSON.stringify([]));
    }
};
seedDatabase();

// --- 2. AUTHENTICATION SERVICE (MOCK) ---
window.initAuth = async () => {
    // Simulate network delay
    await new Promise(r => setTimeout(r, 500));
    
    const mockUser = {
        uid: "offline-user-123",
        email: "demo@raksha.ai",
        displayName: "Aarohi (Offline)",
        isAnonymous: true
    };
    
    console.log("Auth: Logged in as", mockUser.displayName);
    return mockUser;
};

// --- 3. BACKEND API SERVICES (MOCK) ---
window.BackendService = {
    
    // Feature: Send SOS & Upload Evidence
    sendSOS: async (user, locationData) => {
        if (!user) return;
        
        console.log("Backend: Processing SOS...");
        await new Promise(r => setTimeout(r, 1500)); // Fake processing delay

        try {
            const newAlert = {
                id: Date.now().toString(),
                type: 'SOS',
                timestamp: new Date().toISOString(),
                status: 'ACTIVE',
                location: locationData || { lat: 0, lng: 0 },
                deviceStatus: { battery: 45, network: 'Offline Demo' }
            };

            // Save to LocalStorage
            const alerts = JSON.parse(localStorage.getItem(DB_KEYS.ALERTS) || "[]");
            alerts.unshift(newAlert); // Add to top
            localStorage.setItem(DB_KEYS.ALERTS, JSON.stringify(alerts));
            
            console.log("SUCCESS: SOS sent locally.");
            return true;
        } catch (error) {
            console.error("BACKEND ERROR (SOS):", error);
            return false;
        }
    },

    // Feature: Public Safety Map
    getSafeZones: (callback) => {
        console.log("Backend: Fetching Map Data...");
        
        // 1. Get data from LocalStorage
        const data = JSON.parse(localStorage.getItem(DB_KEYS.LOCATIONS) || "[]");
        
        // 2. Return data immediately
        callback(data);

        // 3. Mock Real-time updates (Optional: Add a random point every 10 seconds)
        // This is just to show the UI "updating" live during a demo
        /*
        const interval = setInterval(() => {
            const randomType = Math.random() > 0.5 ? 'safe' : 'danger';
            const newDataPoint = {
                id: Date.now().toString(),
                type: randomType,
                lat: 28.5 + (Math.random() * 0.01),
                lng: 77.2 + (Math.random() * 0.01),
                verified: false
            };
            // In a real app, we would merge this, but here we just re-fetch
            const currentData = JSON.parse(localStorage.getItem(DB_KEYS.LOCATIONS) || "[]");
            callback([...currentData, newDataPoint]); 
        }, 10000);
        return () => clearInterval(interval); // Unsubscribe function
        */

        return () => {}; // No-op unsubscribe for static demo
    },

    // Feature: Report an Incident
    reportIncident: async (user, type, lat, lng) => {
        if(!user) return;
        await new Promise(r => setTimeout(r, 600)); // Delay

        const newReport = {
            id: Date.now().toString(),
            type: type, // 'safe' or 'danger'
            lat: lat,
            lng: lng,
            reportedBy: user.uid,
            timestamp: new Date().toISOString(),
            verified: false
        };

        const locations = JSON.parse(localStorage.getItem(DB_KEYS.LOCATIONS) || "[]");
        locations.push(newReport);
        localStorage.setItem(DB_KEYS.LOCATIONS, JSON.stringify(locations));
        
        console.log(`SUCCESS: Reported ${type} zone locally.`);
    },

    // Feature: AI Legal Chatbot
    chatWithAI: async (message) => {
        // Simulating AI processing time
        await new Promise(r => setTimeout(r, 800));
        
        const lowerMsg = message.toLowerCase();
        
        // Local Logic Rule Engine
        if (lowerMsg.includes('fir')) return "A Zero FIR can be filed in any police station regardless of jurisdiction. If they refuse, cite Section 154 of CrPC.";
        if (lowerMsg.includes('stalk') || lowerMsg.includes('follow')) return "Stalking is a crime under Section 354D of the IPC. You can report this online at cybercrime.gov.in or dial 1091.";
        if (lowerMsg.includes('domestic') || lowerMsg.includes('husband') || lowerMsg.includes('beat') || lowerMsg.includes('hit')) return "The Protection of Women from Domestic Violence Act, 2005 protects you. You can seek a Protection Order from a Magistrate.";
        if (lowerMsg.includes('night') || lowerMsg.includes('work') || lowerMsg.includes('office')) return "Under the Shops and Establishments Act, women have the right to safe transport if working after 7 PM.";
        if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) return "Hello. I am your Legal AI Assistant. You can ask me about FIRs, stalking laws, domestic violence rights, or emergency numbers.";
        if (lowerMsg.includes('help')) return "If you are in immediate danger, please use the SOS button or dial 112. For legal advice, ask me about specific laws.";
        
        return "I can provide legal information regarding women's safety. Could you be more specific? (Try asking about 'FIR', 'Stalking', or 'Domestic Violence')";
    },

    // Feature: User Alerts Subscription
    subscribeToAlerts: (user, callback) => {
        // Return existing alerts immediately
        const alerts = JSON.parse(localStorage.getItem(DB_KEYS.ALERTS) || "[]");
        callback(alerts);

        // Mock listening for "new" alerts coming from other devices
        // For the hackathon demo, we just rely on page refresh or local state
        return () => {};
    }
};
