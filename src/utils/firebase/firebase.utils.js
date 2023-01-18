import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhVpcku_pHaalvoGofldVl5MAW9S2pRF0",
  authDomain: "crwn-clothing-db-43795.firebaseapp.com",
  projectId: "crwn-clothing-db-43795",
  storageBucket: "crwn-clothing-db-43795.appspot.com",
  messagingSenderId: "1011430657959",
  appId: "1:1011430657959:web:5f83b78cf908cd036bf082"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additonalInformation = {}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  // If user data does not exist
  if (!userSnapshot.exists()) {
    // Getting userAuth stuff from sign-in compnent response
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      // create/set the document with the data from userAuth in my collection
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additonalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  // If user data exists
  // Return userDocRef
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
