import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJVTWX3XgK_H7P-zl69_Rra6RQduIZyrM",
    authDomain: "ecommerce-react-362d7.firebaseapp.com",
    databaseURL: "https://ecommerce-react-362d7.firebaseio.com",
    projectId: "ecommerce-react-362d7",
    storageBucket: "ecommerce-react-362d7.appspot.com",
    messagingSenderId: "797011941013",
    appId: "1:797011941013:web:69e39d5c0e7cdae0fbed9c"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    console.log(snapShot)

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;