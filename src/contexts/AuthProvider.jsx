import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // User Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // user login 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // current user observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user observer');
            setUser(currentUser)
        });
        return () => unsubscribe();
    }, [])

    // sign out 
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        signIn,
        logOut,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;