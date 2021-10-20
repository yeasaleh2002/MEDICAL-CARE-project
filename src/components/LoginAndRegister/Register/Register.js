import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Register.css';

const Register = () => {


    const {handleRegister, handleEmailChange,handlePasswordChange, error,toggleLogIn,handleGoogleSignIn, handleGithubSignIn, handleFacebookSignIn } = useAuth();


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

  
    //handleGoogleRegister function
  const handleGoogleRegister = () => {
    handleGoogleSignIn()
    .then(result => {
       history.push(redirect_uri)
    })
  }

  //handleGithubRegister function
  const handleGithubRegister = () => {
    handleGithubSignIn()
    .then(result => {
       history.push(redirect_uri)
    })
  }

  //handleFacebookRegister function
  const handleFacebookRegister = () => {
    handleFacebookSignIn()
    .then(result => {
       history.push(redirect_uri)
    })
  }


    return (
        
          /* ------ register full page start------ */

          <div className="register-page mt-5">
                       
          {/* register cart part */}
<Card className="bg-dark text-white w-100">


        {/* register  part */}
   <Form  onSubmit={handleRegister} className="m-5 p-4">
       <div className="row">


           {/* register form part */}
       <div  className="col-sm-12 col-md-12 col-lg-5">
           <h1>Register Page</h1>
     
     {/* email */}
       <Form.Group className="mb-3" controlId="formGroupEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control  onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
       </Form.Group>
     
     {/* password */}
       <Form.Group className="mb-3" controlId="formGroupPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control  onBlur={handlePasswordChange}  type="password" placeholder="Password" required />
       </Form.Group>
      
  
  {/* button and error*/}
       <span className="row mb-3 p-2  text-warning">{error}</span>
       <Button  onChange={toggleLogIn} type="submit" className="p-2 rounded-3 register-btn" >Please Register</Button>{' '}
       <hr className="w-100" />
             
           
                          {/* social media icon and button */}
                          <div>
                            <Button  onClick= {handleGoogleRegister} className="icon-style text-danger fs-5 rounded-3"><i className="text-primary fab fa-google"></i> Google</Button>{' '}
                            <Button  onClick= {handleGithubRegister} className=" text-danger fs-5 rounded-3"><i className="text-primary fab fa-github"></i> Github</Button>{' '}
                            <Button  onClick= {handleFacebookRegister} className=" text-danger fs-5 rounded-3"><i className="text-primary fab fa-facebook"></i> Facebook</Button>{' '}
                            </div> <hr  className="w-100"/>
                            <span className="fs-4">Already Account ? <Link className="text-info text-decoration-none" to="/login">LogIn</Link></span>                       
                        </div> 

           {/* register-page image */}
           <div className="col-sm-12 col-md-12 col-lg-7 ">
              <img className="w-100 h-100 p-4 rounded" src="https://wpeverest.com/blog/wp-content/uploads/2019/11/Best-Free-WordPress-Registration-Plugins.jpg" alt="" />
           </div>
       </div>
   </Form>                                                          
</Card>           
</div>
/* ------ register full page end------ */
    );
};

export default Register;