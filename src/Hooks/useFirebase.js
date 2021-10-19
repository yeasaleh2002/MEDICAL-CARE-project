import  { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


 initializeAuthentication();

const useFirebase = () => {
   
   
   // declare getAuth
   const auth = getAuth();
/* 

, createUserWithEmailAndPassword , signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile



   // name input field useState declare
   const [name, setName] = useState('');
  
    // email change useState declare --- 
    const [email, setEmail] = useState('');

    // password change useState declare
    const [password , setPassword] = useState('');




 */






    // 3rd party login useState declare
    const [user, setUser] = useState({});






/* 



    // Password should be at least 6 characters --- 
    const [error, setError] = useState('');

      // toggle login state declare 
    const [isLogin, setIsLogin] = useState(false);




      */








    //------ google provider-------
const googleProvider = new GoogleAuthProvider();

//------ github provider----------
const githubProvider = new GithubAuthProvider();

// ----------facebook provider---------
const facebookProvider = new FacebookAuthProvider();






/* 
    








    // ---------------handleName event handler ------------- 
    const handleNameChange = (event) => {
        setName(event.target.value);
  }
  
  
  
      // ---------------handleEmail event handler ------------- 
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
  }
  
  
  //------------- handle password event handler -------------
  const handlePasswordChange = (event) => {
  setPassword(event.target.value);
  
  }
  

  
const handleRegistration = (event) => {
    console.log(email, password);
    
    event.preventDefault();
    
    // password length condition
    if(password.length < 8) {
      setError('Password should be at least 8 characters');
      return;
    }
    
    //  password regular expression use part and secure password
    if(!/(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)/.test(password)) {
      setError('At least 2 uppercase character and At least 2 digit');
      return;
    }
    
    if(isLogin) {
      processLogin(email, password);
    }
    else{
     registerNewUser(email, password);
    }
    
    }



//----------------- process Login event handler part----------------

const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
     
      const user = result.user;
      console.log(user);
      
      // catch a kono error na thakle setError empty text kore dite hobe.
      setError('');
    })
   
    .catch((error) => {
   
      // authentication a internal error thakle catch seta dhore ta dekhabe.
      setError(error.message);
    });
   }
   
   
   
   
   //------------- registerNewUser event handler part-----------------
   const registerNewUser = (email, password) => {
    
   createUserWithEmailAndPassword(auth, email, password)
   .then((result) => {
    
    const user = result.user;
    console.log(user);
   
    // catch a kono error na thakle setError empty text kore dite hobe.
     setError(''); 
     
     // set user name call
     setUserName();
   
     // registation time varify email call
     varifyEmail();
   
   })
   .catch((error) => {
   
    // authentication a internal error thakle catch seta dhore ta dekhabe.
    setError(error.message)
   });
   }
   
   
    //------------ user name handle function ------------------
    const setUserName = () => {
     updateProfile(auth.currentUser, {displayName: name})
     .then((result) => {
          console.log(result);
     });
    }
   
   
   
    //------------ sendEmailVerification handle  function ------------------
    const varifyEmail = () => {
     sendEmailVerification(auth.currentUser)
     .then((result) => {
          console.log(result);
     });
    }
   
   
    // -------------sendPasswordResetEmail event handler --------------
    const HandelResetPassword = () => {
   
     sendPasswordResetEmail(auth, email)
     .then((result) => {
          console.log(result);
     })
     .catch((error) => {
       setError(error.message)
       // ..
     });
    }
   








 */


   

    // ---------------handle google sign in process----------------
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
           
          const {displayName, email, photoURL} = result.user;
          const loggedInUser = {
              name: displayName,
              email: email,
              photo: photoURL
          }
          setUser(loggedInUser);
        })
        .catch((error) => {
            console.log(error.message);
           
          });
    }



    
    // --------------handle github sign in---------------
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then (result => {
            
            const {displayName, email, photoURL} = result.user;
            const loggedInUser = {
                name: displayName,
                email: email,
                photo: photoURL
            } 
            setUser(loggedInUser);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }  
   
   
    // ---------------handle facebook sign in-----------------
    const handleFacebookSignIn = () => {

        signInWithPopup(auth, facebookProvider)
        .then(result => {
        
            const {displayName, email, photoURL} = result.user;
            const loggedInUser = {
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(loggedInUser);
           

        })
        .catch(error => {
            console.log(error.message);
        })
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

    /* firebase theke onAuthStateChanged use kora holo. and user ar akta function hobe. */
    onAuthStateChanged(auth, (user) => {
        if (user) {
         
          console.log('inside state change', user);
          setUser(user);
        }
         else {
         
        }
      });
   } ,[])

   

   
    return {
        user,
      
      
      /*
      
      
      
        error,
         handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        processLogin,
        handleRegistration,
        registerNewUser,
        setUserName,
        varifyEmail,
        HandelResetPassword, */



        handleGoogleSignIn,
        handleGithubSignIn,
        handleFacebookSignIn,
        handleSignOut
    }
};

export default useFirebase;