// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAbykYm8dRoyVbW9F1xBpokrTOldku_fhE',
  authDomain: 'house-marketplace-app-d26ad.firebaseapp.com',
  projectId: 'house-marketplace-app-d26ad',
  storageBucket: 'house-marketplace-app-d26ad.appspot.com',
  messagingSenderId: '77061584387',
  appId: '1:77061584387:web:74110487f14321afddc036',
  measurementId: 'G-WZ4BCGN90N',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
