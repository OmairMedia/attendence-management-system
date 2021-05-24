import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBFL5aCl7Rs1nJ6jiPKrKFhlnDdQSb7XAQ',
  authDomain: 'atms-df4a3.firebaseapp.com',
  projectId: 'atms-df4a3',
  storageBucket: 'atms-df4a3.appspot.com',
  messagingSenderId: '560217765822',
  appId: '1:560217765822:web:4a0934980cfbc6aaf7abef',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
