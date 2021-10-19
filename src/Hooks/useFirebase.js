import  { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


 initializeAuthentication();

const useFirebase = () => {
   
   
   // declare getAuth
   const auth = getAuth();

   
    // 3rd party login useState declare
    const [user, setUser] = useState({});


    //------ google provider-------
const googleProvider = new GoogleAuthProvider();

//------ github provider----------
const githubProvider = new GithubAuthProvider();

// ----------facebook provider---------
const facebookProvider = new FacebookAuthProvider();



    // ---------------handle google sign in process----------------
    const handleGoogleSignIn = () => {
      return  signInWithPopup(auth, googleProvider)
      
    }

    
    // --------------handle github sign in---------------
    const handleGithubSignIn = () => {
     return   signInWithPopup(auth, githubProvider)
       
    }  
   
   
    // ---------------handle facebook sign in-----------------
    const handleFacebookSignIn = () => {

     return   signInWithPopup(auth, facebookProvider)
      
    }

    
//------------ handle sign out part-------------
const handleSignOut = () => {

  signOut(auth)
  .then(() => {
      setUser({});
  })
      .catch((error) => {
        console.log(error.message);
      });
}



useEffect( () => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
         
          
          setUser(user);
        }
         else {
         
        }
      });
   } ,[])

   
 
    return {
        user,     
        handleGoogleSignIn,
        handleGithubSignIn,
        handleFacebookSignIn,
        handleSignOut
    }
};

export default useFirebase;