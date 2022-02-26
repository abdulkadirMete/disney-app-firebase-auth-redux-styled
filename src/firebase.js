import { initializeApp } from 'firebase/app';
import { getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBCwUWDRgozrZYlxpvZjiSFRS5lGkfGTDw",
  authDomain: "twitter-clone-yt-4a6ad.firebaseapp.com",
  databaseURL: "https://twitter-clone-yt-4a6ad-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-yt-4a6ad",
  storageBucket: "twitter-clone-yt-4a6ad.appspot.com",
  messagingSenderId: "534549827524",
  appId: "1:534549827524:web:994dea2e101939f97ade91",
  measurementId: "G-8HVWTFGP5V"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;


