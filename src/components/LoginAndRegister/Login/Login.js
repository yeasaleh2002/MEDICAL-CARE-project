import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';

const Login = () => {

    const {handleRegister, handleEmailChange,  handlePasswordChange, toggleLogIn, error, handleGoogleSignIn, handleGithubSignIn, handleFacebookSignIn } = useAuth();

    // location
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    
    // handleGoogleLogIn function
  const handleGoogleLogIn = () => {
    handleGoogleSignIn()
    .then(result => {
       history.push(redirect_uri)
    })
  }

  //handleGithubLogIn function
  const handleGithubLogIn = () => {
    handleGithubSignIn()
    .then(result => {
       history.push(redirect_uri)
    })
  }

  //handleFacebookLogIn function
  const handleFacebookLogIn = () => {
    handleFacebookSignIn()
    .then(result => {
       history.push(redirect_uri)
    })
  }

    return (

         /* ------ login full page start------ */

        <div className="login-page mt-5">
                       
                       {/* login cart part */}
            <Card className="bg-dark text-white w-100">


                     {/* login  part */}
                <Form  onSubmit={handleRegister} className="m-5 p-4">
                    <div className="row">

                        {/* login form part */}
                    <div  className="col-sm-12 col-md-12 col-lg-5">
                        <h1>Login Page</h1>

                        {/* email */}
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    {/* password */}
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                    </Form.Group>

                      {/* button and error */}
                    <span className="row mb-3 p-2  text-warning">{error}</span>
                    <Button  onChange={toggleLogIn} type="submit" className="p-2 rounded-3 login-btn" >Please Login</Button>{' '}
                    <hr className="w-100" />
                          
                          
                          {/* social media icon and button using */}
                        <div>
                            <Button  onClick= {handleGoogleLogIn} className="icon-style text-danger fs-5 rounded-3"><i className="text-primary fab fa-google"></i> Google</Button>{' '}
                            <Button  onClick= {handleGithubLogIn} className=" text-danger fs-5 rounded-3"><i className="text-primary fab fa-github"></i> Github</Button>{' '}
                            <Button  onClick= {handleFacebookLogIn} className=" text-danger fs-5 rounded-3"><i className="text-primary fab fa-facebook"></i> Facebook</Button>{' '}
                            </div> <hr  className="w-100"/>
                            <span className="fs-4">New Users ? <Link className="text-info text-decoration-none" to="/register">Register</Link></span>                       
                        </div>

                        {/* login-page image */}
                        <div className="col-sm-12 col-md-12 col-lg-7 ">
                           <img className="w-100 h-100 p-4 rounded" src="https://www.elegantthemes.com/blog/wp-content/uploads/2021/03/one-click-gmail-login-for-wordpress-featured-image.jpg" alt="" />
                        </div>
                    </div>
                </Form>                                                          
            </Card>           
        </div>
        /* ------ login full page end------ */
    );
};

export default Login;