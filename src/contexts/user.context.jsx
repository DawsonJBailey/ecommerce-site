import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPES ={
    'SET_CURRENT_USER': 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}

const INITIAL_STATE = {
    currentUser: null
}

// This is what wraps around the <App> component in index.js
export const UserProvider = ({children}) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [ state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const {currentUser} = state;

    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
    }

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