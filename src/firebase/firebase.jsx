import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAylV9VCMVpw0FW-HENEgEhhtTbjvxryM0",
  authDomain: "proyecto-tienda-gamer.firebaseapp.com",
  projectId: "proyecto-tienda-gamer",
  storageBucket: "proyecto-tienda-gamer.appspot.com",
  messagingSenderId: "464762931913",
  appId: "1:464762931913:web:d991c555352b78da341b18"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);