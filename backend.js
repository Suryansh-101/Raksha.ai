// ==========================================
// --- APP.XYZ / BACKEND.JS ---
// ==========================================
// Instructions: 
// 1. Include Firebase SDKs in your HTML <head> before this script.
// 2. This script initializes Firebase and exposes a global 'BackendService'.

// --- 1. CONFIGURATION ---
// Replace with your actual Firebase Config object
const firebaseConfig = {
    apiKey: "AIzaSyCoQFhG5XCFsxEn9IbujCVqEApVqjpiXA0",
  authDomain: "raksha-945cb.firebaseapp.com",
  projectId: "raksha-945cb",
  storageBucket: "raksha-945cb.firebasestorage.app",
  messagingSenderId: "712885094330",
  appId: "1:712885094330:web:d53c151bdf3abfe75e3f83",
  measurementId: "G-4K48CNZCKR"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

// --- 2. AUTHENTICATION SERVICE ---
// Helper to handle anonymous or custom token login
window.initAuth = async (customToken) => {
    try {
        if (customToken) {
            await auth.signInWithCustomToken(customToken);
        } else {
            await auth.signInAnonymously();
        }
        return auth.currentUser;
    } catch (error) {
        console.error("Auth Error:", error);
        return null;
    }
};

// --- 3. BACKEND API SERVICES ---
window.BackendService = {
    
    // Feature: Send SOS & Upload Evidence
    // Usage: BackendService.sendSOS(user, {lat: 28.5, lng: 77.2});
    sendSOS: async (user, locationData) => {
        if (!user) return;
        const appId = 'default-app-id'; // Replace with dynamic ID if needed

        try {
            // 1. Create Alert in Firestore
            await db.collection('artifacts').doc(appId)
                .collection('users').doc(user.uid)
                .collection('alerts').add({
                    type: 'SOS',
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    status: 'ACTIVE',
                    location: locationData || { lat: 0, lng: 0 },
                    deviceStatus: { battery: 45, network: '4G' } // Mock device stats
                });
            
            // 2. Create Evidence Record (Simulating file upload metadata)
            await db.collection('artifacts').doc(appId)
                .collection('users').doc(user.uid)
                .collection('evidence').add({
                    type: 'AUDIO_VIDEO',
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    url: 'https://storage.googleapis.com/demo-evidence/rec-001.mp4', // Mock URL
                    duration: '30s'
                });

            console.log("SUCCESS: SOS sent and evidence logged to backend.");
            return true;
        } catch (error) {
            console.error("BACKEND ERROR (SOS):", error);
            return false;
        }
    },

    // Feature: Public Safety Map
    // Usage: const unsubscribe = BackendService.getSafeZones((data) => { ... });
    getSafeZones: (callback) => {
        const appId = 'default-app-id';
        // Real-time listener for public safety data
        return db.collection('artifacts').doc(appId)
            .collection('public').doc('data')
            .collection('locations')
            .limit(50)
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
                callback(data);
            }, error => {
                console.error("BACKEND ERROR (Map):", error);
                callback([]); // Return empty on error
            });
    },

    // Feature: Report an Incident
    reportIncident: async (user, type, lat, lng) => {
        if(!user) return;
        const appId = 'default-app-id';
        try {
            await db.collection('artifacts').doc(appId)
                .collection('public').doc('data')
                .collection('locations').add({
                    type: type, // 'safe' or 'danger'
                    lat: lat,
                    lng: lng,
                    reportedBy: user.uid,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    verified: false
                });
            console.log("SUCCESS: Incident reported.");
        } catch (error) {
            console.error("BACKEND ERROR (Report):", error);
        }
    },

    // Feature: AI Legal Chatbot
    // Usage: const reply = await BackendService.chatWithAI("What is a Zero FIR?");
    chatWithAI: async (message) => {
        // Simulating AI processing time
        await new Promise(r => setTimeout(r, 800));
        
        const lowerMsg = message.toLowerCase();
        
        // Simple Rule-based Logic (Replace with actual LLM API call if available)
        if (lowerMsg.includes('fir')) return "A Zero FIR can be filed in any police station regardless of jurisdiction. If they refuse, cite Section 154 of CrPC.";
        if (lowerMsg.includes('stalk') || lowerMsg.includes('follow')) return "Stalking is a crime under Section 354D of the IPC. You can report this online at cybercrime.gov.in or dial 1091.";
        if (lowerMsg.includes('domestic') || lowerMsg.includes('husband') || lowerMsg.includes('beat')) return "The Protection of Women from Domestic Violence Act, 2005 protects you. You can seek a Protection Order from a Magistrate.";
        if (lowerMsg.includes('night') || lowerMsg.includes('work')) return "Under the Shops and Establishments Act, women have the right to safe transport if working after 7 PM.";
        if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) return "Hello. I am your Legal AI Assistant. You can ask me about FIRs, stalking laws, domestic violence rights, or emergency numbers.";
        
        return "I can provide legal information regarding women's safety. Could you be more specific? (Try asking about 'FIR', 'Stalking', or 'Domestic Violence')";
    },

    // Feature: User Alerts Subscription
    subscribeToAlerts: (user, callback) => {
        if (!user) return () => {};
        const appId = 'default-app-id';
        return db.collection('artifacts').doc(appId)
            .collection('users').doc(user.uid)
            .collection('alerts')
            .orderBy('timestamp', 'desc')
            .limit(1)
            .onSnapshot(snapshot => {
                const alerts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                callback(alerts);
            });
    }
};
