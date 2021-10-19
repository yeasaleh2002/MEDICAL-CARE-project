import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Register.css';

const Register = () => {


    const {handleGoogleLogIn, handleGithubLogIn, handleFacebookLogIn } = useAuth();

    return (
        
          /* ------ register full page start------ */

          <div className="register-page mt-5">
                       
          {/* register cart part */}
<Card className="bg-dark text-white w-100">


        {/* register  part */}
   <Form className="m-5 p-4">
       <div className="row">


           {/* register form part */}
       <div  className="col-sm-12 col-md-12 col-lg-5">
           <h1>Register Page</h1>
 
       <Form.Group className="mb-3" controlId="formGroupEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control  type="email" placeholder="Enter email" />
       </Form.Group>
     
       <Form.Group className="mb-3" controlId="formGroupPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control  type="password" placeholder="Password" />
       </Form.Group>
      
  

       <Button className="p-2 rounded-3 register-btn" >Please Register</Button>{' '}
       <hr className="w-100" />
             
           
                          {/* social media icon and button */}
                          <div>
                            <Button  onClick= {handleGoogleLogIn} className="icon-style text-danger fs-5 rounded-3"><i className="text-primary fab fa-google"></i> Google</Button>{' '}
                            <Button  onClick= {handleGithubLogIn} className=" text-danger fs-5 rounded-3"><i className="text-primary fab fa-github"></i> Github</Button>{' '}
                            <Button  onClick= {handleFacebookLogIn} className=" text-danger fs-5 rounded-3"><i className="text-primary fab fa-facebook"></i> Facebook</Button>{' '}
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