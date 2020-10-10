import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBeasnR1POYEx6WhE-o0tc07jju6xiLdhs",
  authDomain: "crwn-db-91cb8.firebaseapp.com",
  databaseURL: "https://crwn-db-91cb8.firebaseio.com",
  projectId: "crwn-db-91cb8",
  storageBucket: "crwn-db-91cb8.appspot.com",
  messagingSenderId: "461578778770",
  appId: "1:461578778770:web:2296949eb7d6a5cb778e4b",
  measurementId: "G-ZFXZFPZQ6H",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
