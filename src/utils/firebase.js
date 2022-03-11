import { initializeApp } from "firebase/app";

import {
 GoogleAuthProvider,
 getAuth,
 signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  getAdditionalUserInfo
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJX1xYgmiOB0n5a0en0fHWbCMP5Kqw4IU",
    authDomain: "pwebproject-f81a0.firebaseapp.com",
    projectId: "pwebproject-f81a0",
    storageBucket: "pwebproject-f81a0.appspot.com",
    messagingSenderId: "185430765205",
    appId: "1:185430765205:web:04e79009cfe58475c3b59c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const connexionAvecGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const connexionAvecEmailEtMdp = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const inscriptionAvecEmailEtMdp = async (name, email, password) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const user = result.user;
        await getAdditionalUserInfo(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch(err) {
        console.error(err);
        alert(err.message);
    }
};

const changementMotDePasse = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Lien de changement de mot de passe envoyé à ${email}");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const deconnexion = () => {
    signOut(auth);
}

export {
    auth,
    db,
    connexionAvecGoogle,
    connexionAvecEmailEtMdp,
    inscriptionAvecEmailEtMdp,
    changementMotDePasse,
    deconnexion,
};