import firebase from './FirebaseConfig';

const auth = firebase.auth();

const registerUser = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

const LoginUser = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
}

const logoutUser = () => {
    return auth.signOut();
}

const sendPasswordResetEmail = (email) => {
    return auth.sendPasswordResetEmail(email);
}



const subscribeToAuthChanges = (handleAuthChange) => {
    auth.onAuthStateChanged((user) => {
        handleAuthChange(user);
    });
};


const firebaseAuthService = {

    registerUser,
    LoginUser,
    logoutUser,
    sendPasswordResetEmail,
    subscribeToAuthChanges
};

export default firebaseAuthService;