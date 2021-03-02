
importScripts(
  'https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyChcPHdTMHnIsraLntqj0j1S7OSdVzM1vQ","authDomain":"web-derka-y-va-1538676350230.firebaseapp.com","projectId":"web---derka-y-va-1538676350230","storageBucket":"web---derka-y-va-1538676350230.appspot.com","messagingSenderId":"712801085814","appId":"1:712801085814:web:8711ae39d06920eabd7257"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"goToLupasGithub","url":"https:\u002F\u002Fgithub.com\u002Flupas"},{"action":"goToModuleGithub","url":"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Ffirebase-module"}]
  const action = actions.find(x => x.action === e.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})
