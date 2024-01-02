import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDBTiS7sMPkOkBa9Qi-aR7z9qs7N6QOXEU",
  authDomain: "my-clothing-497b5.firebaseapp.com",
  projectId: "my-clothing-497b5",
  storageBucket: "my-clothing-497b5.appspot.com",
  messagingSenderId: "117645130160",
  appId: "1:117645130160:web:55ab2838ed242f1dd13e75",
  measurementId: "G-H6RE07VRZD",
};

const app = initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // Use doc from Firestore to reference a document
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const {displayName, email} = userAuth;
    const createAt = new Date();
    try{
      await setDoc(userRef,{displayName,email,createAt,...additionalData})
      
    }
    catch(error){
      console.log('error creating user',error.message)
    }
  }
  return userRef;
};

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
