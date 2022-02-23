import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
        apiKey: "AIzaSyAZS8HdNSMDVChrE-mTpN3gjuYVTxTR9Cc",
        authDomain: "portfolio-7fd34.firebaseapp.com",
        // The value of `databaseURL` depends on the location of the database
        databaseURL: "https://Portfolio.firebaseio.com",
        projectId: "portfolio-7fd34",
        storageBucket: "portfolio-7fd34.appspot.com",
        messagingSenderId: "277366674470",
        appId: "1:277366674470:web:a544c15634bf94522cc2e7",
        // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
        measurementId: "G-MEASUREMENT_ID",
      };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}