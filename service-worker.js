// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging.js');

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1A4d2y0_MNZIKM1uR68E_MSZqFMKPD64",
    authDomain: "zaroorireturn.firebaseapp.com",
    projectId: "zaroorireturn",
    storageBucket: "zaroorireturn.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef123456"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = firebase.messaging();

// Handle background messages (notifications received when the site is closed)
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message: ', payload);

    // Customize the notification
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://blogger.googleusercontent.com/img/a/AVvXsEiNJ8qThRwVB9BFu259_Z7IvS7jnl2BTwu9Ts3vJ-lH_PBktSxrmQt3hI7C7P2pyQL0qqPzE1Ln-LPz-La3_wnuzAGOv94SNLaPAsJDexCBo-WGR_LwjZt42EWzXCpSl173m5PIr6EL16lGAq7WQhtJj80MpgcmQOWoxV5o0RE9qXQ-HX_D3MWDDvtQ-Cs=s500' // Customize your icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle push events (when the site is open)
self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: data.icon || 'https://blogger.googleusercontent.com/img/a/AVvXsEiNJ8qThRwVB9BFu259_Z7IvS7jnl2BTwu9Ts3vJ-lH_PBktSxrmQt3hI7C7P2pyQL0qqPzE1Ln-LPz-La3_wnuzAGOv94SNLaPAsJDexCBo-WGR_LwjZt42EWzXCpSl173m5PIr6EL16lGAq7WQhtJj80MpgcmQOWoxV5o0RE9qXQ-HX_D3MWDDvtQ-Cs=s500', // Your icon
        badge: data.badge || 'https://blogger.googleusercontent.com/img/a/AVvXsEiNJ8qThRwVB9BFu259_Z7IvS7jnl2BTwu9Ts3vJ-lH_PBktSxrmQt3hI7C7P2pyQL0qqPzE1Ln-LPz-La3_wnuzAGOv94SNLaPAsJDexCBo-WGR_LwjZt42EWzXCpSl173m5PIr6EL16lGAq7WQhtJj80MpgcmQOWoxV5o0RE9qXQ-HX_D3MWDDvtQ-Cs=s500' // Badge icon (optional)
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});
