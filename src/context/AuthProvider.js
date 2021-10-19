import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';


//export AuthContext 
export const AuthContext = createContext();

// authProvider function and  destructring
const AuthProvider = ({children}) => {

  
    const allContext = useFirebase();

    return (

        // authContext provider and value set
        
        <AuthContext.Provider value = {allContext}>
           {
               children
           } 
        </AuthContext.Provider>
    );
};

export default AuthProvider;