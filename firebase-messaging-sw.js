importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:            "AIzaSyBn_T427SM0L3C8Wr6GRPqIkvwXQ42GAQk",
  authDomain:        "askar-3879e.firebaseapp.com",
  databaseURL:       "https://askar-3879e-default-rtdb.firebaseio.com",
  projectId:         "askar-3879e",
  storageBucket:     "askar-3879e.firebasestorage.app",
  messagingSenderId: "56810290178",
  appId:             "1:56810290178:web:b8f58a76601f4531befb1b"
});

const messaging = firebase.messaging();

// Уведомление когда приложение закрыто / в фоне
messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || '📚 Новое ДЗ', {
    body: body || '',
    icon: './Picsart_25-04-29_18-23-38-058.jpg',
    badge: './Picsart_25-04-29_18-23-38-058.jpg',
    vibrate: [200, 100, 200],
    data: { url: self.location.origin }
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || '/')
  );
});
