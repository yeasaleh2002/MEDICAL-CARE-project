import  { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";


 initializeAuthentication();

const useFirebase = () => {
   
   
   // declare getAuth
   const auth = getAuth();

   // email login useState declar
   const [email , setEmail] = useState('');

     // password login useState declar
  const [password , setPassword] = useState('');

    // error useState declar
  const [error, setError] = useState('');

    // is login useState declar
  const [isLogIn, setIsLogIn] = useState(false);

   
    // 3rd party login useState declare
    const [user, setUser] = useState({});


 

    //handleEmailChange
    const handleEmailChange = (event) => {
      
      setEmail(event.target.value)
     }
   
  
     //handlePasswordChange
     const handlePasswordChange = (event) => {
        
      setPassword(event.target.value)
     }
   
  
     //toggleLogIn
      const toggleLogIn = (event) => {
  
      setIsLogIn(event.target.checked);
      }
  
    
     
  // handle ragister 
     const handleRegister = (event) => {
      
      event.preventDefault();
  
      console.log(email, password)
      
      if(password.length < 8 ){
  
        setError('Password must be at least 8 Characters long.');
         
        return;
      }
  
      
      if(!/(?=.*[A-Z].*[A-Z])(?=.*[0-9].*[0-9])/.test(password)){
  
        setError('Password must be at least 2 Upper Case and 2 Numbers.');
         
        return;
      }
  
      if(!isLogIn) {
  
      createUserWithEmailAndPassword (auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        console.log('sign up done')
        setError('');
        
      })
      .catch(error => {
        setError(error.message);
      })
    }
  
  
      else  {
      signInWithEmailAndPassword(auth , email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        console.log('sign in done')
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
       
    } 
    
    
  }



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
        error,
        handleRegister,
        handleEmailChange,
        handlePasswordChange,
        toggleLogIn,    
        handleGoogleSignIn,
        handleGithubSignIn,
        handleFacebookSignIn,
        handleSignOut
    }
};

export default useFirebase;