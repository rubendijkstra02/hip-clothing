import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBU83Rbsdgu4jwG0KZtplQlZXyBfIuCECU",
    authDomain: "hip-clothing-db.firebaseapp.com",
    projectId: "hip-clothing-db",
    storageBucket: "hip-clothing-db.appspot.com",
    messagingSenderId: "204307497553",
    appId: "1:204307497553:web:b98d2b15c99f00bd016e70",
    measurementId: "G-3ZSXFDEWTJ"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()){
        const {displayName, email} = userAuth
        const createdAt= new Date()
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error){
            console.log('error creating the user', error.message)
        }

    }

    return userDocRef
}