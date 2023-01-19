import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})
// This is what wraps around the <App> component in index.js
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}


    useEffect(() => {
        // Runs every time user signs in or signs out
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
            if(user) {
                createUserDocumentFromAuth(user);
            }
            // If user signs out -> store null
            // If user signs in  -> store user
            setCurrentUser(user);
        });
        return unsubscribe;
    }, [])
    

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}