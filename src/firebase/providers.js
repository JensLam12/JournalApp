import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { FirebaseAuth } from "./config";

 const provider = new GoogleAuthProvider();
 const auth = getAuth();

 export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    }catch(error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
 }

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {

    try {
        const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = response.user;
        await updateProfile( FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }
    }catch(error) {
        return { ok: false, errorMessage: error.message}
    }
}


export const loginWithEmailPassword = async ({ email, password }) => {

    try {
        const { user } = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = user;
        
        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }
    }catch(error) {
        return { ok: false, errorMessage: error.message}
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}